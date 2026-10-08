/**
 * TypeScript bindings for the Trading Technologies TT FIX component schemas.
 *
 * Each schema is exposed as a namespace: `prod.fix42`, `prod.fix44`, `uat.fix42`, `uat.fix44`.
 * The same modules are also reachable through subpath exports, e.g. `@homaiohq/tt-fix-schemas/prod/fix44`.
 */
export * as prod from './generated/prod/index.js';
export * as uat from './generated/uat/index.js';
export type * from './common.js';
