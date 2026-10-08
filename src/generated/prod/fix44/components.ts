// components.ts
// Generated from TT FIX.4.4 schema — TT FIX Version: PROD 2026-09-12 04:10:46 Git:6a77bcece9932eca75df3778f3537207659e7f12 MD5:ec5361665270743e5d87a857ce5c7f8f
// DO NOT EDIT: regenerate with `pnpm generate`.

import type {
  AggressorIndicator,
  AggressorSide,
  AllocAcctIDSource,
  AllocPositionEffect,
  BenchmarkSecurityIDSource,
  CommType,
  ConvertQuoteToHedge,
  CustOrderCapacity,
  CustOrderHandlingInst,
  DeliveryTerm,
  EventType,
  FillLastLiquidityIndicator,
  IDSource,
  InstrumentAttributeType,
  LegDeliveryTerm,
  LegFillLastLiquidityIndicator,
  LegIDSource,
  LegProduct,
  LegSecurityAltIDSource,
  LegSecurityType,
  LinkType,
  MDEntryType,
  MDUpdateAction,
  MiscFeeType,
  NestedPartyIDSource,
  NestedPartyRole,
  OrdType,
  OrderAttributeType,
  OrderEventLiquidityIndicator,
  OrderEventReason,
  OrderEventType,
  PartyIDSource,
  PartyRole,
  PartyRoleQualifier,
  PriceType,
  ProcessCode,
  Product,
  PutOrCall,
  QuoteSubType,
  QuoteType,
  RootPartyIDSource,
  RootPartyRole,
  SecurityAltIDSource,
  SecurityType,
  Side,
  StrategyParameterType,
  TargetStrategyType,
  TimeInForce,
  UnderlyingSecurityIDSource,
  UnderlyingSecurityType,
  UnderlyingStipulationType,
  UnderlyingStipulationValue,
} from './fields.js';

// Components (flattened: nested components are inlined, as on the wire)

/** Component PriceTypeSupport (flattened) */
export interface PriceTypeSupport {
  /** PriceType (423) · INT */
  PriceType?: PriceType;
  /** BenchmarkSecurityID (699) · STRING */
  BenchmarkSecurityID?: string;
  /** BenchmarkSecurityIDSource (761) · STRING */
  BenchmarkSecurityIDSource?: BenchmarkSecurityIDSource;
}

/** Component Parties (flattened) */
export interface Parties {
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
}

/** Component OrderEventGrp (flattened) */
export interface OrderEventGrp {
  /** NoOrderEvents (1795) · NUMINGROUP · repeating group */
  NoOrderEvents?: OrderEventGrpNoOrderEvents[];
}

/** Component FillsGrp (flattened) */
export interface FillsGrp {
  /** NoFills (1362) · NUMINGROUP · repeating group */
  NoFills?: FillsGrpNoFills[];
}

/** Component StrategyParametersGrp (flattened) */
export interface StrategyParametersGrp {
  /** NoStrategyParameters (957) · NUMINGROUP · repeating group */
  NoStrategyParameters?: StrategyParametersGrpNoStrategyParameters[];
}

/** Component SecurityAltIDGrp (flattened) */
export interface SecurityAltIDGrp {
  /** NoSecurityAltID (454) · NUMINGROUP · repeating group */
  NoSecurityAltID?: SecurityAltIDGrpNoSecurityAltID[];
}

/** Component LegSecurityAltIDGrp (flattened) */
export interface LegSecurityAltIDGrp {
  /** NoLegSecurityAltID (604) · NUMINGROUP · repeating group */
  NoLegSecurityAltID?: LegSecurityAltIDGrpNoLegSecurityAltID[];
}

/** Component OrderAttributesGrp (flattened) */
export interface OrderAttributesGrp {
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
}

/** Component LinksGrp (flattened) */
export interface LinksGrp {
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
}

/** Component ExecsGrp (flattened) */
export interface ExecsGrp {
  /** NoExecs (124) · NUMINGROUP · repeating group */
  NoExecs?: ExecsGrpNoExecs[];
}

/** Component OrdersGrp (flattened) */
export interface OrdersGrp {
  /** NoOrders (73) · NUMINGROUP · repeating group */
  NoOrders?: OrdersGrpNoOrders[];
}

/** Component NestedParties (flattened) */
export interface NestedParties {
  /** NoNestedPartyIDs (539) · NUMINGROUP · repeating group */
  NoNestedPartyIDs?: NestedPartiesNoNestedPartyIDs[];
}

/** Component MiscFeesGrp (flattened) */
export interface MiscFeesGrp {
  /** NoMiscFees (136) · NUMINGROUP · repeating group */
  NoMiscFees?: MiscFeesGrpNoMiscFees[];
}

/** Component AllocsGrp (flattened) */
export interface AllocsGrp {
  /** NoAllocs (78) · NUMINGROUP · repeating group */
  NoAllocs: AllocsGrpNoAllocs[];
}

/** Component TTReservedGrp (flattened) */
export interface TTReservedGrp {
  /** NoTTReserved (16965) · NUMINGROUP · repeating group */
  NoTTReserved?: TTReservedGrpNoTTReserved[];
}

/** Component EvntGrp (flattened) */
export interface EvntGrp {
  /** NoEvents (864) · NUMINGROUP · repeating group */
  NoEvents?: EvntGrpNoEvents[];
}

/** Component TickTblEntriesGrp (flattened) */
export interface TickTblEntriesGrp {
  /** NumTickTblEntries (16456) · INT · repeating group */
  NumTickTblEntries?: TickTblEntriesGrpNumTickTblEntries[];
}

/** Component MDEntryTypesGrp (flattened) */
export interface MDEntryTypesGrp {
  /** NoMDEntryTypes (267) · NUMINGROUP · repeating group */
  NoMDEntryTypes?: MDEntryTypesGrpNoMDEntryTypes[];
}

/** Component MDFullGrp (flattened) */
export interface MDFullGrp {
  /** NoMDEntries (268) · NUMINGROUP · repeating group */
  NoMDEntries: MDFullGrpNoMDEntries[];
}

