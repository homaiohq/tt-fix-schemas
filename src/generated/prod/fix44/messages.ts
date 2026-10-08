// messages.ts
// Generated from TT FIX.4.4 schema — TT FIX Version: PROD 2026-09-12 04:10:46 Git:6a77bcece9932eca75df3778f3537207659e7f12 MD5:ec5361665270743e5d87a857ce5c7f8f
// DO NOT EDIT: regenerate with `pnpm generate`.

import type {
  AOTCPreventionActionType,
  AggregatedBook,
  AggressorIndicator,
  AllocNoOrdersType,
  AllocReportType,
  AllocStatus,
  AllocTransType,
  AllocType,
  BenchmarkSecurityIDSource,
  BracketOrderType,
  BusinessRejectReason,
  ChildTIF,
  ContingencyType,
  CrossType,
  CustOrderCapacity,
  CustOrderHandlingInst,
  CxlRejReason,
  CxlRejResponseTo,
  DKReason,
  DeliveryTerm,
  DeltaRounding,
  DirectElectronicAccess,
  DropCopyOrder,
  DurationBaseUnit,
  ETimeAct,
  EncryptMethod,
  ExecRestatementReason,
  ExecTransType,
  ExecType,
  ForceLogout,
  FormulaBasedOn,
  GapFillFlag,
  HandlInst,
  HedgeOrderType,
  HedgeType,
  IDSource,
  IncludeNumberOfOrders,
  IsFirm,
  LastLiquidityIndicator,
  LeftoverAction,
  LeftoverTime,
  LeftoverTimeAction,
  LiquidityIndicator,
  LiquidityProvision,
  MDUpdateType,
  ManualOrderIndicator,
  MarketDepth,
  MockOrderFlag,
  MsgType,
  MultiLegReportingType,
  NVDR,
  OpenClose,
  OrdRejReason,
  OrdStatus,
  OrdType,
  OrderCapacity,
  OrderOrigination,
  OrderRestriction,
  OrderSource,
  ParentTIF,
  PossDupFlag,
  PossResend,
  PreviouslyReported,
  PriceType,
  Product,
  PutOrCall,
  QuoteAckStatus,
  QuoteCondition,
  QuoteStatus,
  QuoteSubType,
  QuoteType,
  QuotingStatus,
  RejectSource,
  RequestTickTable,
  ResetSeqNumFlag,
  ReverseSpreadOC,
  ReviewStatus,
  SMPInstruction,
  SRFQTransType,
  SecondTriggerPriceType,
  SecondTriggerQtyCompare,
  SecondTriggerQtyType,
  SecurityRequestType,
  SecurityResponseType,
  SecurityTradingStatus,
  SecurityType,
  SessionRejectReason,
  SettlCurrFxRateCalc,
  Side,
  StagedOrderStatus,
  StopOrderType,
  SubscriptionRequestType,
  TFUserType,
  TTF,
  TTSMPInstruction,
  TTStopIsTrlTrg,
  TTStopLimitPriceType,
  TTStopSecondTriggerPriceType,
  TTStopSecondTriggerQtyCompare,
  TTStopSecondTriggerQtyType,
  TTStopTriggerLTPReset,
  TTStopTriggerPriceType,
  TTStopTriggerQTyCompare,
  TTStopTriggerQtyType,
  TTStopTriggeredOrderType,
  TTStopWithATickType,
  TargetStrategyType,
  TimeInForce,
  TradeHandlingInstr,
  TradePublishIndicator,
  TradeReportRejectReason,
  TradeReportTransType,
  TradeReportType,
  TradeRequestResult,
  TradeRequestStatus,
  TradeRequestType,
  TradingCapacity,
  TradingSessionSubID,
  TradingStrategy,
  TrdRegPublicationReason,
  TrdRptStatus,
  TrdSubType,
  TrdType,
  TriggerPriceType,
  TriggerQtyCompare,
  TriggerQtyType,
  TriggerType,
  TwapStyle,
  UnderlyingSecurityIDSource,
  UnderlyingSecurityType,
  WithATickType,
} from './fields.js';
import type {
  AllocsGrpNoAllocs,
  EvntGrpNoEvents,
  ExecsGrpNoExecs,
  FillsGrpNoFills,
  InstrumentExtensionNoInstrumentExtensions,
  LegsGrpNoLegs,
  LinksGrpNoLinks,
  MDEntryTypesGrpNoMDEntryTypes,
  MDFullGrpNoMDEntries,
  MDIncGrpNoMDEntries,
  NestedPartiesNoNestedPartyIDs,
  OrderAttributesGrpNoOrderAttributes,
  OrderEventGrpNoOrderEvents,
  OrdersGrpNoOrders,
  PartiesNoPartyIDs,
  RelatedSymGrpNoRelatedSym,
  RootPartyIDGrpNoRootPartyIDs,
  SecurityAltIDGrpNoSecurityAltID,
  SidesGrpNoSides,
  StrategyParametersGrpNoStrategyParameters,
  TCRLegsGrpNoTCRLegs,
  TTReservedGrpNoTTReserved,
  TargetPartyIDGrpNoTargetPartyIDs,
  TickTblEntriesGrpNumTickTblEntries,
  UnderlyingSecurityAltIDGrpNoUnderlyingSecurityAltID,
  UnderlyingStipulationsNoUnderlyingStipulations,
  UnderlyingsGrpNoUnderlyings,
} from './components.js';

/** Standard message header */
export interface Header {
  /** BeginString (8) · STRING */
  BeginString: string;
  /** BodyLength (9) · INT */
  BodyLength: number;
  /** MsgType (35) · STRING */
  MsgType: MsgType;
  /** SenderCompID (49) · STRING */
  SenderCompID: string;
  /** TargetCompID (56) · STRING */
  TargetCompID: string;
  /** MsgSeqNum (34) · SEQNUM */
  MsgSeqNum: number;
  /** SenderSubID (50) · STRING */
  SenderSubID?: string;
  /** TargetSubID (57) · STRING */
  TargetSubID?: string;
  /** SenderLocationID (142) · STRING */
  SenderLocationID?: string;
  /** PossDupFlag (43) · BOOLEAN */
  PossDupFlag?: PossDupFlag;
  /** PossResend (97) · BOOLEAN */
  PossResend?: PossResend;
  /** SendingTime (52) · UTCTIMESTAMP */
  SendingTime: string;
  /** OrigSendingTime (122) · UTCTIMESTAMP */
  OrigSendingTime?: string;
  /** OnBehalfOfCompID (115) · STRING */
  OnBehalfOfCompID?: string;
  /** OnBehalfOfSubID (116) · STRING */
  OnBehalfOfSubID?: string;
  /** DeliverToCompID (128) · STRING */
  DeliverToCompID?: string;
  /** DeliverToSubID (129) · STRING */
  DeliverToSubID?: string;
  /** LastSeqNumProcessed (369) · SEQNUM */
  LastSeqNumProcessed?: number;
}

/** Standard message trailer */
export interface Trailer {
  /** CheckSum (10) · STRING */
  CheckSum?: string;
}

// Messages (body only — combine with Header / Trailer as needed)

/** Heartbeat message · MsgType `0` · admin */
export interface Heartbeat {
  /** TestReqID (112) · STRING */
  TestReqID?: string;
}

/** TestRequest message · MsgType `1` · admin */
export interface TestRequest {
  /** TestReqID (112) · STRING */
  TestReqID: string;
}

/** ResendRequest message · MsgType `2` · admin */
export interface ResendRequest {
  /** BeginSeqNo (7) · SEQNUM */
  BeginSeqNo: number;
  /** EndSeqNo (16) · SEQNUM */
  EndSeqNo: number;
}

/** Reject message · MsgType `3` · admin */
export interface Reject {
  /** RefSeqNum (45) · SEQNUM */
  RefSeqNum: number;
  /** RefTagID (371) · INT */
  RefTagID?: number;
  /** RefMsgType (372) · STRING */
  RefMsgType?: string;
  /** SessionRejectReason (373) · INT */
  SessionRejectReason?: SessionRejectReason;
  /** Text (58) · STRING */
  Text?: string;
  /** StartSequenceNumber (5024) · SEQNUM */
  StartSequenceNumber?: number;
}

/** SequenceReset message · MsgType `4` · admin */
export interface SequenceReset {
  /** GapFillFlag (123) · BOOLEAN */
  GapFillFlag?: GapFillFlag;
  /** NewSeqNo (36) · SEQNUM */
  NewSeqNo: number;
}

/** Logout message · MsgType `5` · admin */
export interface Logout {
  /** Text (58) · STRING */
  Text?: string;
  /** ForceLogout (18000) · INT */
  ForceLogout?: ForceLogout;
  /** NextExpectedMsgSeqNum (789) · SEQNUM */
  NextExpectedMsgSeqNum?: number;
}

