import type { Dictionary, SchemaField, SchemaItem } from '../../src/common.js';

/** Files produced for one schema: relative file name -> content. */
export type GeneratedFiles = Record<string, string>;

const NUMERIC_TYPES = new Set([
  'INT',
  'LENGTH',
  'SEQNUM',
  'NUMINGROUP',
  'DAYOFMONTH',
  'FLOAT',
  'PRICE',
  'QTY',
  'AMT',
  'PRICEOFFSET',
  'PERCENTAGE',
]);

/** Identifiers emitted by the generator besides schema-derived names; schema names must not collide with them. */
const RESERVED_EXPORTS = [
  'Tag',
  'FieldName',
  'FieldNameByTag',
  'FieldType',
  'FieldValues',
  'Header',
  'Trailer',
  'MessageTypes',
  'MessageName',
  'MessageCategory',
  'MessageMap',
  'MessageTypeValue',
  'AnyMessage',
  'dictionary',
  'version',
  'beginString',
];

interface Prop {
  name: string;
  tsType: string;
  required: boolean;
  doc: string;
}

interface Iface {
  name: string;
  doc: string;
  props: Prop[];
}

interface Ctx {
  dict: Dictionary;
  fields: Map<string, SchemaField>;
  components: Map<string, readonly SchemaItem[]>;
  componentNames: Set<string>;
  /** group interface name -> interface; insertion order is emission order */
  groups: Map<string, Iface>;
  /** group interface names owned by a component (emitted in components.ts) */
  componentGroups: Set<string>;
}

function identifier(raw: string): string {
  let id = raw.replace(/[^A-Za-z0-9_$]/g, '_');
  if (!/^[A-Za-z_$]/.test(id)) id = `_${id}`;
  return id;
}

function strLit(s: string): string {
  return JSON.stringify(s);
}

function isBooleanField(f: SchemaField): boolean {
  return f.type === 'BOOLEAN';
}

/** True when the field's enumerated values can be expressed as a literal-union type for its properties. */
function hasEnumType(f: SchemaField): boolean {
  if (f.values.length === 0) return false;
  // MULTIPLE*VALUE fields carry space separated combinations: the union is not the value type.
  if (f.type.startsWith('MULTIPLE')) return false;
  return true;
}

function enumLiteral(f: SchemaField, value: string): string {
  if (isBooleanField(f)) {
    if (value === 'Y') return 'true';
    if (value === 'N') return 'false';
    throw new Error(`Field ${f.name}: BOOLEAN enum "${value}" is not Y/N`);
  }
  if (NUMERIC_TYPES.has(f.type)) {
    if (!/^-?\d+(\.\d+)?$/.test(value)) throw new Error(`Field ${f.name}: ${f.type} enum "${value}" is not numeric`);
    return String(Number(value));
  }
  return strLit(value);
}

/** TypeScript type of a plain (non-group) field value. */
function fieldTsType(f: SchemaField): string {
  if (hasEnumType(f)) return f.name;
  if (isBooleanField(f)) return 'boolean';
  if (NUMERIC_TYPES.has(f.type)) return 'number';
  return 'string';
}

function fieldDoc(f: SchemaField, extra?: string): string {
  const parts = [`${f.name} (${f.number}) · ${f.type}`];
  if (extra) parts.push(extra);
  return parts.join(' · ');
}

function getField(ctx: Ctx, name: string): SchemaField {
  const f = ctx.fields.get(name);
  if (!f) throw new Error(`Unknown field ${name}`);
  return f;
}

/**
 * Flatten an item list into properties, inlining components (the FIX wire format is flat)
 * and turning repeating groups into arrays of a dedicated interface named `${owner}${group}`.
 * A property is required only when every container on its path is required.
 */
