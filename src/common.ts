/**
 * Types shared by every generated schema (and by the generator scripts).
 */

/** FIX data types known to the generator. Unknown types fall back to `string`. */
export type KnownFixFieldType =
  | 'STRING'
  | 'CHAR'
  | 'INT'
  | 'LENGTH'
  | 'SEQNUM'
  | 'NUMINGROUP'
  | 'DAYOFMONTH'
  | 'FLOAT'
  | 'PRICE'
  | 'QTY'
  | 'AMT'
  | 'PRICEOFFSET'
  | 'PERCENTAGE'
  | 'BOOLEAN'
  | 'CURRENCY'
  | 'EXCHANGE'
  | 'COUNTRY'
  | 'LANGUAGE'
  | 'LOCALMKTDATE'
  | 'MONTHYEAR'
  | 'UTCTIMESTAMP'
  | 'UTCDATEONLY'
  | 'UTCTIMEONLY'
  | 'TZTIMEONLY'
  | 'TZTIMESTAMP'
  | 'MULTIPLESTRINGVALUE'
  | 'MULTIPLECHARVALUE'
  | 'MULTIPLEVALUESTRING'
  | 'DATA'
  | 'XMLDATA'
  | 'TENOR';

/** FIX data type as written in the schema (`type` attribute of `<field>`). */
export type FixFieldType = KnownFixFieldType | (string & {});

/** TT environment a schema was published for. */
export type SchemaEnvironment = 'PROD' | 'UAT';

/**
 * Parsed form of the version comment found on the second line of every
 * TT FIX schema file, e.g.
 * `<!-- TT FIX Version: PROD 2026-09-11 22:00:31 Git:6a77bce... MD5:887134f... -->`
 */
export interface SchemaVersion {
  /** `PROD` or `UAT` */
  readonly environment: SchemaEnvironment;
  /** Publication date, `YYYY-MM-DD` */
  readonly date: string;
  /** Publication time, `HH:MM:SS` */
  readonly time: string;
  /** Full git commit hash of TT's schema source */
  readonly git: string;
  /** MD5 of the schema content as published by TT */
  readonly md5: string;
  /** The raw version string, without the XML comment markers */
  readonly raw: string;
}

/** A reference to a field, component or repeating group inside a message / component / group body. */
export type SchemaItem =
  | { readonly kind: 'field'; readonly name: string; readonly required: boolean }
  | { readonly kind: 'component'; readonly name: string; readonly required: boolean }
  | {
      readonly kind: 'group';
      readonly name: string;
      readonly required: boolean;
      readonly items: readonly SchemaItem[];
    };

export interface SchemaMessage {
  readonly name: string;
  readonly msgtype: string;
  readonly msgcat: 'admin' | 'app' | (string & {});
  readonly items: readonly SchemaItem[];
}

export interface SchemaComponent {
  readonly name: string;
  readonly items: readonly SchemaItem[];
}

export interface SchemaFieldValue {
  /** Wire value, e.g. `"1"` */
  readonly enum: string;
  /** Symbolic name, e.g. `"PER_UNIT"` */
  readonly description: string;
}

export interface SchemaField {
  readonly name: string;
  readonly number: number;
  readonly type: FixFieldType;
  readonly values: readonly SchemaFieldValue[];
}

/** Full runtime representation of one TT FIX schema file. */
export interface Dictionary {
  /** e.g. `"FIX.4.2"` */
  readonly beginString: string;
  readonly major: number;
  readonly minor: number;
  readonly servicePack: number;
  readonly version: SchemaVersion;
  readonly header: readonly SchemaItem[];
  readonly trailer: readonly SchemaItem[];
  readonly messages: readonly SchemaMessage[];
  readonly components: readonly SchemaComponent[];
  readonly fields: readonly SchemaField[];
}