/** ExecutionReport message · MsgType `8` · app */
export interface ExecutionReport {
  /** OrderID (37) · STRING */
  OrderID: string;
  /** SecondaryOrderID (198) · STRING */
  SecondaryOrderID?: string;
  /** SecondaryClOrdID (526) · STRING */
  SecondaryClOrdID?: string;
  /** SecondaryExecID (527) · STRING */
  SecondaryExecID?: string;
  /** ClOrdID (11) · STRING */
  ClOrdID?: string;
  /** OrigClOrdID (41) · STRING */
  OrigClOrdID?: string;
  /** TTClOrdID (10011) · STRING */
  TTClOrdID?: string;
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** ExecID (17) · STRING */
  ExecID?: string;
  /** ExecTransType (20) · CHAR */
  ExecTransType?: ExecTransType;
  /** ExecRefID (19) · STRING */
  ExecRefID?: string;
  /** ExecType (150) · CHAR */
  ExecType: ExecType;
  /** ExecInst (18) · MULTIPLESTRINGVALUE · values: ExecInst */
  ExecInst?: string;
  /** OrdStatus (39) · CHAR */
  OrdStatus: OrdStatus;
  /** OrdRejReason (103) · INT */
  OrdRejReason?: OrdRejReason;
  /** ExecRestatementReason (378) · INT */
  ExecRestatementReason?: ExecRestatementReason;
  /** Account (1) · STRING */
  Account?: string;
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
  /** PriceType (423) · INT */
  PriceType?: PriceType;
  /** BenchmarkSecurityID (699) · STRING */
  BenchmarkSecurityID?: string;
  /** BenchmarkSecurityIDSource (761) · STRING */
  BenchmarkSecurityIDSource?: BenchmarkSecurityIDSource;
  /** Side (54) · CHAR */
  Side?: Side;
  /** OrderQty (38) · QTY */
  OrderQty?: number;
  /** OrdType (40) · CHAR */
  OrdType?: OrdType;
  /** Price (44) · PRICE */
  Price?: number;
  /** Spread (218) · PRICEOFFSET */
  Spread?: number;
  /** Yield (236) · FLOAT */
  Yield?: number;
  /** StopPx (99) · PRICE */
  StopPx?: number;
  /** TimeInForce (59) · CHAR */
  TimeInForce?: TimeInForce;
  /** ExpireDate (432) · LOCALMKTDATE */
  ExpireDate?: string;
  /** ClearingAccount (440) · STRING */
  ClearingAccount?: string;
  /** LastShares (32) · QTY */
  LastShares?: number;
  /** LastPx (31) · PRICE */
  LastPx?: number;
  /** LeavesQty (151) · QTY */
  LeavesQty: number;
  /** CumQty (14) · QTY */
  CumQty: number;
  /** AvgPx (6) · PRICE */
  AvgPx: number;
  /** GrossTradeAmt (381) · AMT */
  GrossTradeAmt?: number;
  /** AccruedInterestAmt (159) · AMT */
  AccruedInterestAmt?: number;
  /** NetMoney (118) · AMT */
  NetMoney?: number;
  /** SettlCurrAmt (119) · AMT */
  SettlCurrAmt?: number;
  /** SettlCurrency (120) · CURRENCY */
  SettlCurrency?: string;
  /** SettlCurrFxRate (155) · FLOAT */
  SettlCurrFxRate?: number;
  /** SettlCurrFxRateCalc (156) · CHAR */
  SettlCurrFxRateCalc?: SettlCurrFxRateCalc;
  /** TradeDate (75) · LOCALMKTDATE */
  TradeDate?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** MinQty (110) · QTY */
  MinQty?: number;
  /** LiquidityIndicator (9120) · CHAR */
  LiquidityIndicator?: LiquidityIndicator;
  /** OpenClose (77) · CHAR */
  OpenClose?: OpenClose;
  /** DisplayQty (1138) · QTY */
  DisplayQty?: number;
  /** RefreshQty (1088) · QTY */
  RefreshQty?: number;
  /** Text (58) · STRING */
  Text?: string;
  /** NoAllocs (78) · NUMINGROUP · repeating group */
  NoAllocs?: AllocsGrpNoAllocs[];
  /** MultiLegReportingType (442) · CHAR */
  MultiLegReportingType?: MultiLegReportingType;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** ExchCred (18216) · STRING */
  ExchCred?: string;
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** CustOrderCapacity (582) · INT */
  CustOrderCapacity?: CustOrderCapacity;
  /** ContingencyType (1385) · INT */
  ContingencyType?: ContingencyType;
  /** TTID (10553) · STRING */
  TTID?: string;
  /** TrdType (828) · INT */
  TrdType?: TrdType;
  /** TrdMatchID (880) · STRING */
  TrdMatchID?: string;
  /** CrossID (548) · STRING */
  CrossID?: string;
  /** CrossType (549) · INT */
  CrossType?: CrossType;
  /** TradeReportID (571) · STRING */
  TradeReportID?: string;
  /** AOTCPreventionActionType (18222) · CHAR */
  AOTCPreventionActionType?: AOTCPreventionActionType;
  /** TotalNumOrders (16728) · INT */
  TotalNumOrders?: number;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** LastParPx (669) · PRICE */
  LastParPx?: number;
  /** HandlInst (21) · CHAR */
  HandlInst?: HandlInst;
  /** StagedOrderMsg (16106) · STRING */
  StagedOrderMsg?: string;
  /** StagedOrderOwner (16110) · STRING */
  StagedOrderOwner?: string;
  /** StagedOrderStatus (16109) · CHAR */
  StagedOrderStatus?: StagedOrderStatus;
  /** ExternalSource (16115) · BOOLEAN */
  ExternalSource?: boolean;
  /** NoStrategyParameters (957) · NUMINGROUP · repeating group */
  NoStrategyParameters?: StrategyParametersGrpNoStrategyParameters[];
  /** AggressorIndicator (1057) · BOOLEAN */
  AggressorIndicator?: AggressorIndicator;
  /** EffectiveTime (168) · UTCTIMESTAMP */
  EffectiveTime?: string;
  /** ExpireTime (126) · UTCTIMESTAMP */
  ExpireTime?: string;
  /** TextTTModifyingUser (16625) · STRING */
  TextTTModifyingUser?: string;
  /** TargetStrategyName (16847) · STRING */
  TargetStrategyName?: string;
  /** TargetStrategyType (16848) · INT */
  TargetStrategyType?: TargetStrategyType;
  /** BracketOrderType (16901) · INT */
  BracketOrderType?: BracketOrderType;
  /** BracketStopLimitOffset (16902) · INT */
  BracketStopLimitOffset?: number;
  /** ChildTIF (16903) · CHAR */
  ChildTIF?: ChildTIF;
  /** DiscVal (16904) · INT */
  DiscVal?: number;
  /** DiscValType (16905) · INT */
  DiscValType?: number;
  /** ETimeAct (16906) · INT */
  ETimeAct?: ETimeAct;
  /** Interval (16907) · INT */
  Interval?: number;
  /** IsTrlTrg (16908) · STRING */
  IsTrlTrg?: string;
  /** LeftoverAction (16909) · INT */
  LeftoverAction?: LeftoverAction;
  /** LeftoverTicks (16910) · INT */
  LeftoverTicks?: number;
  /** LimitPriceType (16911) · INT */
  LimitPriceType?: number;
  /** LimitTicksAway (16912) · INT */
  LimitTicksAway?: number;
  /** OcoStopTriggerPrice (16913) · PRICE */
  OcoStopTriggerPrice?: number;
  /** ProfitTarget (16914) · INT */
  ProfitTarget?: number;
  /** StopLimitOffset (16915) · INT */
  StopLimitOffset?: number;
  /** StopOrderType (16916) · INT */
  StopOrderType?: StopOrderType;
  /** StopTarget (16917) · INT */
  StopTarget?: number;
  /** TriggerPriceType (16918) · INT */
  TriggerPriceType?: TriggerPriceType;
  /** TriggerTicksAway (16919) · INT */
  TriggerTicksAway?: number;
  /** TriggerType (16920) · INT */
  TriggerType?: TriggerType;
  /** WithATickType (16921) · INT */
  WithATickType?: WithATickType;
  /** WithATick (16922) · INT */
  WithATick?: number;
  /** AllocID (70) · STRING */
  AllocID?: string;
  /** RefID (18217) · STRING */
  RefID?: string;
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
  /** NoFills (1362) · NUMINGROUP · repeating group */
  NoFills?: FillsGrpNoFills[];
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** DropCopyOrder (16566) · BOOLEAN */
  DropCopyOrder?: DropCopyOrder;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
  /** TrdRegPublicationReason (8013) · INT */
  TrdRegPublicationReason?: TrdRegPublicationReason;
  /** TradingVenueRegulatoryTradeID (8016) · STRING */
  TradingVenueRegulatoryTradeID?: string;
  /** LastLiquidityIndicator (851) · INT */
  LastLiquidityIndicator?: LastLiquidityIndicator;
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
  /** OrderIDGUID (16116) · STRING */
  OrderIDGUID?: string;
  /** TextTT (16558) · STRING */
  TextTT?: string;
  /** TextA (16556) · STRING */
  TextA?: string;
  /** TextB (16557) · STRING */
  TextB?: string;
  /** TextC (16559) · STRING */
  TextC?: string;
  /** TimeReceivedFromExchange (16561) · UTCTIMESTAMP */
  TimeReceivedFromExchange?: string;
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
  /** SelfMatchPreventionID (7928) · STRING */
  SelfMatchPreventionID?: string;
  /** SelfMatchPreventionIDICE (9821) · STRING */
  SelfMatchPreventionIDICE?: string;
  /** SelfMatchPreventionInstruction (9822) · CHAR */
  SelfMatchPreventionInstruction?: string;
  /** SMPInstruction (8000) · CHAR */
  SMPInstruction?: SMPInstruction;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** UniqueExecID (16612) · STRING */
  UniqueExecID?: string;
  /** SpreadLegRatioQty (16623) · FLOAT */
  SpreadLegRatioQty?: number;
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** AccountRiskGroup (16624) · STRING */
  AccountRiskGroup?: string;
  /** MlegHeadExecId (16611) · STRING */
  MlegHeadExecId?: string;
  /** OrdStatusReqID (790) · STRING */
  OrdStatusReqID?: string;
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** AccountID (18101) · STRING */
  AccountID?: string;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** InvestmentDecision (9704) · INT */
  InvestmentDecision?: number;
  /** DirectElectronicAccess (9700) · INT */
  DirectElectronicAccess?: DirectElectronicAccess;
  /** TradingCapacity (9701) · INT */
  TradingCapacity?: TradingCapacity;
  /** LiquidityProvision (9702) · INT */
  LiquidityProvision?: LiquidityProvision;
  /** OriginalSecondaryExecID (9703) · STRING */
  OriginalSecondaryExecID?: string;
  /** MiFIDID (9707) · STRING */
  MiFIDID?: string;
  /** ExecutionDecision (9705) · INT */
  ExecutionDecision?: number;
  /** ClientIDCode (9706) · INT */
  ClientIDCode?: number;
  /** TTSyntheticType (18226) · INT */
  TTSyntheticType?: number;
  /** VendorDefinedField1 (17001) · STRING */
  VendorDefinedField1?: string;
  /** VendorDefinedField2 (17002) · STRING */
  VendorDefinedField2?: string;
  /** VendorDefinedField3 (17003) · STRING */
  VendorDefinedField3?: string;
  /** VendorDefinedField4 (17004) · STRING */
  VendorDefinedField4?: string;
  /** VendorDefinedField5 (17005) · STRING */
  VendorDefinedField5?: string;
  /** CustOrderHandlingInst (1031) · CHAR */
  CustOrderHandlingInst?: CustOrderHandlingInst;
  /** Organization (18227) · STRING */
  Organization?: string;
  /** MockOrderFlag (18001) · INT */
  MockOrderFlag?: MockOrderFlag;
  /** MaxShow (210) · INT */
  MaxShow?: number;
  /** ReviewUserID (18229) · STRING */
  ReviewUserID?: string;
  /** ReviewStatus (18230) · INT */
  ReviewStatus?: ReviewStatus;
  /** NoTTReserved (16965) · NUMINGROUP · repeating group */
  NoTTReserved?: TTReservedGrpNoTTReserved[];
  /** UniqueLegID (18231) · STRING */
  UniqueLegID?: string;
  /** OrderRestriction (529) · CHAR */
  OrderRestriction?: OrderRestriction;
  /** LeftoverMktOrderLimitTicks (16968) · INT */
  LeftoverMktOrderLimitTicks?: number;
  /** TTStopNoImplies (16978) · BOOLEAN */
  TTStopNoImplies?: boolean;
  /** SecondConditionIsOn (16969) · BOOLEAN */
  SecondConditionIsOn?: boolean;
  /** SecondTriggerTicksAway (16970) · INT */
  SecondTriggerTicksAway?: number;
  /** SecondTriggerQtyType (16971) · INT */
  SecondTriggerQtyType?: SecondTriggerQtyType;
  /** SecondTriggerQtyCompare (16972) · INT */
  SecondTriggerQtyCompare?: SecondTriggerQtyCompare;
  /** SecondTriggerQty (16973) · QTY */
  SecondTriggerQty?: number;
  /** LeftoverTime (16974) · INT */
  LeftoverTime?: LeftoverTime;
  /** SecondTriggerPriceType (16975) · INT */
  SecondTriggerPriceType?: SecondTriggerPriceType;
  /** NoImplies (16976) · BOOLEAN */
  NoImplies?: boolean;
  /** CustomSliceSched (16977) · STRING */
  CustomSliceSched?: string;
  /** ComplianceText (2404) · STRING */
  ComplianceText?: string;
  /** LastTradingDate (18232) · LOCALMKTDATE */
  LastTradingDate?: string;
  /** TradingStrategy (18009) · INT */
  TradingStrategy?: TradingStrategy;
  /** ReverseSpreadOC (18010) · INT */
  ReverseSpreadOC?: ReverseSpreadOC;
  /** MaxPart (17006) · INT */
  MaxPart?: number;
  /** MaxDisp (17007) · INT */
  MaxDisp?: number;
  /** TwapStyle (17008) · INT */
  TwapStyle?: TwapStyle;
  /** WouldIfPrc (17009) · PRICE */
  WouldIfPrc?: number;
  /** LimitPrc (17010) · PRICE */
  LimitPrc?: number;
  /** IntentToCross (16130) · BOOLEAN */
  IntentToCross?: boolean;
  /** TTSMPID (16857) · STRING */
  TTSMPID?: string;
  /** TTSMPInstruction (16858) · INT */
  TTSMPInstruction?: TTSMPInstruction;
  /** NVDR (16626) · BOOLEAN */
  NVDR?: NVDR;
  /** TTF (16627) · BOOLEAN */
  TTF?: TTF;
  /** TFUserType (16628) · CHAR */
  TFUserType?: TFUserType;
  /** DynamicEndTime (9302) · BOOLEAN */
  DynamicEndTime?: boolean;
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
  /** MemoFieldICE (9121) · STRING */
  MemoFieldICE?: string;
  /** SettlDate (64) · LOCALMKTDATE */
  SettlDate?: string;
  /** IfTouchedPrice (9190) · FLOAT */
  IfTouchedPrice?: number;
  /** IWouldPrice (9106) · FLOAT */
  IWouldPrice?: number;
  /** IsFirm (9012) · INT */
  IsFirm?: IsFirm;
  /** FixingDate (9020) · LOCALMKTDATE */
  FixingDate?: string;
  /** FixingSource (9021) · STRING */
  FixingSource?: string;
  /** ReportingParty (9032) · BOOLEAN */
  ReportingParty?: boolean;
  /** TradeID (1003) · STRING */
  TradeID?: string;
  /** HedgeOrderType (16983) · INT */
  HedgeOrderType?: HedgeOrderType;
  /** DeltaRounding (16984) · INT */
  DeltaRounding?: DeltaRounding;
  /** Vol (16990) · FLOAT */
  Vol?: number;
  /** NoNestedPartyIDs (539) · NUMINGROUP · repeating group */
  NoNestedPartyIDs?: NestedPartiesNoNestedPartyIDs[];
  /** SettlType (63) · STRING */
  SettlType?: string;
  /** QuoteId (117) · STRING */
  QuoteId?: string;
  /** LastSpotRate (194) · PRICE */
  LastSpotRate?: number;
  /** LastForwardPoints (195) · PRICEOFFSET */
  LastForwardPoints?: number;
  /** RejectSource (16131) · INT */
  RejectSource?: RejectSource;
  /** TotalNumSecurities (393) · INT */
  TotalNumSecurities?: number;
  /** InsertTime (16761) · UTCTIMESTAMP */
  InsertTime?: string;
  /** BrokerRoute (18233) · STRING */
  BrokerRoute?: string;
  /** NoOrderEvents (1795) · NUMINGROUP · repeating group */
  NoOrderEvents?: OrderEventGrpNoOrderEvents[];
}