function flatten(ctx: Ctx, items: readonly SchemaItem[], owner: string, pathRequired: boolean, into: Map<string, Prop>): void {
  for (const it of items) {
    const req = pathRequired && it.required;
    switch (it.kind) {
      case 'field': {
        const f = getField(ctx, it.name);
        const existing = into.get(f.name);
        if (existing) {
          existing.required = existing.required || req;
        } else {
          const extra = f.values.length && !hasEnumType(f) ? `values: ${f.name}` : undefined;
          into.set(f.name, { name: f.name, tsType: fieldTsType(f), required: req, doc: fieldDoc(f, extra) });
        }
        break;
      }
      case 'component': {
        const body = ctx.components.get(it.name);
        if (!body) throw new Error(`Unknown component ${it.name}`);
        flatten(ctx, body, it.name, req, into);
        break;
      }
      case 'group': {
        const f = getField(ctx, it.name);
        const ifaceName = `${owner}${it.name}`;
        if (!ctx.groups.has(ifaceName)) {
          const props = new Map<string, Prop>();
          // placeholder first to keep a stable order and guard against (unsupported) recursion
          ctx.groups.set(ifaceName, { name: ifaceName, doc: `Entry of repeating group ${it.name} (${f.number}) in ${owner}`, props: [] });
          flatten(ctx, it.items, ifaceName, true, props);
          ctx.groups.get(ifaceName)!.props = [...props.values()];
          if (ctx.componentNames.has(owner) || ctx.componentGroups.has(owner)) ctx.componentGroups.add(ifaceName);
        }
        const existing = into.get(f.name);
        if (existing) {
          existing.required = existing.required || req;
        } else {
          into.set(f.name, { name: f.name, tsType: `${ifaceName}[]`, required: req, doc: fieldDoc(f, 'repeating group') });
        }
        break;
      }
    }
  }
}

function emitImport(names: readonly string[], from: string): string {
  return ['import type {', ...names.map((n) => `  ${n},`), `} from '${from}';`].join('\n');
}

/**
 * JSON with objects made only of primitives kept on a single line — the dictionary stays
 * readable and diff-friendly without being 20k lines long.
 */
function compactJson(value: unknown, indent = ''): string {
  const inner = `${indent}  `;
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    return `[\n${value.map((v) => `${inner}${compactJson(v, inner)}`).join(',\n')}\n${indent}]`;
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return '{}';
    const flat = entries.every(([, v]) => v === null || typeof v !== 'object');
    if (flat) return `{ ${entries.map(([k, v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)}`).join(', ')} }`;
    return `{\n${entries.map(([k, v]) => `${inner}${JSON.stringify(k)}: ${compactJson(v, inner)}`).join(',\n')}\n${indent}}`;
  }
  return JSON.stringify(value);
}

function emitInterface(i: Iface): string {
  const lines = [`/** ${i.doc} */`, `export interface ${i.name} {`];
  for (const p of i.props) {
    lines.push(`  /** ${p.doc} */`);
    lines.push(`  ${p.name}${p.required ? '' : '?'}: ${p.tsType};`);
  }
  lines.push('}');
  return lines.join('\n');
}

function enumTypesUsed(ctx: Ctx, ifaces: Iface[]): string[] {
  const used = new Set<string>();
  for (const i of ifaces) {
    for (const p of i.props) {
      const f = ctx.fields.get(p.name);
      if (f && hasEnumType(f) && p.tsType === f.name) used.add(f.name);
    }
  }
  return [...used].sort();
}

function header(dict: Dictionary, file: string): string {
  return [
    `// ${file}`,
    `// Generated from TT ${dict.beginString} schema — ${dict.version.raw}`,
    '// DO NOT EDIT: regenerate with `pnpm generate`.',
    '',
  ].join('\n');
}