/** Component MDIncGrp (flattened) */
export interface MDIncGrp {
  /** NoMDEntries (268) · NUMINGROUP · repeating group */
  NoMDEntries: MDIncGrpNoMDEntries[];
}

/** Component Instrument (flattened) */
export interface Instrument {
  /** Symbol (55) · STRING */
  Symbol?: string;
  /** SecurityID (48) · STRING */
  SecurityID?: string;
  /** IDSource (22) · STRING */
  IDSource?: IDSource;
  /** NoSecurityAltID (454) · NUMINGROUP · repeating group */
  NoSecurityAltID?: SecurityAltIDGrpNoSecurityAltID[];
  /** Product (460) · INT */
  Product?: Product;
  /** CFICode (461) · STRING */
  CFICode?: string;
  /** SecurityType (167) · STRING */
  SecurityType?: SecurityType;
  /** SecuritySubType (762) · STRING */
  SecuritySubType?: string;
  /** MaturityMonthYear (200) · MONTHYEAR */
  MaturityMonthYear?: string;
  /** MaturityDate (541) · LOCALMKTDATE */
  MaturityDate?: string;
  /** MaturityDay (205) · DAYOFMONTH */
  MaturityDay?: number;
  /** ContractYearMonth (18223) · STRING */
  ContractYearMonth?: string;
  /** DeliveryTerm (18211) · CHAR */
  DeliveryTerm?: DeliveryTerm;
  /** DeliveryDate (743) · LOCALMKTDATE */
  DeliveryDate?: string;
  /** PutOrCall (201) · INT */
  PutOrCall?: PutOrCall;
  /** StrikePrice (202) · PRICE */
  StrikePrice?: number;
  /** OptAttribute (206) · CHAR */
  OptAttribute?: string;
  /** SecurityExchange (207) · EXCHANGE */
  SecurityExchange?: string;
  /** ExDestination (100) · EXCHANGE */
  ExDestination?: string;
  /** SecurityDesc (107) · STRING */
  SecurityDesc?: string;
  /** Currency (15) · CURRENCY */
  Currency?: string;
  /** ExerciseStyle (1194) · INT */
  ExerciseStyle?: number;
  /** NoEvents (864) · NUMINGROUP · repeating group */
  NoEvents?: EvntGrpNoEvents[];
  /** Timezone (16000) · STRING */
  Timezone?: string;
}

/** Component InstrumentLeg (flattened) */
export interface InstrumentLeg {
  /** LegSymbol (600) · STRING */
  LegSymbol?: string;
  /** LegSecurityID (602) · STRING */
  LegSecurityID?: string;
  /** LegIDSource (603) · STRING */
  LegIDSource?: LegIDSource;
  /** NoLegSecurityAltID (604) · NUMINGROUP · repeating group */
  NoLegSecurityAltID?: LegSecurityAltIDGrpNoLegSecurityAltID[];
  /** LegProduct (607) · INT */
  LegProduct?: LegProduct;
  /** LegCFICode (608) · STRING */
  LegCFICode?: string;
  /** LegSecurityType (609) · STRING */
  LegSecurityType?: LegSecurityType;
  /** LegSecuritySubType (764) · STRING */
  LegSecuritySubType?: string;
  /** LegMaturityMonthYear (610) · MONTHYEAR */
  LegMaturityMonthYear?: string;
  /** LegMaturityDate (611) · LOCALMKTDATE */
  LegMaturityDate?: string;
  /** LegMaturityDay (18314) · DAYOFMONTH */
  LegMaturityDay?: number;
  /** LegContractYearMonth (18224) · STRING */
  LegContractYearMonth?: string;
  /** LegDeliveryTerm (18212) · CHAR */
  LegDeliveryTerm?: LegDeliveryTerm;
  /** LegDeliveryDate (18213) · LOCALMKTDATE */
  LegDeliveryDate?: string;
  /** LegPutOrCall (1358) · INT */
  LegPutOrCall?: number;
  /** LegStrikePrice (612) · PRICE */
  LegStrikePrice?: number;
  /** LegOptAttribute (613) · CHAR */
  LegOptAttribute?: string;
  /** LegSecurityExchange (616) · EXCHANGE */
  LegSecurityExchange?: string;
  /** LegExDestination (18100) · EXCHANGE */
  LegExDestination?: string;
  /** LegSecurityDesc (620) · STRING */
  LegSecurityDesc?: string;
  /** LegRatioQty (623) · FLOAT */
  LegRatioQty?: number;
  /** LegSide (624) · CHAR */
  LegSide?: string;
  /** LegCurrency (556) · CURRENCY */
  LegCurrency?: string;
  /** LegRatioExt (16760) · INT */
  LegRatioExt?: number;
  /** LegExerciseStyle (1420) · INT */
  LegExerciseStyle?: number;
}

/** Component LegFillsGrp (flattened) */
export interface LegFillsGrp {
  /** LegNoFills (16120) · NUMINGROUP · repeating group */
  LegNoFills?: LegFillsGrpLegNoFills[];
}

/** Component LegsGrp (flattened) */
export interface LegsGrp {
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
}

/** Component RelatedSymGrp (flattened) */
export interface RelatedSymGrp {
  /** NoRelatedSym (146) · NUMINGROUP · repeating group */
  NoRelatedSym: RelatedSymGrpNoRelatedSym[];
}

/** Component UnderlyingSecurityAltIDGrp (flattened) */
export interface UnderlyingSecurityAltIDGrp {
  /** NoUnderlyingSecurityAltID (457) · NUMINGROUP · repeating group */
  NoUnderlyingSecurityAltID?: UnderlyingSecurityAltIDGrpNoUnderlyingSecurityAltID[];
}

/** Component UnderlyingStipulations (flattened) */
export interface UnderlyingStipulations {
  /** NoUnderlyingStipulations (887) · NUMINGROUP · repeating group */
  NoUnderlyingStipulations?: UnderlyingStipulationsNoUnderlyingStipulations[];
}