/** OrderCancelReject message · MsgType `9` · app */
export interface OrderCancelReject {
  /** OrderID (37) · STRING */
  OrderID: string;
  /** SecondaryOrderID (198) · STRING */
  SecondaryOrderID?: string;
  /** ClOrdID (11) · STRING */
  ClOrdID?: string;
  /** TTClOrdID (10011) · STRING */
  TTClOrdID?: string;
  /** OrigClOrdID (41) · STRING */
  OrigClOrdID?: string;
  /** OrdStatus (39) · CHAR */
  OrdStatus: OrdStatus;
  /** Account (1) · STRING */
  Account?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** CxlRejResponseTo (434) · CHAR */
  CxlRejResponseTo: CxlRejResponseTo;
  /** CxlRejReason (102) · INT */
  CxlRejReason?: CxlRejReason;
  /** Text (58) · STRING */
  Text?: string;
  /** TTID (10553) · STRING */
  TTID?: string;
  /** AOTCPreventionActionType (18222) · CHAR */
  AOTCPreventionActionType?: AOTCPreventionActionType;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** HandlInst (21) · CHAR */
  HandlInst?: HandlInst;
  /** StagedOrderMsg (16106) · STRING */
  StagedOrderMsg?: string;
  /** StagedOrderOwner (16110) · STRING */
  StagedOrderOwner?: string;
  /** StagedOrderStatus (16109) · CHAR */
  StagedOrderStatus?: StagedOrderStatus;
  /** ExternalSource (16115) · BOOLEAN */
  ExternalSource?: boolean;
  /** OrderIDGUID (16116) · STRING */
  OrderIDGUID?: string;
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** TextTT (16558) · STRING */
  TextTT?: string;
  /** TextA (16556) · STRING */
  TextA?: string;
  /** TextB (16557) · STRING */
  TextB?: string;
  /** TextC (16559) · STRING */
  TextC?: string;
  /** NoStrategyParameters (957) · NUMINGROUP · repeating group */
  NoStrategyParameters?: StrategyParametersGrpNoStrategyParameters[];
  /** TimeReceivedFromExchange (16561) · UTCTIMESTAMP */
  TimeReceivedFromExchange?: string;
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
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** AccountID (18101) · STRING */
  AccountID?: string;
  /** UserID (18102) · STRING */
  UserID?: string;
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
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** AllocID (70) · STRING */
  AllocID?: string;
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** CustOrderHandlingInst (1031) · CHAR */
  CustOrderHandlingInst?: CustOrderHandlingInst;
  /** TTSyntheticType (18226) · INT */
  TTSyntheticType?: number;
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** Organization (18227) · STRING */
  Organization?: string;
  /** MockOrderFlag (18001) · INT */
  MockOrderFlag?: MockOrderFlag;
  /** ExchCred (18216) · STRING */
  ExchCred?: string;
  /** MaxShow (210) · INT */
  MaxShow?: number;
  /** UniqueLegID (18231) · STRING */
  UniqueLegID?: string;
  /** TTStopNoImplies (16978) · BOOLEAN */
  TTStopNoImplies?: boolean;
  /** SecondConditionIsOn (16969) · BOOLEAN */
  SecondConditionIsOn?: boolean;
  /** SecondTriggerTicksAway (16970) · INT */
  SecondTriggerTicksAway?: number;
  /** SecondTriggerQtyType (16971) · INT */
  SecondTriggerQtyType?: SecondTriggerQtyType;
  /** SecondTriggerQtyCompare (16972) · INT */
  SecondTriggerQtyCompare?: SecondTriggerQtyCompare;
  /** SecondTriggerQty (16973) · QTY */
  SecondTriggerQty?: number;
  /** LeftoverTime (16974) · INT */
  LeftoverTime?: LeftoverTime;
  /** SecondTriggerPriceType (16975) · INT */
  SecondTriggerPriceType?: SecondTriggerPriceType;
  /** NoImplies (16976) · BOOLEAN */
  NoImplies?: boolean;
  /** CustomSliceSched (16977) · STRING */
  CustomSliceSched?: string;
  /** ComplianceText (2404) · STRING */
  ComplianceText?: string;
  /** TTSMPID (16857) · STRING */
  TTSMPID?: string;
  /** TTSMPInstruction (16858) · INT */
  TTSMPInstruction?: TTSMPInstruction;
  /** TFUserType (16628) · CHAR */
  TFUserType?: TFUserType;
  /** NVDR (16626) · BOOLEAN */
  NVDR?: NVDR;
  /** TTF (16627) · BOOLEAN */
  TTF?: TTF;
  /** DynamicEndTime (9302) · BOOLEAN */
  DynamicEndTime?: boolean;
  /** HedgeOrderType (16983) · INT */
  HedgeOrderType?: HedgeOrderType;
  /** DeltaRounding (16984) · INT */
  DeltaRounding?: DeltaRounding;
  /** Vol (16990) · FLOAT */
  Vol?: number;
  /** SelfMatchPreventionID (7928) · STRING */
  SelfMatchPreventionID?: string;
  /** RejectSource (16131) · INT */
  RejectSource?: RejectSource;
  /** InsertTime (16761) · UTCTIMESTAMP */
  InsertTime?: string;
  /** BrokerRoute (18233) · STRING */
  BrokerRoute?: string;
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
}

/** NewOrderMultileg message · MsgType `AB` · app */
export interface NewOrderMultileg {
  /** ClOrdID (11) · STRING */
  ClOrdID: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
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
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** PriceType (423) · INT */
  PriceType?: PriceType;
  /** BenchmarkSecurityID (699) · STRING */
  BenchmarkSecurityID?: string;
  /** BenchmarkSecurityIDSource (761) · STRING */
  BenchmarkSecurityIDSource?: BenchmarkSecurityIDSource;
  /** Account (1) · STRING */
  Account: string;
  /** SecondaryAccount (18219) · STRING */
  SecondaryAccount?: string;
  /** Price (44) · PRICE */
  Price?: number;
  /** StopPx (99) · PRICE */
  StopPx?: number;
  /** OrderQty (38) · QTY */
  OrderQty: number;
  /** MinQty (110) · QTY */
  MinQty?: number;
  /** DisplayQty (1138) · QTY */
  DisplayQty?: number;
  /** Side (54) · CHAR */
  Side: Side;
  /** OrdType (40) · CHAR */
  OrdType: OrdType;
  /** OpenClose (77) · CHAR */
  OpenClose?: OpenClose;
  /** TimeInForce (59) · CHAR */
  TimeInForce?: TimeInForce;
  /** ExpireDate (432) · LOCALMKTDATE */
  ExpireDate?: string;
  /** ExecInst (18) · MULTIPLESTRINGVALUE · values: ExecInst */
  ExecInst?: string;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** TextTT (16558) · STRING */
  TextTT?: string;
  /** TextA (16556) · STRING */
  TextA?: string;
  /** TextB (16557) · STRING */
  TextB?: string;
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
  /** NoStrategyParameters (957) · NUMINGROUP · repeating group */
  NoStrategyParameters?: StrategyParametersGrpNoStrategyParameters[];
  /** TargetStrategyName (16847) · STRING */
  TargetStrategyName?: string;
  /** TargetStrategyType (16848) · INT */
  TargetStrategyType?: TargetStrategyType;
  /** ContingencyType (1385) · INT */
  ContingencyType?: ContingencyType;
  /** HandlInst (21) · CHAR */
  HandlInst?: HandlInst;
  /** StagedOrderMsg (16106) · STRING */
  StagedOrderMsg?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** Text (58) · STRING */
  Text?: string;
  /** NoAllocs (78) · NUMINGROUP · repeating group */
  NoAllocs?: AllocsGrpNoAllocs[];
  /** DropCopyOrder (16566) · BOOLEAN */
  DropCopyOrder?: DropCopyOrder;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** CustOrderCapacity (582) · INT */
  CustOrderCapacity?: CustOrderCapacity;
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
  /** SelfMatchPreventionID (7928) · STRING */
  SelfMatchPreventionID?: string;
  /** SMPInstruction (8000) · CHAR */
  SMPInstruction?: SMPInstruction;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** ExpireTime (126) · UTCTIMESTAMP */
  ExpireTime?: string;
  /** EffectiveTime (168) · UTCTIMESTAMP */
  EffectiveTime?: string;
  /** CustOrderHandlingInst (1031) · CHAR */
  CustOrderHandlingInst?: CustOrderHandlingInst;
  /** TTSyntheticType (18226) · INT */
  TTSyntheticType?: number;
  /** Organization (18227) · STRING */
  Organization?: string;
  /** MockOrderFlag (18001) · INT */
  MockOrderFlag?: MockOrderFlag;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** OrderRestriction (529) · CHAR */
  OrderRestriction?: OrderRestriction;
  /** WaitingOption (16961) · INT */
  WaitingOption?: number;
  /** ChildTIF (16903) · CHAR */
  ChildTIF?: ChildTIF;
  /** LeftoverMktOrderLimitTicks (16968) · INT */
  LeftoverMktOrderLimitTicks?: number;
  /** TTStopNoImplies (16978) · BOOLEAN */
  TTStopNoImplies?: boolean;
  /** SecondConditionIsOn (16969) · BOOLEAN */
  SecondConditionIsOn?: boolean;
  /** SecondTriggerTicksAway (16970) · INT */
  SecondTriggerTicksAway?: number;
  /** SecondTriggerQtyType (16971) · INT */
  SecondTriggerQtyType?: SecondTriggerQtyType;
  /** SecondTriggerQtyCompare (16972) · INT */
  SecondTriggerQtyCompare?: SecondTriggerQtyCompare;
  /** SecondTriggerQty (16973) · QTY */
  SecondTriggerQty?: number;
  /** LeftoverTime (16974) · INT */
  LeftoverTime?: LeftoverTime;
  /** SecondTriggerPriceType (16975) · INT */
  SecondTriggerPriceType?: SecondTriggerPriceType;
  /** NoImplies (16976) · BOOLEAN */
  NoImplies?: boolean;
  /** CustomSliceSched (16977) · STRING */
  CustomSliceSched?: string;
  /** ComplianceText (2404) · STRING */
  ComplianceText?: string;
  /** TradingStrategy (18009) · INT */
  TradingStrategy?: TradingStrategy;
  /** ReverseSpreadOC (18010) · INT */
  ReverseSpreadOC?: ReverseSpreadOC;
  /** ParentVendorOrderID (16852) · STRING */
  ParentVendorOrderID?: string;
  /** ParentVendorUserID (16853) · STRING */
  ParentVendorUserID?: string;
  /** ParentVendorAccountID (16854) · STRING */
  ParentVendorAccountID?: string;
  /** ParentVendorBrokerID (16855) · STRING */
  ParentVendorBrokerID?: string;
  /** ParentVendorProfileID (16856) · STRING */
  ParentVendorProfileID?: string;
  /** MaxPart (17006) · INT */
  MaxPart?: number;
  /** MaxDisp (17007) · INT */
  MaxDisp?: number;
  /** TwapStyle (17008) · INT */
  TwapStyle?: TwapStyle;
  /** WouldIfPrc (17009) · PRICE */
  WouldIfPrc?: number;
  /** LimitPrc (17010) · PRICE */
  LimitPrc?: number;
  /** IntentToCross (16130) · BOOLEAN */
  IntentToCross?: boolean;
  /** TFUserType (16628) · CHAR */
  TFUserType?: TFUserType;
  /** DynamicEndTime (9302) · BOOLEAN */
  DynamicEndTime?: boolean;
  /** ParentVendorAlgoID (16860) · STRING */
  ParentVendorAlgoID?: string;
  /** ParentVendorAlgoType (16861) · STRING */
  ParentVendorAlgoType?: string;
  /** PriceFormula (16700) · STRING */
  PriceFormula?: string;
  /** ReloadOffset (16701) · INT */
  ReloadOffset?: number;
  /** OverrideTickNumerator (16702) · INT */
  OverrideTickNumerator?: number;
  /** FormulaBasedOn (16703) · STRING */
  FormulaBasedOn?: FormulaBasedOn;
  /** ReloadDelay (16704) · INT */
  ReloadDelay?: number;
  /** DisclosedQty (16705) · QTY */
  DisclosedQty?: number;
  /** Reload (16706) · BOOLEAN */
  Reload?: boolean;
  /** OverrideTickSize (16707) · BOOLEAN */
  OverrideTickSize?: boolean;
  /** OverrideTickDenominator (16708) · INT */
  OverrideTickDenominator?: number;
  /** IsShared (16759) · BOOLEAN */
  IsShared?: boolean;
  /** SubStrategy (9200) · STRING */
  SubStrategy?: string;
  /** LegRiskAversion (9991) · INT */
  LegRiskAversion?: number;
  /** HedgeDiscretionTicks (9992) · INT */
  HedgeDiscretionTicks?: number;
  /** TTSMPID (16857) · STRING */
  TTSMPID?: string;
  /** TTSMPInstruction (16858) · INT */
  TTSMPInstruction?: TTSMPInstruction;
  /** IfTouchedPrice (9190) · FLOAT */
  IfTouchedPrice?: number;
  /** IWouldPrice (9106) · FLOAT */
  IWouldPrice?: number;
  /** HedgeOrderType (16983) · INT */
  HedgeOrderType?: HedgeOrderType;
  /** DeltaRounding (16984) · INT */
  DeltaRounding?: DeltaRounding;
  /** Vol (16990) · FLOAT */
  Vol?: number;
  /** QuoteId (117) · STRING */
  QuoteId?: string;
  /** BrokerRoute (18233) · STRING */
  BrokerRoute?: string;
}

