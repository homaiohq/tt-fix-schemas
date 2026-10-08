import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as root from '../src/index.js';
import { SOURCES } from '../scripts/lib/sources.js';

import type { Dictionary } from '../src/common.js';

/** Structural view of a generated schema module (literal types widened). */
interface SchemaModule {
  version: Dictionary['version'];
  beginString: string;
  dictionary: Dictionary;
  Tag: Record<string, number>;
  FieldType: Record<string, string>;
  FieldNameByTag: Readonly<Record<number, string>>;
  FieldValues: Record<string, Record<string, unknown>>;
  MessageTypes: Record<string, string>;
  MessageCategory: Record<string, string>;
  Side: { BUY: string };
  OrdType: { LIMIT: string };
  PossDupFlag: { YES: boolean };
}

const schemas: Array<[string, SchemaModule]> = [
  ['prod/fix42', root.prod.fix42],
  ['prod/fix44', root.prod.fix44],
  ['uat/fix42', root.uat.fix42],
  ['uat/fix44', root.uat.fix44],
];

test('every configured schema is exposed', () => {
  assert.equal(schemas.length, SOURCES.length);
});

for (const [key, s] of schemas) {
  test(`${key}: version matches environment and FIX version`, () => {
    const [env, fix] = key.split('/') as [string, string];
    assert.equal(s.version.environment, env === 'prod' ? 'PROD' : 'UAT');
    assert.equal(s.beginString, fix === 'fix42' ? 'FIX.4.2' : 'FIX.4.4');
    assert.deepEqual(s.dictionary.version, s.version);
    assert.match(s.version.git, /^[0-9a-f]{40}$/);
    assert.match(s.version.md5, /^[0-9a-f]{32}$/);
  });

  test(`${key}: tags, field types and values cover every field of the dictionary`, () => {
    assert.equal(Object.keys(s.Tag).length, s.dictionary.fields.length);
    for (const f of s.dictionary.fields) {
      assert.equal(s.Tag[f.name], f.number);
      assert.equal(s.FieldType[f.name], f.type);
      assert.equal(s.FieldNameByTag[f.number], f.name);
      const values = s.FieldValues[f.name];
      if (f.values.length === 0) {
        assert.equal(values, undefined, `${f.name} should not have values`);
      } else {
        assert.ok(values, `${f.name} should expose its values`);
        assert.equal(Object.keys(values).length, f.values.length);
      }
    }
  });

  test(`${key}: message types match the dictionary`, () => {
    assert.equal(Object.keys(s.MessageTypes).length, s.dictionary.messages.length);
    for (const m of s.dictionary.messages) {
      assert.equal(s.MessageTypes[m.name], m.msgtype);
      assert.equal(s.MessageCategory[m.name], m.msgcat);
    }
  });

  test(`${key}: well-known values`, () => {
    assert.equal(s.MessageTypes.NewOrderSingle, 'D');
    assert.equal(s.MessageTypes.ExecutionReport, '8');
    assert.equal(s.Tag.ClOrdID, 11);
    assert.equal(s.Side.BUY, '1');
    assert.equal(s.OrdType.LIMIT, '2');
    assert.equal(s.PossDupFlag.YES, true);
    assert.equal(s.FieldValues.Side, s.Side);
  });
}

test('prod and uat schemas with the same MD5 generate the same bindings', () => {
  for (const fix of ['fix42', 'fix44'] as const) {
    const p = root.prod[fix];
    const u = root.uat[fix];
    if (p.version.md5 !== u.version.md5) continue;
    const strip = (d: Dictionary): unknown => ({ ...d, version: undefined });
    assert.deepEqual(strip(p.dictionary), strip(u.dictionary));
  }
});