/** Component UnderlyingInstrument (flattened) */
export interface UnderlyingInstrument {
  /** UnderlyingSymbol (311) · STRING */
  UnderlyingSymbol?: string;
  /** UnderlyingSecurityID (309) · STRING */
  UnderlyingSecurityID?: string;
  /** UnderlyingSecurityIDSource (305) · STRING */
  UnderlyingSecurityIDSource?: UnderlyingSecurityIDSource;
  /** UnderlyingSecurityType (310) · STRING */
  UnderlyingSecurityType?: UnderlyingSecurityType;
  /** UnderlyingPx (810) · PRICE */
  UnderlyingPx?: number;
  /** UnderlyingQty (879) · QTY */
  UnderlyingQty?: number;
  /** NoUnderlyingSecurityAltID (457) · NUMINGROUP · repeating group */
  NoUnderlyingSecurityAltID?: UnderlyingSecurityAltIDGrpNoUnderlyingSecurityAltID[];
  /** UnderlyingMaturityDate (542) · LOCALMKTDATE */
  UnderlyingMaturityDate?: string;
  /** UnderlyingIssuer (306) · STRING */
  UnderlyingIssuer?: string;
  /** UnderlyingCurrency (318) · CURRENCY */
  UnderlyingCurrency?: string;
  /** NoUnderlyingStipulations (887) · NUMINGROUP · repeating group */
  NoUnderlyingStipulations?: UnderlyingStipulationsNoUnderlyingStipulations[];
  /** UnderlyingMemo (18236) · STRING */
  UnderlyingMemo?: string;
  /** UnderlyingStrikePrice (316) · PRICE */
  UnderlyingStrikePrice?: number;
  /** UnderlyingSpotRate (435) · FLOAT */
  UnderlyingSpotRate?: number;
  /** UnderlyingSecuritySubType (763) · STRING */
  UnderlyingSecuritySubType?: string;
}

/** Component UnderlyingsGrp (flattened) */
export interface UnderlyingsGrp {
  /** NoUnderlyings (711) · NUMINGROUP · repeating group */
  NoUnderlyings?: UnderlyingsGrpNoUnderlyings[];
}

/** Component SidesGrp (flattened) */
export interface SidesGrp {
  /** NoSides (552) · NUMINGROUP · repeating group */
  NoSides?: SidesGrpNoSides[];
}

/** Component TCRLegsGrp (flattened) */
export interface TCRLegsGrp {
  /** NoTCRLegs (10555) · NUMINGROUP · repeating group */
  NoTCRLegs?: TCRLegsGrpNoTCRLegs[];
}

/** Component TargetPartyIDGrp (flattened) */
export interface TargetPartyIDGrp {
  /** NoTargetPartyIDs (1461) · NUMINGROUP · repeating group */
  NoTargetPartyIDs?: TargetPartyIDGrpNoTargetPartyIDs[];
}

/** Component InstrumentExtension (flattened) */
export interface InstrumentExtension {
  /** NoInstrumentExtensions (870) · NUMINGROUP · repeating group */
  NoInstrumentExtensions?: InstrumentExtensionNoInstrumentExtensions[];
}

/** Component RootPartyIDGrp (flattened) */
export interface RootPartyIDGrp {
  /** NoRootPartyIDs (1116) · NUMINGROUP · repeating group */
  NoRootPartyIDs?: RootPartyIDGrpNoRootPartyIDs[];
}

/** Component TargetStrategy (flattened) */
export interface TargetStrategy {
  /** TargetStrategyName (16847) · STRING */
  TargetStrategyName?: string;
  /** TargetStrategyType (16848) · INT */
  TargetStrategyType?: TargetStrategyType;
}

// Repeating group entries defined by components

/** Entry of repeating group NoPartyIDs (453) in Parties */
export interface PartiesNoPartyIDs {
  /** PartyID (448) · STRING */
  PartyID?: string;
  /** PartyRole (452) · INT */
  PartyRole?: PartyRole;
  /** PartyRoleQualifier (2376) · INT */
  PartyRoleQualifier?: PartyRoleQualifier;
  /** PartyIDSource (447) · CHAR */
  PartyIDSource?: PartyIDSource;
}

/** Entry of repeating group NoOrderEvents (1795) in OrderEventGrp */
export interface OrderEventGrpNoOrderEvents {
  /** OrderEventType (1796) · INT */
  OrderEventType?: OrderEventType;
  /** OrderEventExecID (1797) · STRING */
  OrderEventExecID?: string;
  /** OrderEventReason (1798) · INT */
  OrderEventReason?: OrderEventReason;
  /** OrderEventPx (1799) · PRICE */
  OrderEventPx?: number;
  /** OrderEventQty (1800) · QTY */
  OrderEventQty?: number;
  /** OrderEventLiquidityIndicator (1801) · INT */
  OrderEventLiquidityIndicator?: OrderEventLiquidityIndicator;
  /** OrderEventText (1802) · STRING */
  OrderEventText?: string;
}

/** Entry of repeating group NoFills (1362) in FillsGrp */
export interface FillsGrpNoFills {
  /** FillExecID (1363) · STRING */
  FillExecID?: string;
  /** FillPx (1364) · PRICE */
  FillPx?: number;
  /** FillQty (1365) · QTY */
  FillQty?: number;
  /** FillTradingVenueRegulatoryTradeID (16118) · STRING */
  FillTradingVenueRegulatoryTradeID?: string;
  /** FillLastLiquidityIndicator (16119) · INT */
  FillLastLiquidityIndicator?: FillLastLiquidityIndicator;
  /** FillYieldType (1622) · STRING */
  FillYieldType?: string;
}

/** Entry of repeating group NoStrategyParameters (957) in StrategyParametersGrp */
export interface StrategyParametersGrpNoStrategyParameters {
  /** StrategyParameterName (958) · STRING */
  StrategyParameterName?: string;
  /** StrategyParameterType (959) · INT */
  StrategyParameterType?: StrategyParameterType;
  /** StrategyParameterValue (960) · STRING */
  StrategyParameterValue?: string;
}