/** NewOrderSingle message · MsgType `D` · app */
export interface NewOrderSingle {
  /** ClOrdID (11) · STRING */
  ClOrdID: string;
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
  /** PriceType (423) · INT */
  PriceType?: PriceType;
  /** BenchmarkSecurityID (699) · STRING */
  BenchmarkSecurityID?: string;
  /** BenchmarkSecurityIDSource (761) · STRING */
  BenchmarkSecurityIDSource?: BenchmarkSecurityIDSource;
  /** Account (1) · STRING */
  Account: string;
  /** SecondaryAccount (18219) · STRING */
  SecondaryAccount?: string;
  /** Price (44) · PRICE */
  Price?: number;
  /** StopPx (99) · PRICE */
  StopPx?: number;
  /** OrderQty (38) · QTY */
  OrderQty: number;
  /** MinQty (110) · QTY */
  MinQty?: number;
  /** DisplayQty (1138) · QTY */
  DisplayQty?: number;
  /** Side (54) · CHAR */
  Side: Side;
  /** OrdType (40) · CHAR */
  OrdType: OrdType;
  /** OpenClose (77) · CHAR */
  OpenClose?: OpenClose;
  /** TimeInForce (59) · CHAR */
  TimeInForce?: TimeInForce;
  /** ExpireDate (432) · LOCALMKTDATE */
  ExpireDate?: string;
  /** ExecInst (18) · MULTIPLESTRINGVALUE · values: ExecInst */
  ExecInst?: string;
  /** ContingencyType (1385) · INT */
  ContingencyType?: ContingencyType;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** HandlInst (21) · CHAR */
  HandlInst?: HandlInst;
  /** StagedOrderMsg (16106) · STRING */
  StagedOrderMsg?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** EffectiveTime (168) · UTCTIMESTAMP */
  EffectiveTime?: string;
  /** ExpireTime (126) · UTCTIMESTAMP */
  ExpireTime?: string;
  /** TextA (16556) · STRING */
  TextA?: string;
  /** TextB (16557) · STRING */
  TextB?: string;
  /** NoStrategyParameters (957) · NUMINGROUP · repeating group */
  NoStrategyParameters?: StrategyParametersGrpNoStrategyParameters[];
  /** TargetStrategyName (16847) · STRING */
  TargetStrategyName?: string;
  /** TargetStrategyType (16848) · INT */
  TargetStrategyType?: TargetStrategyType;
  /** BracketOrderType (16901) · INT */
  BracketOrderType?: BracketOrderType;
  /** BracketStopLimitOffset (16902) · INT */
  BracketStopLimitOffset?: number;
  /** ChildTIF (16903) · CHAR */
  ChildTIF?: ChildTIF;
  /** DiscVal (16904) · INT */
  DiscVal?: number;
  /** DiscValType (16905) · INT */
  DiscValType?: number;
  /** ETimeAct (16906) · INT */
  ETimeAct?: ETimeAct;
  /** Interval (16907) · INT */
  Interval?: number;
  /** IsTrlTrg (16908) · STRING */
  IsTrlTrg?: string;
  /** LeftoverAction (16909) · INT */
  LeftoverAction?: LeftoverAction;
  /** LeftoverTicks (16910) · INT */
  LeftoverTicks?: number;
  /** LimitPriceType (16911) · INT */
  LimitPriceType?: number;
  /** LimitTicksAway (16912) · INT */
  LimitTicksAway?: number;
  /** OcoStopTriggerPrice (16913) · PRICE */
  OcoStopTriggerPrice?: number;
  /** ProfitTarget (16914) · INT */
  ProfitTarget?: number;
  /** StopLimitOffset (16915) · INT */
  StopLimitOffset?: number;
  /** StopOrderType (16916) · INT */
  StopOrderType?: StopOrderType;
  /** StopTarget (16917) · INT */
  StopTarget?: number;
  /** TriggerPriceType (16918) · INT */
  TriggerPriceType?: TriggerPriceType;
  /** TriggerTicksAway (16919) · INT */
  TriggerTicksAway?: number;
  /** TriggerType (16920) · INT */
  TriggerType?: TriggerType;
  /** WithATickType (16921) · INT */
  WithATickType?: WithATickType;
  /** WithATick (16922) · INT */
  WithATick?: number;
  /** TriggerQtyType (16923) · INT */
  TriggerQtyType?: TriggerQtyType;
  /** TriggerQtyCompare (16924) · INT */
  TriggerQtyCompare?: TriggerQtyCompare;
  /** TriggerQty (16925) · INT */
  TriggerQty?: number;
  /** TriggerLTPReset (16926) · BOOLEAN */
  TriggerLTPReset?: boolean;
  /** TTStopLimitPriceType (16927) · INT */
  TTStopLimitPriceType?: TTStopLimitPriceType;
  /** TTStopWithATickType (16928) · INT */
  TTStopWithATickType?: TTStopWithATickType;
  /** TTStopWithATick (16929) · INT */
  TTStopWithATick?: number;
  /** Payup (16930) · INT */
  Payup?: number;
  /** TTStopTriggerPriceType (16931) · INT */
  TTStopTriggerPriceType?: TTStopTriggerPriceType;
  /** TTStopIsTrlTrg (16932) · BOOLEAN */
  TTStopIsTrlTrg?: TTStopIsTrlTrg;
  /** TTStopTriggerTicksAway (16933) · INT */
  TTStopTriggerTicksAway?: number;
  /** TTStopTriggerQtyType (16934) · INT */
  TTStopTriggerQtyType?: TTStopTriggerQtyType;
  /** TTStopTriggerQTyCompare (16935) · INT */
  TTStopTriggerQTyCompare?: TTStopTriggerQTyCompare;
  /** TTStopTriggerQty (16936) · INT */
  TTStopTriggerQty?: number;
  /** TTStopTriggerLTPReset (16937) · BOOLEAN */
  TTStopTriggerLTPReset?: TTStopTriggerLTPReset;
  /** TTStopTriggeredOrderType (16938) · INT */
  TTStopTriggeredOrderType?: TTStopTriggeredOrderType;
  /** TTStopTriggeredOrderPrice (16939) · PRICE */
  TTStopTriggeredOrderPrice?: number;
  /** TTStopLimitTicksAway (16940) · INT */
  TTStopLimitTicksAway?: number;
  /** TTStopPayup (16941) · INT */
  TTStopPayup?: number;
  /** Text (58) · STRING */
  Text?: string;
  /** NoAllocs (78) · NUMINGROUP · repeating group */
  NoAllocs?: AllocsGrpNoAllocs[];
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** DropCopyOrder (16566) · BOOLEAN */
  DropCopyOrder?: DropCopyOrder;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** CustOrderCapacity (582) · INT */
  CustOrderCapacity?: CustOrderCapacity;
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
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
  /** SelfMatchPreventionID (7928) · STRING */
  SelfMatchPreventionID?: string;
  /** SMPInstruction (8000) · CHAR */
  SMPInstruction?: SMPInstruction;
  /** Duration (16944) · INT */
  Duration?: number;
  /** DurationBaseUnit (16945) · INT */
  DurationBaseUnit?: DurationBaseUnit;
  /** DurationSTime (16946) · UTCTIMESTAMP */
  DurationSTime?: string;
  /** DurationETime (16947) · UTCTIMESTAMP */
  DurationETime?: string;
  /** LeftoverTimeAction (16948) · INT */
  LeftoverTimeAction?: LeftoverTimeAction;
  /** AutoResubExpiredGTD (16949) · BOOLEAN */
  AutoResubExpiredGTD?: boolean;
  /** ParentTIF (16950) · INT */
  ParentTIF?: ParentTIF;
  /** TTStopSecondConditionIsOn (16951) · BOOLEAN */
  TTStopSecondConditionIsOn?: boolean;
  /** TTStopSecondTriggerPriceType (16952) · INT */
  TTStopSecondTriggerPriceType?: TTStopSecondTriggerPriceType;
  /** TTStopSecondConditionIsTrlTrg (16953) · BOOLEAN */
  TTStopSecondConditionIsTrlTrg?: boolean;
  /** TTStopSecondTriggerTicksAway (16954) · INT */
  TTStopSecondTriggerTicksAway?: number;
  /** TTStopSecondTriggerQtyType (16955) · INT */
  TTStopSecondTriggerQtyType?: TTStopSecondTriggerQtyType;
  /** TTStopSecondTriggerQtyCompare (16956) · INT */
  TTStopSecondTriggerQtyCompare?: TTStopSecondTriggerQtyCompare;
  /** TTStopSecondTriggerQty (16957) · QTY */
  TTStopSecondTriggerQty?: number;
  /** Variance (16958) · INT */
  Variance?: number;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** ETAGoToMktTicks (16960) · INT */
  ETAGoToMktTicks?: number;
  /** WaitingOption (16961) · INT */
  WaitingOption?: number;
  /** TTStopChildTIFOverride (16962) · INT */
  TTStopChildTIFOverride?: number;
  /** CustOrderHandlingInst (1031) · CHAR */
  CustOrderHandlingInst?: CustOrderHandlingInst;
  /** TTSyntheticType (18226) · INT */
  TTSyntheticType?: number;
  /** Organization (18227) · STRING */
  Organization?: string;
  /** MockOrderFlag (18001) · INT */
  MockOrderFlag?: MockOrderFlag;
  /** OrderRestriction (529) · CHAR */
  OrderRestriction?: OrderRestriction;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** TTStopNoImplies (16978) · BOOLEAN */
  TTStopNoImplies?: boolean;
  /** SecondConditionIsOn (16969) · BOOLEAN */
  SecondConditionIsOn?: boolean;
  /** SecondTriggerTicksAway (16970) · INT */
  SecondTriggerTicksAway?: number;
  /** SecondTriggerQtyType (16971) · INT */
  SecondTriggerQtyType?: SecondTriggerQtyType;
  /** SecondTriggerQtyCompare (16972) · INT */
  SecondTriggerQtyCompare?: SecondTriggerQtyCompare;
  /** SecondTriggerQty (16973) · QTY */
  SecondTriggerQty?: number;
  /** LeftoverTime (16974) · INT */
  LeftoverTime?: LeftoverTime;
  /** SecondTriggerPriceType (16975) · INT */
  SecondTriggerPriceType?: SecondTriggerPriceType;
  /** NoImplies (16976) · BOOLEAN */
  NoImplies?: boolean;
  /** CustomSliceSched (16977) · STRING */
  CustomSliceSched?: string;
  /** LeftoverMktOrderLimitTicks (16968) · INT */
  LeftoverMktOrderLimitTicks?: number;
  /** ComplianceText (2404) · STRING */
  ComplianceText?: string;
  /** TradingStrategy (18009) · INT */
  TradingStrategy?: TradingStrategy;
  /** ReverseSpreadOC (18010) · INT */
  ReverseSpreadOC?: ReverseSpreadOC;
  /** ParentVendorOrderID (16852) · STRING */
  ParentVendorOrderID?: string;
  /** ParentVendorUserID (16853) · STRING */
  ParentVendorUserID?: string;
  /** ParentVendorAccountID (16854) · STRING */
  ParentVendorAccountID?: string;
  /** ParentVendorBrokerID (16855) · STRING */
  ParentVendorBrokerID?: string;
  /** ParentVendorProfileID (16856) · STRING */
  ParentVendorProfileID?: string;
  /** MaxPart (17006) · INT */
  MaxPart?: number;
  /** MaxDisp (17007) · INT */
  MaxDisp?: number;
  /** TwapStyle (17008) · INT */
  TwapStyle?: TwapStyle;
  /** WouldIfPrc (17009) · PRICE */
  WouldIfPrc?: number;
  /** LimitPrc (17010) · PRICE */
  LimitPrc?: number;
  /** IntentToCross (16130) · BOOLEAN */
  IntentToCross?: boolean;
  /** TFUserType (16628) · CHAR */
  TFUserType?: TFUserType;
  /** DynamicEndTime (9302) · BOOLEAN */
  DynamicEndTime?: boolean;
  /** ParentVendorAlgoID (16860) · STRING */
  ParentVendorAlgoID?: string;
  /** ParentVendorAlgoType (16861) · STRING */
  ParentVendorAlgoType?: string;
  /** TTSMPID (16857) · STRING */
  TTSMPID?: string;
  /** TTSMPInstruction (16858) · INT */
  TTSMPInstruction?: TTSMPInstruction;
  /** IfTouchedPrice (9190) · FLOAT */
  IfTouchedPrice?: number;
  /** IWouldPrice (9106) · FLOAT */
  IWouldPrice?: number;
  /** HedgeOrderType (16983) · INT */
  HedgeOrderType?: HedgeOrderType;
  /** DeltaRounding (16984) · INT */
  DeltaRounding?: DeltaRounding;
  /** Vol (16990) · FLOAT */
  Vol?: number;
  /** QuoteId (117) · STRING */
  QuoteId?: string;
  /** BrokerRoute (18233) · STRING */
  BrokerRoute?: string;
}

/** MultilegOrderCancelReplace message · MsgType `AC` · app */
export interface MultilegOrderCancelReplace {
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** OrderIDGUID (16116) · STRING */
  OrderIDGUID?: string;
  /** OrigClOrdID (41) · STRING */
  OrigClOrdID?: string;
  /** ClOrdID (11) · STRING */
  ClOrdID: string;
  /** Account (1) · STRING */
  Account: string;
  /** Price (44) · PRICE */
  Price?: number;
  /** StopPx (99) · PRICE */
  StopPx?: number;
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
  /** PriceType (423) · INT */
  PriceType?: PriceType;
  /** BenchmarkSecurityID (699) · STRING */
  BenchmarkSecurityID?: string;
  /** BenchmarkSecurityIDSource (761) · STRING */
  BenchmarkSecurityIDSource?: BenchmarkSecurityIDSource;
  /** OrderQty (38) · QTY */
  OrderQty: number;
  /** MinQty (110) · QTY */
  MinQty?: number;
  /** DisplayQty (1138) · QTY */
  DisplayQty?: number;
  /** Side (54) · CHAR */
  Side: Side;
  /** OrdType (40) · CHAR */
  OrdType: OrdType;
  /** OpenClose (77) · CHAR */
  OpenClose?: OpenClose;
  /** TimeInForce (59) · CHAR */
  TimeInForce?: TimeInForce;
  /** ExpireDate (432) · LOCALMKTDATE */
  ExpireDate?: string;
  /** ExecInst (18) · MULTIPLESTRINGVALUE · values: ExecInst */
  ExecInst?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** TextA (16556) · STRING */
  TextA?: string;
  /** TextB (16557) · STRING */
  TextB?: string;
  /** NoStrategyParameters (957) · NUMINGROUP · repeating group */
  NoStrategyParameters?: StrategyParametersGrpNoStrategyParameters[];
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** HandlInst (21) · CHAR */
  HandlInst?: HandlInst;
  /** StagedOrderMsg (16106) · STRING */
  StagedOrderMsg?: string;
  /** Text (58) · STRING */
  Text?: string;
  /** NoAllocs (78) · NUMINGROUP · repeating group */
  NoAllocs?: AllocsGrpNoAllocs[];
  /** DropCopyOrder (16566) · BOOLEAN */
  DropCopyOrder?: DropCopyOrder;
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** CustOrderCapacity (582) · INT */
  CustOrderCapacity?: CustOrderCapacity;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
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
  /** SelfMatchPreventionID (7928) · STRING */
  SelfMatchPreventionID?: string;
  /** SMPInstruction (8000) · CHAR */
  SMPInstruction?: SMPInstruction;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** ExpireTime (126) · UTCTIMESTAMP */
  ExpireTime?: string;
  /** CustOrderHandlingInst (1031) · CHAR */
  CustOrderHandlingInst?: CustOrderHandlingInst;
  /** TTSyntheticType (18226) · INT */
  TTSyntheticType?: number;
  /** Organization (18227) · STRING */
  Organization?: string;
  /** MockOrderFlag (18001) · INT */
  MockOrderFlag?: MockOrderFlag;
  /** OrderRestriction (529) · CHAR */
  OrderRestriction?: OrderRestriction;
  /** WaitingOption (16961) · INT */
  WaitingOption?: number;
  /** ChildTIF (16903) · CHAR */
  ChildTIF?: ChildTIF;
  /** LeftoverMktOrderLimitTicks (16968) · INT */
  LeftoverMktOrderLimitTicks?: number;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** TTStopNoImplies (16978) · BOOLEAN */
  TTStopNoImplies?: boolean;
  /** SecondConditionIsOn (16969) · BOOLEAN */
  SecondConditionIsOn?: boolean;
  /** SecondTriggerTicksAway (16970) · INT */
  SecondTriggerTicksAway?: number;
  /** SecondTriggerQtyType (16971) · INT */
  SecondTriggerQtyType?: SecondTriggerQtyType;
  /** SecondTriggerQtyCompare (16972) · INT */
  SecondTriggerQtyCompare?: SecondTriggerQtyCompare;
  /** SecondTriggerQty (16973) · QTY */
  SecondTriggerQty?: number;
  /** LeftoverTime (16974) · INT */
  LeftoverTime?: LeftoverTime;
  /** SecondTriggerPriceType (16975) · INT */
  SecondTriggerPriceType?: SecondTriggerPriceType;
  /** NoImplies (16976) · BOOLEAN */
  NoImplies?: boolean;
  /** CustomSliceSched (16977) · STRING */
  CustomSliceSched?: string;
  /** ComplianceText (2404) · STRING */
  ComplianceText?: string;
  /** TradingStrategy (18009) · INT */
  TradingStrategy?: TradingStrategy;
  /** ReverseSpreadOC (18010) · INT */
  ReverseSpreadOC?: ReverseSpreadOC;
  /** ParentVendorOrderID (16852) · STRING */
  ParentVendorOrderID?: string;
  /** ParentVendorUserID (16853) · STRING */
  ParentVendorUserID?: string;
  /** ParentVendorAccountID (16854) · STRING */
  ParentVendorAccountID?: string;
  /** ParentVendorBrokerID (16855) · STRING */
  ParentVendorBrokerID?: string;
  /** ParentVendorProfileID (16856) · STRING */
  ParentVendorProfileID?: string;
  /** MaxPart (17006) · INT */
  MaxPart?: number;
  /** MaxDisp (17007) · INT */
  MaxDisp?: number;
  /** TwapStyle (17008) · INT */
  TwapStyle?: TwapStyle;
  /** WouldIfPrc (17009) · PRICE */
  WouldIfPrc?: number;
  /** LimitPrc (17010) · PRICE */
  LimitPrc?: number;
  /** IntentToCross (16130) · BOOLEAN */
  IntentToCross?: boolean;
  /** DynamicEndTime (9302) · BOOLEAN */
  DynamicEndTime?: boolean;
  /** ParentVendorAlgoID (16860) · STRING */
  ParentVendorAlgoID?: string;
  /** ParentVendorAlgoType (16861) · STRING */
  ParentVendorAlgoType?: string;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** HedgeOrderType (16983) · INT */
  HedgeOrderType?: HedgeOrderType;
  /** DeltaRounding (16984) · INT */
  DeltaRounding?: DeltaRounding;
  /** Vol (16990) · FLOAT */
  Vol?: number;
  /** BrokerRoute (18233) · STRING */
  BrokerRoute?: string;
}

