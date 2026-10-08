/**
 * Compute the git tag of every committed schema and (optionally) create / push the missing ones.
 *
 *   pnpm tags            list tags and whether they exist
 *   pnpm tags --create   create missing annotated tags on HEAD
 *   pnpm tags --push     push the tags created in this run
 *
 * Tag format: <env>-<fix>-<YYYY-MM-DD>-<git7>, e.g. prod-fix44-2026-09-12-6a77bce
 * (date and git hash come from the "TT FIX Version" comment of the schema file).
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import type { SchemaVersion } from '../src/common.js';
import { parseVersion } from './lib/schema.js';
import { REPO_ROOT, SOURCES, resolveRepo, type SchemaSource } from './lib/sources.js';

export function tagName(s: SchemaSource, v: SchemaVersion): string {
  return `${s.env}-${s.fix}-${v.date}-${v.git.slice(0, 7)}`;
}

function git(...args: string[]): string {
  return execFileSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
}

const create = process.argv.includes('--create');
const push = process.argv.includes('--push');
const created: string[] = [];

for (const s of SOURCES) {
  const xmlPath = resolveRepo(s.localPath);
  if (!fs.existsSync(xmlPath)) continue;
  const v = parseVersion(fs.readFileSync(xmlPath, 'utf8'));
  const tag = tagName(s, v);
  const exists = git('tag', '--list', tag) === tag;
  if (exists) {
    console.log(`exists   ${tag}`);
    continue;
  }
  if (!create) {
    console.log(`missing  ${tag}`);
    continue;
  }
  git('tag', '-a', tag, '-m', `TT FIX ${s.fix.replace('fix', '')} ${s.env.toUpperCase()} schema\n\n${v.raw}\nSource: ${s.url}`);
  created.push(tag);
  console.log(`created  ${tag}`);
}

if (push && created.length) {
  git('push', 'origin', ...created);
  console.log(`pushed   ${created.join(' ')}`);
}

if (process.env['GITHUB_OUTPUT']) {
  fs.appendFileSync(process.env['GITHUB_OUTPUT'], `created=${JSON.stringify(created)}\n`);
}