/** Entry of repeating group NoSecurityAltID (454) in SecurityAltIDGrp */
export interface SecurityAltIDGrpNoSecurityAltID {
  /** SecurityAltID (455) · STRING */
  SecurityAltID?: string;
  /** SecurityAltIDSource (456) · STRING */
  SecurityAltIDSource?: SecurityAltIDSource;
  /** BloombergSecurityExchange (16207) · STRING */
  BloombergSecurityExchange?: string;
}

/** Entry of repeating group NoLegSecurityAltID (604) in LegSecurityAltIDGrp */
export interface LegSecurityAltIDGrpNoLegSecurityAltID {
  /** LegSecurityAltID (605) · STRING */
  LegSecurityAltID?: string;
  /** LegSecurityAltIDSource (606) · STRING */
  LegSecurityAltIDSource?: LegSecurityAltIDSource;
  /** LegBloombergSecurityExchange (16616) · STRING */
  LegBloombergSecurityExchange?: string;
}

/** Entry of repeating group NoOrderAttributes (2593) in OrderAttributesGrp */
export interface OrderAttributesGrpNoOrderAttributes {
  /** OrderAttributeType (2594) · INT */
  OrderAttributeType?: OrderAttributeType;
  /** OrderAttributeValue (2595) · STRING */
  OrderAttributeValue?: string;
}

/** Entry of repeating group NoLinks (16112) in LinksGrp */
export interface LinksGrpNoLinks {
  /** LinkID (16113) · STRING */
  LinkID: string;
  /** LinkType (16114) · CHAR */
  LinkType: LinkType;
}

/** Entry of repeating group NoExecs (124) in ExecsGrp */
export interface ExecsGrpNoExecs {
  /** LastShares (32) · QTY */
  LastShares?: number;
  /** ExecID (17) · STRING */
  ExecID?: string;
  /** SecondaryExecID (527) · STRING */
  SecondaryExecID?: string;
  /** LastPx (31) · PRICE */
  LastPx?: number;
}

/** Entry of repeating group NoOrders (73) in OrdersGrp */
export interface OrdersGrpNoOrders {
  /** ClOrdID (11) · STRING */
  ClOrdID?: string;
  /** ListSeqNo (67) · INT */
  ListSeqNo?: number;
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** OrderQty (38) · QTY */
  OrderQty?: number;
  /** OrderAvgPx (799) · PRICE */
  OrderAvgPx?: number;
  /** Account (1) · STRING */
  Account?: string;
  /** ExecInst (18) · MULTIPLESTRINGVALUE · values: ExecInst */
  ExecInst?: string;
  /** Symbol (55) · STRING */
  Symbol?: string;
  /** SecurityID (48) · STRING */
  SecurityID?: string;
  /** IDSource (22) · STRING */
  IDSource?: IDSource;
  /** NoSecurityAltID (454) · NUMINGROUP · repeating group */
  NoSecurityAltID?: SecurityAltIDGrpNoSecurityAltID[];
  /** Product (460) · INT */
  Product?: Product;
  /** CFICode (461) · STRING */
  CFICode?: string;
  /** SecurityType (167) · STRING */
  SecurityType?: SecurityType;
  /** SecuritySubType (762) · STRING */
  SecuritySubType?: string;
  /** MaturityMonthYear (200) · MONTHYEAR */
  MaturityMonthYear?: string;
  /** MaturityDate (541) · LOCALMKTDATE */
  MaturityDate?: string;
  /** MaturityDay (205) · DAYOFMONTH */
  MaturityDay?: number;
  /** ContractYearMonth (18223) · STRING */
  ContractYearMonth?: string;
  /** DeliveryTerm (18211) · CHAR */
  DeliveryTerm?: DeliveryTerm;
  /** DeliveryDate (743) · LOCALMKTDATE */
  DeliveryDate?: string;
  /** PutOrCall (201) · INT */
  PutOrCall?: PutOrCall;
  /** StrikePrice (202) · PRICE */
  StrikePrice?: number;
  /** OptAttribute (206) · CHAR */
  OptAttribute?: string;
  /** SecurityExchange (207) · EXCHANGE */
  SecurityExchange?: string;
  /** ExDestination (100) · EXCHANGE */
  ExDestination?: string;
  /** SecurityDesc (107) · STRING */
  SecurityDesc?: string;
  /** Currency (15) · CURRENCY */
  Currency?: string;
  /** ExerciseStyle (1194) · INT */
  ExerciseStyle?: number;
  /** NoEvents (864) · NUMINGROUP · repeating group */
  NoEvents?: EvntGrpNoEvents[];
  /** Timezone (16000) · STRING */
  Timezone?: string;
  /** Side (54) · CHAR */
  Side?: Side;
  /** OrdType (40) · CHAR */
  OrdType?: OrdType;
  /** Price (44) · PRICE */
  Price?: number;
  /** TimeInForce (59) · CHAR */
  TimeInForce?: TimeInForce;
  /** ExpireDate (432) · LOCALMKTDATE */
  ExpireDate?: string;
  /** ExpireTime (126) · UTCTIMESTAMP */
  ExpireTime?: string;
  /** TextA (16556) · STRING */
  TextA?: string;
  /** TextB (16557) · STRING */
  TextB?: string;
  /** TextTT (16558) · STRING */
  TextTT?: string;
  /** TextC (16559) · STRING */
  TextC?: string;
  /** EchoDC_01 (16601) · STRING */
  EchoDC_01?: string;
  /** EchoDC_02 (16602) · STRING */
  EchoDC_02?: string;
  /** EchoDC_03 (16603) · STRING */
  EchoDC_03?: string;
  /** EchoDC_04 (16604) · STRING */
  EchoDC_04?: string;
  /** EchoDC_05 (16605) · STRING */
  EchoDC_05?: string;
  /** EchoDC_06 (16606) · STRING */
  EchoDC_06?: string;
  /** EchoDC_07 (16607) · STRING */
  EchoDC_07?: string;
  /** EchoDC_08 (16608) · STRING */
  EchoDC_08?: string;
  /** EchoDC_09 (16609) · STRING */
  EchoDC_09?: string;
  /** EchoDC_10 (16610) · STRING */
  EchoDC_10?: string;
  /** EchoDC_11 (16631) · STRING */
  EchoDC_11?: string;
  /** EchoDC_12 (16632) · STRING */
  EchoDC_12?: string;
  /** EchoDC_13 (16633) · STRING */
  EchoDC_13?: string;
  /** EchoDC_14 (16634) · STRING */
  EchoDC_14?: string;
  /** EchoDC_15 (16635) · STRING */
  EchoDC_15?: string;
  /** EchoDC_16 (16636) · STRING */
  EchoDC_16?: string;
  /** EchoDC_17 (16637) · STRING */
  EchoDC_17?: string;
  /** EchoDC_18 (16638) · STRING */
  EchoDC_18?: string;
  /** EchoDC_19 (16639) · STRING */
  EchoDC_19?: string;
  /** EchoDC_20 (16640) · STRING */
  EchoDC_20?: string;
}