/** OrderCancelReplaceRequest message · MsgType `G` · app */
export interface OrderCancelReplaceRequest {
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** OrderIDGUID (16116) · STRING */
  OrderIDGUID?: string;
  /** OrigClOrdID (41) · STRING */
  OrigClOrdID?: string;
  /** ClOrdID (11) · STRING */
  ClOrdID: string;
  /** Account (1) · STRING */
  Account: string;
  /** Price (44) · PRICE */
  Price?: number;
  /** StopPx (99) · PRICE */
  StopPx?: number;
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
  /** PriceType (423) · INT */
  PriceType?: PriceType;
  /** BenchmarkSecurityID (699) · STRING */
  BenchmarkSecurityID?: string;
  /** BenchmarkSecurityIDSource (761) · STRING */
  BenchmarkSecurityIDSource?: BenchmarkSecurityIDSource;
  /** OrderQty (38) · QTY */
  OrderQty: number;
  /** MinQty (110) · QTY */
  MinQty?: number;
  /** DisplayQty (1138) · QTY */
  DisplayQty?: number;
  /** Side (54) · CHAR */
  Side: Side;
  /** OrdType (40) · CHAR */
  OrdType: OrdType;
  /** OpenClose (77) · CHAR */
  OpenClose?: OpenClose;
  /** TimeInForce (59) · CHAR */
  TimeInForce?: TimeInForce;
  /** ExpireDate (432) · LOCALMKTDATE */
  ExpireDate?: string;
  /** ExecInst (18) · MULTIPLESTRINGVALUE · values: ExecInst */
  ExecInst?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** TextA (16556) · STRING */
  TextA?: string;
  /** TextB (16557) · STRING */
  TextB?: string;
  /** NoStrategyParameters (957) · NUMINGROUP · repeating group */
  NoStrategyParameters?: StrategyParametersGrpNoStrategyParameters[];
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** HandlInst (21) · CHAR */
  HandlInst?: HandlInst;
  /** StagedOrderMsg (16106) · STRING */
  StagedOrderMsg?: string;
  /** Text (58) · STRING */
  Text?: string;
  /** NoAllocs (78) · NUMINGROUP · repeating group */
  NoAllocs?: AllocsGrpNoAllocs[];
  /** BracketOrderType (16901) · INT */
  BracketOrderType?: BracketOrderType;
  /** BracketStopLimitOffset (16902) · INT */
  BracketStopLimitOffset?: number;
  /** ChildTIF (16903) · CHAR */
  ChildTIF?: ChildTIF;
  /** DiscVal (16904) · INT */
  DiscVal?: number;
  /** DiscValType (16905) · INT */
  DiscValType?: number;
  /** ETimeAct (16906) · INT */
  ETimeAct?: ETimeAct;
  /** Interval (16907) · INT */
  Interval?: number;
  /** IsTrlTrg (16908) · STRING */
  IsTrlTrg?: string;
  /** LeftoverAction (16909) · INT */
  LeftoverAction?: LeftoverAction;
  /** LeftoverTicks (16910) · INT */
  LeftoverTicks?: number;
  /** LimitPriceType (16911) · INT */
  LimitPriceType?: number;
  /** LimitTicksAway (16912) · INT */
  LimitTicksAway?: number;
  /** OcoStopTriggerPrice (16913) · PRICE */
  OcoStopTriggerPrice?: number;
  /** ProfitTarget (16914) · INT */
  ProfitTarget?: number;
  /** StopLimitOffset (16915) · INT */
  StopLimitOffset?: number;
  /** StopOrderType (16916) · INT */
  StopOrderType?: StopOrderType;
  /** StopTarget (16917) · INT */
  StopTarget?: number;
  /** TriggerPriceType (16918) · INT */
  TriggerPriceType?: TriggerPriceType;
  /** TriggerTicksAway (16919) · INT */
  TriggerTicksAway?: number;
  /** TriggerType (16920) · INT */
  TriggerType?: TriggerType;
  /** WithATickType (16921) · INT */
  WithATickType?: WithATickType;
  /** WithATick (16922) · INT */
  WithATick?: number;
  /** TriggerQtyType (16923) · INT */
  TriggerQtyType?: TriggerQtyType;
  /** TriggerQtyCompare (16924) · INT */
  TriggerQtyCompare?: TriggerQtyCompare;
  /** TriggerQty (16925) · INT */
  TriggerQty?: number;
  /** TriggerLTPReset (16926) · BOOLEAN */
  TriggerLTPReset?: boolean;
  /** TTStopLimitPriceType (16927) · INT */
  TTStopLimitPriceType?: TTStopLimitPriceType;
  /** TTStopWithATickType (16928) · INT */
  TTStopWithATickType?: TTStopWithATickType;
  /** TTStopWithATick (16929) · INT */
  TTStopWithATick?: number;
  /** Payup (16930) · INT */
  Payup?: number;
  /** TTStopTriggerPriceType (16931) · INT */
  TTStopTriggerPriceType?: TTStopTriggerPriceType;
  /** TTStopIsTrlTrg (16932) · BOOLEAN */
  TTStopIsTrlTrg?: TTStopIsTrlTrg;
  /** TTStopTriggerTicksAway (16933) · INT */
  TTStopTriggerTicksAway?: number;
  /** TTStopTriggerQtyType (16934) · INT */
  TTStopTriggerQtyType?: TTStopTriggerQtyType;
  /** TTStopTriggerQTyCompare (16935) · INT */
  TTStopTriggerQTyCompare?: TTStopTriggerQTyCompare;
  /** TTStopTriggerQty (16936) · INT */
  TTStopTriggerQty?: number;
  /** TTStopTriggerLTPReset (16937) · BOOLEAN */
  TTStopTriggerLTPReset?: TTStopTriggerLTPReset;
  /** TTStopTriggeredOrderType (16938) · INT */
  TTStopTriggeredOrderType?: TTStopTriggeredOrderType;
  /** TTStopTriggeredOrderPrice (16939) · PRICE */
  TTStopTriggeredOrderPrice?: number;
  /** TTStopLimitTicksAway (16940) · INT */
  TTStopLimitTicksAway?: number;
  /** TTStopPayup (16941) · INT */
  TTStopPayup?: number;
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** DropCopyOrder (16566) · BOOLEAN */
  DropCopyOrder?: DropCopyOrder;
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** CustOrderCapacity (582) · INT */
  CustOrderCapacity?: CustOrderCapacity;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
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
  /** SelfMatchPreventionID (7928) · STRING */
  SelfMatchPreventionID?: string;
  /** SMPInstruction (8000) · CHAR */
  SMPInstruction?: SMPInstruction;
  /** Duration (16944) · INT */
  Duration?: number;
  /** DurationBaseUnit (16945) · INT */
  DurationBaseUnit?: DurationBaseUnit;
  /** DurationSTime (16946) · UTCTIMESTAMP */
  DurationSTime?: string;
  /** DurationETime (16947) · UTCTIMESTAMP */
  DurationETime?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** LeftoverTimeAction (16948) · INT */
  LeftoverTimeAction?: LeftoverTimeAction;
  /** AutoResubExpiredGTD (16949) · BOOLEAN */
  AutoResubExpiredGTD?: boolean;
  /** ParentTIF (16950) · INT */
  ParentTIF?: ParentTIF;
  /** TTStopSecondConditionIsOn (16951) · BOOLEAN */
  TTStopSecondConditionIsOn?: boolean;
  /** TTStopSecondTriggerPriceType (16952) · INT */
  TTStopSecondTriggerPriceType?: TTStopSecondTriggerPriceType;
  /** TTStopSecondConditionIsTrlTrg (16953) · BOOLEAN */
  TTStopSecondConditionIsTrlTrg?: boolean;
  /** TTStopSecondTriggerTicksAway (16954) · INT */
  TTStopSecondTriggerTicksAway?: number;
  /** TTStopSecondTriggerQtyType (16955) · INT */
  TTStopSecondTriggerQtyType?: TTStopSecondTriggerQtyType;
  /** TTStopSecondTriggerQtyCompare (16956) · INT */
  TTStopSecondTriggerQtyCompare?: TTStopSecondTriggerQtyCompare;
  /** TTStopSecondTriggerQty (16957) · QTY */
  TTStopSecondTriggerQty?: number;
  /** Variance (16958) · INT */
  Variance?: number;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** ExpireTime (126) · UTCTIMESTAMP */
  ExpireTime?: string;
  /** CustOrderHandlingInst (1031) · CHAR */
  CustOrderHandlingInst?: CustOrderHandlingInst;
  /** TTSyntheticType (18226) · INT */
  TTSyntheticType?: number;
  /** Organization (18227) · STRING */
  Organization?: string;
  /** MockOrderFlag (18001) · INT */
  MockOrderFlag?: MockOrderFlag;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** OrderRestriction (529) · CHAR */
  OrderRestriction?: OrderRestriction;
  /** WaitingOption (16961) · INT */
  WaitingOption?: number;
  /** LeftoverMktOrderLimitTicks (16968) · INT */
  LeftoverMktOrderLimitTicks?: number;
  /** TTStopNoImplies (16978) · BOOLEAN */
  TTStopNoImplies?: boolean;
  /** SecondConditionIsOn (16969) · BOOLEAN */
  SecondConditionIsOn?: boolean;
  /** SecondTriggerTicksAway (16970) · INT */
  SecondTriggerTicksAway?: number;
  /** SecondTriggerQtyType (16971) · INT */
  SecondTriggerQtyType?: SecondTriggerQtyType;
  /** SecondTriggerQtyCompare (16972) · INT */
  SecondTriggerQtyCompare?: SecondTriggerQtyCompare;
  /** SecondTriggerQty (16973) · QTY */
  SecondTriggerQty?: number;
  /** LeftoverTime (16974) · INT */
  LeftoverTime?: LeftoverTime;
  /** SecondTriggerPriceType (16975) · INT */
  SecondTriggerPriceType?: SecondTriggerPriceType;
  /** NoImplies (16976) · BOOLEAN */
  NoImplies?: boolean;
  /** CustomSliceSched (16977) · STRING */
  CustomSliceSched?: string;
  /** ComplianceText (2404) · STRING */
  ComplianceText?: string;
  /** TradingStrategy (18009) · INT */
  TradingStrategy?: TradingStrategy;
  /** ReverseSpreadOC (18010) · INT */
  ReverseSpreadOC?: ReverseSpreadOC;
  /** ParentVendorOrderID (16852) · STRING */
  ParentVendorOrderID?: string;
  /** ParentVendorUserID (16853) · STRING */
  ParentVendorUserID?: string;
  /** ParentVendorAccountID (16854) · STRING */
  ParentVendorAccountID?: string;
  /** ParentVendorBrokerID (16855) · STRING */
  ParentVendorBrokerID?: string;
  /** ParentVendorProfileID (16856) · STRING */
  ParentVendorProfileID?: string;
  /** MaxPart (17006) · INT */
  MaxPart?: number;
  /** MaxDisp (17007) · INT */
  MaxDisp?: number;
  /** TwapStyle (17008) · INT */
  TwapStyle?: TwapStyle;
  /** WouldIfPrc (17009) · PRICE */
  WouldIfPrc?: number;
  /** LimitPrc (17010) · PRICE */
  LimitPrc?: number;
  /** IntentToCross (16130) · BOOLEAN */
  IntentToCross?: boolean;
  /** DynamicEndTime (9302) · BOOLEAN */
  DynamicEndTime?: boolean;
  /** ParentVendorAlgoID (16860) · STRING */
  ParentVendorAlgoID?: string;
  /** ParentVendorAlgoType (16861) · STRING */
  ParentVendorAlgoType?: string;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** IfTouchedPrice (9190) · FLOAT */
  IfTouchedPrice?: number;
  /** IWouldPrice (9106) · FLOAT */
  IWouldPrice?: number;
  /** HedgeOrderType (16983) · INT */
  HedgeOrderType?: HedgeOrderType;
  /** DeltaRounding (16984) · INT */
  DeltaRounding?: DeltaRounding;
  /** Vol (16990) · FLOAT */
  Vol?: number;
  /** BrokerRoute (18233) · STRING */
  BrokerRoute?: string;
}

