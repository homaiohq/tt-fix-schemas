/**
 * Download the latest TT FIX component schemas (prod + UAT, FIX 4.2 + 4.4) into schemas/.
 *
 * A file is only rewritten when its "TT FIX Version" comment differs from the committed copy.
 * When run inside GitHub Actions, writes `changed` (JSON array of "env/fix") and `summary`
 * to $GITHUB_OUTPUT.
 */
import fs from 'node:fs';
import path from 'node:path';
import { parseDictionary, tryParseVersion } from './lib/schema.js';
import { SOURCES, resolveRepo } from './lib/sources.js';

interface Result {
  key: string;
  status: 'unchanged' | 'updated' | 'new';
  before?: string;
  after: string;
}

async function download(url: string): Promise<string> {
  const res = await fetch(url, { headers: { 'user-agent': 'tt-fix-schemas sync (https://github.com/homaiohq/tt-fix-schemas)' } });
  if (!res.ok) throw new Error(`GET ${url} → HTTP ${res.status}`);
  return res.text();
}

const results: Result[] = [];
let failures = 0;

for (const s of SOURCES) {
  const key = `${s.env}/${s.fix}`;
  try {
    const xml = await download(s.url);
    const version = tryParseVersion(xml);
    if (!version) throw new Error('downloaded file has no "TT FIX Version" comment');
    const expectedEnv = s.env === 'prod' ? 'PROD' : 'UAT';
    if (version.environment !== expectedEnv) {
      console.warn(`warning: ${key}: file reports ${version.environment} but was fetched from the ${s.env} URL`);
    }
    parseDictionary(xml); // throws on anything the generator cannot handle

    const localPath = resolveRepo(s.localPath);
    const before = fs.existsSync(localPath) ? tryParseVersion(fs.readFileSync(localPath, 'utf8')) : undefined;
    if (before && before.raw === version.raw) {
      results.push({ key, status: 'unchanged', before: before.raw, after: version.raw });
      continue;
    }
    fs.mkdirSync(path.dirname(localPath), { recursive: true });
    fs.writeFileSync(localPath, xml);
    results.push({ key, status: before ? 'updated' : 'new', ...(before ? { before: before.raw } : {}), after: version.raw });
  } catch (err) {
    failures++;
    console.error(`error: ${key}: ${(err as Error).message}`);
  }
}

for (const r of results) {
  console.log(`${r.status.padEnd(9)} ${r.key.padEnd(10)} ${r.after}`);
  if (r.status === 'updated') console.log(`${''.padEnd(9)} ${''.padEnd(10)} was: ${r.before}`);
}

const changed = results.filter((r) => r.status !== 'unchanged').map((r) => r.key);
if (process.env['GITHUB_OUTPUT']) {
  const summary = results.map((r) => `- **${r.key}** ${r.status}: \`${r.after}\``).join('\n');
  fs.appendFileSync(
    process.env['GITHUB_OUTPUT'],
    `changed=${JSON.stringify(changed)}\nsummary<<__EOF__\n${summary}\n__EOF__\n`,
  );
}

if (failures > 0) {
  console.error(`${failures} schema(s) could not be fetched`);
  process.exit(1);
}