/** Entry of repeating group NoEvents (864) in EvntGrp */
export interface EvntGrpNoEvents {
  /** EventType (865) · INT */
  EventType?: EventType;
  /** EventDate (866) · LOCALMKTDATE */
  EventDate?: string;
  /** EventTime (1145) · UTCTIMESTAMP */
  EventTime?: string;
}

/** Entry of repeating group NoNestedPartyIDs (539) in NestedParties */
export interface NestedPartiesNoNestedPartyIDs {
  /** NestedPartyID (524) · STRING */
  NestedPartyID?: string;
  /** NestedPartyIDSource (525) · CHAR */
  NestedPartyIDSource?: NestedPartyIDSource;
  /** NestedPartyRole (538) · INT */
  NestedPartyRole?: NestedPartyRole;
}

/** Entry of repeating group NoMiscFees (136) in MiscFeesGrp */
export interface MiscFeesGrpNoMiscFees {
  /** MiscFeeAmt (137) · AMT */
  MiscFeeAmt?: number;
  /** MiscFeeCurr (138) · CURRENCY */
  MiscFeeCurr?: string;
  /** MiscFeeType (139) · INT */
  MiscFeeType?: MiscFeeType;
}

/** Entry of repeating group NoAllocs (78) in AllocsGrp */
export interface AllocsGrpNoAllocs {
  /** AllocAccount (79) · STRING */
  AllocAccount: string;
  /** AllocAcctIDSource (661) · INT */
  AllocAcctIDSource?: AllocAcctIDSource;
  /** AllocQty (80) · QTY */
  AllocQty: number;
  /** AllocPrice (366) · PRICE */
  AllocPrice?: number;
  /** IndividualAllocID (467) · STRING */
  IndividualAllocID?: string;
  /** ProcessCode (81) · CHAR */
  ProcessCode?: ProcessCode;
  /** NoNestedPartyIDs (539) · NUMINGROUP · repeating group */
  NoNestedPartyIDs?: NestedPartiesNoNestedPartyIDs[];
  /** AllocText (161) · STRING */
  AllocText?: string;
  /** Commission (12) · AMT */
  Commission?: number;
  /** CommType (13) · CHAR */
  CommType?: CommType;
  /** AllocAvgPx (153) · PRICE */
  AllocAvgPx?: number;
  /** AllocNetMoney (154) · AMT */
  AllocNetMoney?: number;
  /** NoMiscFees (136) · NUMINGROUP · repeating group */
  NoMiscFees?: MiscFeesGrpNoMiscFees[];
}

/** Entry of repeating group NoTTReserved (16965) in TTReservedGrp */
export interface TTReservedGrpNoTTReserved {
  /** TTReservedName (16966) · STRING */
  TTReservedName?: string;
  /** TTReservedValue (16967) · STRING */
  TTReservedValue?: string;
}

/** Entry of repeating group NumTickTblEntries (16456) in TickTblEntriesGrp */
export interface TickTblEntriesGrpNumTickTblEntries {
  /** NumTicks (16457) · INT */
  NumTicks?: number;
  /** MaxPrice (16458) · PRICE */
  MaxPrice?: number;
}

/** Entry of repeating group NoMDEntryTypes (267) in MDEntryTypesGrp */
export interface MDEntryTypesGrpNoMDEntryTypes {
  /** MDEntryType (269) · CHAR */
  MDEntryType: MDEntryType;
}

/** Entry of repeating group NoMDEntries (268) in MDFullGrp */
export interface MDFullGrpNoMDEntries {
  /** MDEntryType (269) · CHAR */
  MDEntryType: MDEntryType;
  /** MDEntryPx (270) · PRICE */
  MDEntryPx?: number;
  /** MDEntrySize (271) · QTY */
  MDEntrySize?: number;
  /** MDEntryDate (272) · UTCDATEONLY */
  MDEntryDate?: string;
  /** MDEntryTime (273) · UTCTIMEONLY */
  MDEntryTime?: string;
  /** MDEntryPositionNo (290) · INT */
  MDEntryPositionNo?: number;
  /** NumberOfOrders (346) · INT */
  NumberOfOrders?: number;
  /** AggressorSide (2446) · INT */
  AggressorSide?: AggressorSide;
  /** MDEntryOriginator (282) · STRING */
  MDEntryOriginator?: string;
}