/** OrderCancelRequest message · MsgType `F` · app */
export interface OrderCancelRequest {
  /** ClOrdID (11) · STRING */
  ClOrdID: string;
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** OrderIDGUID (16116) · STRING */
  OrderIDGUID?: string;
  /** OrigClOrdID (41) · STRING */
  OrigClOrdID?: string;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
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
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** Text (58) · STRING */
  Text?: string;
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** DropCopyOrder (16566) · BOOLEAN */
  DropCopyOrder?: DropCopyOrder;
  /** TextTT (16558) · STRING */
  TextTT?: string;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
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
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** StagedOrderMsg (16106) · STRING */
  StagedOrderMsg?: string;
  /** TTSyntheticType (18226) · INT */
  TTSyntheticType?: number;
  /** CustOrderHandlingInst (1031) · CHAR */
  CustOrderHandlingInst?: CustOrderHandlingInst;
  /** NoLinks (16112) · INT · repeating group */
  NoLinks?: LinksGrpNoLinks[];
  /** Organization (18227) · STRING */
  Organization?: string;
  /** MockOrderFlag (18001) · INT */
  MockOrderFlag?: MockOrderFlag;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** Account (1) · STRING */
  Account?: string;
  /** OrderRestriction (529) · CHAR */
  OrderRestriction?: OrderRestriction;
  /** TTStopNoImplies (16978) · BOOLEAN */
  TTStopNoImplies?: boolean;
  /** SecondConditionIsOn (16969) · BOOLEAN */
  SecondConditionIsOn?: boolean;
  /** SecondTriggerTicksAway (16970) · INT */
  SecondTriggerTicksAway?: number;
  /** SecondTriggerQtyType (16971) · INT */
  SecondTriggerQtyType?: SecondTriggerQtyType;
  /** SecondTriggerQtyCompare (16972) · INT */
  SecondTriggerQtyCompare?: SecondTriggerQtyCompare;
  /** SecondTriggerQty (16973) · QTY */
  SecondTriggerQty?: number;
  /** LeftoverTime (16974) · INT */
  LeftoverTime?: LeftoverTime;
  /** SecondTriggerPriceType (16975) · INT */
  SecondTriggerPriceType?: SecondTriggerPriceType;
  /** NoImplies (16976) · BOOLEAN */
  NoImplies?: boolean;
  /** CustomSliceSched (16977) · STRING */
  CustomSliceSched?: string;
  /** ComplianceText (2404) · STRING */
  ComplianceText?: string;
  /** ParentVendorOrderID (16852) · STRING */
  ParentVendorOrderID?: string;
  /** ParentVendorUserID (16853) · STRING */
  ParentVendorUserID?: string;
  /** ParentVendorAccountID (16854) · STRING */
  ParentVendorAccountID?: string;
  /** ParentVendorBrokerID (16855) · STRING */
  ParentVendorBrokerID?: string;
  /** ParentVendorProfileID (16856) · STRING */
  ParentVendorProfileID?: string;
  /** DynamicEndTime (9302) · BOOLEAN */
  DynamicEndTime?: boolean;
  /** ParentVendorAlgoID (16860) · STRING */
  ParentVendorAlgoID?: string;
  /** ParentVendorAlgoType (16861) · STRING */
  ParentVendorAlgoType?: string;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** HedgeOrderType (16983) · INT */
  HedgeOrderType?: HedgeOrderType;
  /** DeltaRounding (16984) · INT */
  DeltaRounding?: DeltaRounding;
  /** Vol (16990) · FLOAT */
  Vol?: number;
  /** BrokerRoute (18233) · STRING */
  BrokerRoute?: string;
  /** Side (54) · CHAR */
  Side?: Side;
}

/** SecurityDefinitionRequest message · MsgType `c` · app */
export interface SecurityDefinitionRequest {
  /** SecurityReqID (320) · STRING */
  SecurityReqID: string;
  /** SecurityRequestType (321) · INT */
  SecurityRequestType?: SecurityRequestType;
  /** RequestTickTable (17000) · BOOLEAN */
  RequestTickTable?: RequestTickTable;
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
  /** Account (1) · STRING */
  Account?: string;
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** ParentVendorUserID (16853) · STRING */
  ParentVendorUserID?: string;
  /** ParentVendorAccountID (16854) · STRING */
  ParentVendorAccountID?: string;
  /** ParentVendorBrokerID (16855) · STRING */
  ParentVendorBrokerID?: string;
  /** ParentVendorProfileID (16856) · STRING */
  ParentVendorProfileID?: string;
  /** Text (58) · STRING */
  Text?: string;
}

/** SecurityDefinition message · MsgType `d` · app */
export interface SecurityDefinition {
  /** SecurityReqID (320) · STRING */
  SecurityReqID: string;
  /** SecurityResponseID (322) · STRING */
  SecurityResponseID: string;
  /** SecurityResponseType (323) · INT */
  SecurityResponseType: SecurityResponseType;
  /** TotalNumSecurities (393) · INT */
  TotalNumSecurities: number;
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
  /** DisplayFactor (9787) · STRING */
  DisplayFactor?: string;
  /** Text (58) · STRING */
  Text?: string;
  /** MinLotSize (16460) · INT */
  MinLotSize?: number;
  /** NumberOfBlocks (16463) · INT */
  NumberOfBlocks?: number;
  /** TradesInFlow (16464) · CHAR */
  TradesInFlow?: string;
  /** ExchTickSize (16552) · FLOAT */
  ExchTickSize?: number;
  /** ExchPointValue (16554) · FLOAT */
  ExchPointValue?: number;
  /** NumTickTblEntries (16456) · INT · repeating group */
  NumTickTblEntries?: TickTblEntriesGrpNumTickTblEntries[];
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** PriceDisplayType (16451) · INT */
  PriceDisplayType?: number;
  /** RoundLot (561) · QTY */
  RoundLot?: number;
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
  /** DisplayFactorQty (10010) · STRING */
  DisplayFactorQty?: string;
  /** ProductComplex (1227) · STRING */
  ProductComplex?: string;
  /** DefSecuritySubTypeID (16762) · INT */
  DefSecuritySubTypeID?: number;
}

/** SecurityStatusRequest message · MsgType `e` · app */
export interface SecurityStatusRequest {
  /** SecurityStatusReqID (324) · STRING */
  SecurityStatusReqID: string;
  /** SubscriptionRequestType (263) · CHAR */
  SubscriptionRequestType: SubscriptionRequestType;
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
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
}

/** SecurityStatus message · MsgType `f` · app */
export interface SecurityStatus {
  /** SecurityStatusReqID (324) · STRING */
  SecurityStatusReqID: string;
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
  /** SecurityTradingStatus (326) · INT */
  SecurityTradingStatus: SecurityTradingStatus;
  /** Text (58) · STRING */
  Text?: string;
}

/** MarketDataRequest message · MsgType `V` · app */
export interface MarketDataRequest {
  /** MDReqID (262) · STRING */
  MDReqID: string;
  /** SubscriptionRequestType (263) · CHAR */
  SubscriptionRequestType: SubscriptionRequestType;
  /** MarketDepth (264) · INT */
  MarketDepth?: MarketDepth;
  /** MDUpdateType (265) · INT */
  MDUpdateType?: MDUpdateType;
  /** AggregatedBook (266) · BOOLEAN */
  AggregatedBook?: AggregatedBook;
  /** NoMDEntryTypes (267) · NUMINGROUP · repeating group */
  NoMDEntryTypes?: MDEntryTypesGrpNoMDEntryTypes[];
  /** NoRelatedSym (146) · NUMINGROUP · repeating group */
  NoRelatedSym: RelatedSymGrpNoRelatedSym[];
  /** IncludeNumberOfOrders (18214) · CHAR */
  IncludeNumberOfOrders?: IncludeNumberOfOrders;
  /** IncludeQuotes (16959) · BOOLEAN */
  IncludeQuotes?: boolean;
}

/** MarketDataRequestReject message · MsgType `Y` · app */
export interface MarketDataRequestReject {
  /** MDReqID (262) · STRING */
  MDReqID: string;
  /** SecurityID (48) · STRING */
  SecurityID?: string;
  /** Text (58) · STRING */
  Text: string;
}

/** MarketDataSnapshot message · MsgType `W` · app */
export interface MarketDataSnapshot {
  /** MDReqID (262) · STRING */
  MDReqID: string;
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
  /** PriceFeedStatus (18210) · INT */
  PriceFeedStatus?: number;
  /** NoMDEntries (268) · NUMINGROUP · repeating group */
  NoMDEntries: MDFullGrpNoMDEntries[];
  /** ExchangeSendingTime (16052) · STRING */
  ExchangeSendingTime?: string;
  /** ExchangeTransactTime (16060) · STRING */
  ExchangeTransactTime?: string;
}

/** MarketDataIncrementalRefresh message · MsgType `X` · app */
export interface MarketDataIncrementalRefresh {
  /** MDReqID (262) · STRING */
  MDReqID: string;
  /** PriceFeedStatus (18210) · INT */
  PriceFeedStatus?: number;
  /** NoMDEntries (268) · NUMINGROUP · repeating group */
  NoMDEntries: MDIncGrpNoMDEntries[];
  /** ExchangeSendingTime (16052) · STRING */
  ExchangeSendingTime?: string;
  /** ExchangeTransactTime (16060) · STRING */
  ExchangeTransactTime?: string;
  /** ExchangeSeqNum (18225) · INT */
  ExchangeSeqNum?: number;
}

/** QuoteRequest message · MsgType `R` · app */
export interface QuoteRequest {
  /** QuoteReqID (131) · STRING */
  QuoteReqID?: string;
  /** SRFQTransType (18605) · INT */
  SRFQTransType?: SRFQTransType;
  /** ValidUntilTime (62) · UTCTIMESTAMP */
  ValidUntilTime?: string;
  /** NoRelatedSym (146) · NUMINGROUP · repeating group */
  NoRelatedSym: RelatedSymGrpNoRelatedSym[];
  /** UserID (18102) · STRING */
  UserID?: string;
  /** Account (1) · STRING */
  Account?: string;
  /** NoTargetPartyIDs (1461) · NUMINGROUP · repeating group */
  NoTargetPartyIDs?: TargetPartyIDGrpNoTargetPartyIDs[];
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** NegotiationID (18606) · STRING */
  NegotiationID?: string;
  /** ParentVendorUserID (16853) · STRING */
  ParentVendorUserID?: string;
  /** ParentVendorAccountID (16854) · STRING */
  ParentVendorAccountID?: string;
  /** ParentVendorBrokerID (16855) · STRING */
  ParentVendorBrokerID?: string;
  /** ParentVendorProfileID (16856) · STRING */
  ParentVendorProfileID?: string;
}

/** QuoteRequestResponse message · MsgType `b` · app */
export interface QuoteRequestResponse {
  /** QuoteReqID (131) · STRING */
  QuoteReqID?: string;
  /** Account (1) · STRING */
  Account?: string;
  /** ExecID (17) · STRING */
  ExecID?: string;
  /** QuoteAckStatus (16859) · INT */
  QuoteAckStatus?: QuoteAckStatus;
  /** AccountID (18101) · STRING */
  AccountID?: string;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
  /** OrderQty (38) · QTY */
  OrderQty?: number;
  /** SecondaryOrderID (198) · STRING */
  SecondaryOrderID?: string;
  /** SecurityDesc (107) · STRING */
  SecurityDesc?: string;
  /** Side (54) · CHAR */
  Side?: Side;
  /** Text (58) · STRING */
  Text?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** CustOrderCapacity (582) · INT */
  CustOrderCapacity?: CustOrderCapacity;
}

/** Quote message · MsgType `S` · app */
export interface Quote {
  /** Account (1) · STRING */
  Account?: string;
  /** AccountID (18101) · STRING */
  AccountID?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** TTID (10553) · STRING */
  TTID?: string;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** BidPx (132) · PRICE */
  BidPx?: number;
  /** OfferPx (133) · PRICE */
  OfferPx?: number;
  /** BidSize (134) · QTY */
  BidSize?: number;
  /** OfferSize (135) · QTY */
  OfferSize?: number;
  /** ExpireTime (126) · UTCTIMESTAMP */
  ExpireTime?: string;
  /** QuoteRefPrice (18603) · PRICE */
  QuoteRefPrice?: number;
  /** UnderlyingDeltaPercentage (18604) · FLOAT */
  UnderlyingDeltaPercentage?: number;
  /** TargetPartyExchangeTraderID (1462) · STRING */
  TargetPartyExchangeTraderID?: string;
  /** NegotiationID (18606) · STRING */
  NegotiationID?: string;
  /** QuotingStatus (18610) · INT */
  QuotingStatus?: QuotingStatus;
  /** SecondaryNegotiationID (18607) · STRING */
  SecondaryNegotiationID?: string;
  /** MktQuoteID (18608) · STRING */
  MktQuoteID?: string;
  /** Seq (16963) · INT */
  Seq?: number;
  /** QuoteReqID (131) · STRING */
  QuoteReqID?: string;
  /** SecondaryQuoteID (18609) · STRING */
  SecondaryQuoteID?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** Text (58) · STRING */
  Text?: string;
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
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
}