function emitFields(ctx: Ctx): string {
  const { dict } = ctx;
  const out: string[] = [header(dict, 'fields.ts')];
  out.push(`import type { FixFieldType } from '../../../common.js';`, '');

  out.push('/** FIX tag number of every field defined by the schema. */');
  out.push('export const Tag = {');
  for (const f of dict.fields) out.push(`  ${f.name}: ${f.number},`);
  out.push('} as const;', '');
  out.push('export type FieldName = keyof typeof Tag;', '');
  out.push('/** Reverse lookup: tag number → field name. */');
  out.push(
    'export const FieldNameByTag: Readonly<Record<number, FieldName>> = Object.freeze(',
    '  Object.fromEntries(Object.entries(Tag).map(([name, tag]) => [tag, name])) as Record<number, FieldName>,',
    ');',
    '',
  );

  out.push('/** FIX data type of every field. */');
  out.push('export const FieldType = {');
  for (const f of dict.fields) out.push(`  ${f.name}: ${strLit(f.type)},`);
  out.push('} as const satisfies Record<FieldName, FixFieldType>;', '');

  const enumFields = dict.fields.filter((f) => f.values.length > 0);
  out.push('// ---------------------------------------------------------------------------');
  out.push('// Field values');
  out.push('// ---------------------------------------------------------------------------', '');
  for (const f of enumFields) {
    const note = f.type.startsWith('MULTIPLE') ? ' Values may be combined, space separated.' : '';
    out.push(`/** Values of ${f.name} (${f.number}, ${f.type}).${note} */`);
    out.push(`export const ${f.name} = {`);
    for (const v of f.values) {
      out.push(`  /** \`${v.enum}\` */`);
      out.push(`  ${identifier(v.description)}: ${enumLiteral(f, v.enum)},`);
    }
    out.push('} as const;');
    if (hasEnumType(f)) {
      out.push(`export type ${f.name} = (typeof ${f.name})[keyof typeof ${f.name}];`);
    }
    out.push('');
  }

  out.push('/** Every enumerated field, keyed by field name. */');
  out.push('export const FieldValues = {');
  for (const f of enumFields) out.push(`  ${f.name},`);
  out.push('} as const;', '');
  return out.join('\n');
}

function emitComponents(ctx: Ctx, componentIfaces: Iface[]): string {
  const { dict } = ctx;
  const groupIfaces = [...ctx.groups.values()].filter((g) => ctx.componentGroups.has(g.name));
  const all = [...componentIfaces, ...groupIfaces];
  const out: string[] = [header(dict, 'components.ts')];
  const used = enumTypesUsed(ctx, all);
  if (used.length) out.push(emitImport(used, './fields.js'), '');
  out.push('// Components (flattened: nested components are inlined, as on the wire)', '');
  for (const i of componentIfaces) out.push(emitInterface(i), '');
  out.push('// Repeating group entries defined by components', '');
  for (const i of groupIfaces) out.push(emitInterface(i), '');
  return out.join('\n');
}

function emitMessages(ctx: Ctx, headerIface: Iface, trailerIface: Iface, messageIfaces: Iface[]): string {
  const { dict } = ctx;
  const groupIfaces = [...ctx.groups.values()].filter((g) => !ctx.componentGroups.has(g.name));
  const all = [headerIface, trailerIface, ...messageIfaces, ...groupIfaces];
  const out: string[] = [header(dict, 'messages.ts')];
  const used = enumTypesUsed(ctx, all);
  if (used.length) out.push(emitImport(used, './fields.js'));
  const groupTypes = new Set<string>();
  for (const i of all) {
    for (const p of i.props) {
      if (p.tsType.endsWith('[]')) {
        const g = p.tsType.slice(0, -2);
        if (ctx.componentGroups.has(g)) groupTypes.add(g);
      }
    }
  }
  if (groupTypes.size) out.push(emitImport([...groupTypes].sort(), './components.js'));
  out.push('');

  out.push(emitInterface(headerIface), '', emitInterface(trailerIface), '');
  out.push('// Messages (body only — combine with Header / Trailer as needed)', '');
  for (const i of messageIfaces) out.push(emitInterface(i), '');
  if (groupIfaces.length) {
    out.push('// Repeating group entries defined directly by messages', '');
    for (const i of groupIfaces) out.push(emitInterface(i), '');
  }

  out.push('/** MsgType (35) value of every message, keyed by message name. */');
  out.push('export const MessageTypes = {');
  for (const m of dict.messages) out.push(`  ${m.name}: ${strLit(m.msgtype)},`);
  out.push('} as const;', '');
  out.push('export type MessageName = keyof typeof MessageTypes;');
  out.push('export type MessageTypeValue = (typeof MessageTypes)[MessageName];', '');

  out.push('/** Message category (`admin` session-level or `app` application-level), keyed by message name. */');
  out.push('export const MessageCategory = {');
  for (const m of dict.messages) out.push(`  ${m.name}: ${strLit(m.msgcat)},`);
  out.push('} as const satisfies Record<MessageName, string>;', '');

  out.push('/** Message body interface keyed by MsgType (35) value. */');
  out.push('export interface MessageMap {');
  for (const m of dict.messages) out.push(`  ${strLit(m.msgtype)}: ${m.name};`);
  out.push('}', '');
  out.push('export type AnyMessage = MessageMap[keyof MessageMap];', '');
  return out.join('\n');
}