/** Entry of repeating group NoMDEntries (268) in MDIncGrp */
export interface MDIncGrpNoMDEntries {
  /** MDUpdateAction (279) · CHAR */
  MDUpdateAction: MDUpdateAction;
  /** MDEntryType (269) · CHAR */
  MDEntryType?: MDEntryType;
  /** Symbol (55) · STRING */
  Symbol?: string;
  /** SecurityID (48) · STRING */
  SecurityID?: string;
  /** IDSource (22) · STRING */
  IDSource?: IDSource;
  /** NoSecurityAltID (454) · NUMINGROUP · repeating group */
  NoSecurityAltID?: SecurityAltIDGrpNoSecurityAltID[];
  /** Product (460) · INT */
  Product?: Product;
  /** CFICode (461) · STRING */
  CFICode?: string;
  /** SecurityType (167) · STRING */
  SecurityType?: SecurityType;
  /** SecuritySubType (762) · STRING */
  SecuritySubType?: string;
  /** MaturityMonthYear (200) · MONTHYEAR */
  MaturityMonthYear?: string;
  /** MaturityDate (541) · LOCALMKTDATE */
  MaturityDate?: string;
  /** MaturityDay (205) · DAYOFMONTH */
  MaturityDay?: number;
  /** ContractYearMonth (18223) · STRING */
  ContractYearMonth?: string;
  /** DeliveryTerm (18211) · CHAR */
  DeliveryTerm?: DeliveryTerm;
  /** DeliveryDate (743) · LOCALMKTDATE */
  DeliveryDate?: string;
  /** PutOrCall (201) · INT */
  PutOrCall?: PutOrCall;
  /** StrikePrice (202) · PRICE */
  StrikePrice?: number;
  /** OptAttribute (206) · CHAR */
  OptAttribute?: string;
  /** SecurityExchange (207) · EXCHANGE */
  SecurityExchange?: string;
  /** ExDestination (100) · EXCHANGE */
  ExDestination?: string;
  /** SecurityDesc (107) · STRING */
  SecurityDesc?: string;
  /** Currency (15) · CURRENCY */
  Currency?: string;
  /** ExerciseStyle (1194) · INT */
  ExerciseStyle?: number;
  /** NoEvents (864) · NUMINGROUP · repeating group */
  NoEvents?: EvntGrpNoEvents[];
  /** Timezone (16000) · STRING */
  Timezone?: string;
  /** MDEntryPx (270) · PRICE */
  MDEntryPx?: number;
  /** MDEntrySize (271) · QTY */
  MDEntrySize?: number;
  /** MDEntryDate (272) · UTCDATEONLY */
  MDEntryDate?: string;
  /** MDEntryTime (273) · UTCTIMEONLY */
  MDEntryTime?: string;
  /** MDEntryPositionNo (290) · INT */
  MDEntryPositionNo?: number;
  /** SecondaryOrderID (198) · STRING */
  SecondaryOrderID?: string;
  /** NumberOfOrders (346) · INT */
  NumberOfOrders?: number;
  /** AggressorSide (2446) · INT */
  AggressorSide?: AggressorSide;
}

/** Entry of repeating group LegNoFills (16120) in LegFillsGrp */
export interface LegFillsGrpLegNoFills {
  /** LegFillExecID (16121) · STRING */
  LegFillExecID?: string;
  /** LegFillPx (16122) · PRICE */
  LegFillPx?: number;
  /** LegFillQty (16123) · QTY */
  LegFillQty?: number;
  /** LegFillTradingVenueRegulatoryTradeID (16124) · STRING */
  LegFillTradingVenueRegulatoryTradeID?: string;
  /** LegFillLastLiquidityIndicator (16125) · INT */
  LegFillLastLiquidityIndicator?: LegFillLastLiquidityIndicator;
}

/** Entry of repeating group NoLegs (555) in LegsGrp */
export interface LegsGrpNoLegs {
  /** LegSymbol (600) · STRING */
  LegSymbol?: string;
  /** LegSecurityID (602) · STRING */
  LegSecurityID?: string;
  /** LegIDSource (603) · STRING */
  LegIDSource?: LegIDSource;
  /** NoLegSecurityAltID (604) · NUMINGROUP · repeating group */
  NoLegSecurityAltID?: LegSecurityAltIDGrpNoLegSecurityAltID[];
  /** LegProduct (607) · INT */
  LegProduct?: LegProduct;
  /** LegCFICode (608) · STRING */
  LegCFICode?: string;
  /** LegSecurityType (609) · STRING */
  LegSecurityType?: LegSecurityType;
  /** LegSecuritySubType (764) · STRING */
  LegSecuritySubType?: string;
  /** LegMaturityMonthYear (610) · MONTHYEAR */
  LegMaturityMonthYear?: string;
  /** LegMaturityDate (611) · LOCALMKTDATE */
  LegMaturityDate?: string;
  /** LegMaturityDay (18314) · DAYOFMONTH */
  LegMaturityDay?: number;
  /** LegContractYearMonth (18224) · STRING */
  LegContractYearMonth?: string;
  /** LegDeliveryTerm (18212) · CHAR */
  LegDeliveryTerm?: LegDeliveryTerm;
  /** LegDeliveryDate (18213) · LOCALMKTDATE */
  LegDeliveryDate?: string;
  /** LegPutOrCall (1358) · INT */
  LegPutOrCall?: number;
  /** LegStrikePrice (612) · PRICE */
  LegStrikePrice?: number;
  /** LegOptAttribute (613) · CHAR */
  LegOptAttribute?: string;
  /** LegSecurityExchange (616) · EXCHANGE */
  LegSecurityExchange?: string;
  /** LegExDestination (18100) · EXCHANGE */
  LegExDestination?: string;
  /** LegSecurityDesc (620) · STRING */
  LegSecurityDesc?: string;
  /** LegRatioQty (623) · FLOAT */
  LegRatioQty?: number;
  /** LegSide (624) · CHAR */
  LegSide?: string;
  /** LegCurrency (556) · CURRENCY */
  LegCurrency?: string;
  /** LegRatioExt (16760) · INT */
  LegRatioExt?: number;
  /** LegExerciseStyle (1420) · INT */
  LegExerciseStyle?: number;
  /** LegOrderQty (685) · QTY */
  LegOrderQty?: number;
  /** LegQty (687) · QTY */
  LegQty?: number;
  /** LegRefID (654) · STRING */
  LegRefID?: string;
  /** LegPrice (566) · PRICE */
  LegPrice?: number;
  /** LastSwapPoints (1071) · PRICEOFFSET */
  LastSwapPoints?: number;
  /** LegSettlDate (588) · LOCALMKTDATE */
  LegSettlDate?: string;
  /** LegLastPx (637) · PRICE */
  LegLastPx?: number;
  /** LegAvgPx (16568) · PRICE */
  LegAvgPx?: number;
  /** LegLastQty (1418) · QTY */
  LegLastQty?: number;
  /** LegAllocID (1366) · STRING */
  LegAllocID?: string;
  /** LegNoFills (16120) · NUMINGROUP · repeating group */
  LegNoFills?: LegFillsGrpLegNoFills[];
  /** Multiplier (16751) · FLOAT */
  Multiplier?: number;
  /** IsHedging (16752) · BOOLEAN */
  IsHedging?: boolean;
  /** QueueHolder (16753) · QTY */
  QueueHolder?: number;
  /** MLQ (16754) · STRING */
  MLQ?: string;
  /** PayupTicks (16755) · INT */
  PayupTicks?: number;
  /** IsQuoting (16756) · BOOLEAN */
  IsQuoting?: boolean;
  /** ConvertQuoteToHedge (16757) · INT */
  ConvertQuoteToHedge?: ConvertQuoteToHedge;
  /** IsLeanIndicative (16758) · BOOLEAN */
  IsLeanIndicative?: boolean;
  /** OptionDelta (811) · FLOAT */
  OptionDelta?: number;
  /** LegNumber (1152) · INT */
  LegNumber?: number;
  /** LegParentVendorAccountID (16874) · STRING */
  LegParentVendorAccountID?: string;
  /** LegTTRoutingAccount (16615) · STRING */
  LegTTRoutingAccount?: string;
}

