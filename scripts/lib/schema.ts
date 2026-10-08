import { XMLParser } from 'fast-xml-parser';
import type {
  Dictionary,
  SchemaComponent,
  SchemaEnvironment,
  SchemaField,
  SchemaItem,
  SchemaMessage,
  SchemaVersion,
} from '../../src/common.js';

const VERSION_RE =
  /TT FIX Version:\s*(PROD|UAT)\s+(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}:\d{2})\s+Git:([0-9a-fA-F]+)\s+MD5:([0-9a-fA-F]+)/;

/** Parse the version comment on the second line of a TT FIX schema. Returns `undefined` if absent. */
export function tryParseVersion(xml: string): SchemaVersion | undefined {
  const m = VERSION_RE.exec(xml);
  if (!m) return undefined;
  const [raw, environment, date, time, git, md5] = m as unknown as [string, SchemaEnvironment, string, string, string, string];
  return { environment, date, time, git: git.toLowerCase(), md5: md5.toLowerCase(), raw };
}

export function parseVersion(xml: string): SchemaVersion {
  const v = tryParseVersion(xml);
  if (!v) throw new Error('No "TT FIX Version" comment found in schema');
  return v;
}

// fast-xml-parser "preserveOrder" node shape
interface Node {
  [tag: string]: Node[] | Record<string, string> | undefined;
  ':@'?: Record<string, string>;
}

function tagOf(node: Node): string {
  const key = Object.keys(node).find((k) => k !== ':@');
  if (!key) throw new Error('Empty XML node');
  return key;
}

function childrenOf(node: Node): Node[] {
  const c = node[tagOf(node)];
  return Array.isArray(c) ? c : [];
}

function attrs(node: Node): Record<string, string> {
  return node[':@'] ?? {};
}

function attr(node: Node, name: string): string {
  const v = attrs(node)[name];
  if (v === undefined) throw new Error(`Missing attribute "${name}" on <${tagOf(node)}>`);
  return v;
}

function required(node: Node): boolean {
  return (attrs(node)['required'] ?? 'N').toUpperCase() === 'Y';
}

function parseItems(nodes: Node[], context: string): SchemaItem[] {
  const items: SchemaItem[] = [];
  for (const n of nodes) {
    const tag = tagOf(n);
    switch (tag) {
      case 'field':
        items.push({ kind: 'field', name: attr(n, 'name'), required: required(n) });
        break;
      case 'component':
        items.push({ kind: 'component', name: attr(n, 'name'), required: required(n) });
        break;
      case 'group': {
        const name = attr(n, 'name');
        items.push({ kind: 'group', name, required: required(n), items: parseItems(childrenOf(n), `${context}/${name}`) });
        break;
      }
      case '#comment':
      case '#text':
        break;
      default:
        throw new Error(`Unexpected <${tag}> inside ${context}`);
    }
  }
  return items;
}

/** Parse a TT FIX component schema XML document into a {@link Dictionary}. */
export function parseDictionary(xml: string): Dictionary {
  const version = parseVersion(xml);
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    preserveOrder: true,
    commentPropName: '#comment',
    trimValues: true,
    parseTagValue: false,
    parseAttributeValue: false,
  });
  const doc = parser.parse(xml) as Node[];
  const fix = doc.find((n) => tagOf(n) === 'fix');
  if (!fix) throw new Error('No <fix> root element');

  const major = Number(attr(fix, 'major'));
  const minor = Number(attr(fix, 'minor'));
  const servicePack = Number(attrs(fix)['servicepack'] ?? '0');
  const type = attrs(fix)['type'] ?? 'FIX';

  const sections = new Map<string, Node>();
  for (const n of childrenOf(fix)) sections.set(tagOf(n), n);
  const section = (name: string): Node => {
    const n = sections.get(name);
    if (!n) throw new Error(`Missing <${name}> section`);
    return n;
  };

  const messages: SchemaMessage[] = childrenOf(section('messages'))
    .filter((n) => tagOf(n) === 'message')
    .map((n) => ({
      name: attr(n, 'name'),
      msgtype: attr(n, 'msgtype'),
      msgcat: attr(n, 'msgcat'),
      items: parseItems(childrenOf(n), `message ${attr(n, 'name')}`),
    }));

  const components: SchemaComponent[] = childrenOf(section('components'))
    .filter((n) => tagOf(n) === 'component')
    .map((n) => ({
      name: attr(n, 'name'),
      items: parseItems(childrenOf(n), `component ${attr(n, 'name')}`),
    }));

  const fields: SchemaField[] = childrenOf(section('fields'))
    .filter((n) => tagOf(n) === 'field')
    .map((n) => ({
      name: attr(n, 'name'),
      number: Number(attr(n, 'number')),
      type: attr(n, 'type'),
      values: childrenOf(n)
        .filter((v) => tagOf(v) === 'value')
        .map((v) => ({ enum: attr(v, 'enum'), description: attr(v, 'description') })),
    }));

  const dict: Dictionary = {
    beginString: `${type}.${major}.${minor}`,
    major,
    minor,
    servicePack,
    version,
    header: parseItems(childrenOf(section('header')), 'header'),
    trailer: parseItems(childrenOf(section('trailer')), 'trailer'),
    messages,
    components,
    fields,
  };
  validate(dict);
  return dict;
}

/** Fail fast on anything the generator could not represent faithfully. */
function validate(dict: Dictionary): void {
  const fieldNames = new Set<string>();
  const fieldNumbers = new Set<number>();
  for (const f of dict.fields) {
    if (fieldNames.has(f.name)) throw new Error(`Duplicate field name ${f.name}`);
    if (fieldNumbers.has(f.number)) throw new Error(`Duplicate field number ${f.number}`);
    fieldNames.add(f.name);
    fieldNumbers.add(f.number);
    const enums = new Set<string>();
    const descs = new Set<string>();
    for (const v of f.values) {
      if (enums.has(v.enum)) throw new Error(`Duplicate enum "${v.enum}" in field ${f.name}`);
      if (descs.has(v.description)) throw new Error(`Duplicate description "${v.description}" in field ${f.name}`);
      enums.add(v.enum);
      descs.add(v.description);
    }
  }
  const componentNames = new Set(dict.components.map((c) => c.name));
  const msgTypes = new Set<string>();
  for (const m of dict.messages) {
    if (msgTypes.has(m.msgtype)) throw new Error(`Duplicate msgtype ${m.msgtype}`);
    msgTypes.add(m.msgtype);
  }
  const check = (items: readonly SchemaItem[], ctx: string): void => {
    for (const it of items) {
      if (it.kind === 'component') {
        if (!componentNames.has(it.name)) throw new Error(`${ctx}: unknown component ${it.name}`);
      } else if (!fieldNames.has(it.name)) {
        throw new Error(`${ctx}: unknown field ${it.name}`);
      }
      if (it.kind === 'group') check(it.items, `${ctx}/${it.name}`);
    }
  };
  check(dict.header, 'header');
  check(dict.trailer, 'trailer');
  for (const m of dict.messages) check(m.items, `message ${m.name}`);
  for (const c of dict.components) check(c.items, `component ${c.name}`);
}