function emitDictionary(dict: Dictionary): string {
  return [
    header(dict, 'dictionary.ts'),
    `import type { Dictionary } from '../../../common.js';`,
    '',
    '/** Runtime representation of the schema (structure, required flags, field types and values). */',
    `export const dictionary: Dictionary = ${compactJson(dict)};`,
    '',
  ].join('\n');
}

function emitIndex(dict: Dictionary): string {
  const v = dict.version;
  return [
    header(dict, 'index.ts'),
    `export * from './fields.js';`,
    `export * from './components.js';`,
    `export * from './messages.js';`,
    `export { dictionary } from './dictionary.js';`,
    '',
    `/** BeginString (8) of this schema. */`,
    `export const beginString = ${strLit(dict.beginString)};`,
    '',
    '/** Publication info of the TT schema file this module was generated from. */',
    'export const version = {',
    `  environment: ${strLit(v.environment)},`,
    `  date: ${strLit(v.date)},`,
    `  time: ${strLit(v.time)},`,
    `  git: ${strLit(v.git)},`,
    `  md5: ${strLit(v.md5)},`,
    `  raw: ${strLit(v.raw)},`,
    '} as const;',
    '',
  ].join('\n');
}

function assertNoCollisions(ctx: Ctx, ifaces: Iface[]): void {
  const seen = new Map<string, string>();
  const add = (name: string, what: string): void => {
    const prev = seen.get(name);
    if (prev) throw new Error(`Generated identifier collision: "${name}" is both ${prev} and ${what}`);
    seen.set(name, what);
  };
  for (const r of RESERVED_EXPORTS) add(r, 'a reserved export');
  for (const f of ctx.dict.fields) if (f.values.length) add(f.name, 'an enumerated field');
  for (const i of ifaces) add(i.name, 'an interface');
  for (const f of ctx.dict.fields) {
    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(f.name)) throw new Error(`Field name "${f.name}" is not a valid identifier`);
  }
}

/** Generate every TypeScript module for one schema. */
export function generate(dict: Dictionary): GeneratedFiles {
  const ctx: Ctx = {
    dict,
    fields: new Map(dict.fields.map((f) => [f.name, f])),
    components: new Map(dict.components.map((c) => [c.name, c.items])),
    componentNames: new Set(dict.components.map((c) => c.name)),
    groups: new Map(),
    componentGroups: new Set(),
  };

  const build = (name: string, doc: string, items: readonly SchemaItem[]): Iface => {
    const props = new Map<string, Prop>();
    flatten(ctx, items, name, true, props);
    return { name, doc, props: [...props.values()] };
  };

  // Components first so that their groups are attributed to components.ts
  const componentIfaces = dict.components.map((c) => build(c.name, `Component ${c.name} (flattened)`, c.items));
  const headerIface = build('Header', 'Standard message header', dict.header);
  const trailerIface = build('Trailer', 'Standard message trailer', dict.trailer);
  const messageIfaces = dict.messages.map((m) =>
    build(m.name, `${m.name} message · MsgType \`${m.msgtype}\` · ${m.msgcat}`, m.items),
  );

  assertNoCollisions(ctx, [...componentIfaces, ...messageIfaces, ...ctx.groups.values()]);

  return {
    'fields.ts': emitFields(ctx),
    'components.ts': emitComponents(ctx, componentIfaces),
    'messages.ts': emitMessages(ctx, headerIface, trailerIface, messageIfaces),
    'dictionary.ts': emitDictionary(dict),
    'index.ts': emitIndex(dict),
  };
}