/** Entry of repeating group NoRelatedSym (146) in RelatedSymGrp */
export interface RelatedSymGrpNoRelatedSym {
  /** Symbol (55) · STRING */
  Symbol?: string;
  /** SecurityID (48) · STRING */
  SecurityID?: string;
  /** IDSource (22) · STRING */
  IDSource?: IDSource;
  /** NoSecurityAltID (454) · NUMINGROUP · repeating group */
  NoSecurityAltID?: SecurityAltIDGrpNoSecurityAltID[];
  /** Product (460) · INT */
  Product?: Product;
  /** CFICode (461) · STRING */
  CFICode?: string;
  /** SecurityType (167) · STRING */
  SecurityType?: SecurityType;
  /** SecuritySubType (762) · STRING */
  SecuritySubType?: string;
  /** MaturityMonthYear (200) · MONTHYEAR */
  MaturityMonthYear?: string;
  /** MaturityDate (541) · LOCALMKTDATE */
  MaturityDate?: string;
  /** MaturityDay (205) · DAYOFMONTH */
  MaturityDay?: number;
  /** ContractYearMonth (18223) · STRING */
  ContractYearMonth?: string;
  /** DeliveryTerm (18211) · CHAR */
  DeliveryTerm?: DeliveryTerm;
  /** DeliveryDate (743) · LOCALMKTDATE */
  DeliveryDate?: string;
  /** PutOrCall (201) · INT */
  PutOrCall?: PutOrCall;
  /** StrikePrice (202) · PRICE */
  StrikePrice?: number;
  /** OptAttribute (206) · CHAR */
  OptAttribute?: string;
  /** SecurityExchange (207) · EXCHANGE */
  SecurityExchange?: string;
  /** ExDestination (100) · EXCHANGE */
  ExDestination?: string;
  /** SecurityDesc (107) · STRING */
  SecurityDesc?: string;
  /** Currency (15) · CURRENCY */
  Currency?: string;
  /** ExerciseStyle (1194) · INT */
  ExerciseStyle?: number;
  /** NoEvents (864) · NUMINGROUP · repeating group */
  NoEvents?: EvntGrpNoEvents[];
  /** Timezone (16000) · STRING */
  Timezone?: string;
  /** QuoteType (537) · INT */
  QuoteType?: QuoteType;
  /** QuoteSubType (18602) · INT */
  QuoteSubType?: QuoteSubType;
  /** QuoteRefPrice (18603) · PRICE */
  QuoteRefPrice?: number;
  /** UnderlyingDeltaPercentage (18604) · FLOAT */
  UnderlyingDeltaPercentage?: number;
  /** Side (54) · CHAR */
  Side?: Side;
  /** OrderQty (38) · QTY */
  OrderQty?: number;
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** Price (44) · PRICE */
  Price?: number;
  /** Account (1) · STRING */
  Account?: string;
}

/** Entry of repeating group NoUnderlyingSecurityAltID (457) in UnderlyingSecurityAltIDGrp */
export interface UnderlyingSecurityAltIDGrpNoUnderlyingSecurityAltID {
  /** UnderlyingSecurityAltID (458) · STRING */
  UnderlyingSecurityAltID?: string;
  /** UnderlyingSecurityAltIDSource (459) · STRING */
  UnderlyingSecurityAltIDSource?: string;
}

/** Entry of repeating group NoUnderlyingStipulations (887) in UnderlyingStipulations */
export interface UnderlyingStipulationsNoUnderlyingStipulations {
  /** UnderlyingStipulationType (888) · INT */
  UnderlyingStipulationType?: UnderlyingStipulationType;
  /** UnderlyingStipulationValue (889) · STRING */
  UnderlyingStipulationValue?: UnderlyingStipulationValue;
}

