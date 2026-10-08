# @homaiohq/tt-fix-schemas

TypeScript bindings generated from the Trading Technologies **TT FIX component schemas**
(FIX 4.2 and FIX 4.4, production and UAT).

The schemas are published by TT as XML on the
[TT FIX system overview](https://library.tradingtechnologies.com/tt-fix/tt-fix-general/getting-started-tt-fix-general/system-overview/)
page. A daily GitHub Action downloads them, regenerates this library and tags every new schema version.

| Schema         | Source                                                                   | Module                            |
| -------------- | ------------------------------------------------------------------------ | --------------------------------- |
| FIX 4.2 (prod) | `https://library.tradingtechnologies.com/wp-content/tt/tt-fix/TT-FIX42.xml`     | `@homaiohq/tt-fix-schemas/prod/fix42` |
| FIX 4.4 (prod) | `https://library.tradingtechnologies.com/wp-content/tt/tt-fix/TT-FIX44.xml`     | `@homaiohq/tt-fix-schemas/prod/fix44` |
| FIX 4.2 (UAT)  | `https://library.tradingtechnologies.com/wp-content/tt/tt-fix/uat/TT-FIX42.xml` | `@homaiohq/tt-fix-schemas/uat/fix42`  |
| FIX 4.4 (UAT)  | `https://library.tradingtechnologies.com/wp-content/tt/tt-fix/uat/TT-FIX44.xml` | `@homaiohq/tt-fix-schemas/uat/fix44`  |

Only the "New Component Schemas" are covered, not the legacy ones.

## Install

The package is consumed straight from git, pinned to a schema tag:

```sh
pnpm add github:homaiohq/tt-fix-schemas#prod-fix44-2026-09-12-6a77bce
```

The `prepare` script compiles `dist/` on install. The raw XML files are shipped too, under `schemas/`.

## Usage

```ts
import { MessageTypes, OrdType, Side, Tag, TimeInForce, version } from '@homaiohq/tt-fix-schemas/prod/fix44';
import type { ExecutionReport, Header, MessageMap, NewOrderSingle } from '@homaiohq/tt-fix-schemas/prod/fix44';

const order: NewOrderSingle = {
  ClOrdID: 'abc-1',
  Side: Side.BUY,            // "1"
  OrdType: OrdType.LIMIT,    // "2"
  TimeInForce: TimeInForce.DAY,
  OrderQty: 1,
  Price: 100.5,
  NoPartyIDs: [{ PartyID: 'trader', PartyRole: 36 }],
};

Tag.ClOrdID;                      // 11
MessageTypes.NewOrderSingle;      // "D"
version.raw;                      // "TT FIX Version: PROD 2026-09-12 04:10:46 Git:… MD5:…"

type Body = MessageMap['8'];      // ExecutionReport
```

Or through the root export, which exposes every schema as a namespace:

```ts
import { prod, uat } from '@homaiohq/tt-fix-schemas';
uat.fix42.MessageTypes.ExecutionReport; // "8"
```

### What each schema module exports

| Export                         | Kind      | Description                                                                                          |
| ------------------------------ | --------- | ---------------------------------------------------------------------------------------------------- |
| `interface <Message>`          | type      | One interface per message (`NewOrderSingle`, `ExecutionReport`, …), **body only**, flattened.          |
| `interface Header` / `Trailer` | type      | Standard header and trailer.                                                                           |
| `interface <Component>`        | type      | One interface per component (`Instrument`, `Parties`, …), flattened.                                   |
| `interface <Owner><Group>`     | type      | Entry of a repeating group, named after its owner, e.g. `PartiesNoPartyIDs`, `MDIncGrpNoMDEntries`.    |
| `MessageMap`                   | type      | `{ [msgtype]: MessageInterface }`, e.g. `MessageMap['D']` is `NewOrderSingle`.                         |
| `AnyMessage`, `MessageName`    | type      | Union of all message bodies / of all message names.                                                    |
| `MessageTypes`                 | const     | `{ NewOrderSingle: "D", … }` MsgType (35) value per message.                                           |
| `MessageCategory`              | const     | `{ NewOrderSingle: "app", Heartbeat: "admin", … }`.                                                    |
| `Tag`                          | const     | `{ ClOrdID: 11, … }` tag number per field. `FieldNameByTag` is the reverse lookup.                      |
| `FieldType`                    | const     | `{ ClOrdID: "STRING", … }` FIX data type per field.                                                    |
| `<Field>`                      | const+type| For every enumerated field: `Side = { BUY: "1", … }` **and** `type Side = "1" \| "2" \| …`.            |
| `FieldValues`                  | const     | All enumerated fields in one object: `FieldValues.Side.BUY`.                                           |
| `dictionary`                   | const     | Full runtime structure of the schema (messages, components, groups, required flags, fields, values).   |
| `version`, `beginString`       | const     | Publication info parsed from the XML version comment, and `"FIX.4.4"` / `"FIX.4.2"`.                   |

### Type mapping

Property types follow the field's FIX data type:

| FIX type                                                                         | TypeScript                       |
| -------------------------------------------------------------------------------- | -------------------------------- |
| `INT`, `SEQNUM`, `NUMINGROUP`, `DAYOFMONTH`, `FLOAT`, `PRICE`, `QTY`, `AMT`, `PRICEOFFSET` | `number`                |
| `BOOLEAN`                                                                        | `boolean`                        |
| everything else (`STRING`, `CHAR`, dates, timestamps, …)                          | `string`                         |
| field with enumerated values                                                     | union of the literal values, typed as above (`"1" \| "2"`, `1 \| 2`, `true \| false`) |
| `MULTIPLESTRINGVALUE` with values (e.g. `ExecInst`)                               | `string` (values can be combined); the value constants are still exported |
| repeating group `NoXxx`                                                          | `<Owner>NoXxx[]`, replacing the count field |

Messages and components are **flattened**: nested components are inlined, exactly as on the wire.
A field is required only when every component on its path is required.

## Versioning and tags

Each schema file carries a version comment on its second line:

```
<!-- TT FIX Version: PROD 2026-09-12 04:10:46 Git:6a77bcece9932eca75df3778f3537207659e7f12 MD5:ec5361665270743e5d87a857ce5c7f8f -->
```

Every schema version gets an annotated git tag `<env>-<fix>-<date>-<git7>`:

```
prod-fix42-2026-09-11-6a77bce
prod-fix44-2026-09-12-6a77bce
uat-fix42-2026-08-03-25a722a
uat-fix44-2026-08-03-25a722a
```

A tag points at the commit in which that schema version was first committed. The other three schemas in that
commit are whatever was current at the time.

The `Sync TT FIX schemas` workflow (`.github/workflows/sync-schemas.yml`) runs daily at 06:23 UTC and on demand:

1. downloads the four XML files and keeps those whose version comment changed,
2. regenerates `src/generated/`, type-checks, tests and builds,
3. commits `schemas/` + `src/generated/` to the default branch,
4. creates and pushes any missing schema tag (idempotent, so the first run tags the versions already committed).

## Development

```sh
pnpm install
pnpm fetch-schemas   # download latest XML into schemas/ (only rewrites changed versions)
pnpm generate        # regenerate src/generated/
pnpm check           # typecheck + tests
pnpm build           # compile dist/
pnpm tags            # show the tag of each committed schema and whether it exists
```

Layout:

```
schemas/<env>/TT-FIX4x.xml        committed TT schema files
scripts/lib/schema.ts             XML → Dictionary parser (+ validation)
scripts/lib/generate-ts.ts        Dictionary → TypeScript emitter
scripts/fetch-schemas.ts          downloader
scripts/tags.ts                   tag computation / creation
src/common.ts                     shared types (Dictionary, FixFieldType, …)
src/generated/<env>/<fix>/        generated modules (committed)
```