/** QuoteStatusReport message · MsgType `AI` · app */
export interface QuoteStatusReport {
  /** QuoteReqID (131) · STRING */
  QuoteReqID?: string;
  /** Account (1) · STRING */
  Account?: string;
  /** ExecID (17) · STRING */
  ExecID?: string;
  /** AccountID (18101) · STRING */
  AccountID?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** TTID (10553) · STRING */
  TTID?: string;
  /** OrderSource (16117) · INT */
  OrderSource?: OrderSource;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** OrderOrigination (1724) · INT */
  OrderOrigination?: OrderOrigination;
  /** OrderQty (38) · QTY */
  OrderQty?: number;
  /** Side (54) · CHAR */
  Side?: Side;
  /** Text (58) · STRING */
  Text?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** CustOrderCapacity (582) · INT */
  CustOrderCapacity?: CustOrderCapacity;
  /** QuoteType (537) · INT */
  QuoteType?: QuoteType;
  /** QuoteSubType (18602) · INT */
  QuoteSubType?: QuoteSubType;
  /** QuoteRefPrice (18603) · PRICE */
  QuoteRefPrice?: number;
  /** UnderlyingDeltaPercentage (18604) · FLOAT */
  UnderlyingDeltaPercentage?: number;
  /** ValidUntilTime (62) · UTCTIMESTAMP */
  ValidUntilTime?: string;
  /** EffectiveTime (168) · UTCTIMESTAMP */
  EffectiveTime?: string;
  /** LastUpdateTime (779) · UTCTIMESTAMP */
  LastUpdateTime?: string;
  /** BidPx (132) · PRICE */
  BidPx?: number;
  /** OfferPx (133) · PRICE */
  OfferPx?: number;
  /** LastPx (31) · PRICE */
  LastPx?: number;
  /** LastShares (32) · QTY */
  LastShares?: number;
  /** LeavesQty (151) · QTY */
  LeavesQty?: number;
  /** SRFQTransType (18605) · INT */
  SRFQTransType?: SRFQTransType;
  /** NoTargetPartyIDs (1461) · NUMINGROUP · repeating group */
  NoTargetPartyIDs?: TargetPartyIDGrpNoTargetPartyIDs[];
  /** NegotiationID (18606) · STRING */
  NegotiationID?: string;
  /** SecondaryNegotiationID (18607) · STRING */
  SecondaryNegotiationID?: string;
  /** QuoteStatus (297) · INT */
  QuoteStatus?: QuoteStatus;
  /** Seq (16963) · INT */
  Seq?: number;
  /** QuoteCondition (276) · CHAR */
  QuoteCondition?: QuoteCondition;
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
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
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
}

/** QuoteResponse message · MsgType `AJ` · app */
export interface QuoteResponse {
  /** TradeReportID (571) · STRING */
  TradeReportID?: string;
  /** NegotiationID (18606) · STRING */
  NegotiationID?: string;
  /** MktQuoteID (18608) · STRING */
  MktQuoteID?: string;
  /** TradingSessionSubID (625) · STRING */
  TradingSessionSubID?: TradingSessionSubID;
  /** TransBkdTime (483) · UTCTIMESTAMP */
  TransBkdTime?: string;
  /** ValidUntilTime (62) · UTCTIMESTAMP */
  ValidUntilTime?: string;
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** Account (1) · STRING */
  Account?: string;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** BidPx (132) · PRICE */
  BidPx?: number;
  /** OfferPx (133) · PRICE */
  OfferPx?: number;
  /** BidSize (134) · QTY */
  BidSize?: number;
  /** OfferSize (135) · QTY */
  OfferSize?: number;
  /** LastPx (31) · PRICE */
  LastPx?: number;
  /** LastShares (32) · QTY */
  LastShares?: number;
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
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** HandlInst (21) · CHAR */
  HandlInst?: HandlInst;
}

/** Logon message · MsgType `A` · admin */
export interface Logon {
  /** EncryptMethod (98) · INT */
  EncryptMethod?: EncryptMethod;
  /** HeartBtInt (108) · INT */
  HeartBtInt: number;
  /** RawData (96) · STRING */
  RawData?: string;
  /** ResetSeqNumFlag (141) · BOOLEAN */
  ResetSeqNumFlag?: ResetSeqNumFlag;
  /** NextExpectedMsgSeqNum (789) · SEQNUM */
  NextExpectedMsgSeqNum?: number;
  /** ByPassSessionRecovery (16567) · BOOLEAN */
  ByPassSessionRecovery?: boolean;
  /** Password (554) · STRING */
  Password?: string;
  /** StartDate (916) · UTCTIMESTAMP */
  StartDate?: string;
  /** EndDate (917) · UTCTIMESTAMP */
  EndDate?: string;
  /** SecurityExchange (207) · EXCHANGE */
  SecurityExchange?: string;
  /** ExDestination (100) · EXCHANGE */
  ExDestination?: string;
  /** CustomMode (18002) · CHAR */
  CustomMode?: string;
  /** Duration (16944) · INT */
  Duration?: number;
}

/** BusinessMessageReject message · MsgType `j` · app */
export interface BusinessMessageReject {
  /** RefSeqNum (45) · SEQNUM */
  RefSeqNum?: number;
  /** RefMsgType (372) · STRING */
  RefMsgType: string;
  /** BusinessRejectRefID (379) · STRING */
  BusinessRejectRefID?: string;
  /** BusinessRejectReason (380) · INT */
  BusinessRejectReason: BusinessRejectReason;
  /** Text (58) · STRING */
  Text?: string;
}

/** OrderStatusRequest message · MsgType `H` · app */
export interface OrderStatusRequest {
  /** Account (1) · STRING */
  Account?: string;
  /** ClOrdID (11) · STRING */
  ClOrdID?: string;
  /** OrderID (37) · STRING */
  OrderID?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** ClearingAccountOverride (16999) · STRING */
  ClearingAccountOverride?: string;
  /** OrdStatusReqID (790) · STRING */
  OrdStatusReqID?: string;
}

/** TradeCaptureReportRequest message · MsgType `AD` · app */
export interface TradeCaptureReportRequest {
  /** TradeRequestID (568) · STRING */
  TradeRequestID?: string;
  /** TradeRequestType (569) · INT */
  TradeRequestType?: TradeRequestType;
  /** SubscriptionRequestType (263) · CHAR */
  SubscriptionRequestType: SubscriptionRequestType;
  /** LastUpdateTime (779) · UTCTIMESTAMP */
  LastUpdateTime?: string;
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** MultiLegReportingType (442) · CHAR */
  MultiLegReportingType?: MultiLegReportingType;
}

/** TradeCaptureReportRequestAck message · MsgType `AQ` · app */
export interface TradeCaptureReportRequestAck {
  /** TradeRequestID (568) · STRING */
  TradeRequestID?: string;
  /** TradeRequestType (569) · INT */
  TradeRequestType?: TradeRequestType;
  /** TradeRequestResult (749) · INT */
  TradeRequestResult?: TradeRequestResult;
  /** TradeRequestStatus (750) · INT */
  TradeRequestStatus?: TradeRequestStatus;
  /** Text (58) · STRING */
  Text?: string;
}

/** TradeCaptureReport message · MsgType `AE` · app */
export interface TradeCaptureReport {
  /** TradeReportID (571) · STRING */
  TradeReportID?: string;
  /** ExecID (17) · STRING */
  ExecID?: string;
  /** SecondaryExecID (527) · STRING */
  SecondaryExecID?: string;
  /** ExecType (150) · CHAR */
  ExecType?: ExecType;
  /** TradeReportTransType (487) · INT */
  TradeReportTransType?: TradeReportTransType;
  /** TradeReportType (856) · INT */
  TradeReportType?: TradeReportType;
  /** TradeHandlingInstr (1123) · CHAR */
  TradeHandlingInstr?: TradeHandlingInstr;
  /** TrdType (828) · INT */
  TrdType?: TrdType;
  /** TrdSubType (829) · INT */
  TrdSubType?: TrdSubType;
  /** Price (44) · PRICE */
  Price?: number;
  /** LastPx (31) · PRICE */
  LastPx?: number;
  /** LastShares (32) · QTY */
  LastShares?: number;
  /** LeavesQty (151) · QTY */
  LeavesQty?: number;
  /** MultiLegReportingType (442) · CHAR */
  MultiLegReportingType?: MultiLegReportingType;
  /** TradeLinkID (820) · STRING */
  TradeLinkID?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** TradeReportRefID (572) · STRING */
  TradeReportRefID?: string;
  /** SecondaryTradeReportID (818) · STRING */
  SecondaryTradeReportID?: string;
  /** TradeID (1003) · STRING */
  TradeID?: string;
  /** OrigTradeID (1126) · STRING */
  OrigTradeID?: string;
  /** TrdMatchID (880) · STRING */
  TrdMatchID?: string;
  /** FutureReferencePrice (20016) · PRICE */
  FutureReferencePrice?: number;
  /** TradeDate (75) · LOCALMKTDATE */
  TradeDate?: string;
  /** OrigTradeDate (1125) · LOCALMKTDATE */
  OrigTradeDate?: string;
  /** PreviouslyReported (570) · BOOLEAN */
  PreviouslyReported?: PreviouslyReported;
  /** TransBkdTime (483) · UTCTIMESTAMP */
  TransBkdTime?: string;
  /** Text (58) · STRING */
  Text?: string;
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
  /** AvgPx (6) · PRICE */
  AvgPx?: number;
  /** TradingVenueRegulatoryTradeID (8016) · STRING */
  TradingVenueRegulatoryTradeID?: string;
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** NoSides (552) · NUMINGROUP · repeating group */
  NoSides?: SidesGrpNoSides[];
  /** NoTCRLegs (10555) · NUMINGROUP · repeating group */
  NoTCRLegs?: TCRLegsGrpNoTCRLegs[];
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** RoutingAccount (18228) · STRING */
  RoutingAccount?: string;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** Seq (16963) · INT */
  Seq?: number;
  /** LegFillSeq (16964) · INT */
  LegFillSeq?: number;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** TTID (10553) · STRING */
  TTID?: string;
  /** TradePublishIndicator (1390) · INT */
  TradePublishIndicator?: TradePublishIndicator;
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
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
  /** NoInstrumentExtensions (870) · NUMINGROUP · repeating group */
  NoInstrumentExtensions?: InstrumentExtensionNoInstrumentExtensions[];
  /** RelatedTradeID (1856) · STRING */
  RelatedTradeID?: string;
  /** RelatedTradeQty (1860) · QTY */
  RelatedTradeQty?: number;
  /** NoRootPartyIDs (1116) · NUMINGROUP · repeating group */
  NoRootPartyIDs?: RootPartyIDGrpNoRootPartyIDs[];
  /** SettlDate (64) · LOCALMKTDATE */
  SettlDate?: string;
  /** HedgeType (18235) · INT */
  HedgeType?: HedgeType;
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
  /** TextC (16559) · STRING */
  TextC?: string;
  /** TextTT (16558) · STRING */
  TextTT?: string;
  /** TradingSessionSubID (625) · STRING */
  TradingSessionSubID?: TradingSessionSubID;
  /** TFUserType (16628) · CHAR */
  TFUserType?: TFUserType;
  /** NegotiationID (18606) · STRING */
  NegotiationID?: string;
  /** SecondaryNegotiationID (18607) · STRING */
  SecondaryNegotiationID?: string;
  /** ExpireTime (126) · UTCTIMESTAMP */
  ExpireTime?: string;
  /** IfTouchedPrice (9190) · FLOAT */
  IfTouchedPrice?: number;
  /** IWouldPrice (9106) · FLOAT */
  IWouldPrice?: number;
  /** LimitPrc (17010) · PRICE */
  LimitPrc?: number;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** UniqueExecID (16612) · STRING */
  UniqueExecID?: string;
  /** TrdRptStatus (939) · INT */
  TrdRptStatus?: TrdRptStatus;
  /** InsertTime (16761) · UTCTIMESTAMP */
  InsertTime?: string;
  /** OneOffSharedKey (20000) · STRING */
  OneOffSharedKey?: string;
}

