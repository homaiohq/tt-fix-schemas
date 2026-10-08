import path from 'node:path';
import { fileURLToPath } from 'node:url';

export type Env = 'prod' | 'uat';
export type Fix = 'fix42' | 'fix44';

export interface SchemaSource {
  readonly env: Env;
  readonly fix: Fix;
  /** File name as published by TT */
  readonly file: string;
  readonly url: string;
  /** Path of the committed copy, relative to the repo root */
  readonly localPath: string;
  /** Output directory of the generated TypeScript, relative to the repo root */
  readonly outDir: string;
}

const BASE_URL = 'https://library.tradingtechnologies.com/wp-content/tt/tt-fix/';

const ENV_URL: Record<Env, string> = {
  prod: BASE_URL,
  uat: `${BASE_URL}uat/`,
};

const FIX_FILE: Record<Fix, string> = {
  fix42: 'TT-FIX42.xml',
  fix44: 'TT-FIX44.xml',
};

export const ENVS: readonly Env[] = ['prod', 'uat'];
export const FIXES: readonly Fix[] = ['fix42', 'fix44'];

export const SOURCES: readonly SchemaSource[] = ENVS.flatMap((env) =>
  FIXES.map((fix) => ({
    env,
    fix,
    file: FIX_FILE[fix],
    url: `${ENV_URL[env]}${FIX_FILE[fix]}`,
    localPath: path.join('schemas', env, FIX_FILE[fix]),
    outDir: path.join('src', 'generated', env, fix),
  })),
);

export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function resolveRepo(...parts: string[]): string {
  return path.join(REPO_ROOT, ...parts);
}