/** Entry of repeating group NoUnderlyings (711) in UnderlyingsGrp */
export interface UnderlyingsGrpNoUnderlyings {
  /** UnderlyingSymbol (311) · STRING */
  UnderlyingSymbol?: string;
  /** UnderlyingSecurityID (309) · STRING */
  UnderlyingSecurityID?: string;
  /** UnderlyingSecurityIDSource (305) · STRING */
  UnderlyingSecurityIDSource?: UnderlyingSecurityIDSource;
  /** UnderlyingSecurityType (310) · STRING */
  UnderlyingSecurityType?: UnderlyingSecurityType;
  /** UnderlyingPx (810) · PRICE */
  UnderlyingPx?: number;
  /** UnderlyingQty (879) · QTY */
  UnderlyingQty?: number;
  /** NoUnderlyingSecurityAltID (457) · NUMINGROUP · repeating group */
  NoUnderlyingSecurityAltID?: UnderlyingSecurityAltIDGrpNoUnderlyingSecurityAltID[];
  /** UnderlyingMaturityDate (542) · LOCALMKTDATE */
  UnderlyingMaturityDate?: string;
  /** UnderlyingIssuer (306) · STRING */
  UnderlyingIssuer?: string;
  /** UnderlyingCurrency (318) · CURRENCY */
  UnderlyingCurrency?: string;
  /** NoUnderlyingStipulations (887) · NUMINGROUP · repeating group */
  NoUnderlyingStipulations?: UnderlyingStipulationsNoUnderlyingStipulations[];
  /** UnderlyingMemo (18236) · STRING */
  UnderlyingMemo?: string;
  /** UnderlyingStrikePrice (316) · PRICE */
  UnderlyingStrikePrice?: number;
  /** UnderlyingSpotRate (435) · FLOAT */
  UnderlyingSpotRate?: number;
  /** UnderlyingSecuritySubType (763) · STRING */
  UnderlyingSecuritySubType?: string;
}

/** Entry of repeating group NoSides (552) in SidesGrp */
export interface SidesGrpNoSides {
  /** Side (54) · CHAR */
  Side?: Side;
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** ClOrdID (11) · STRING */
  ClOrdID?: string;
  /** SecondaryClOrdID (526) · STRING */
  SecondaryClOrdID?: string;
  /** Text (58) · STRING */
  Text?: string;
  /** AggressorIndicator (1057) · BOOLEAN */
  AggressorIndicator?: AggressorIndicator;
  /** CustOrderHandlingInst (1031) · CHAR */
  CustOrderHandlingInst?: CustOrderHandlingInst;
  /** CustOrderCapacity (582) · INT */
  CustOrderCapacity?: CustOrderCapacity;
  /** OrderIDGUID (16116) · STRING */
  OrderIDGUID?: string;
  /** Account (1) · STRING */
  Account?: string;
  /** AllocQty (80) · QTY */
  AllocQty?: number;
  /** AllocPositionEffect (1047) · CHAR */
  AllocPositionEffect?: AllocPositionEffect;
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** LegNumber (1152) · INT */
  LegNumber?: number;
  /** SideTextA (16849) · STRING */
  SideTextA?: string;
  /** SideTextB (16850) · STRING */
  SideTextB?: string;
  /** SideTextC (16851) · STRING */
  SideTextC?: string;
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
  /** ComplianceText (2404) · STRING */
  ComplianceText?: string;
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** EchoDC_01 (16601) · STRING */
  EchoDC_01?: string;
  /** EchoDC_02 (16602) · STRING */
  EchoDC_02?: string;
  /** EchoDC_03 (16603) · STRING */
  EchoDC_03?: string;
  /** EchoDC_04 (16604) · STRING */
  EchoDC_04?: string;
  /** EchoDC_05 (16605) · STRING */
  EchoDC_05?: string;
  /** EchoDC_06 (16606) · STRING */
  EchoDC_06?: string;
  /** EchoDC_07 (16607) · STRING */
  EchoDC_07?: string;
  /** EchoDC_08 (16608) · STRING */
  EchoDC_08?: string;
  /** EchoDC_09 (16609) · STRING */
  EchoDC_09?: string;
  /** EchoDC_10 (16610) · STRING */
  EchoDC_10?: string;
  /** EchoDC_11 (16631) · STRING */
  EchoDC_11?: string;
  /** EchoDC_12 (16632) · STRING */
  EchoDC_12?: string;
  /** EchoDC_13 (16633) · STRING */
  EchoDC_13?: string;
  /** EchoDC_14 (16634) · STRING */
  EchoDC_14?: string;
  /** EchoDC_15 (16635) · STRING */
  EchoDC_15?: string;
  /** EchoDC_16 (16636) · STRING */
  EchoDC_16?: string;
  /** EchoDC_17 (16637) · STRING */
  EchoDC_17?: string;
  /** EchoDC_18 (16638) · STRING */
  EchoDC_18?: string;
  /** EchoDC_19 (16639) · STRING */
  EchoDC_19?: string;
  /** EchoDC_20 (16640) · STRING */
  EchoDC_20?: string;
  /** MktQuoteID (18608) · STRING */
  MktQuoteID?: string;
  /** SecondaryQuoteID (18609) · STRING */
  SecondaryQuoteID?: string;
  /** MinTradeVol (562) · QTY */
  MinTradeVol?: number;
  /** NoUnderlyings (711) · NUMINGROUP · repeating group */
  NoUnderlyings?: UnderlyingsGrpNoUnderlyings[];
}

/** Entry of repeating group NoTCRLegs (10555) in TCRLegsGrp */
export interface TCRLegsGrpNoTCRLegs {
  /** LegLastPx (637) · PRICE */
  LegLastPx?: number;
  /** LegLastQty (1418) · QTY */
  LegLastQty?: number;
  /** NoSides (552) · NUMINGROUP · repeating group */
  NoSides?: SidesGrpNoSides[];
}

/** Entry of repeating group NoTargetPartyIDs (1461) in TargetPartyIDGrp */
export interface TargetPartyIDGrpNoTargetPartyIDs {
  /** TargetPartyExchangeTraderID (1462) · STRING */
  TargetPartyExchangeTraderID?: string;
}

/** Entry of repeating group NoInstrumentExtensions (870) in InstrumentExtension */
export interface InstrumentExtensionNoInstrumentExtensions {
  /** InstrumentAttributeType (871) · INT */
  InstrumentAttributeType?: InstrumentAttributeType;
  /** InstrumentAttributeValue (872) · STRING */
  InstrumentAttributeValue?: string;
}

/** Entry of repeating group NoRootPartyIDs (1116) in RootPartyIDGrp */
export interface RootPartyIDGrpNoRootPartyIDs {
  /** RootPartyID (1117) · STRING */
  RootPartyID?: string;
  /** RootPartyRole (1119) · INT */
  RootPartyRole?: RootPartyRole;
  /** RootPartyIDSource (1118) · CHAR */
  RootPartyIDSource?: RootPartyIDSource;
}