/** TradeCaptureReportAck message · MsgType `AR` · app */
export interface TradeCaptureReportAck {
  /** TradeReportID (571) · STRING */
  TradeReportID?: string;
  /** TradeReportRefID (572) · STRING */
  TradeReportRefID?: string;
  /** SecondaryTradeReportID (818) · STRING */
  SecondaryTradeReportID?: string;
  /** ExecType (150) · CHAR */
  ExecType?: ExecType;
  /** ExecID (17) · STRING */
  ExecID?: string;
  /** TradeLinkID (820) · STRING */
  TradeLinkID?: string;
  /** TradeReportTransType (487) · INT */
  TradeReportTransType?: TradeReportTransType;
  /** TradeReportType (856) · INT */
  TradeReportType?: TradeReportType;
  /** TrdRptStatus (939) · INT */
  TrdRptStatus?: TrdRptStatus;
  /** TrdSubType (829) · INT */
  TrdSubType?: TrdSubType;
  /** TradeReportRejectReason (751) · INT */
  TradeReportRejectReason?: TradeReportRejectReason;
  /** Text (58) · STRING */
  Text?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** PreviouslyReported (570) · BOOLEAN */
  PreviouslyReported?: PreviouslyReported;
  /** TransBkdTime (483) · UTCTIMESTAMP */
  TransBkdTime?: string;
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
  /** LastPx (31) · PRICE */
  LastPx?: number;
  /** LastShares (32) · QTY */
  LastShares?: number;
  /** NoLegs (555) · NUMINGROUP · repeating group */
  NoLegs?: LegsGrpNoLegs[];
  /** NoSides (552) · NUMINGROUP · repeating group */
  NoSides?: SidesGrpNoSides[];
  /** TTCustomerName (18218) · STRING */
  TTCustomerName?: string;
  /** Seq (16963) · INT */
  Seq?: number;
  /** CompanyID (18221) · STRING */
  CompanyID?: string;
  /** BrokerID (18220) · STRING */
  BrokerID?: string;
  /** UserID (18102) · STRING */
  UserID?: string;
  /** TTID (10553) · STRING */
  TTID?: string;
  /** TradePublishIndicator (1390) · INT */
  TradePublishIndicator?: TradePublishIndicator;
  /** OrderCapacity (528) · CHAR */
  OrderCapacity?: OrderCapacity;
  /** NoOrderAttributes (2593) · INT · repeating group */
  NoOrderAttributes?: OrderAttributesGrpNoOrderAttributes[];
  /** TrdType (828) · INT */
  TrdType?: TrdType;
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
  /** TextC (16559) · STRING */
  TextC?: string;
  /** TextTT (16558) · STRING */
  TextTT?: string;
  /** TradingSessionSubID (625) · STRING */
  TradingSessionSubID?: TradingSessionSubID;
  /** TFUserType (16628) · CHAR */
  TFUserType?: TFUserType;
  /** NegotiationID (18606) · STRING */
  NegotiationID?: string;
  /** SecondaryNegotiationID (18607) · STRING */
  SecondaryNegotiationID?: string;
  /** ManualOrderIndicator (1028) · BOOLEAN */
  ManualOrderIndicator?: ManualOrderIndicator;
  /** RoutingAccount (18228) · STRING */
  RoutingAccount?: string;
  /** InsertTime (16761) · UTCTIMESTAMP */
  InsertTime?: string;
}

/** News message · MsgType `B` · app */
export interface News {
  /** Headline (148) · STRING */
  Headline: string;
  /** LinesOfText (33) · INT */
  LinesOfText: number;
  /** Text (58) · STRING */
  Text: string;
  /** NewsReportID (16875) · STRING */
  NewsReportID?: string;
}

/** OutOfBandRecoveryRequest message · MsgType `U2` · app */
export interface OutOfBandRecoveryRequest {
  /** StartDate (916) · UTCTIMESTAMP */
  StartDate?: string;
  /** EndDate (917) · UTCTIMESTAMP */
  EndDate?: string;
  /** SecurityExchange (207) · EXCHANGE */
  SecurityExchange?: string;
  /** ExDestination (100) · EXCHANGE */
  ExDestination?: string;
  /** CustomMode (18002) · CHAR */
  CustomMode?: string;
  /** Duration (16944) · INT */
  Duration?: number;
}

/** DontKnowTrade message · MsgType `Q` · app */
export interface DontKnowTrade {
  /** OrderID (37) · STRING */
  OrderID: string;
  /** ExecID (17) · STRING */
  ExecID: string;
  /** DKReason (127) · CHAR */
  DKReason: DKReason;
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
  /** OrderQty (38) · QTY */
  OrderQty?: number;
  /** LastShares (32) · QTY */
  LastShares?: number;
  /** LastPx (31) · PRICE */
  LastPx?: number;
  /** Text (58) · STRING */
  Text?: string;
}

/** AllocationInstruction message · MsgType `J` · app */
export interface AllocationInstruction {
  /** AllocID (70) · STRING */
  AllocID: string;
  /** AllocTransType (71) · CHAR */
  AllocTransType?: AllocTransType;
  /** AllocType (626) · INT */
  AllocType: AllocType;
  /** AllocLinkID (196) · STRING */
  AllocLinkID?: string;
  /** AllocNoOrdersType (857) · INT */
  AllocNoOrdersType: AllocNoOrdersType;
  /** NoOrders (73) · NUMINGROUP · repeating group */
  NoOrders?: OrdersGrpNoOrders[];
  /** NoExecs (124) · NUMINGROUP · repeating group */
  NoExecs?: ExecsGrpNoExecs[];
  /** Side (54) · CHAR */
  Side: Side;
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
  /** NoUnderlyings (711) · NUMINGROUP · repeating group */
  NoUnderlyings?: UnderlyingsGrpNoUnderlyings[];
  /** Quantity (53) · QTY */
  Quantity: number;
  /** LastMkt (30) · EXCHANGE */
  LastMkt?: string;
  /** PriceType (423) · INT */
  PriceType?: PriceType;
  /** AvgPx (6) · PRICE */
  AvgPx: number;
  /** AvgParPx (860) · PRICE */
  AvgParPx?: number;
  /** NoPartyIDs (453) · NUMINGROUP · repeating group */
  NoPartyIDs?: PartiesNoPartyIDs[];
  /** TradeDate (75) · LOCALMKTDATE */
  TradeDate: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
  /** SettlDate (64) · LOCALMKTDATE */
  SettlDate?: string;
  /** GrossTradeAmt (381) · AMT */
  GrossTradeAmt?: number;
  /** NetMoney (118) · AMT */
  NetMoney?: number;
  /** OpenClose (77) · CHAR */
  OpenClose?: OpenClose;
  /** Text (58) · STRING */
  Text?: string;
  /** NoAllocs (78) · NUMINGROUP · repeating group */
  NoAllocs: AllocsGrpNoAllocs[];
  /** Account (1) · STRING */
  Account?: string;
  /** AllocStrategy (7111) · STRING */
  AllocStrategy?: string;
  /** VendorDefinedField1 (17001) · STRING */
  VendorDefinedField1?: string;
  /** VendorDefinedField2 (17002) · STRING */
  VendorDefinedField2?: string;
  /** VendorDefinedField3 (17003) · STRING */
  VendorDefinedField3?: string;
  /** VendorDefinedField4 (17004) · STRING */
  VendorDefinedField4?: string;
  /** VendorDefinedField5 (17005) · STRING */
  VendorDefinedField5?: string;
  /** AllocVolumeType (60111) · STRING */
  AllocVolumeType?: string;
}

/** AllocationInstructionAck message · MsgType `P` · app */
export interface AllocationInstructionAck {
  /** AllocID (70) · STRING */
  AllocID: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime: string;
  /** AllocStatus (87) · INT */
  AllocStatus: AllocStatus;
  /** Text (58) · STRING */
  Text?: string;
  /** Account (1) · STRING */
  Account?: string;
  /** VendorDefinedField1 (17001) · STRING */
  VendorDefinedField1?: string;
  /** VendorDefinedField2 (17002) · STRING */
  VendorDefinedField2?: string;
  /** VendorDefinedField3 (17003) · STRING */
  VendorDefinedField3?: string;
  /** VendorDefinedField4 (17004) · STRING */
  VendorDefinedField4?: string;
  /** VendorDefinedField5 (17005) · STRING */
  VendorDefinedField5?: string;
}

/** AllocationReport message · MsgType `AS` · app */
export interface AllocationReport {
  /** AllocReportID (755) · STRING */
  AllocReportID: string;
  /** AllocTransType (71) · CHAR */
  AllocTransType: AllocTransType;
  /** AllocReportType (794) · INT */
  AllocReportType: AllocReportType;
  /** AllocStatus (87) · INT */
  AllocStatus: AllocStatus;
  /** AllocNoOrdersType (857) · INT */
  AllocNoOrdersType: AllocNoOrdersType;
  /** NoOrders (73) · NUMINGROUP · repeating group */
  NoOrders?: OrdersGrpNoOrders[];
  /** NoExecs (124) · NUMINGROUP · repeating group */
  NoExecs?: ExecsGrpNoExecs[];
  /** Side (54) · CHAR */
  Side: Side;
  /** Quantity (53) · QTY */
  Quantity: number;
  /** AvgPx (6) · PRICE */
  AvgPx: number;
  /** TradeDate (75) · LOCALMKTDATE */
  TradeDate: string;
  /** Text (58) · STRING */
  Text?: string;
  /** NoAllocs (78) · NUMINGROUP · repeating group */
  NoAllocs: AllocsGrpNoAllocs[];
  /** Account (1) · STRING */
  Account?: string;
  /** VendorDefinedField1 (17001) · STRING */
  VendorDefinedField1?: string;
  /** VendorDefinedField2 (17002) · STRING */
  VendorDefinedField2?: string;
  /** VendorDefinedField3 (17003) · STRING */
  VendorDefinedField3?: string;
  /** VendorDefinedField4 (17004) · STRING */
  VendorDefinedField4?: string;
  /** VendorDefinedField5 (17005) · STRING */
  VendorDefinedField5?: string;
  /** AllocVolumeType (60111) · STRING */
  AllocVolumeType?: string;
  /** TransactTime (60) · UTCTIMESTAMP */
  TransactTime?: string;
}

/** NewOrderList message · MsgType `E` · app */
export interface NewOrderList {
  /** ListID (66) · STRING */
  ListID: string;
  /** ListExecInst (69) · STRING */
  ListExecInst?: string;
  /** NoOrders (73) · NUMINGROUP · repeating group */
  NoOrders?: OrdersGrpNoOrders[];
}

/** MsgType (35) value of every message, keyed by message name. */
export const MessageTypes = {
  Heartbeat: "0",
  TestRequest: "1",
  ResendRequest: "2",
  Reject: "3",
  SequenceReset: "4",
  Logout: "5",
  ExecutionReport: "8",
  OrderCancelReject: "9",
  NewOrderMultileg: "AB",
  NewOrderSingle: "D",
  MultilegOrderCancelReplace: "AC",
  OrderCancelReplaceRequest: "G",
  OrderCancelRequest: "F",
  SecurityDefinitionRequest: "c",
  SecurityDefinition: "d",
  SecurityStatusRequest: "e",
  SecurityStatus: "f",
  MarketDataRequest: "V",
  MarketDataRequestReject: "Y",
  MarketDataSnapshot: "W",
  MarketDataIncrementalRefresh: "X",
  QuoteRequest: "R",
  QuoteRequestResponse: "b",
  Quote: "S",
  QuoteStatusReport: "AI",
  QuoteResponse: "AJ",
  Logon: "A",
  BusinessMessageReject: "j",
  OrderStatusRequest: "H",
  TradeCaptureReportRequest: "AD",
  TradeCaptureReportRequestAck: "AQ",
  TradeCaptureReport: "AE",
  TradeCaptureReportAck: "AR",
  News: "B",
  OutOfBandRecoveryRequest: "U2",
  DontKnowTrade: "Q",
  AllocationInstruction: "J",
  AllocationInstructionAck: "P",
  AllocationReport: "AS",
  NewOrderList: "E",
} as const;

export type MessageName = keyof typeof MessageTypes;
export type MessageTypeValue = (typeof MessageTypes)[MessageName];

/** Message category (`admin` session-level or `app` application-level), keyed by message name. */
export const MessageCategory = {
  Heartbeat: "admin",
  TestRequest: "admin",
  ResendRequest: "admin",
  Reject: "admin",
  SequenceReset: "admin",
  Logout: "admin",
  ExecutionReport: "app",
  OrderCancelReject: "app",
  NewOrderMultileg: "app",
  NewOrderSingle: "app",
  MultilegOrderCancelReplace: "app",
  OrderCancelReplaceRequest: "app",
  OrderCancelRequest: "app",
  SecurityDefinitionRequest: "app",
  SecurityDefinition: "app",
  SecurityStatusRequest: "app",
  SecurityStatus: "app",
  MarketDataRequest: "app",
  MarketDataRequestReject: "app",
  MarketDataSnapshot: "app",
  MarketDataIncrementalRefresh: "app",
  QuoteRequest: "app",
  QuoteRequestResponse: "app",
  Quote: "app",
  QuoteStatusReport: "app",
  QuoteResponse: "app",
  Logon: "admin",
  BusinessMessageReject: "app",
  OrderStatusRequest: "app",
  TradeCaptureReportRequest: "app",
  TradeCaptureReportRequestAck: "app",
  TradeCaptureReport: "app",
  TradeCaptureReportAck: "app",
  News: "app",
  OutOfBandRecoveryRequest: "app",
  DontKnowTrade: "app",
  AllocationInstruction: "app",
  AllocationInstructionAck: "app",
  AllocationReport: "app",
  NewOrderList: "app",
} as const satisfies Record<MessageName, string>;

/** Message body interface keyed by MsgType (35) value. */
export interface MessageMap {
  "0": Heartbeat;
  "1": TestRequest;
  "2": ResendRequest;
  "3": Reject;
  "4": SequenceReset;
  "5": Logout;
  "8": ExecutionReport;
  "9": OrderCancelReject;
  "AB": NewOrderMultileg;
  "D": NewOrderSingle;
  "AC": MultilegOrderCancelReplace;
  "G": OrderCancelReplaceRequest;
  "F": OrderCancelRequest;
  "c": SecurityDefinitionRequest;
  "d": SecurityDefinition;
  "e": SecurityStatusRequest;
  "f": SecurityStatus;
  "V": MarketDataRequest;
  "Y": MarketDataRequestReject;
  "W": MarketDataSnapshot;
  "X": MarketDataIncrementalRefresh;
  "R": QuoteRequest;
  "b": QuoteRequestResponse;
  "S": Quote;
  "AI": QuoteStatusReport;
  "AJ": QuoteResponse;
  "A": Logon;
  "j": BusinessMessageReject;
  "H": OrderStatusRequest;
  "AD": TradeCaptureReportRequest;
  "AQ": TradeCaptureReportRequestAck;
  "AE": TradeCaptureReport;
  "AR": TradeCaptureReportAck;
  "B": News;
  "U2": OutOfBandRecoveryRequest;
  "Q": DontKnowTrade;
  "J": AllocationInstruction;
  "P": AllocationInstructionAck;
  "AS": AllocationReport;
  "E": NewOrderList;
}

export type AnyMessage = MessageMap[keyof MessageMap];
