// fields.ts
// Generated from TT FIX.4.4 schema — TT FIX Version: PROD 2026-09-12 04:10:46 Git:6a77bcece9932eca75df3778f3537207659e7f12 MD5:ec5361665270743e5d87a857ce5c7f8f
// DO NOT EDIT: regenerate with `pnpm generate`.

import type { FixFieldType } from '../../../common.js';

/** FIX tag number of every field defined by the schema. */
export const Tag = {
  Account: 1,
  AvgPx: 6,
  BeginSeqNo: 7,
  BeginString: 8,
  BodyLength: 9,
  CheckSum: 10,
  ClOrdID: 11,
  Commission: 12,
  CommType: 13,
  CumQty: 14,
  Currency: 15,
  EndSeqNo: 16,
  ExecID: 17,
  ExecInst: 18,
  ExecRefID: 19,
  ExecTransType: 20,
  HandlInst: 21,
  IDSource: 22,
  LastMkt: 30,
  LastPx: 31,
  LastShares: 32,
  LinesOfText: 33,
  MsgSeqNum: 34,
  MsgType: 35,
  NewSeqNo: 36,
  OrderID: 37,
  OrderQty: 38,
  OrdStatus: 39,
  OrdType: 40,
  OrigClOrdID: 41,
  PossDupFlag: 43,
  Price: 44,
  RefSeqNum: 45,
  SecurityID: 48,
  SenderCompID: 49,
  SenderSubID: 50,
  SendingTime: 52,
  Quantity: 53,
  Side: 54,
  Symbol: 55,
  TargetCompID: 56,
  TargetSubID: 57,
  Text: 58,
  TimeInForce: 59,
  TransactTime: 60,
  ValidUntilTime: 62,
  SettlType: 63,
  SettlDate: 64,
  ListID: 66,
  ListSeqNo: 67,
  ListExecInst: 69,
  AllocID: 70,
  AllocTransType: 71,
  NoOrders: 73,
  TradeDate: 75,
  OpenClose: 77,
  NoAllocs: 78,
  AllocAccount: 79,
  AllocQty: 80,
  ProcessCode: 81,
  AllocStatus: 87,
  RawData: 96,
  PossResend: 97,
  EncryptMethod: 98,
  StopPx: 99,
  ExDestination: 100,
  CxlRejReason: 102,
  OrdRejReason: 103,
  SecurityDesc: 107,
  HeartBtInt: 108,
  MinQty: 110,
  TestReqID: 112,
  OnBehalfOfCompID: 115,
  OnBehalfOfSubID: 116,
  QuoteId: 117,
  NetMoney: 118,
  SettlCurrAmt: 119,
  SettlCurrency: 120,
  OrigSendingTime: 122,
  GapFillFlag: 123,
  NoExecs: 124,
  ExpireTime: 126,
  DKReason: 127,
  DeliverToCompID: 128,
  DeliverToSubID: 129,
  QuoteReqID: 131,
  BidPx: 132,
  OfferPx: 133,
  BidSize: 134,
  OfferSize: 135,
  NoMiscFees: 136,
  MiscFeeAmt: 137,
  MiscFeeCurr: 138,
  MiscFeeType: 139,
  ResetSeqNumFlag: 141,
  SenderLocationID: 142,
  NoRelatedSym: 146,
  Headline: 148,
  ExecType: 150,
  LeavesQty: 151,
  AllocAvgPx: 153,
  AllocNetMoney: 154,
  SettlCurrFxRate: 155,
  SettlCurrFxRateCalc: 156,
  AccruedInterestAmt: 159,
  AllocText: 161,
  SecurityType: 167,
  EffectiveTime: 168,
  LastSpotRate: 194,
  LastForwardPoints: 195,
  AllocLinkID: 196,
  SecondaryOrderID: 198,
  MaturityMonthYear: 200,
  PutOrCall: 201,
  StrikePrice: 202,
  MaturityDay: 205,
  OptAttribute: 206,
  SecurityExchange: 207,
  MaxShow: 210,
  Spread: 218,
  Yield: 236,
  MDReqID: 262,
  SubscriptionRequestType: 263,
  MarketDepth: 264,
  MDUpdateType: 265,
  AggregatedBook: 266,
  NoMDEntryTypes: 267,
  NoMDEntries: 268,
  MDEntryType: 269,
  MDEntryPx: 270,
  MDEntrySize: 271,
  MDEntryDate: 272,
  MDEntryTime: 273,
  QuoteCondition: 276,
  MDUpdateAction: 279,
  MDEntryOriginator: 282,
  MDEntryPositionNo: 290,
  QuoteStatus: 297,
  UnderlyingSecurityIDSource: 305,
  UnderlyingIssuer: 306,
  UnderlyingSecurityID: 309,
  UnderlyingSecurityType: 310,
  UnderlyingSymbol: 311,
  UnderlyingStrikePrice: 316,
  UnderlyingCurrency: 318,
  SecurityReqID: 320,
  SecurityRequestType: 321,
  SecurityResponseID: 322,
  SecurityResponseType: 323,
  SecurityStatusReqID: 324,
  SecurityTradingStatus: 326,
  ContraTrader: 337,
  NumberOfOrders: 346,
  AllocPrice: 366,
  LastSeqNumProcessed: 369,
  RefTagID: 371,
  RefMsgType: 372,
  SessionRejectReason: 373,
  ContraBroker: 375,
  ExecRestatementReason: 378,
  BusinessRejectRefID: 379,
  BusinessRejectReason: 380,
  GrossTradeAmt: 381,
  TotalNumSecurities: 393,
  PriceType: 423,
  ExpireDate: 432,
  CxlRejResponseTo: 434,
  UnderlyingSpotRate: 435,
  ClearingAccount: 440,
  MultiLegReportingType: 442,
  PartyIDSource: 447,
  PartyID: 448,
  PartyRole: 452,
  NoPartyIDs: 453,
  NoSecurityAltID: 454,
  SecurityAltID: 455,
  SecurityAltIDSource: 456,
  NoUnderlyingSecurityAltID: 457,
  UnderlyingSecurityAltID: 458,
  UnderlyingSecurityAltIDSource: 459,
  Product: 460,
  CFICode: 461,
  IndividualAllocID: 467,
  TransBkdTime: 483,
  TradeReportTransType: 487,
  NestedPartyID: 524,
  NestedPartyIDSource: 525,
  SecondaryClOrdID: 526,
  SecondaryExecID: 527,
  OrderCapacity: 528,
  OrderRestriction: 529,
  QuoteType: 537,
  NestedPartyRole: 538,
  NoNestedPartyIDs: 539,
  MaturityDate: 541,
  UnderlyingMaturityDate: 542,
  CrossID: 548,
  CrossType: 549,
  NoSides: 552,
  Password: 554,
  NoLegs: 555,
  LegCurrency: 556,
  RoundLot: 561,
  MinTradeVol: 562,
  LegPrice: 566,
  TradeRequestID: 568,
  TradeRequestType: 569,
  PreviouslyReported: 570,
  TradeReportID: 571,
  TradeReportRefID: 572,
  CustOrderCapacity: 582,
  MassStatusReqID: 584,
  LegSettlDate: 588,
  LegSymbol: 600,
  LegSecurityID: 602,
  LegIDSource: 603,
  NoLegSecurityAltID: 604,
  LegSecurityAltID: 605,
  LegSecurityAltIDSource: 606,
  LegProduct: 607,
  LegCFICode: 608,
  LegSecurityType: 609,
  LegMaturityMonthYear: 610,
  LegMaturityDate: 611,
  LegStrikePrice: 612,
  LegOptAttribute: 613,
  LegSecurityExchange: 616,
  LegSecurityDesc: 620,
  LegRatioQty: 623,
  LegSide: 624,
  TradingSessionSubID: 625,
  AllocType: 626,
  LegLastPx: 637,
  LegRefID: 654,
  AllocAcctIDSource: 661,
  LastParPx: 669,
  LegOrderQty: 685,
  LegQty: 687,
  BenchmarkSecurityID: 699,
  NoUnderlyings: 711,
  DeliveryDate: 743,
  TradeRequestResult: 749,
  TradeRequestStatus: 750,
  TradeReportRejectReason: 751,
  AllocReportID: 755,
  BenchmarkSecurityIDSource: 761,
  SecuritySubType: 762,
  UnderlyingSecuritySubType: 763,
  LegSecuritySubType: 764,
  LastUpdateTime: 779,
  NextExpectedMsgSeqNum: 789,
  OrdStatusReqID: 790,
  AllocReportType: 794,
  OrderAvgPx: 799,
  UnderlyingPx: 810,
  OptionDelta: 811,
  SecondaryTradeReportID: 818,
  TradeLinkID: 820,
  TrdType: 828,
  TrdSubType: 829,
  LastLiquidityIndicator: 851,
  TradeReportType: 856,
  AllocNoOrdersType: 857,
  AvgParPx: 860,
  NoEvents: 864,
  EventType: 865,
  EventDate: 866,
  NoInstrumentExtensions: 870,
  InstrumentAttributeType: 871,
  InstrumentAttributeValue: 872,
  UnderlyingQty: 879,
  TrdMatchID: 880,
  NoUnderlyingStipulations: 887,
  UnderlyingStipulationType: 888,
  UnderlyingStipulationValue: 889,
  LastRptRequested: 912,
  StartDate: 916,
  EndDate: 917,
  TrdRptStatus: 939,
  NoStrategyParameters: 957,
  StrategyParameterName: 958,
  StrategyParameterType: 959,
  StrategyParameterValue: 960,
  HostCrossID: 961,
  TradeID: 1003,
  ManualOrderIndicator: 1028,
  CustOrderHandlingInst: 1031,
  AllocPositionEffect: 1047,
  AggressorIndicator: 1057,
  LastSwapPoints: 1071,
  RefreshQty: 1088,
  NoRootPartyIDs: 1116,
  RootPartyID: 1117,
  RootPartyIDSource: 1118,
  RootPartyRole: 1119,
  TradeHandlingInstr: 1123,
  OrigTradeDate: 1125,
  OrigTradeID: 1126,
  DisplayQty: 1138,
  EventTime: 1145,
  LegNumber: 1152,
  Volatility: 1188,
  ExpirationTimeValue: 1189,
  RiskFreeRate: 1190,
  ExerciseStyle: 1194,
  ProductComplex: 1227,
  LegPutOrCall: 1358,
  NoFills: 1362,
  FillExecID: 1363,
  FillPx: 1364,
  FillQty: 1365,
  LegAllocID: 1366,
  ContingencyType: 1385,
  TradePublishIndicator: 1390,
  LegLastQty: 1418,
  LegExerciseStyle: 1420,
  NoTargetPartyIDs: 1461,
  TargetPartyExchangeTraderID: 1462,
  FillYieldType: 1622,
  OrderOrigination: 1724,
  NoOrderEvents: 1795,
  OrderEventType: 1796,
  OrderEventExecID: 1797,
  OrderEventReason: 1798,
  OrderEventPx: 1799,
  OrderEventQty: 1800,
  OrderEventLiquidityIndicator: 1801,
  OrderEventText: 1802,
  RelatedTradeID: 1856,
  RelatedTradeQty: 1860,
  PartyRoleQualifier: 2376,
  ComplianceText: 2404,
  AggressorSide: 2446,
  NoOrderAttributes: 2593,
  OrderAttributeType: 2594,
  OrderAttributeValue: 2595,
  StartSequenceNumber: 5024,
  AllocStrategy: 7111,
  SelfMatchPreventionID: 7928,
  SMPInstruction: 8000,
  TrdRegPublicationReason: 8013,
  TradingVenueRegulatoryTradeID: 8016,
  IsFirm: 9012,
  FixingDate: 9020,
  FixingSource: 9021,
  ReportingParty: 9032,
  MaxParticipation: 9103,
  IWouldPrice: 9106,
  Aggression: 9111,
  TiltMode: 9112,
  BriskLimitMode: 9115,
  BlockLimit: 9117,
  LiquidityIndicator: 9120,
  MemoFieldICE: 9121,
  OriginatorUserID: 9139,
  Tracking: 9145,
  MinParticipation: 9147,
  IfTouchedPrice: 9190,
  PostTriggerDuration: 9191,
  SubStrategy: 9200,
  DurationRCM: 9202,
  EndTimeOverride: 9203,
  CustomerAccountRefID: 9207,
  MaxShowRCM: 9210,
  MinShow: 9211,
  PassivePriceLevel: 9212,
  NumPostLevels: 9213,
  AverageDelay: 9214,
  IWouldQty: 9215,
  IWouldQtyPct: 9216,
  WithATickQty: 9217,
  WithATickQtyPct: 9218,
  CleanupPct: 9219,
  PostTicksApart: 9220,
  MaxSpreadCrossTicks: 9221,
  TacticalPeg: 9222,
  IWouldQtyVariancePct: 9225,
  DynamicEndTime: 9302,
  DirectElectronicAccess: 9700,
  TradingCapacity: 9701,
  LiquidityProvision: 9702,
  OriginalSecondaryExecID: 9703,
  InvestmentDecision: 9704,
  ExecutionDecision: 9705,
  ClientIDCode: 9706,
  MiFIDID: 9707,
  CorrelationClOrdID: 9717,
  DisplayFactor: 9787,
  SelfMatchPreventionIDICE: 9821,
  SelfMatchPreventionInstruction: 9822,
  LegRiskAversion: 9991,
  HedgeDiscretionTicks: 9992,
  DisplayFactorQty: 10010,
  TTClOrdID: 10011,
  TTID: 10553,
  NoTCRLegs: 10555,
  Timezone: 16000,
  ExchangeSendingTime: 16052,
  ExchangeTransactTime: 16060,
  StagedOrderMsg: 16106,
  StagedOrderStatus: 16109,
  StagedOrderOwner: 16110,
  NoLinks: 16112,
  LinkID: 16113,
  LinkType: 16114,
  ExternalSource: 16115,
  OrderIDGUID: 16116,
  OrderSource: 16117,
  FillTradingVenueRegulatoryTradeID: 16118,
  FillLastLiquidityIndicator: 16119,
  LegNoFills: 16120,
  LegFillExecID: 16121,
  LegFillPx: 16122,
  LegFillQty: 16123,
  LegFillTradingVenueRegulatoryTradeID: 16124,
  LegFillLastLiquidityIndicator: 16125,
  IntentToCross: 16130,
  RejectSource: 16131,
  BloombergSecurityExchange: 16207,
  PriceDisplayType: 16451,
  NumTickTblEntries: 16456,
  NumTicks: 16457,
  MaxPrice: 16458,
  MinLotSize: 16460,
  NumberOfBlocks: 16463,
  TradesInFlow: 16464,
  ExchTickSize: 16552,
  ExchPointValue: 16554,
  TextA: 16556,
  TextB: 16557,
  TextTT: 16558,
  TextC: 16559,
  TimeReceivedFromExchange: 16561,
  DropCopyOrder: 16566,
  ByPassSessionRecovery: 16567,
  LegAvgPx: 16568,
  EchoDC_01: 16601,
  EchoDC_02: 16602,
  EchoDC_03: 16603,
  EchoDC_04: 16604,
  EchoDC_05: 16605,
  EchoDC_06: 16606,
  EchoDC_07: 16607,
  EchoDC_08: 16608,
  EchoDC_09: 16609,
  EchoDC_10: 16610,
  MlegHeadExecId: 16611,
  UniqueExecID: 16612,
  LegTTRoutingAccount: 16615,
  LegBloombergSecurityExchange: 16616,
  SpreadLegRatioQty: 16623,
  AccountRiskGroup: 16624,
  TextTTModifyingUser: 16625,
  NVDR: 16626,
  TTF: 16627,
  TFUserType: 16628,
  EchoDC_11: 16631,
  EchoDC_12: 16632,
  EchoDC_13: 16633,
  EchoDC_14: 16634,
  EchoDC_15: 16635,
  EchoDC_16: 16636,
  EchoDC_17: 16637,
  EchoDC_18: 16638,
  EchoDC_19: 16639,
  EchoDC_20: 16640,
  PriceFormula: 16700,
  ReloadOffset: 16701,
  OverrideTickNumerator: 16702,
  FormulaBasedOn: 16703,
  ReloadDelay: 16704,
  DisclosedQty: 16705,
  Reload: 16706,
  OverrideTickSize: 16707,
  OverrideTickDenominator: 16708,
  TotalNumOrders: 16728,
  Multiplier: 16751,
  IsHedging: 16752,
  QueueHolder: 16753,
  MLQ: 16754,
  PayupTicks: 16755,
  IsQuoting: 16756,
  ConvertQuoteToHedge: 16757,
  IsLeanIndicative: 16758,
  IsShared: 16759,
  LegRatioExt: 16760,
  InsertTime: 16761,
  DefSecuritySubTypeID: 16762,
  TargetStrategyName: 16847,
  TargetStrategyType: 16848,
  SideTextA: 16849,
  SideTextB: 16850,
  SideTextC: 16851,
  ParentVendorOrderID: 16852,
  ParentVendorUserID: 16853,
  ParentVendorAccountID: 16854,
  ParentVendorBrokerID: 16855,
  ParentVendorProfileID: 16856,
  TTSMPID: 16857,
  TTSMPInstruction: 16858,
  QuoteAckStatus: 16859,
  ParentVendorAlgoID: 16860,
  ParentVendorAlgoType: 16861,
  LegParentVendorAccountID: 16874,
  NewsReportID: 16875,
  BracketOrderType: 16901,
  BracketStopLimitOffset: 16902,
  ChildTIF: 16903,
  DiscVal: 16904,
  DiscValType: 16905,
  ETimeAct: 16906,
  Interval: 16907,
  IsTrlTrg: 16908,
  LeftoverAction: 16909,
  LeftoverTicks: 16910,
  LimitPriceType: 16911,
  LimitTicksAway: 16912,
  OcoStopTriggerPrice: 16913,
  ProfitTarget: 16914,
  StopLimitOffset: 16915,
  StopOrderType: 16916,
  StopTarget: 16917,
  TriggerPriceType: 16918,
  TriggerTicksAway: 16919,
  TriggerType: 16920,
  WithATickType: 16921,
  WithATick: 16922,
  TriggerQtyType: 16923,
  TriggerQtyCompare: 16924,
  TriggerQty: 16925,
  TriggerLTPReset: 16926,
  TTStopLimitPriceType: 16927,
  TTStopWithATickType: 16928,
  TTStopWithATick: 16929,
  Payup: 16930,
  TTStopTriggerPriceType: 16931,
  TTStopIsTrlTrg: 16932,
  TTStopTriggerTicksAway: 16933,
  TTStopTriggerQtyType: 16934,
  TTStopTriggerQTyCompare: 16935,
  TTStopTriggerQty: 16936,
  TTStopTriggerLTPReset: 16937,
  TTStopTriggeredOrderType: 16938,
  TTStopTriggeredOrderPrice: 16939,
  TTStopLimitTicksAway: 16940,
  TTStopPayup: 16941,
  RetryCount: 16942,
  RetryInterval: 16943,
  Duration: 16944,
  DurationBaseUnit: 16945,
  DurationSTime: 16946,
  DurationETime: 16947,
  LeftoverTimeAction: 16948,
  AutoResubExpiredGTD: 16949,
  ParentTIF: 16950,
  TTStopSecondConditionIsOn: 16951,
  TTStopSecondTriggerPriceType: 16952,
  TTStopSecondConditionIsTrlTrg: 16953,
  TTStopSecondTriggerTicksAway: 16954,
  TTStopSecondTriggerQtyType: 16955,
  TTStopSecondTriggerQtyCompare: 16956,
  TTStopSecondTriggerQty: 16957,
  Variance: 16958,
  IncludeQuotes: 16959,
  ETAGoToMktTicks: 16960,
  WaitingOption: 16961,
  TTStopChildTIFOverride: 16962,
  Seq: 16963,
  LegFillSeq: 16964,
  NoTTReserved: 16965,
  TTReservedName: 16966,
  TTReservedValue: 16967,
  LeftoverMktOrderLimitTicks: 16968,
  SecondConditionIsOn: 16969,
  SecondTriggerTicksAway: 16970,
  SecondTriggerQtyType: 16971,
  SecondTriggerQtyCompare: 16972,
  SecondTriggerQty: 16973,
  LeftoverTime: 16974,
  SecondTriggerPriceType: 16975,
  NoImplies: 16976,
  CustomSliceSched: 16977,
  TTStopNoImplies: 16978,
  HKExSSEAlgoHandling: 16979,
  Aggressiveness: 16980,
  IgnoreMarketState: 16981,
  InstanceName: 16982,
  HedgeOrderType: 16983,
  DeltaRounding: 16984,
  Vol: 16990,
  ClearingAccountOverride: 16999,
  RequestTickTable: 17000,
  VendorDefinedField1: 17001,
  VendorDefinedField2: 17002,
  VendorDefinedField3: 17003,
  VendorDefinedField4: 17004,
  VendorDefinedField5: 17005,
  MaxPart: 17006,
  MaxDisp: 17007,
  TwapStyle: 17008,
  WouldIfPrc: 17009,
  LimitPrc: 17010,
  ForceLogout: 18000,
  MockOrderFlag: 18001,
  CustomMode: 18002,
  TradingStrategy: 18009,
  ReverseSpreadOC: 18010,
  LegExDestination: 18100,
  AccountID: 18101,
  UserID: 18102,
  PriceFeedStatus: 18210,
  DeliveryTerm: 18211,
  LegDeliveryTerm: 18212,
  LegDeliveryDate: 18213,
  IncludeNumberOfOrders: 18214,
  ExchCred: 18216,
  RefID: 18217,
  TTCustomerName: 18218,
  SecondaryAccount: 18219,
  BrokerID: 18220,
  CompanyID: 18221,
  AOTCPreventionActionType: 18222,
  ContractYearMonth: 18223,
  LegContractYearMonth: 18224,
  ExchangeSeqNum: 18225,
  TTSyntheticType: 18226,
  Organization: 18227,
  RoutingAccount: 18228,
  ReviewUserID: 18229,
  ReviewStatus: 18230,
  UniqueLegID: 18231,
  LastTradingDate: 18232,
  BrokerRoute: 18233,
  HedgeType: 18235,
  UnderlyingMemo: 18236,
  LegMaturityDay: 18314,
  QuoteSubType: 18602,
  QuoteRefPrice: 18603,
  UnderlyingDeltaPercentage: 18604,
  SRFQTransType: 18605,
  NegotiationID: 18606,
  SecondaryNegotiationID: 18607,
  MktQuoteID: 18608,
  SecondaryQuoteID: 18609,
  QuotingStatus: 18610,
  OneOffSharedKey: 20000,
  FutureReferencePrice: 20016,
  MDTradeEntryID: 37711,
  AllocVolumeType: 60111,
} as const;

export type FieldName = keyof typeof Tag;

/** Reverse lookup: tag number → field name. */
export const FieldNameByTag: Readonly<Record<number, FieldName>> = Object.freeze(
  Object.fromEntries(Object.entries(Tag).map(([name, tag]) => [tag, name])) as Record<number, FieldName>,
);

/** FIX data type of every field. */
export const FieldType = {
  Account: "STRING",
  AvgPx: "PRICE",
  BeginSeqNo: "SEQNUM",
  BeginString: "STRING",
  BodyLength: "INT",
  CheckSum: "STRING",
  ClOrdID: "STRING",
  Commission: "AMT",
  CommType: "CHAR",
  CumQty: "QTY",
  Currency: "CURRENCY",
  EndSeqNo: "SEQNUM",
  ExecID: "STRING",
  ExecInst: "MULTIPLESTRINGVALUE",
  ExecRefID: "STRING",
  ExecTransType: "CHAR",
  HandlInst: "CHAR",
  IDSource: "STRING",
  LastMkt: "EXCHANGE",
  LastPx: "PRICE",
  LastShares: "QTY",
  LinesOfText: "INT",
  MsgSeqNum: "SEQNUM",
  MsgType: "STRING",
  NewSeqNo: "SEQNUM",
  OrderID: "STRING",
  OrderQty: "QTY",
  OrdStatus: "CHAR",
  OrdType: "CHAR",
  OrigClOrdID: "STRING",
  PossDupFlag: "BOOLEAN",
  Price: "PRICE",
  RefSeqNum: "SEQNUM",
  SecurityID: "STRING",
  SenderCompID: "STRING",
  SenderSubID: "STRING",
  SendingTime: "UTCTIMESTAMP",
  Quantity: "QTY",
  Side: "CHAR",
  Symbol: "STRING",
  TargetCompID: "STRING",
  TargetSubID: "STRING",
  Text: "STRING",
  TimeInForce: "CHAR",
  TransactTime: "UTCTIMESTAMP",
  ValidUntilTime: "UTCTIMESTAMP",
  SettlType: "STRING",
  SettlDate: "LOCALMKTDATE",
  ListID: "STRING",
  ListSeqNo: "INT",
  ListExecInst: "STRING",
  AllocID: "STRING",
  AllocTransType: "CHAR",
  NoOrders: "NUMINGROUP",
  TradeDate: "LOCALMKTDATE",
  OpenClose: "CHAR",
  NoAllocs: "NUMINGROUP",
  AllocAccount: "STRING",
  AllocQty: "QTY",
  ProcessCode: "CHAR",
  AllocStatus: "INT",
  RawData: "STRING",
  PossResend: "BOOLEAN",
  EncryptMethod: "INT",
  StopPx: "PRICE",
  ExDestination: "EXCHANGE",
  CxlRejReason: "INT",
  OrdRejReason: "INT",
  SecurityDesc: "STRING",
  HeartBtInt: "INT",
  MinQty: "QTY",
  TestReqID: "STRING",
  OnBehalfOfCompID: "STRING",
  OnBehalfOfSubID: "STRING",
  QuoteId: "STRING",
  NetMoney: "AMT",
  SettlCurrAmt: "AMT",
  SettlCurrency: "CURRENCY",
  OrigSendingTime: "UTCTIMESTAMP",
  GapFillFlag: "BOOLEAN",
  NoExecs: "NUMINGROUP",
  ExpireTime: "UTCTIMESTAMP",
  DKReason: "CHAR",
  DeliverToCompID: "STRING",
  DeliverToSubID: "STRING",
  QuoteReqID: "STRING",
  BidPx: "PRICE",
  OfferPx: "PRICE",
  BidSize: "QTY",
  OfferSize: "QTY",
  NoMiscFees: "NUMINGROUP",
  MiscFeeAmt: "AMT",
  MiscFeeCurr: "CURRENCY",
  MiscFeeType: "INT",
  ResetSeqNumFlag: "BOOLEAN",
  SenderLocationID: "STRING",
  NoRelatedSym: "NUMINGROUP",
  Headline: "STRING",
  ExecType: "CHAR",
  LeavesQty: "QTY",
  AllocAvgPx: "PRICE",
  AllocNetMoney: "AMT",
  SettlCurrFxRate: "FLOAT",
  SettlCurrFxRateCalc: "CHAR",
  AccruedInterestAmt: "AMT",
  AllocText: "STRING",
  SecurityType: "STRING",
  EffectiveTime: "UTCTIMESTAMP",
  LastSpotRate: "PRICE",
  LastForwardPoints: "PRICEOFFSET",
  AllocLinkID: "STRING",
  SecondaryOrderID: "STRING",
  MaturityMonthYear: "MONTHYEAR",
  PutOrCall: "INT",
  StrikePrice: "PRICE",
  MaturityDay: "DAYOFMONTH",
  OptAttribute: "CHAR",
  SecurityExchange: "EXCHANGE",
  MaxShow: "INT",
  Spread: "PRICEOFFSET",
  Yield: "FLOAT",
  MDReqID: "STRING",
  SubscriptionRequestType: "CHAR",
  MarketDepth: "INT",
  MDUpdateType: "INT",
  AggregatedBook: "BOOLEAN",
  NoMDEntryTypes: "NUMINGROUP",
  NoMDEntries: "NUMINGROUP",
  MDEntryType: "CHAR",
  MDEntryPx: "PRICE",
  MDEntrySize: "QTY",
  MDEntryDate: "UTCDATEONLY",
  MDEntryTime: "UTCTIMEONLY",
  QuoteCondition: "CHAR",
  MDUpdateAction: "CHAR",
  MDEntryOriginator: "STRING",
  MDEntryPositionNo: "INT",
  QuoteStatus: "INT",
  UnderlyingSecurityIDSource: "STRING",
  UnderlyingIssuer: "STRING",
  UnderlyingSecurityID: "STRING",
  UnderlyingSecurityType: "STRING",
  UnderlyingSymbol: "STRING",
  UnderlyingStrikePrice: "PRICE",
  UnderlyingCurrency: "CURRENCY",
  SecurityReqID: "STRING",
  SecurityRequestType: "INT",
  SecurityResponseID: "STRING",
  SecurityResponseType: "INT",
  SecurityStatusReqID: "STRING",
  SecurityTradingStatus: "INT",
  ContraTrader: "STRING",
  NumberOfOrders: "INT",
  AllocPrice: "PRICE",
  LastSeqNumProcessed: "SEQNUM",
  RefTagID: "INT",
  RefMsgType: "STRING",
  SessionRejectReason: "INT",
  ContraBroker: "STRING",
  ExecRestatementReason: "INT",
  BusinessRejectRefID: "STRING",
  BusinessRejectReason: "INT",
  GrossTradeAmt: "AMT",
  TotalNumSecurities: "INT",
  PriceType: "INT",
  ExpireDate: "LOCALMKTDATE",
  CxlRejResponseTo: "CHAR",
  UnderlyingSpotRate: "FLOAT",
  ClearingAccount: "STRING",
  MultiLegReportingType: "CHAR",
  PartyIDSource: "CHAR",
  PartyID: "STRING",
  PartyRole: "INT",
  NoPartyIDs: "NUMINGROUP",
  NoSecurityAltID: "NUMINGROUP",
  SecurityAltID: "STRING",
  SecurityAltIDSource: "STRING",
  NoUnderlyingSecurityAltID: "NUMINGROUP",
  UnderlyingSecurityAltID: "STRING",
  UnderlyingSecurityAltIDSource: "STRING",
  Product: "INT",
  CFICode: "STRING",
  IndividualAllocID: "STRING",
  TransBkdTime: "UTCTIMESTAMP",
  TradeReportTransType: "INT",
  NestedPartyID: "STRING",
  NestedPartyIDSource: "CHAR",
  SecondaryClOrdID: "STRING",
  SecondaryExecID: "STRING",
  OrderCapacity: "CHAR",
  OrderRestriction: "CHAR",
  QuoteType: "INT",
  NestedPartyRole: "INT",
  NoNestedPartyIDs: "NUMINGROUP",
  MaturityDate: "LOCALMKTDATE",
  UnderlyingMaturityDate: "LOCALMKTDATE",
  CrossID: "STRING",
  CrossType: "INT",
  NoSides: "NUMINGROUP",
  Password: "STRING",
  NoLegs: "NUMINGROUP",
  LegCurrency: "CURRENCY",
  RoundLot: "QTY",
  MinTradeVol: "QTY",
  LegPrice: "PRICE",
  TradeRequestID: "STRING",
  TradeRequestType: "INT",
  PreviouslyReported: "BOOLEAN",
  TradeReportID: "STRING",
  TradeReportRefID: "STRING",
  CustOrderCapacity: "INT",
  MassStatusReqID: "STRING",
  LegSettlDate: "LOCALMKTDATE",
  LegSymbol: "STRING",
  LegSecurityID: "STRING",
  LegIDSource: "STRING",
  NoLegSecurityAltID: "NUMINGROUP",
  LegSecurityAltID: "STRING",
  LegSecurityAltIDSource: "STRING",
  LegProduct: "INT",
  LegCFICode: "STRING",
  LegSecurityType: "STRING",
  LegMaturityMonthYear: "MONTHYEAR",
  LegMaturityDate: "LOCALMKTDATE",
  LegStrikePrice: "PRICE",
  LegOptAttribute: "CHAR",
  LegSecurityExchange: "EXCHANGE",
  LegSecurityDesc: "STRING",
  LegRatioQty: "FLOAT",
  LegSide: "CHAR",
  TradingSessionSubID: "STRING",
  AllocType: "INT",
  LegLastPx: "PRICE",
  LegRefID: "STRING",
  AllocAcctIDSource: "INT",
  LastParPx: "PRICE",
  LegOrderQty: "QTY",
  LegQty: "QTY",
  BenchmarkSecurityID: "STRING",
  NoUnderlyings: "NUMINGROUP",
  DeliveryDate: "LOCALMKTDATE",
  TradeRequestResult: "INT",
  TradeRequestStatus: "INT",
  TradeReportRejectReason: "INT",
  AllocReportID: "STRING",
  BenchmarkSecurityIDSource: "STRING",
  SecuritySubType: "STRING",
  UnderlyingSecuritySubType: "STRING",
  LegSecuritySubType: "STRING",
  LastUpdateTime: "UTCTIMESTAMP",
  NextExpectedMsgSeqNum: "SEQNUM",
  OrdStatusReqID: "STRING",
  AllocReportType: "INT",
  OrderAvgPx: "PRICE",
  UnderlyingPx: "PRICE",
  OptionDelta: "FLOAT",
  SecondaryTradeReportID: "STRING",
  TradeLinkID: "STRING",
  TrdType: "INT",
  TrdSubType: "INT",
  LastLiquidityIndicator: "INT",
  TradeReportType: "INT",
  AllocNoOrdersType: "INT",
  AvgParPx: "PRICE",
  NoEvents: "NUMINGROUP",
  EventType: "INT",
  EventDate: "LOCALMKTDATE",
  NoInstrumentExtensions: "NUMINGROUP",
  InstrumentAttributeType: "INT",
  InstrumentAttributeValue: "STRING",
  UnderlyingQty: "QTY",
  TrdMatchID: "STRING",
  NoUnderlyingStipulations: "NUMINGROUP",
  UnderlyingStipulationType: "INT",
  UnderlyingStipulationValue: "STRING",
  LastRptRequested: "BOOLEAN",
  StartDate: "UTCTIMESTAMP",
  EndDate: "UTCTIMESTAMP",
  TrdRptStatus: "INT",
  NoStrategyParameters: "NUMINGROUP",
  StrategyParameterName: "STRING",
  StrategyParameterType: "INT",
  StrategyParameterValue: "STRING",
  HostCrossID: "STRING",
  TradeID: "STRING",
  ManualOrderIndicator: "BOOLEAN",
  CustOrderHandlingInst: "CHAR",
  AllocPositionEffect: "CHAR",
  AggressorIndicator: "BOOLEAN",
  LastSwapPoints: "PRICEOFFSET",
  RefreshQty: "QTY",
  NoRootPartyIDs: "NUMINGROUP",
  RootPartyID: "STRING",
  RootPartyIDSource: "CHAR",
  RootPartyRole: "INT",
  TradeHandlingInstr: "CHAR",
  OrigTradeDate: "LOCALMKTDATE",
  OrigTradeID: "STRING",
  DisplayQty: "QTY",
  EventTime: "UTCTIMESTAMP",
  LegNumber: "INT",
  Volatility: "STRING",
  ExpirationTimeValue: "FLOAT",
  RiskFreeRate: "PRICE",
  ExerciseStyle: "INT",
  ProductComplex: "STRING",
  LegPutOrCall: "INT",
  NoFills: "NUMINGROUP",
  FillExecID: "STRING",
  FillPx: "PRICE",
  FillQty: "QTY",
  LegAllocID: "STRING",
  ContingencyType: "INT",
  TradePublishIndicator: "INT",
  LegLastQty: "QTY",
  LegExerciseStyle: "INT",
  NoTargetPartyIDs: "NUMINGROUP",
  TargetPartyExchangeTraderID: "STRING",
  FillYieldType: "STRING",
  OrderOrigination: "INT",
  NoOrderEvents: "NUMINGROUP",
  OrderEventType: "INT",
  OrderEventExecID: "STRING",
  OrderEventReason: "INT",
  OrderEventPx: "PRICE",
  OrderEventQty: "QTY",
  OrderEventLiquidityIndicator: "INT",
  OrderEventText: "STRING",
  RelatedTradeID: "STRING",
  RelatedTradeQty: "QTY",
  PartyRoleQualifier: "INT",
  ComplianceText: "STRING",
  AggressorSide: "INT",
  NoOrderAttributes: "INT",
  OrderAttributeType: "INT",
  OrderAttributeValue: "STRING",
  StartSequenceNumber: "SEQNUM",
  AllocStrategy: "STRING",
  SelfMatchPreventionID: "STRING",
  SMPInstruction: "CHAR",
  TrdRegPublicationReason: "INT",
  TradingVenueRegulatoryTradeID: "STRING",
  IsFirm: "INT",
  FixingDate: "LOCALMKTDATE",
  FixingSource: "STRING",
  ReportingParty: "BOOLEAN",
  MaxParticipation: "FLOAT",
  IWouldPrice: "FLOAT",
  Aggression: "INT",
  TiltMode: "INT",
  BriskLimitMode: "INT",
  BlockLimit: "INT",
  LiquidityIndicator: "CHAR",
  MemoFieldICE: "STRING",
  OriginatorUserID: "STRING",
  Tracking: "INT",
  MinParticipation: "FLOAT",
  IfTouchedPrice: "FLOAT",
  PostTriggerDuration: "INT",
  SubStrategy: "STRING",
  DurationRCM: "INT",
  EndTimeOverride: "INT",
  CustomerAccountRefID: "STRING",
  MaxShowRCM: "INT",
  MinShow: "INT",
  PassivePriceLevel: "INT",
  NumPostLevels: "INT",
  AverageDelay: "FLOAT",
  IWouldQty: "INT",
  IWouldQtyPct: "FLOAT",
  WithATickQty: "INT",
  WithATickQtyPct: "FLOAT",
  CleanupPct: "FLOAT",
  PostTicksApart: "INT",
  MaxSpreadCrossTicks: "INT",
  TacticalPeg: "BOOLEAN",
  IWouldQtyVariancePct: "FLOAT",
  DynamicEndTime: "BOOLEAN",
  DirectElectronicAccess: "INT",
  TradingCapacity: "INT",
  LiquidityProvision: "INT",
  OriginalSecondaryExecID: "STRING",
  InvestmentDecision: "INT",
  ExecutionDecision: "INT",
  ClientIDCode: "INT",
  MiFIDID: "STRING",
  CorrelationClOrdID: "STRING",
  DisplayFactor: "STRING",
  SelfMatchPreventionIDICE: "STRING",
  SelfMatchPreventionInstruction: "CHAR",
  LegRiskAversion: "INT",
  HedgeDiscretionTicks: "INT",
  DisplayFactorQty: "STRING",
  TTClOrdID: "STRING",
  TTID: "STRING",
  NoTCRLegs: "NUMINGROUP",
  Timezone: "STRING",
  ExchangeSendingTime: "STRING",
  ExchangeTransactTime: "STRING",
  StagedOrderMsg: "STRING",
  StagedOrderStatus: "CHAR",
  StagedOrderOwner: "STRING",
  NoLinks: "INT",
  LinkID: "STRING",
  LinkType: "CHAR",
  ExternalSource: "BOOLEAN",
  OrderIDGUID: "STRING",
  OrderSource: "INT",
  FillTradingVenueRegulatoryTradeID: "STRING",
  FillLastLiquidityIndicator: "INT",
  LegNoFills: "NUMINGROUP",
  LegFillExecID: "STRING",
  LegFillPx: "PRICE",
  LegFillQty: "QTY",
  LegFillTradingVenueRegulatoryTradeID: "STRING",
  LegFillLastLiquidityIndicator: "INT",
  IntentToCross: "BOOLEAN",
  RejectSource: "INT",
  BloombergSecurityExchange: "STRING",
  PriceDisplayType: "INT",
  NumTickTblEntries: "INT",
  NumTicks: "INT",
  MaxPrice: "PRICE",
  MinLotSize: "INT",
  NumberOfBlocks: "INT",
  TradesInFlow: "CHAR",
  ExchTickSize: "FLOAT",
  ExchPointValue: "FLOAT",
  TextA: "STRING",
  TextB: "STRING",
  TextTT: "STRING",
  TextC: "STRING",
  TimeReceivedFromExchange: "UTCTIMESTAMP",
  DropCopyOrder: "BOOLEAN",
  ByPassSessionRecovery: "BOOLEAN",
  LegAvgPx: "PRICE",
  EchoDC_01: "STRING",
  EchoDC_02: "STRING",
  EchoDC_03: "STRING",
  EchoDC_04: "STRING",
  EchoDC_05: "STRING",
  EchoDC_06: "STRING",
  EchoDC_07: "STRING",
  EchoDC_08: "STRING",
  EchoDC_09: "STRING",
  EchoDC_10: "STRING",
  MlegHeadExecId: "STRING",
  UniqueExecID: "STRING",
  LegTTRoutingAccount: "STRING",
  LegBloombergSecurityExchange: "STRING",
  SpreadLegRatioQty: "FLOAT",
  AccountRiskGroup: "STRING",
  TextTTModifyingUser: "STRING",
  NVDR: "BOOLEAN",
  TTF: "BOOLEAN",
  TFUserType: "CHAR",
  EchoDC_11: "STRING",
  EchoDC_12: "STRING",
  EchoDC_13: "STRING",
  EchoDC_14: "STRING",
  EchoDC_15: "STRING",
  EchoDC_16: "STRING",
  EchoDC_17: "STRING",
  EchoDC_18: "STRING",
  EchoDC_19: "STRING",
  EchoDC_20: "STRING",
  PriceFormula: "STRING",
  ReloadOffset: "INT",
  OverrideTickNumerator: "INT",
  FormulaBasedOn: "STRING",
  ReloadDelay: "INT",
  DisclosedQty: "QTY",
  Reload: "BOOLEAN",
  OverrideTickSize: "BOOLEAN",
  OverrideTickDenominator: "INT",
  TotalNumOrders: "INT",
  Multiplier: "FLOAT",
  IsHedging: "BOOLEAN",
  QueueHolder: "QTY",
  MLQ: "STRING",
  PayupTicks: "INT",
  IsQuoting: "BOOLEAN",
  ConvertQuoteToHedge: "INT",
  IsLeanIndicative: "BOOLEAN",
  IsShared: "BOOLEAN",
  LegRatioExt: "INT",
  InsertTime: "UTCTIMESTAMP",
  DefSecuritySubTypeID: "INT",
  TargetStrategyName: "STRING",
  TargetStrategyType: "INT",
  SideTextA: "STRING",
  SideTextB: "STRING",
  SideTextC: "STRING",
  ParentVendorOrderID: "STRING",
  ParentVendorUserID: "STRING",
  ParentVendorAccountID: "STRING",
  ParentVendorBrokerID: "STRING",
  ParentVendorProfileID: "STRING",
  TTSMPID: "STRING",
  TTSMPInstruction: "INT",
  QuoteAckStatus: "INT",
  ParentVendorAlgoID: "STRING",
  ParentVendorAlgoType: "STRING",
  LegParentVendorAccountID: "STRING",
  NewsReportID: "STRING",
  BracketOrderType: "INT",
  BracketStopLimitOffset: "INT",
  ChildTIF: "CHAR",
  DiscVal: "INT",
  DiscValType: "INT",
  ETimeAct: "INT",
  Interval: "INT",
  IsTrlTrg: "STRING",
  LeftoverAction: "INT",
  LeftoverTicks: "INT",
  LimitPriceType: "INT",
  LimitTicksAway: "INT",
  OcoStopTriggerPrice: "PRICE",
  ProfitTarget: "INT",
  StopLimitOffset: "INT",
  StopOrderType: "INT",
  StopTarget: "INT",
  TriggerPriceType: "INT",
  TriggerTicksAway: "INT",
  TriggerType: "INT",
  WithATickType: "INT",
  WithATick: "INT",
  TriggerQtyType: "INT",
  TriggerQtyCompare: "INT",
  TriggerQty: "INT",
  TriggerLTPReset: "BOOLEAN",
  TTStopLimitPriceType: "INT",
  TTStopWithATickType: "INT",
  TTStopWithATick: "INT",
  Payup: "INT",
  TTStopTriggerPriceType: "INT",
  TTStopIsTrlTrg: "BOOLEAN",
  TTStopTriggerTicksAway: "INT",
  TTStopTriggerQtyType: "INT",
  TTStopTriggerQTyCompare: "INT",
  TTStopTriggerQty: "INT",
  TTStopTriggerLTPReset: "BOOLEAN",
  TTStopTriggeredOrderType: "INT",
  TTStopTriggeredOrderPrice: "PRICE",
  TTStopLimitTicksAway: "INT",
  TTStopPayup: "INT",
  RetryCount: "INT",
  RetryInterval: "INT",
  Duration: "INT",
  DurationBaseUnit: "INT",
  DurationSTime: "UTCTIMESTAMP",
  DurationETime: "UTCTIMESTAMP",
  LeftoverTimeAction: "INT",
  AutoResubExpiredGTD: "BOOLEAN",
  ParentTIF: "INT",
  TTStopSecondConditionIsOn: "BOOLEAN",
  TTStopSecondTriggerPriceType: "INT",
  TTStopSecondConditionIsTrlTrg: "BOOLEAN",
  TTStopSecondTriggerTicksAway: "INT",
  TTStopSecondTriggerQtyType: "INT",
  TTStopSecondTriggerQtyCompare: "INT",
  TTStopSecondTriggerQty: "QTY",
  Variance: "INT",
  IncludeQuotes: "BOOLEAN",
  ETAGoToMktTicks: "INT",
  WaitingOption: "INT",
  TTStopChildTIFOverride: "INT",
  Seq: "INT",
  LegFillSeq: "INT",
  NoTTReserved: "NUMINGROUP",
  TTReservedName: "STRING",
  TTReservedValue: "STRING",
  LeftoverMktOrderLimitTicks: "INT",
  SecondConditionIsOn: "BOOLEAN",
  SecondTriggerTicksAway: "INT",
  SecondTriggerQtyType: "INT",
  SecondTriggerQtyCompare: "INT",
  SecondTriggerQty: "QTY",
  LeftoverTime: "INT",
  SecondTriggerPriceType: "INT",
  NoImplies: "BOOLEAN",
  CustomSliceSched: "STRING",
  TTStopNoImplies: "BOOLEAN",
  HKExSSEAlgoHandling: "BOOLEAN",
  Aggressiveness: "FLOAT",
  IgnoreMarketState: "BOOLEAN",
  InstanceName: "STRING",
  HedgeOrderType: "INT",
  DeltaRounding: "INT",
  Vol: "FLOAT",
  ClearingAccountOverride: "STRING",
  RequestTickTable: "BOOLEAN",
  VendorDefinedField1: "STRING",
  VendorDefinedField2: "STRING",
  VendorDefinedField3: "STRING",
  VendorDefinedField4: "STRING",
  VendorDefinedField5: "STRING",
  MaxPart: "INT",
  MaxDisp: "INT",
  TwapStyle: "INT",
  WouldIfPrc: "PRICE",
  LimitPrc: "PRICE",
  ForceLogout: "INT",
  MockOrderFlag: "INT",
  CustomMode: "CHAR",
  TradingStrategy: "INT",
  ReverseSpreadOC: "INT",
  LegExDestination: "EXCHANGE",
  AccountID: "STRING",
  UserID: "STRING",
  PriceFeedStatus: "INT",
  DeliveryTerm: "CHAR",
  LegDeliveryTerm: "CHAR",
  LegDeliveryDate: "LOCALMKTDATE",
  IncludeNumberOfOrders: "CHAR",
  ExchCred: "STRING",
  RefID: "STRING",
  TTCustomerName: "STRING",
  SecondaryAccount: "STRING",
  BrokerID: "STRING",
  CompanyID: "STRING",
  AOTCPreventionActionType: "CHAR",
  ContractYearMonth: "STRING",
  LegContractYearMonth: "STRING",
  ExchangeSeqNum: "INT",
  TTSyntheticType: "INT",
  Organization: "STRING",
  RoutingAccount: "STRING",
  ReviewUserID: "STRING",
  ReviewStatus: "INT",
  UniqueLegID: "STRING",
  LastTradingDate: "LOCALMKTDATE",
  BrokerRoute: "STRING",
  HedgeType: "INT",
  UnderlyingMemo: "STRING",
  LegMaturityDay: "DAYOFMONTH",
  QuoteSubType: "INT",
  QuoteRefPrice: "PRICE",
  UnderlyingDeltaPercentage: "FLOAT",
  SRFQTransType: "INT",
  NegotiationID: "STRING",
  SecondaryNegotiationID: "STRING",
  MktQuoteID: "STRING",
  SecondaryQuoteID: "STRING",
  QuotingStatus: "INT",
  OneOffSharedKey: "STRING",
  FutureReferencePrice: "PRICE",
  MDTradeEntryID: "INT",
  AllocVolumeType: "STRING",
} as const satisfies Record<FieldName, FixFieldType>;

// ---------------------------------------------------------------------------
// Field values
// ---------------------------------------------------------------------------

/** Values of CommType (13, CHAR). */
export const CommType = {
  /** `1` */
  PER_UNIT: "1",
  /** `2` */
  PERCENTAGE: "2",
  /** `3` */
  ABSOLUTE: "3",
  /** `4` */
  PERCENTAGE_WAIVED_CASH_DISCOUNT: "4",
  /** `5` */
  PERCENTAGE_WAIVED_ENHANCED_UNITS: "5",
  /** `6` */
  POINTS_PER_BOND_OR_CONTRACT: "6",
} as const;
export type CommType = (typeof CommType)[keyof typeof CommType];

/** Values of ExecInst (18, MULTIPLESTRINGVALUE). Values may be combined, space separated. */
export const ExecInst = {
  /** `1` */
  NOT_HELD: "1",
  /** `2` */
  WORK: "2",
  /** `5` */
  HELD: "5",
  /** `6` */
  PARTICIPATE_DONT_INITIATE: "6",
  /** `G` */
  ALL_OR_NONE: "G",
  /** `S` */
  SUSPEND: "S",
  /** `q` */
  RELEASE_FROM_SUSPENSION: "q",
  /** `o` */
  CANCEL_ON_CONNECTION_LOSS: "o",
  /** `X` */
  TEST_REQUEST: "X",
} as const;

/** Values of ExecTransType (20, CHAR). */
export const ExecTransType = {
  /** `0` */
  NEW: "0",
  /** `1` */
  CANCEL: "1",
  /** `2` */
  CORRECT: "2",
  /** `3` */
  STATUS: "3",
} as const;
export type ExecTransType = (typeof ExecTransType)[keyof typeof ExecTransType];

/** Values of HandlInst (21, CHAR). */
export const HandlInst = {
  /** `1` */
  AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION: "1",
  /** `2` */
  AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK: "2",
  /** `3` */
  MANUAL_ORDER_BEST_EXECUTION: "3",
} as const;
export type HandlInst = (typeof HandlInst)[keyof typeof HandlInst];

/** Values of IDSource (22, STRING). */
export const IDSource = {
  /** `1` */
  CUSIP: "1",
  /** `4` */
  ISIN_NUMBER: "4",
  /** `5` */
  RIC_CODE: "5",
  /** `8` */
  EXCHANGE_SECURITY_ID: "8",
  /** `91` */
  EXCHANGE_TICKER: "91",
  /** `96` */
  TT_SECURITY_ID: "96",
  /** `97` */
  ALIAS: "97",
  /** `98` */
  NAME: "98",
  /** `A` */
  BLOOMBERG_CODE: "A",
  /** `S` */
  OPENFIGI_ID: "S",
  /** `X` */
  SERIES_KEY: "X",
  /** `H` */
  CLEARING_HOUSE: "H",
} as const;
export type IDSource = (typeof IDSource)[keyof typeof IDSource];

/** Values of MsgType (35, STRING). */
export const MsgType = {
  /** `0` */
  HEARTBEAT: "0",
  /** `1` */
  TEST_REQUEST: "1",
  /** `2` */
  RESEND_REQUEST: "2",
  /** `3` */
  REJECT: "3",
  /** `4` */
  SEQUENCE_RESET: "4",
  /** `5` */
  LOGOUT: "5",
  /** `8` */
  EXECUTION_REPORT: "8",
  /** `9` */
  ORDER_CANCEL_REJECT: "9",
  /** `A` */
  LOGON: "A",
  /** `B` */
  NEWS: "B",
  /** `b` */
  QUOTE_REQUEST_RESPONSE: "b",
  /** `c` */
  SECURITY_DEFINITION_REQUEST: "c",
  /** `D` */
  ORDER_SINGLE: "D",
  /** `AB` */
  ORDER_MULTI_LEG: "AB",
  /** `AC` */
  ORDER_MULTI_LEG_CANCEL_REPLACE_REQUEST: "AC",
  /** `d` */
  SECURITY_DEFINITION: "d",
  /** `e` */
  SECURITY_STATUS_REQUEST: "e",
  /** `f` */
  SECURITY_STATUS: "f",
  /** `F` */
  ORDER_CANCEL_REQUEST: "F",
  /** `G` */
  ORDER_CANCEL_REPLACE_REQUEST: "G",
  /** `g` */
  TRADING_SESSION_STATUS_REQUEST: "g",
  /** `H` */
  ORDER_STATUS_REQUEST: "H",
  /** `j` */
  BUSINESS_MESSAGE_REJECT: "j",
  /** `R` */
  QUOTE_REQUEST: "R",
  /** `V` */
  MARKET_DATA_REQUEST: "V",
  /** `W` */
  MARKET_DATA_SNAPSHOT_FULL_REFRESH: "W",
  /** `X` */
  MARKET_DATA_INCREMENTAL_REFRESH: "X",
  /** `Y` */
  MARKET_DATA_REQUEST_REJECT: "Y",
  /** `AE` */
  TRADE_CAPTURE_REPORT: "AE",
  /** `AR` */
  TRADE_CAPTURE_REPORT_ACK: "AR",
  /** `U2` */
  OUTOFBAND_RECOVERY_REQUEST: "U2",
  /** `Q` */
  DONT_KNOW_TRADE: "Q",
  /** `AD` */
  TRADE_CAPTURE_REPORT_REQUEST: "AD",
  /** `AQ` */
  TRADE_CAPTURE_REPORT_REQUEST_ACK: "AQ",
  /** `J` */
  ALLOCATION_INSTRUCTION: "J",
  /** `P` */
  ALLOCATION_INSTRUCTION_ACK: "P",
  /** `AS` */
  ALLOCATION_REPORT: "AS",
  /** `AI` */
  QUOTE_STATUS_REPORT: "AI",
  /** `AJ` */
  QUOTE_RESPONSE: "AJ",
  /** `E` */
  NEW_ORDER_LIST: "E",
} as const;
export type MsgType = (typeof MsgType)[keyof typeof MsgType];

/** Values of OrdStatus (39, CHAR). */
export const OrdStatus = {
  /** `0` */
  NEW: "0",
  /** `1` */
  PARTIALLY_FILLED: "1",
  /** `2` */
  FILLED: "2",
  /** `3` */
  DONE_FOR_DAY: "3",
  /** `4` */
  CANCELED: "4",
  /** `5` */
  REPLACED: "5",
  /** `6` */
  PENDING_CANCEL: "6",
  /** `7` */
  STOPPED: "7",
  /** `8` */
  REJECTED: "8",
  /** `9` */
  SUSPENDED: "9",
  /** `A` */
  PENDING_NEW: "A",
  /** `B` */
  CALCULATED: "B",
  /** `C` */
  EXPIRED: "C",
  /** `D` */
  ACCEPTED_FOR_BIDDING: "D",
  /** `E` */
  PENDING_REPLACE: "E",
  /** `H` */
  TRADE_CANCEL: "H",
  /** `z` */
  INACTIVE: "z",
} as const;
export type OrdStatus = (typeof OrdStatus)[keyof typeof OrdStatus];

/** Values of OrdType (40, CHAR). */
export const OrdType = {
  /** `1` */
  MARKET: "1",
  /** `2` */
  LIMIT: "2",
  /** `3` */
  STOP: "3",
  /** `4` */
  STOP_LIMIT: "4",
  /** `5` */
  MARKET_ON_CLOSE: "5",
  /** `B` */
  LIMIT_ON_CLOSE: "B",
  /** `D` */
  PREVIOUSLY_QUOTED: "D",
  /** `K` */
  MARKET_WITH_LEFT_OVER_AS_LIMIT: "K",
  /** `Q` */
  MARKET_LIMIT_MARKET_LEFT_OVER_AS_LIMIT: "Q",
  /** `S` */
  STOP_MARKET_TO_LIMIT: "S",
  /** `T` */
  IF_TOUCHED_LIMIT: "T",
  /** `J` */
  IF_TOUCHED_MARKET: "J",
  /** `U` */
  IF_TOUCHED_MARKET_TO_LIMIT: "U",
  /** `p` */
  LIMIT_POST_ONLY: "p",
  /** `V` */
  MARKET_CLOSE_TODAY: "V",
  /** `W` */
  LIMIT_CLOSE_TODAY: "W",
  /** `P` */
  PEG: "P",
  /** `X` */
  ICEBERG: "X",
  /** `O` */
  OCO: "O",
} as const;
export type OrdType = (typeof OrdType)[keyof typeof OrdType];

/** Values of PossDupFlag (43, BOOLEAN). */
export const PossDupFlag = {
  /** `N` */
  NO: false,
  /** `Y` */
  YES: true,
} as const;
export type PossDupFlag = (typeof PossDupFlag)[keyof typeof PossDupFlag];

/** Values of Side (54, CHAR). */
export const Side = {
  /** `1` */
  BUY: "1",
  /** `2` */
  SELL: "2",
  /** `3` */
  BUY_MINUS: "3",
  /** `4` */
  SELL_PLUS: "4",
  /** `5` */
  SELL_SHORT: "5",
  /** `6` */
  SELL_SHORT_EXEMPT: "6",
  /** `7` */
  UNDISCLOSED: "7",
  /** `8` */
  CROSS: "8",
  /** `9` */
  CROSS_SHORT: "9",
  /** `B` */
  AS_DEFINED: "B",
  /** `C` */
  OPPOSITE: "C",
} as const;
export type Side = (typeof Side)[keyof typeof Side];

/** Values of TimeInForce (59, CHAR). */
export const TimeInForce = {
  /** `0` */
  DAY: "0",
  /** `1` */
  GOOD_TILL_CANCEL: "1",
  /** `2` */
  AT_THE_OPENING: "2",
  /** `3` */
  IMMEDIATE_OR_CANCEL: "3",
  /** `4` */
  FILL_OR_KILL: "4",
  /** `5` */
  GOOD_TILL_CROSSING: "5",
  /** `6` */
  GOOD_TILL_DATE: "6",
  /** `7` */
  AT_THE_CLOSE: "7",
  /** `8` */
  GOOD_THROUGH_CROSSING: "8",
  /** `9` */
  AT_CROSSING: "9",
  /** `A` */
  AUCTION: "A",
  /** `S` */
  TIME_IN_FORCE_MORNING_AT_THE_CLOSE: "S",
  /** `T` */
  TIME_IN_FORCE_AFTERNOON_AT_THE_CLOSE: "T",
  /** `U` */
  TIME_IN_FORCE_NIGHT_AT_THE_CLOSE: "U",
  /** `V` */
  GOOD_IN_SESSION: "V",
  /** `W` */
  DAY_PLUS: "W",
  /** `X` */
  GOOD_TILL_CANCEL_PLUS: "X",
  /** `Y` */
  GOOD_TILL_DATE_PLUS: "Y",
} as const;
export type TimeInForce = (typeof TimeInForce)[keyof typeof TimeInForce];

/** Values of AllocTransType (71, CHAR). */
export const AllocTransType = {
  /** `0` */
  NEW: "0",
  /** `1` */
  REPLACE: "1",
  /** `2` */
  CANCEL: "2",
} as const;
export type AllocTransType = (typeof AllocTransType)[keyof typeof AllocTransType];

/** Values of OpenClose (77, CHAR). */
export const OpenClose = {
  /** `C` */
  CLOSE: "C",
  /** `O` */
  OPEN: "O",
  /** `F` */
  FIFO: "F",
} as const;
export type OpenClose = (typeof OpenClose)[keyof typeof OpenClose];

/** Values of ProcessCode (81, CHAR). */
export const ProcessCode = {
  /** `0` */
  REGULAR: "0",
  /** `1` */
  SOFT_DOLLAR: "1",
  /** `2` */
  STEP_IN: "2",
  /** `3` */
  SETP_OUT: "3",
  /** `4` */
  SOFT_DOLLAR_STEP_IN: "4",
  /** `5` */
  SOFT_DOLLAR_STEP_OUT: "5",
  /** `6` */
  PLAN_SPONSOR: "6",
} as const;
export type ProcessCode = (typeof ProcessCode)[keyof typeof ProcessCode];

/** Values of AllocStatus (87, INT). */
export const AllocStatus = {
  /** `0` */
  ACCEPTED: 0,
  /** `1` */
  BLOCK_LEVEL_REJECT: 1,
  /** `2` */
  ACCOUNT_LEVEL_REJECT: 2,
  /** `3` */
  RECEIVED: 3,
  /** `4` */
  INCOMPLETE: 4,
  /** `5` */
  REJECTED_BY_INTERMEDIARY: 5,
} as const;
export type AllocStatus = (typeof AllocStatus)[keyof typeof AllocStatus];

/** Values of PossResend (97, BOOLEAN). */
export const PossResend = {
  /** `N` */
  NO: false,
  /** `Y` */
  YES: true,
} as const;
export type PossResend = (typeof PossResend)[keyof typeof PossResend];

/** Values of EncryptMethod (98, INT). */
export const EncryptMethod = {
  /** `0` */
  NONE: 0,
} as const;
export type EncryptMethod = (typeof EncryptMethod)[keyof typeof EncryptMethod];

/** Values of CxlRejReason (102, INT). */
export const CxlRejReason = {
  /** `0` */
  TOO_LATE_TO_CANCEL: 0,
  /** `1` */
  UNKNOWN_ORDER: 1,
  /** `2` */
  BROKER_OPTION: 2,
  /** `3` */
  ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS: 3,
  /** `4` */
  UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST: 4,
  /** `5` */
  ORIGORDMODTIME: 5,
  /** `6` */
  DUPLICATE_CLORDID: 6,
  /** `7` */
  DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER: 7,
  /** `8` */
  STALE_ORDER: 8,
  /** `9` */
  TRADE_ALONG_REQUIRED: 9,
  /** `10` */
  INVALID_INVESTOR_ID: 10,
  /** `11` */
  UNSUPPORTED_ORDER_CHARACTERISTIC: 11,
  /** `12` */
  SURVEILLENCE_OPTION: 12,
  /** `13` */
  INCORRECT_QUANTITY: 13,
  /** `14` */
  INCORRECT_ALLOCATED_QUANTITY: 14,
  /** `15` */
  UNKNOWN_ACCOUNT: 15,
  /** `16` */
  PRICE_EXCEEDS_CURRENT_PRICE_BAND: 16,
  /** `18` */
  INVALID_PRICE_INCREMENT: 18,
  /** `19` */
  MESSAGE_PENDING: 19,
  /** `20` */
  ROUTING_ERROR: 20,
  /** `99` */
  OTHER: 99,
  /** `1003` */
  MARKET_CLOSED: 1003,
  /** `1007` */
  FIX_FIELD_MISSING_OR_INCORRECT: 1007,
  /** `1010` */
  REQUIRED_FIELD_MISSING: 1010,
  /** `1011` */
  FIX_FIELD_INCORRECT: 1011,
  /** `1012` */
  PRICE_MUST_BE_GREATER_THAN_ZERO: 1012,
  /** `1013` */
  INVALID_ORDER_QUALIFIER: 1013,
  /** `1014` */
  USER_NOT_AUTHORIZED: 1014,
  /** `2013` */
  MARKET_ORDERS_NOT_SUPPORTED_BY_OPPOSITE: 2013,
  /** `2019` */
  INVALID_EXPIRE_DATE: 2019,
  /** `2044` */
  ORDER_NOT_IN_BOOK: 2044,
  /** `2045` */
  ORDER_NOT_IN_BOOK2: 2045,
  /** `2046` */
  DISCLOSED_QTY_CANNOT_BE_GREATER: 2046,
  /** `2047` */
  UNKNOWN_CONTRACT: 2047,
  /** `2048` */
  CANCEL_WITH_DIFFERENT_SENDER_COMP_ID: 2048,
  /** `2049` */
  CLORDID_DIFFERENT_THAN_CORRELATIONCLORDID: 2049,
  /** `2050` */
  CLORDID_DIFFERENT_THAN_ORIGINALCLORDID: 2050,
  /** `2051` */
  DIFFERENT_SIDE: 2051,
  /** `2052` */
  DIFFERENT_GROUP: 2052,
  /** `2053` */
  DIFFERENT_SECURITY_TYPE: 2053,
  /** `2054` */
  DIFFERENT_ACCOUNT: 2054,
  /** `2055` */
  DIFFERENT_QTY: 2055,
  /** `2056` */
  CANCEL_WITH_DIFFERENT_TRADER_ID: 2056,
  /** `2058` */
  STOP_PRICE_MUST_BE_GREATER: 2058,
  /** `2059` */
  STOP_PRICE_MUST_BE_SMALLER: 2059,
  /** `2060` */
  SELL_STOP_PRICE_MUST_BE_BELOW_LTP: 2060,
  /** `2061` */
  BUY_STOP_PRICE_MUST_BE_ABOVE_LTP: 2061,
  /** `2100` */
  DIFFERENT_PRODUCT: 2100,
  /** `2101` */
  DIFFERENT_INFLIGHT_FILL_MITIGATION: 2101,
  /** `2102` */
  MODIFY_WITH_DIFFERENT_SENDER_COMP_ID: 2102,
  /** `2103` */
  MODIFY_WITH_DIFFERENT_TRADER_ID: 2103,
  /** `2115` */
  ORDER_QTY_OUTSIDE_ALLOWABLE_RANGE: 2115,
  /** `2130` */
  INVALID_ORDER_TYPE_FOR_PCP: 2130,
  /** `2137` */
  ORDER_PRICE_OUTSIDE_LIMITS: 2137,
  /** `2179` */
  ORDER_PRICE_OUTSIDE_BANDS: 2179,
  /** `2311` */
  INVALID_ORDER_TYPE_FOR_GROUP: 2311,
  /** `2500` */
  INSTRUMENT_CROSS_REQUEST_IN_PROGRESS: 2500,
  /** `2501` */
  ORDER_QTY_TOO_LOW: 2501,
  /** `2600` */
  MARKET_MAKER_PROTECTION_HAS_TRIPPED: 2600,
  /** `4000` */
  ENGINE_DID_NOT_RESPOND: 4000,
  /** `5001` */
  EURONEXT_UNKNOWN_ORDER: 5001,
  /** `5099` */
  EURONEXT_OTHER: 5099,
  /** `5020` */
  COMP_ID_PROBLEM: 5020,
  /** `5300` */
  LOGON_PROBLEM: 5300,
  /** `5313` */
  NO_ROUTER_FOR_SECURITY_GROUP: 5313,
  /** `5314` */
  ROUTER_NOT_AVAILABLE_OR_CONNECTED: 5314,
  /** `5318` */
  INVALID_PRICE: 5318,
  /** `5319` */
  INVALID_ORDQTY: 5319,
  /** `5320` */
  INVALID_ORDTYPE: 5320,
  /** `5321` */
  INVALID_SIDE: 5321,
  /** `6000` */
  FULLY_FILLED: 6000,
  /** `6001` */
  PENDING_REPLACE: 6001,
  /** `6002` */
  PENDING_CANCEL: 6002,
  /** `7000` */
  ORDER_REJECTED: 7000,
  /** `7001` */
  CONTRACT_NOT_GTC_GTD_ELIGIBLE: 7001,
  /** `7009` */
  CONTRACT_PAST_EXPIRATION: 7009,
  /** `7011` */
  MAX_CONTRACT_WORKING_QTY_EXCEEDED: 7011,
  /** `7015` */
  MODIFY_WITH_DIFFERENT_SIDE: 7015,
  /** `7018` */
  CONTRACT_NOT_GTC_GTD_ELIGIBLE2: 7018,
  /** `7020` */
  NO_TRADING_CALENDAR_FOR_EXPIRE_DATE: 7020,
  /** `7021` */
  EXPIRE_DATE_BEYOND_INSTRUMENT_EXPIRATION: 7021,
  /** `7022` */
  EXPIRE_DATE_BEYOND_LEG_INSTRUMENT_EXPIRATION: 7022,
  /** `7024` */
  MARKET_IN_NO_CANCEL: 7024,
  /** `7027` */
  INVALID_ORDER_TYPE_FOR_RESERVED_MARKET: 7027,
  /** `7028` */
  ORDER_SESSION_DATE_IN_PAST: 7028,
  /** `7613` */
  DISCLOSED_QTY_CANNOT_BE_SMALLER: 7613,
  /** `9999` */
  TECHNICAL_ERROR_FUNCTION_NOT_PERFORMED: 9999,
} as const;
export type CxlRejReason = (typeof CxlRejReason)[keyof typeof CxlRejReason];

/** Values of OrdRejReason (103, INT). */
export const OrdRejReason = {
  /** `0` */
  BROKER_OPTION: 0,
  /** `1` */
  UNKNOWN_SYMBOL: 1,
  /** `2` */
  EXCHANGE_CLOSED: 2,
  /** `3` */
  ORDER_EXCEEDS_LIMIT: 3,
  /** `4` */
  TOO_LATE_TO_ENTER: 4,
  /** `5` */
  UNKNOWN_ORDER: 5,
  /** `6` */
  DUPLICATE_ORDER: 6,
  /** `7` */
  DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER: 7,
  /** `8` */
  STALE_ORDER: 8,
  /** `9` */
  TRADE_ALONG_REQUIRED: 9,
  /** `10` */
  INVALID_INVESTOR_ID: 10,
  /** `11` */
  UNSUPPORTED_ORDER_CHARACTERISTIC: 11,
  /** `12` */
  SURVEILLENCE_OPTION: 12,
  /** `13` */
  INCORRECT_QUANTITY: 13,
  /** `14` */
  INCORRECT_ALLOCATED_QUANTITY: 14,
  /** `15` */
  UNKNOWN_ACCOUNT: 15,
  /** `16` */
  PRICE_EXCEEDS_CURRENT_PRICE_BAND: 16,
  /** `18` */
  INVALID_PRICE_INCREMENT: 18,
  /** `19` */
  MESSAGE_PENDING: 19,
  /** `20` */
  ROUTING_ERROR: 20,
  /** `99` */
  OTHER: 99,
  /** `100` */
  TIME_OUT: 100,
  /** `1003` */
  MARKET_CLOSED: 1003,
  /** `1007` */
  FIX_FIELD_MISSING_OR_INCORRECT: 1007,
  /** `1010` */
  REQUIRED_FIELD_MISSING: 1010,
  /** `1011` */
  FIX_FIELD_INCORRECT: 1011,
  /** `1012` */
  PRICE_MUST_BE_GREATER_THAN_ZERO: 1012,
  /** `1013` */
  INVALID_ORDER_QUALIFIER: 1013,
  /** `1014` */
  USER_NOT_AUTHORIZED: 1014,
  /** `2013` */
  MARKET_HOURS_NOT_SUPORTED_BY_OPPOSITE: 2013,
  /** `2019` */
  INVALID_EXPIRE_DATE: 2019,
  /** `2044` */
  ORDER_NOT_IN_BOOK: 2044,
  /** `2045` */
  ORDER_NOT_IN_BOOK_2: 2045,
  /** `2046` */
  DISCLOSED_QTY_CANNOT_BE_GREATER: 2046,
  /** `2047` */
  UNKNOWN_CONTRACT: 2047,
  /** `2048` */
  CANCEL_WITH_DIFFERENT_SENDER_COMP_ID: 2048,
  /** `2049` */
  CLORDID_DIFFERENT_THAN_CORRELEATION_CLORDID: 2049,
  /** `2050` */
  CLORDID_DIFFERENT_THAN_ORIGINAL_CLORDID: 2050,
  /** `2051` */
  DIFFERENT_SIDE: 2051,
  /** `2052` */
  DIFFERENT_GROUP: 2052,
  /** `2053` */
  DIFFERENT_SECURITY_TYPE: 2053,
  /** `2054` */
  DIFFERENT_ACCOUNT: 2054,
  /** `2055` */
  DIFFERENT_QTY: 2055,
  /** `2056` */
  CANCEL_WITH_DIFFERENT_TRADER_ID: 2056,
  /** `2058` */
  STOP_PRICE_MUST_BE_GREATER: 2058,
  /** `2059` */
  STOP_PRICE_MUST_BE_SMALLER: 2059,
  /** `2060` */
  SELL_STOP_PRICE_MUST_BE_BELOW_LTP: 2060,
  /** `2061` */
  BUY_STOP_PRICE_MUST_BE_ABOVE_LTP: 2061,
  /** `2100` */
  DIFFERENT_PRODUCT: 2100,
  /** `2101` */
  DIFFERENT_INFLIGHT_FILL_MODIFICATION: 2101,
  /** `2102` */
  MODIFY_WITH_DIFFERENT_SENDER_COMP_ID: 2102,
  /** `2103` */
  MODIFY_WITH_DIFFERENT_TRADER_ID: 2103,
  /** `2115` */
  ORDER_QTY_OUTSIDE_ALLOWABLE_RANGE: 2115,
  /** `2130` */
  INVALID_ORDER_TYPE_FOR_PCP: 2130,
  /** `2137` */
  ORDER_PRICE_OUTSIDE_LIMITS: 2137,
  /** `2179` */
  ORDER_PRICE_OUTSIDE_BANDS: 2179,
  /** `2311` */
  INVALID_ORDER_TYPE_FOR_GROUP: 2311,
  /** `2500` */
  INSTRUMENT_CROSS_REQUEST_IN_PROCESS: 2500,
  /** `2501` */
  ORDR_QTY_TOO_LOW: 2501,
  /** `2600` */
  MARKET_MAKER_PROTECTION_HAS_TRIPPED: 2600,
  /** `4000` */
  ENGINE_DID_NOT_RESPOND: 4000,
  /** `6001` */
  PENDING_REPLACE: 6001,
  /** `6002` */
  PENDING_CANCEL: 6002,
  /** `7000` */
  ORDER_REJECTED: 7000,
  /** `7001` */
  CONTRACT_NOT_GTC_GTD_ELIGIBLE: 7001,
  /** `7009` */
  CONTRACT_PAST_EXPIRATION: 7009,
  /** `7011` */
  MAX_CONTRACT_WORKING_QTY_EXCEEDED: 7011,
  /** `7015` */
  MODIFY_WITH_DIFFERENT_SIDE: 7015,
  /** `7018` */
  CONTRACT_NOT_GTC_GTD_ELIGIBLE_2: 7018,
  /** `7020` */
  NO_TRADING_CALENDAR_FOR_EXPIRE_DATE: 7020,
  /** `7021` */
  EXPIRE_DATE_BEYOND_INSTRUMENT_EXPIRATION: 7021,
  /** `7022` */
  EXPIRE_DATE_BEYOND_LEG_INSTRUMENT_EXPIRATION: 7022,
  /** `7024` */
  MARKET_IN_NO_CANCEL: 7024,
  /** `7027` */
  INVALID_ORDER_TYPE_FOR_RESERVED_MARKET: 7027,
  /** `7028` */
  ORDER_SESSION_DATE_IN_PAST: 7028,
  /** `7613` */
  DISCLOSED_QTY_CANNOT_BE_SMALLER: 7613,
  /** `9999` */
  TECHNICAL_ERROR_FUNCTION_NOT_PERFORMED: 9999,
} as const;
export type OrdRejReason = (typeof OrdRejReason)[keyof typeof OrdRejReason];

/** Values of GapFillFlag (123, BOOLEAN). */
export const GapFillFlag = {
  /** `N` */
  NO: false,
  /** `Y` */
  YES: true,
} as const;
export type GapFillFlag = (typeof GapFillFlag)[keyof typeof GapFillFlag];

/** Values of DKReason (127, CHAR). */
export const DKReason = {
  /** `A` */
  UnknownSymbol: "A",
  /** `Z` */
  Other: "Z",
} as const;
export type DKReason = (typeof DKReason)[keyof typeof DKReason];

/** Values of MiscFeeType (139, INT). */
export const MiscFeeType = {
  /** `1` */
  REGULATORY: 1,
  /** `2` */
  TAX: 2,
  /** `3` */
  LOCAL_COMMISSION: 3,
  /** `4` */
  EXCHANGE_FEES: 4,
  /** `5` */
  STAMP: 5,
  /** `6` */
  LEVY: 6,
  /** `7` */
  OTHER: 7,
  /** `8` */
  MARKUP: 8,
  /** `9` */
  CONSUMPTION_TAX: 9,
  /** `10` */
  PER_TRANSACTION: 10,
  /** `11` */
  CONVERSION: 11,
  /** `12` */
  AGENT: 12,
} as const;
export type MiscFeeType = (typeof MiscFeeType)[keyof typeof MiscFeeType];

/** Values of ResetSeqNumFlag (141, BOOLEAN). */
export const ResetSeqNumFlag = {
  /** `N` */
  NO: false,
  /** `Y` */
  YES: true,
} as const;
export type ResetSeqNumFlag = (typeof ResetSeqNumFlag)[keyof typeof ResetSeqNumFlag];

/** Values of ExecType (150, CHAR). */
export const ExecType = {
  /** `0` */
  NEW: "0",
  /** `1` */
  PARTIAL_FILL: "1",
  /** `2` */
  FILL: "2",
  /** `3` */
  DONE_FOR_DAY: "3",
  /** `4` */
  CANCELED: "4",
  /** `5` */
  REPLACE: "5",
  /** `6` */
  PENDING_CANCEL: "6",
  /** `7` */
  STOPPED: "7",
  /** `8` */
  REJECTED: "8",
  /** `9` */
  SUSPENDED: "9",
  /** `A` */
  PENDING_NEW: "A",
  /** `B` */
  CALCULATED: "B",
  /** `C` */
  EXPIRED: "C",
  /** `D` */
  RESTATED: "D",
  /** `E` */
  PENDING_REPLACE: "E",
  /** `F` */
  TRADE: "F",
  /** `G` */
  TRADE_CORRECT: "G",
  /** `H` */
  TRADE_CANCEL: "H",
  /** `I` */
  ORDER_STATUS: "I",
  /** `J` */
  TRADE_IN_A_CLEARING_HOLD: "J",
  /** `K` */
  TRADE_HAS_BEEN_RELEASED_TO_CLEARING: "K",
  /** `L` */
  TRIGGERED_OR_ACTIVATED_BY_SYSTEM: "L",
  /** `a` */
  CANCELLED_BY_STP: "a",
  /** `b` */
  ORDER_CANCELLED_DUE_TO_COD_MECHANISM: "b",
  /** `n` */
  ORDER_CANCELLED_DUE_TO_POTENTIAL_TRADE_OUTSIDE_FSP_LIMITS: "n",
  /** `u` */
  ORDER_CANCELLED_DUE_TO_MARKET_MAKER_PROTECTION: "u",
  /** `v` */
  ORDER_CANCELLED_BY_CLEARING_RISK_MANAGER: "v",
  /** `w` */
  ORDER_CANCELLED_DUE_TO_TRADE_PRICE_VALIDATION: "w",
  /** `O` */
  ELIMINATED_BY_CORPORATE_EVENT: "O",
  /** `P` */
  CANCELLED_BY_MEMBER_RISK_MANAGER: "P",
  /** `U` */
  ORDER_CANCELLED_BY_MARKET_OPERATIONS: "U",
  /** `V` */
  CANCELLED_DUE_TO_KILL_COMMAND: "V",
  /** `X` */
  REMAINING_QUANTITY_KILLED: "X",
  /** `Y` */
  BEGINNING_OF_PAKO_PERIOD: "Y",
  /** `R` */
  RFQ_PARTIALLY_OR_FULLY_MATCHED_WITH_OTHER_COUNTERPARTS: "R",
} as const;
export type ExecType = (typeof ExecType)[keyof typeof ExecType];

/** Values of SettlCurrFxRateCalc (156, CHAR). */
export const SettlCurrFxRateCalc = {
  /** `M` */
  MULTIPLY: "M",
  /** `D` */
  DIVIDE: "D",
} as const;
export type SettlCurrFxRateCalc = (typeof SettlCurrFxRateCalc)[keyof typeof SettlCurrFxRateCalc];

/** Values of SecurityType (167, STRING). */
export const SecurityType = {
  /** `FUT` */
  FUTURE: "FUT",
  /** `OPT` */
  OPTION: "OPT",
  /** `MLEG` */
  SPREAD: "MLEG",
  /** `SPOT` */
  SPOT: "SPOT",
  /** `TBOND` */
  TBOND: "TBOND",
  /** `CUR` */
  CURRENCY: "CUR",
  /** `CS` */
  COMMON_STOCK: "CS",
  /** `INDEX` */
  INDEX: "INDEX",
  /** `NONE` */
  NONE: "NONE",
} as const;
export type SecurityType = (typeof SecurityType)[keyof typeof SecurityType];

/** Values of PutOrCall (201, INT). */
export const PutOrCall = {
  /** `0` */
  PUT: 0,
  /** `1` */
  CALL: 1,
} as const;
export type PutOrCall = (typeof PutOrCall)[keyof typeof PutOrCall];

/** Values of SubscriptionRequestType (263, CHAR). */
export const SubscriptionRequestType = {
  /** `0` */
  SNAPSHOT: "0",
  /** `1` */
  SNAPSHOT_PLUS_UPDATES: "1",
  /** `2` */
  DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST: "2",
} as const;
export type SubscriptionRequestType = (typeof SubscriptionRequestType)[keyof typeof SubscriptionRequestType];

/** Values of MarketDepth (264, INT). */
export const MarketDepth = {
  /** `0` */
  FULL_BOOK: 0,
  /** `1` */
  TOP_OF_BOOK: 1,
} as const;
export type MarketDepth = (typeof MarketDepth)[keyof typeof MarketDepth];

/** Values of MDUpdateType (265, INT). */
export const MDUpdateType = {
  /** `0` */
  FULL_REFRESH: 0,
  /** `1` */
  INCREMENTAL_REFRESH: 1,
} as const;
export type MDUpdateType = (typeof MDUpdateType)[keyof typeof MDUpdateType];

/** Values of AggregatedBook (266, BOOLEAN). */
export const AggregatedBook = {
  /** `N` */
  NO: false,
  /** `Y` */
  YES: true,
} as const;
export type AggregatedBook = (typeof AggregatedBook)[keyof typeof AggregatedBook];

/** Values of MDEntryType (269, CHAR). */
export const MDEntryType = {
  /** `0` */
  BID: "0",
  /** `1` */
  ASK: "1",
  /** `2` */
  TRADE: "2",
  /** `4` */
  OPENING_PRICE: "4",
  /** `5` */
  CLOSING_PRICE: "5",
  /** `6` */
  SETTLEMENT_PRICE: "6",
  /** `7` */
  TRADING_SESSION_HIGH_PRICE: "7",
  /** `8` */
  TRADING_SESSION_LOW_PRICE: "8",
  /** `9` */
  TRADING_SESSION_VWAP_PRICE: "9",
  /** `B` */
  TRADE_VOLUME: "B",
  /** `J` */
  EMPTY_BOOK: "J",
  /** `L` */
  LEG_TRADE: "L",
  /** `Y` */
  IMPLIED_BID: "Y",
  /** `Z` */
  IMPLIED_ASK: "Z",
  /** `m` */
  OTC_TRADE: "m",
  /** `p` */
  INDICATIVE_OPEN: "p",
  /** `q` */
  INDICATIVE_CLOSE: "q",
  /** `r` */
  INDICATIVE_BID: "r",
  /** `s` */
  INDICATIVE_ASK: "s",
  /** `t` */
  INDICATIVE_SETTLEMENT: "t",
  /** `u` */
  EXCHANGE_SENDING_TIME: "u",
  /** `v` */
  EXCHANGE_TRANSACT_TIME: "v",
  /** `w` */
  EXCHANGE_SEQ_NUM: "w",
  /** `x` */
  LAST_TRADED: "x",
  /** `A` */
  IMBALANCE: "A",
  /** `o` */
  MARKETBIDQTY: "o",
  /** `n` */
  MARKETASKQTY: "n",
} as const;
export type MDEntryType = (typeof MDEntryType)[keyof typeof MDEntryType];

/** Values of QuoteCondition (276, CHAR). */
export const QuoteCondition = {
  /** `A` */
  OPEN_ACTIVE: "A",
  /** `B` */
  CLOSED_INACTIVE: "B",
  /** `z` */
  SUSPENDED: "z",
} as const;
export type QuoteCondition = (typeof QuoteCondition)[keyof typeof QuoteCondition];

/** Values of MDUpdateAction (279, CHAR). */
export const MDUpdateAction = {
  /** `0` */
  NEW: "0",
  /** `1` */
  CHANGE: "1",
  /** `2` */
  DELETE: "2",
} as const;
export type MDUpdateAction = (typeof MDUpdateAction)[keyof typeof MDUpdateAction];

/** Values of QuoteStatus (297, INT). */
export const QuoteStatus = {
  /** `0` */
  ACCEPTED: 0,
  /** `5` */
  REJECTED: 5,
  /** `7` */
  EXPIRED: 7,
} as const;
export type QuoteStatus = (typeof QuoteStatus)[keyof typeof QuoteStatus];

/** Values of UnderlyingSecurityIDSource (305, STRING). */
export const UnderlyingSecurityIDSource = {
  /** `4` */
  ISIN_NUMBER: "4",
  /** `5` */
  RIC_CODE: "5",
  /** `8` */
  EXCHANGE_SECURITY_ID: "8",
  /** `91` */
  EXCHANGE_TICKER: "91",
  /** `96` */
  TT_SECURITY_ID: "96",
  /** `97` */
  ALIAS: "97",
  /** `98` */
  NAME: "98",
  /** `A` */
  BLOOMBERG_CODE: "A",
  /** `S` */
  OPENFIGI_ID: "S",
  /** `X` */
  SERIES_KEY: "X",
  /** `H` */
  CLEARING_HOUSE: "H",
} as const;
export type UnderlyingSecurityIDSource = (typeof UnderlyingSecurityIDSource)[keyof typeof UnderlyingSecurityIDSource];

/** Values of UnderlyingSecurityType (310, STRING). */
export const UnderlyingSecurityType = {
  /** `FUT` */
  FUTURE: "FUT",
  /** `OPT` */
  OPTION: "OPT",
  /** `MLEG` */
  SPREAD: "MLEG",
  /** `SPOT` */
  SPOT: "SPOT",
  /** `TBOND` */
  TBOND: "TBOND",
  /** `CUR` */
  CURRENCY: "CUR",
  /** `CS` */
  COMMON_STOCK: "CS",
  /** `NONE` */
  NONE: "NONE",
} as const;
export type UnderlyingSecurityType = (typeof UnderlyingSecurityType)[keyof typeof UnderlyingSecurityType];

/** Values of SecurityRequestType (321, INT). */
export const SecurityRequestType = {
  /** `0` */
  REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS: 0,
  /** `1` */
  REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED: 1,
  /** `2` */
  REQUEST_LIST_SECURITY_TYPES: 2,
  /** `3` */
  REQUEST_LIST_SECURITIES: 3,
} as const;
export type SecurityRequestType = (typeof SecurityRequestType)[keyof typeof SecurityRequestType];

/** Values of SecurityResponseType (323, INT). */
export const SecurityResponseType = {
  /** `1` */
  ACCEPT_SECURITY_PROPOSAL_AS_IS: 1,
  /** `2` */
  ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE: 2,
  /** `3` */
  LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST: 3,
  /** `4` */
  LIST_OF_SECURITIES_RETURNED_PER_REQUEST: 4,
  /** `5` */
  REJECT_SECURITY_PROPOSAL: 5,
  /** `6` */
  CAN_NOT_MATCH_SELECTION_CRITERIA: 6,
} as const;
export type SecurityResponseType = (typeof SecurityResponseType)[keyof typeof SecurityResponseType];

/** Values of SecurityTradingStatus (326, INT). */
export const SecurityTradingStatus = {
  /** `2` */
  TRADING_HALT: 2,
  /** `9` */
  CIRCUIT_BREAKER: 9,
  /** `17` */
  READY_TO_TRADE: 17,
  /** `18` */
  NOT_AVAILABLE_FOR_TRADING: 18,
  /** `20` */
  UNKNOWN_OR_INVALID: 20,
  /** `21` */
  PREOPEN: 21,
  /** `23` */
  FAST_MARKET: 23,
  /** `98` */
  POST_CLOSE: 98,
  /** `99` */
  PRE_TRADE: 99,
} as const;
export type SecurityTradingStatus = (typeof SecurityTradingStatus)[keyof typeof SecurityTradingStatus];

/** Values of SessionRejectReason (373, INT). */
export const SessionRejectReason = {
  /** `0` */
  INVALID_TAG_NUMBER: 0,
  /** `1` */
  REQUIRED_TAG_MISSING: 1,
  /** `10` */
  SENDINGTIME_ACCURACY_PROBLEM: 10,
  /** `11` */
  INVALID_MSGTYPE: 11,
  /** `2` */
  TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE: 2,
  /** `3` */
  UNDEFINED_TAG: 3,
  /** `4` */
  TAG_SPECIFIED_WITHOUT_A_VALUE: 4,
  /** `5` */
  VALUE_IS_INCORRECT: 5,
  /** `6` */
  INCORRECT_DATA_FORMAT_FOR_VALUE: 6,
  /** `7` */
  DECRYPTION_PROBLEM: 7,
  /** `8` */
  SIGNATURE_PROBLEM: 8,
  /** `9` */
  COMPID_PROBLEM: 9,
  /** `99` */
  OTHER: 99,
} as const;
export type SessionRejectReason = (typeof SessionRejectReason)[keyof typeof SessionRejectReason];

/** Values of ExecRestatementReason (378, INT). */
export const ExecRestatementReason = {
  /** `0` */
  GT_CORPORATE_ACTION: 0,
  /** `1` */
  GT_RENEWAL: 1,
  /** `2` */
  VERBAL_CHANGE: 2,
  /** `3` */
  REPRICING_OF_ORDER: 3,
  /** `4` */
  BROKER_OPTION: 4,
  /** `5` */
  PARTIAL_DECLINE_OF_ORDERQTY: 5,
  /** `6` */
  CANCEL_ON_TRADING_HALT: 6,
  /** `7` */
  CANCEL_ON_SYSTEM_FAILURE: 7,
  /** `8` */
  MARKET: 8,
  /** `9` */
  CANCEL_NOT_BEST: 9,
  /** `10` */
  WAREHOUSE_RECAP: 10,
  /** `11` */
  PEG_REFRESH: 11,
  /** `50` */
  CONTROL_USER_ACTIVITY: 50,
  /** `51` */
  CORPORATE_MANAGER_ACTIVITY: 51,
  /** `52` */
  BRANCH_MANAGER_ACTIVITY: 52,
  /** `53` */
  EXCHANGE_AND_FIX_SERVER_CONNECTION_DOWN: 53,
  /** `99` */
  OTHER: 99,
  /** `100` */
  CANCEL_ON_DISCONNECT: 100,
  /** `103` */
  CANCEL_RESTING_SMP: 103,
  /** `104` */
  CANCEL_FROM_CREDIT_VIOLATION: 104,
  /** `105` */
  CANCEL_FROM_FIRMSOFT: 105,
  /** `106` */
  CANCEL_FROM_RISK: 106,
  /** `107` */
  CANCEL_AGGRESSING_SMP: 107,
  /** `108` */
  CANCEL_FROM_MIN_LOT_SIZE: 108,
  /** `109` */
  EXEC_RESTATEMENT_REASON_CANCEL_BY_SYSTEM: 109,
  /** `110` */
  EXEC_RESTATEMENT_REASON_CANCEL_BY_PROXY: 110,
  /** `111` */
  EXEC_RESTATEMENT_REASON_CANCEL_ORDER_EXPIRED: 111,
  /** `112` */
  EXEC_RESTATEMENT_REASON_CANCEL_OUTSIDE_PRICE_LIMITS: 112,
  /** `113` */
  EXEC_RESTATEMENT_REASON_CANCEL_SESSION_TRANSITION: 113,
  /** `114` */
  EXEC_RESTATEMENT_REASON_CANCEL_AUCTION_DELETE: 114,
  /** `115` */
  EXEC_RESTATEMENT_REASON_CANCEL_OTHER: 115,
  /** `116` */
  ORDER_PASSING_REQUEST_ACCEPTED: 116,
  /** `117` */
  ORDER_PASSING_REQUEST_REJECTED: 117,
  /** `118` */
  INCOMING_ORDER_SELF_MATCH_PREVENTION: 118,
  /** `119` */
  RESTING_ORDER_SELF_MATCH_PREVENTION: 119,
  /** `120` */
  CANCEL_DUE_TO_SELF_MATCH_PREVENTION: 120,
  /** `121` */
  EXEC_RESTATEMENT_REASON_GTC_GTD_CARRYOVER: 121,
  /** `122` */
  EXEC_RESTATEMENT_REASON_REDUCTION_OF_ORDQTY: 122,
  /** `123` */
  EXEC_RESTATEMENT_REASON_PRICE_SLIDING_REPRICE: 123,
  /** `124` */
  EXEC_RESTATEMENT_REASON_STATE_CHANGE: 124,
  /** `125` */
  ORDER_PASSING_REQUEST_INITIATE: 125,
  /** `126` */
  ORDER_PASSING_REQUEST_UNDO: 126,
  /** `127` */
  CANCEL_FROM_EXCHANGE_WEBSITE: 127,
  /** `9000` */
  EXEC_RESTATEMENT_REASON_UNSOLICITED_ORDER_RECOVERY: 9000,
  /** `9001` */
  EXEC_RESTATEMENT_REASON_TIMEOUT: 9001,
  /** `9002` */
  EXEC_RESTATEMENT_REASON_PENDING: 9002,
  /** `9003` */
  EXEC_RESTATEMENT_REASON_REVIVED: 9003,
} as const;
export type ExecRestatementReason = (typeof ExecRestatementReason)[keyof typeof ExecRestatementReason];

/** Values of BusinessRejectReason (380, INT). */
export const BusinessRejectReason = {
  /** `0` */
  OTHER: 0,
  /** `1` */
  UNKOWN_ID: 1,
  /** `2` */
  UNKNOWN_SECURITY: 2,
  /** `3` */
  UNSUPPORTED_MESSAGE_TYPE: 3,
  /** `4` */
  APPLICATION_NOT_AVAILABLE: 4,
  /** `5` */
  CONDITIONALLY_REQUIRED_FIELD_MISSING: 5,
} as const;
export type BusinessRejectReason = (typeof BusinessRejectReason)[keyof typeof BusinessRejectReason];

/** Values of PriceType (423, INT). */
export const PriceType = {
  /** `1` */
  PERCENTAGE: 1,
  /** `2` */
  PER_UNIT: 2,
  /** `3` */
  FIXED_AMOUNT: 3,
  /** `4` */
  DISCOUNT: 4,
  /** `5` */
  PREMIUM: 5,
  /** `6` */
  SPREAD: 6,
  /** `7` */
  TED_PRICE: 7,
  /** `8` */
  TED_YIELD: 8,
  /** `9` */
  YIELD: 9,
  /** `10` */
  FIXED_CABINET_TRADE_PRICE: 10,
  /** `11` */
  VARIABLE_CABINET_TRADE_PRICE: 11,
} as const;
export type PriceType = (typeof PriceType)[keyof typeof PriceType];

/** Values of CxlRejResponseTo (434, CHAR). */
export const CxlRejResponseTo = {
  /** `1` */
  ORDER_CANCEL_REQUEST: "1",
  /** `2` */
  ORDER_CANCEL_REPLACE_REQUEST: "2",
  /** `3` */
  QUOTE_CANCEL: "3",
  /** `4` */
  QUOTE_REPLACE: "4",
} as const;
export type CxlRejResponseTo = (typeof CxlRejResponseTo)[keyof typeof CxlRejResponseTo];

/** Values of MultiLegReportingType (442, CHAR). */
export const MultiLegReportingType = {
  /** `1` */
  SINGLE_SECURITY: "1",
  /** `2` */
  INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY: "2",
  /** `3` */
  MULTI_LEG_SECURITY: "3",
} as const;
export type MultiLegReportingType = (typeof MultiLegReportingType)[keyof typeof MultiLegReportingType];

/** Values of PartyIDSource (447, CHAR). */
export const PartyIDSource = {
  /** `1` */
  KOREAN_INVESTOR_ID: "1",
  /** `2` */
  TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII_FID: "2",
  /** `3` */
  TAIWANESE_TRADING_ACCT: "3",
  /** `4` */
  MALAYSIAN_CENTRAL_DEPOSITORY: "4",
  /** `5` */
  CHINESE_INVESTOR_ID: "5",
  /** `6` */
  UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER: "6",
  /** `7` */
  US_SOCIAL_SECURITY_NUMBER: "7",
  /** `8` */
  US_EMPLOYER_OR_TAX_ID_NUMBER: "8",
  /** `9` */
  AUSTRALIAN_BUSINESS_NUMBER: "9",
  /** `A` */
  AUSTRALIAN_TAX_FILE_NUMBER: "A",
  /** `B` */
  BIC: "B",
  /** `C` */
  GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER: "C",
  /** `D` */
  PROPRIETARY: "D",
  /** `E` */
  ISO_COUNTRY_CODE: "E",
  /** `F` */
  SETTLEMENT_ENTITY_LOCATION: "F",
  /** `G` */
  MIC: "G",
  /** `H` */
  CSD_PARTICIPANT_MEMBER_CODE: "H",
  /** `I` */
  DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT: "I",
  /** `P` */
  SHORT_CODE_IDENTIFIER: "P",
  /** `N` */
  LEGAL_ENTITY_ID: "N",
} as const;
export type PartyIDSource = (typeof PartyIDSource)[keyof typeof PartyIDSource];

/** Values of PartyRole (452, INT). */
export const PartyRole = {
  /** `1` */
  EXECUTING_FIRM: 1,
  /** `10` */
  SETTLEMENT_LOCATION: 10,
  /** `11` */
  ORDER_ORIGINATION_TRADER: 11,
  /** `12` */
  EXECUTING_TRADER: 12,
  /** `122` */
  INVESTMENT_DECISION_MAKER: 122,
  /** `13` */
  ORDER_ORIGINATION_FIRM: 13,
  /** `14` */
  GIVEUP_CLEARING_FIRM: 14,
  /** `15` */
  CORRESPONDANT_CLEARING_FIRM: 15,
  /** `16` */
  EXECUTING_SYSTEM: 16,
  /** `17` */
  CONTRA_FIRM: 17,
  /** `18` */
  CONTRA_CLEARING_FIRM: 18,
  /** `19` */
  SPONSORING_FIRM: 19,
  /** `2` */
  BROKER_OF_CREDIT: 2,
  /** `20` */
  UNDERLYING_CONTRA_FIRM: 20,
  /** `21` */
  CLEARING_ORGANIZATION: 21,
  /** `22` */
  EXCHANGE: 22,
  /** `24` */
  CUSTOMER_ACCOUNT: 24,
  /** `25` */
  CORRESPONDENT_CLEARING_ORGANIZATION: 25,
  /** `26` */
  CORRESPONDENT_BROKER: 26,
  /** `27` */
  BUYER_SELLER: 27,
  /** `28` */
  CUSTODIAN: 28,
  /** `29` */
  INTERMEDIARY: 29,
  /** `3` */
  CLIENT_ID: 3,
  /** `30` */
  AGENT: 30,
  /** `31` */
  SUB_CUSTODIAN: 31,
  /** `32` */
  BENEFICIARY: 32,
  /** `33` */
  INTERESTED_PARTY: 33,
  /** `34` */
  REGULATORY_BODY: 34,
  /** `35` */
  LIQUIDITY_PROVIDER: 35,
  /** `36` */
  ENTERING_TRADER: 36,
  /** `37` */
  CONTRA_TRADER: 37,
  /** `38` */
  POSITION_ACCOUNT: 38,
  /** `4` */
  CLEARING_FIRM: 4,
  /** `5` */
  INVESTOR_ID: 5,
  /** `6` */
  INTRODUCING_FIRM: 6,
  /** `7` */
  ENTERING_FIRM: 7,
  /** `8` */
  LOCATE: 8,
  /** `9` */
  FUND_MANAGER_CLIENT_ID: 9,
  /** `60` */
  INTRODUCING_BROKER: 60,
  /** `41` */
  CONTRA_POSITION_ACCOUNT: 41,
  /** `42` */
  CONTRA_EXCHANGE: 42,
  /** `43` */
  INTERNAL_CARRY_ACCOUNT: 43,
  /** `44` */
  ORDER_ENTRY_OPERATOR_ID: 44,
  /** `45` */
  SECONDARY_ACCOUNT_NUMBER: 45,
  /** `46` */
  FOREIGN_FIRM: 46,
  /** `47` */
  THIRD_PARTY_ALLOCATION_FIRM: 47,
  /** `48` */
  CLAIMING_ACCOUNT: 48,
  /** `49` */
  ASSET_MANAGER: 49,
  /** `50` */
  PLEDGOR_ACCOUNT: 50,
  /** `51` */
  PLEDGEE_ACCOUNT: 51,
  /** `52` */
  LARGE_TRADER_REPORTABLE_ACCOUNT: 52,
  /** `53` */
  TRADER_MNEMONIC: 53,
  /** `54` */
  SENDER_LOCATION: 54,
  /** `55` */
  SESSION_ID: 55,
  /** `56` */
  ACCEPTABLE_COUNTERPARTY: 56,
  /** `57` */
  UNACCEPTABLE_COUNTERPARTY: 57,
  /** `58` */
  ENTERING_UNIT: 58,
  /** `59` */
  EXECUTING_UNIT: 59,
  /** `39` */
  CONTRA_INVESTOR_ID: 39,
  /** `40` */
  TRANSFER_TO_FIRM: 40,
  /** `61` */
  QUOTE_ORIGINATOR: 61,
  /** `62` */
  REPORT_ORIGINATOR: 62,
  /** `63` */
  SYSTEMATIC_INTERNALISER: 63,
  /** `64` */
  MULTILATERAL_TRADING_FACILITY: 64,
  /** `65` */
  REGULATED_MARKET: 65,
  /** `66` */
  MARKET_MAKER: 66,
  /** `67` */
  INVESTMENT_FIRM: 67,
  /** `68` */
  HOST_COMPETENT_AUTHORITY: 68,
  /** `69` */
  HOME_COMPETENT_AUTHORITY: 69,
  /** `70` */
  COMPETENT_AUTHORITY_OF_THE_MOST_RELEVANT_MARKET_IN_TERMS_OF_LIQUIDITY: 70,
  /** `71` */
  COMPETENT_AUTHORITY_OF_THE_TRANSACTION: 71,
  /** `72` */
  REPORTING_INTERMEDIARY: 72,
  /** `73` */
  EXECUTION_VENUE: 73,
  /** `74` */
  MARKET_DATA_ENTRY_ORIGINATOR: 74,
  /** `75` */
  LOCATION_ID: 75,
  /** `76` */
  DESK_ID: 76,
  /** `77` */
  MARKET_DATA_MARKET: 77,
  /** `78` */
  ALLOCATION_ENTITY: 78,
  /** `79` */
  PRIME_BROKER_PROVIDING_GENERAL_TRADE_SERVICES: 79,
  /** `80` */
  STEP_OUT_FIRM: 80,
  /** `81` */
  BROKERCLEARINGID: 81,
  /** `82` */
  CENTRAL_REGISTRATION_DEPOSITORY: 82,
  /** `83` */
  CLEARING_ACCOUNT: 83,
  /** `84` */
  ACCEPTABLE_SETTLING_COUNTERPARTY: 84,
  /** `85` */
  UNACCEPTABLE_SETTLING_COUNTERPARTY: 85,
  /** `118` */
  PARTY_ROLE_DECISION_MAKER: 118,
  /** `119` */
  PARTY_ROLE_CLIENT_ID_HOUSE: 119,
  /** `200` */
  ACCOUNT_CODE: 200,
  /** `201` */
  TAKEUP_FIRM: 201,
  /** `202` */
  CLEARING_INSTRUCTION: 202,
  /** `203` */
  CUSTOMER_INFO: 203,
  /** `204` */
  ALLOCATION_ENTITY_ID: 204,
  /** `205` */
  ACCOUNT_TYPE: 205,
  /** `206` */
  GIVEUP_FIRM: 206,
  /** `207` */
  MIFID_ID: 207,
  /** `208` */
  COMPOSITE_MIFID_ID: 208,
  /** `209` */
  CTI_CODE: 209,
  /** `210` */
  LMA_CLEARING_ACCOUNT: 210,
  /** `211` */
  AUTHORIZED_TRADER_ID: 211,
  /** `212` */
  FREQUENT_TRADER_ID: 212,
  /** `213` */
  PARTY_ROLE_USER: 213,
  /** `214` */
  PARTY_ROLE_MEMBER: 214,
  /** `215` */
  PARTY_ROLE_TRADING_MEMBER: 215,
  /** `216` */
  PARTY_ROLE_CLEARING_MEMBER: 216,
  /** `217` */
  PARTY_ROLE_ACTING_USER: 217,
  /** `218` */
  PARTY_ROLE_TRADER_ID: 218,
  /** `219` */
  PARTY_ROLE_OWNER_TYPE: 219,
  /** `220` */
  PARTY_ROLE_ROUTING_MEMBER_ID: 220,
  /** `221` */
  GIVEUP_QUALIFIER: 221,
  /** `222` */
  ALGO_STRATEGY_TYPE: 222,
  /** `223` */
  SECONDARY_CLIENT_ID: 223,
  /** `224` */
  SECONDARY_EXECUTING_TRADER: 224,
  /** `300` */
  INVESTMENT_DECISION_IN_FIRM: 300,
  /** `301` */
  EXECUTION_DECISION_IN_FIRM: 301,
  /** `302` */
  INVESTMENT_DECISION_COUNTRY: 302,
  /** `303` */
  EXECUTION_DECISION_COUNTRY: 303,
  /** `304` */
  PARTY_ROLE_COUNTRY_CODE: 304,
} as const;
export type PartyRole = (typeof PartyRole)[keyof typeof PartyRole];

/** Values of SecurityAltIDSource (456, STRING). */
export const SecurityAltIDSource = {
  /** `4` */
  ISIN_NUMBER: "4",
  /** `5` */
  RIC_CODE: "5",
  /** `8` */
  EXCHANGE_SECURITY_ID: "8",
  /** `91` */
  EXCHANGE_TICKER: "91",
  /** `92` */
  TT_PRODUCT_FAMILY_ID: "92",
  /** `93` */
  TT_Product_ID: "93",
  /** `94` */
  ALT_SYMBOL: "94",
  /** `95` */
  CLEARPORT: "95",
  /** `97` */
  ALIAS: "97",
  /** `98` */
  NAME: "98",
  /** `99` */
  SECURITY_GROUP: "99",
  /** `100` */
  ENERGY_IDENTIFIER_CODE: "100",
  /** `A` */
  BLOOMBERG_CODE: "A",
  /** `S` */
  OPENFIGI_ID: "S",
  /** `H` */
  CLEARING_HOUSE: "H",
  /** `1` */
  CUSIP: "1",
  /** `X` */
  SERIES_KEY: "X",
} as const;
export type SecurityAltIDSource = (typeof SecurityAltIDSource)[keyof typeof SecurityAltIDSource];

/** Values of Product (460, INT). */
export const Product = {
  /** `1` */
  AGENCY: 1,
  /** `2` */
  COMMODITY: 2,
  /** `3` */
  CORPORATE: 3,
  /** `4` */
  CURRENCY: 4,
  /** `5` */
  EQUITY: 5,
  /** `6` */
  GOVERNMENT: 6,
  /** `7` */
  INDEX: 7,
  /** `8` */
  LOAN: 8,
  /** `9` */
  MONEYMARKET: 9,
  /** `10` */
  MORTGAGE: 10,
  /** `11` */
  MUNICIPAL: 11,
  /** `12` */
  OTHER: 12,
  /** `13` */
  FINANCING: 13,
  /** `14` */
  ENERGY: 14,
} as const;
export type Product = (typeof Product)[keyof typeof Product];

/** Values of TradeReportTransType (487, INT). */
export const TradeReportTransType = {
  /** `0` */
  NEW: 0,
  /** `1` */
  CANCEL: 1,
  /** `2` */
  REPLACE: 2,
  /** `3` */
  RELEASE: 3,
  /** `4` */
  REVERSE: 4,
  /** `5` */
  CANCEL_DUE_TO_BACK_OUT_OF_TRADE: 5,
  /** `101` */
  INQUIRE: 101,
  /** `102` */
  ACCEPT: 102,
  /** `103` */
  APPROVE: 103,
  /** `999` */
  UNKNOWN: 999,
} as const;
export type TradeReportTransType = (typeof TradeReportTransType)[keyof typeof TradeReportTransType];

/** Values of NestedPartyIDSource (525, CHAR). */
export const NestedPartyIDSource = {
  /** `1` */
  KOREAN_INVESTOR_ID: "1",
  /** `2` */
  TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII_FID: "2",
  /** `3` */
  TAIWANESE_TRADING_ACCT: "3",
  /** `4` */
  MALAYSIAN_CENTRAL_DEPOSITORY: "4",
  /** `5` */
  CHINESE_INVESTOR_ID: "5",
  /** `6` */
  UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER: "6",
  /** `7` */
  US_SOCIAL_SECURITY_NUMBER: "7",
  /** `8` */
  US_EMPLOYER_OR_TAX_ID_NUMBER: "8",
  /** `9` */
  AUSTRALIAN_BUSINESS_NUMBER: "9",
  /** `A` */
  AUSTRALIAN_TAX_FILE_NUMBER: "A",
  /** `B` */
  BIC: "B",
  /** `C` */
  GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER: "C",
  /** `D` */
  PROPRIETARY: "D",
  /** `E` */
  ISO_COUNTRY_CODE: "E",
  /** `F` */
  SETTLEMENT_ENTITY_LOCATION: "F",
  /** `G` */
  MIC: "G",
  /** `H` */
  CSD_PARTICIPANT_MEMBER_CODE: "H",
  /** `I` */
  DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT: "I",
} as const;
export type NestedPartyIDSource = (typeof NestedPartyIDSource)[keyof typeof NestedPartyIDSource];

/** Values of OrderCapacity (528, CHAR). */
export const OrderCapacity = {
  /** `A` */
  AGENCY: "A",
  /** `G` */
  PROPRIETARY: "G",
  /** `I` */
  INDIVIDUAL: "I",
  /** `P` */
  PRINCIPAL: "P",
  /** `R` */
  RISKLESS_PRINCIPAL: "R",
  /** `W` */
  AGENT_FOR_OTHER_MEMBER: "W",
} as const;
export type OrderCapacity = (typeof OrderCapacity)[keyof typeof OrderCapacity];

/** Values of OrderRestriction (529, CHAR). */
export const OrderRestriction = {
  /** `1` */
  PROGRAM_TRADE: "1",
  /** `2` */
  INDEX_ARBITAGE: "2",
  /** `3` */
  NON_INDEX_ARBITAGE: "3",
  /** `4` */
  COMPETING_MARKET_MAKER: "4",
  /** `5` */
  ACTING_MARKET_MAKER: "5",
  /** `6` */
  ACTING_MARKET_MAKER_UNDERLYING_SECURITY: "6",
  /** `7` */
  FOREIGN_ENTITY: "7",
  /** `8` */
  EXTERNAL_MARKET_PARTICIPANT: "8",
  /** `9` */
  EXTERNAL_MARKET_LINKAGE: "9",
  /** `A` */
  RISKLESS_ARBITAGE: "A",
  /** `B` */
  HOLDING: "B",
  /** `C` */
  PRICE_STABILIZATION: "C",
  /** `D` */
  NON_ALGORITHMIC: "D",
  /** `E` */
  ALGORITHMIC: "E",
} as const;
export type OrderRestriction = (typeof OrderRestriction)[keyof typeof OrderRestriction];

/** Values of QuoteType (537, INT). */
export const QuoteType = {
  /** `0` */
  INDICATIVE: 0,
  /** `1` */
  TRADABLE: 1,
  /** `99` */
  CROSS_TRADE_REQUEST: 99,
  /** `255` */
  UNKNOWN: 255,
} as const;
export type QuoteType = (typeof QuoteType)[keyof typeof QuoteType];

/** Values of NestedPartyRole (538, INT). */
export const NestedPartyRole = {
  /** `1` */
  EXECUTING_FIRM: 1,
  /** `2` */
  BROKER_OF_CREDIT: 2,
  /** `3` */
  CLIENT_ID: 3,
  /** `4` */
  CLEARING_FIRM: 4,
  /** `5` */
  INVESTOR_ID: 5,
  /** `6` */
  INTRODUCING_FIRM: 6,
  /** `7` */
  ENTERING_FIRM: 7,
  /** `8` */
  LOCATE_LENDING_FIRM: 8,
  /** `9` */
  FUND_MANAGER_CLIENT_ID: 9,
  /** `10` */
  SETTLEMENT_LOCATION: 10,
  /** `11` */
  ORDER_ORIGINATION_TRADER: 11,
  /** `12` */
  EXECUTING_TRADER: 12,
  /** `13` */
  ORDER_ORIGINATION_FIRM: 13,
  /** `14` */
  GIVEUP_CLEARING_FIRM: 14,
  /** `15` */
  CORRESPONDANT_CLEARING_FIRM: 15,
  /** `16` */
  EXECUTING_SYSTEM: 16,
  /** `17` */
  CONTRA_FIRM: 17,
  /** `18` */
  CONTRA_CLEARING_FIRM: 18,
  /** `19` */
  SPONSORING_FIRM: 19,
  /** `20` */
  UNDERLYING_CONTRA_FIRM: 20,
  /** `21` */
  CLEARING_ORGANIZATION: 21,
  /** `22` */
  EXCHANGE: 22,
  /** `24` */
  CUSTOMER_ACCOUNT: 24,
  /** `25` */
  CORRESPONDENT_CLEARING_ORGANIZATION: 25,
  /** `26` */
  CORRESPONDENT_BROKER: 26,
  /** `27` */
  BUYER_SELLER: 27,
  /** `28` */
  CUSTODIAN: 28,
  /** `29` */
  INTERMEDIARY: 29,
  /** `30` */
  AGENT: 30,
  /** `31` */
  SUB_CUSTODIAN: 31,
  /** `32` */
  BENEFICIARY: 32,
  /** `33` */
  INTERESTED_PARTY: 33,
  /** `34` */
  REGULATORY_BODY: 34,
  /** `35` */
  LIQUIDITY_PROVIDER: 35,
  /** `36` */
  ENTERING_TRADER: 36,
  /** `37` */
  CONTRA_TRADER: 37,
  /** `38` */
  POSITION_ACCOUNT: 38,
} as const;
export type NestedPartyRole = (typeof NestedPartyRole)[keyof typeof NestedPartyRole];

/** Values of CrossType (549, INT). */
export const CrossType = {
  /** `1` */
  CROSS_AON: 1,
  /** `2` */
  CROSS_IOC: 2,
  /** `3` */
  CROSS_ONE_SIDE: 3,
  /** `4` */
  CROSS_SAME_PRICE: 4,
} as const;
export type CrossType = (typeof CrossType)[keyof typeof CrossType];

/** Values of TradeRequestType (569, INT). */
export const TradeRequestType = {
  /** `0` */
  ALL_TRADES: 0,
  /** `1` */
  MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST: 1,
  /** `2` */
  UNMATCHED_TRADES_THAT_MATCH_CRITERIA: 2,
  /** `3` */
  UNREPORTED_TRADES_THAT_MATCH_CRITERIA: 3,
  /** `4` */
  ADVISORIES_THAT_MATCH_CRITERIA: 4,
} as const;
export type TradeRequestType = (typeof TradeRequestType)[keyof typeof TradeRequestType];

/** Values of PreviouslyReported (570, BOOLEAN). */
export const PreviouslyReported = {
  /** `N` */
  NOT_REPORTED_TO_COUNTERPARTY: false,
  /** `Y` */
  PERVIOUSLY_REPORTED_TO_COUNTERPARTY: true,
} as const;
export type PreviouslyReported = (typeof PreviouslyReported)[keyof typeof PreviouslyReported];

/** Values of CustOrderCapacity (582, INT). */
export const CustOrderCapacity = {
  /** `1` */
  MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT: 1,
  /** `2` */
  CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT: 2,
  /** `3` */
  MEMBER_TRADING_FOR_ANOTHER_MEMBER: 3,
  /** `4` */
  ALL_OTHER: 4,
} as const;
export type CustOrderCapacity = (typeof CustOrderCapacity)[keyof typeof CustOrderCapacity];

/** Values of LegIDSource (603, STRING). */
export const LegIDSource = {
  /** `1` */
  CUSIP: "1",
  /** `4` */
  ISIN_NUMBER: "4",
  /** `5` */
  RIC_CODE: "5",
  /** `8` */
  EXCHANGE_SECURITY_ID: "8",
  /** `96` */
  TT_SECURITY_ID: "96",
  /** `97` */
  ALIAS: "97",
  /** `98` */
  NAME: "98",
  /** `X` */
  SERIES_KEY: "X",
  /** `91` */
  EXCHANGE_TICKER: "91",
  /** `A` */
  BLOOMBERG_CODE: "A",
  /** `S` */
  OPENFIGI_ID: "S",
  /** `H` */
  CLEARING_HOUSE: "H",
} as const;
export type LegIDSource = (typeof LegIDSource)[keyof typeof LegIDSource];

/** Values of LegSecurityAltIDSource (606, STRING). */
export const LegSecurityAltIDSource = {
  /** `4` */
  ISIN_NUMBER: "4",
  /** `5` */
  RIC_CODE: "5",
  /** `8` */
  EXCHANGE_SECURITY_ID: "8",
  /** `94` */
  ALT_SYMBOL: "94",
  /** `95` */
  CLEARPORT: "95",
  /** `97` */
  ALIAS: "97",
  /** `98` */
  NAME: "98",
  /** `99` */
  SECURITY_GROUP: "99",
  /** `91` */
  EXCHANGE_TICKER: "91",
  /** `A` */
  BLOOMBERG_CODE: "A",
  /** `S` */
  OPENFIGI_ID: "S",
  /** `H` */
  CLEARING_HOUSE: "H",
  /** `1` */
  CUSIP: "1",
  /** `X` */
  SERIES_KEY: "X",
} as const;
export type LegSecurityAltIDSource = (typeof LegSecurityAltIDSource)[keyof typeof LegSecurityAltIDSource];

/** Values of LegProduct (607, INT). */
export const LegProduct = {
  /** `1` */
  AGENCY: 1,
  /** `2` */
  COMMODITY: 2,
  /** `3` */
  CORPORATE: 3,
  /** `4` */
  CURRENCY: 4,
  /** `5` */
  EQUITY: 5,
  /** `6` */
  GOVERNMENT: 6,
  /** `7` */
  INDEX: 7,
  /** `8` */
  LOAN: 8,
  /** `9` */
  MONEYMARKET: 9,
  /** `10` */
  MORTGAGE: 10,
  /** `11` */
  MUNICIPAL: 11,
  /** `12` */
  OTHER: 12,
  /** `13` */
  FINANCING: 13,
  /** `14` */
  ENERGY: 14,
} as const;
export type LegProduct = (typeof LegProduct)[keyof typeof LegProduct];

/** Values of LegSecurityType (609, STRING). */
export const LegSecurityType = {
  /** `FUT` */
  FUTURE: "FUT",
  /** `OPT` */
  OPTION: "OPT",
  /** `MLEG` */
  SPREAD: "MLEG",
  /** `SPOT` */
  SPOT: "SPOT",
  /** `TBOND` */
  TBOND: "TBOND",
  /** `CS` */
  COMMON_STOCK: "CS",
  /** `NONE` */
  NONE: "NONE",
} as const;
export type LegSecurityType = (typeof LegSecurityType)[keyof typeof LegSecurityType];

/** Values of TradingSessionSubID (625, STRING). */
export const TradingSessionSubID = {
  /** `1` */
  PRE_TRADING: "1",
  /** `2` */
  OPENING_OR_OPENING_AUCTION: "2",
  /** `3` */
  CONTINUOUS: "3",
  /** `4` */
  CLOSING_OR_CLOSING_AUCTION: "4",
  /** `5` */
  POST_TRADING: "5",
  /** `6` */
  INTRADAY_AUCTION: "6",
  /** `7` */
  QUIESCENT: "7",
} as const;
export type TradingSessionSubID = (typeof TradingSessionSubID)[keyof typeof TradingSessionSubID];

/** Values of AllocType (626, INT). */
export const AllocType = {
  /** `1` */
  CALCULATED: 1,
  /** `2` */
  PRELIMINARY: 2,
  /** `5` */
  READY_TO_BOOK: 5,
  /** `7` */
  WAREHOUSE_INSTRUCTION: 7,
  /** `8` */
  REQUEST_TO_INTERMEDIARY: 8,
} as const;
export type AllocType = (typeof AllocType)[keyof typeof AllocType];

/** Values of AllocAcctIDSource (661, INT). */
export const AllocAcctIDSource = {
  /** `4` */
  OMGEO: 4,
  /** `99` */
  OTHER: 99,
} as const;
export type AllocAcctIDSource = (typeof AllocAcctIDSource)[keyof typeof AllocAcctIDSource];

/** Values of TradeRequestResult (749, INT). */
export const TradeRequestResult = {
  /** `0` */
  SUCCESSFUL: 0,
  /** `1` */
  INVALID_OR_UNKNOWN_INSTRUMENT: 1,
  /** `2` */
  INVALID_TYPE_REQUESTED: 2,
  /** `3` */
  INVALID_PARTIES: 3,
  /** `4` */
  INVALID_TRANSPORT_TYPE_REQUESTED: 4,
  /** `5` */
  INVALID_DESTINATION_REQUESTED: 5,
  /** `8` */
  TRADE_REQUEST_TYPE_NOT_SUPPORTED: 8,
  /** `9` */
  UNAUTHORIZED_FOR_TRADE_CAPTURE_REPORT_REQUEST: 9,
  /** `99` */
  OTHER: 99,
} as const;
export type TradeRequestResult = (typeof TradeRequestResult)[keyof typeof TradeRequestResult];

/** Values of TradeRequestStatus (750, INT). */
export const TradeRequestStatus = {
  /** `0` */
  ACCEPTED: 0,
  /** `1` */
  COMPLETED: 1,
  /** `2` */
  REJECTED: 2,
} as const;
export type TradeRequestStatus = (typeof TradeRequestStatus)[keyof typeof TradeRequestStatus];

/** Values of TradeReportRejectReason (751, INT). */
export const TradeReportRejectReason = {
  /** `0` */
  SUCCESSFUL: 0,
  /** `1` */
  INVALID_PARTY_INFORMATION: 1,
  /** `2` */
  UNKNOWN_INSTRUMENT: 2,
  /** `3` */
  UNAUTHORIZED_TO_REPORT_TRADES: 3,
  /** `4` */
  INVALID_TRADE_TYPE: 4,
  /** `99` */
  OTHER: 99,
} as const;
export type TradeReportRejectReason = (typeof TradeReportRejectReason)[keyof typeof TradeReportRejectReason];

/** Values of BenchmarkSecurityIDSource (761, STRING). */
export const BenchmarkSecurityIDSource = {
  /** `1` */
  CUSIP: "1",
  /** `4` */
  ISIN_NUMBER: "4",
  /** `5` */
  RIC_CODE: "5",
  /** `8` */
  EXCHANGE_SECURITY_ID: "8",
  /** `91` */
  EXCHANGE_TICKER: "91",
  /** `96` */
  TT_SECURITY_ID: "96",
  /** `97` */
  ALIAS: "97",
  /** `98` */
  NAME: "98",
  /** `A` */
  BLOOMBERG_CODE: "A",
  /** `S` */
  OPENFIGI_ID: "S",
  /** `X` */
  SERIES_KEY: "X",
  /** `H` */
  CLEARING_HOUSE: "H",
} as const;
export type BenchmarkSecurityIDSource = (typeof BenchmarkSecurityIDSource)[keyof typeof BenchmarkSecurityIDSource];

/** Values of AllocReportType (794, INT). */
export const AllocReportType = {
  /** `3` */
  SELLSIDE_CALCULATED_USING_PRELIMINARY: 3,
  /** `4` */
  SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY: 4,
  /** `5` */
  WAREHOUSE_RECAP: 5,
  /** `8` */
  REQUEST_TO_INTERMEDIARY: 8,
} as const;
export type AllocReportType = (typeof AllocReportType)[keyof typeof AllocReportType];

/** Values of TrdType (828, INT). */
export const TrdType = {
  /** `0` */
  REGULAR_TRADE: 0,
  /** `1` */
  BLOCK_TRADE: 1,
  /** `2` */
  EXCHANGE_FOR_PHYSICAL: 2,
  /** `3` */
  TRANSFER: 3,
  /** `11` */
  EXCHANGE_FOR_RISK: 11,
  /** `12` */
  EXCHANGE_FOR_SWAP: 12,
  /** `14` */
  EXCHANGE_OF_OPTIONS_FOR_OPTIONS: 14,
  /** `22` */
  OVER_THE_COUNTER_PRIVATELY_NEGOTIATED_TRADES: 22,
  /** `23` */
  SUBSTITUTION_OF_FUTURES_FOR_FORWARDS: 23,
  /** `45` */
  OPTION_EXERCISE: 45,
  /** `54` */
  LARGE_NOTIONAL_OFF_FACILITY_SWAP: 54,
  /** `55` */
  EXCHANGE_BASIS_FACILITY: 55,
  /** `57` */
  NETTED_TRADE: 57,
  /** `58` */
  STP_BLOCK_SWAP_TRADE: 58,
  /** `59` */
  CREDIT_EVENT_TRADE: 59,
  /** `60` */
  SUCCESSION_EVENT_TRADE: 60,
  /** `1000` */
  VOLATILITY: 1000,
  /** `1001` */
  EFP_FINANCIAL: 1001,
  /** `1002` */
  EFP_INDEX_FUTURES: 1002,
  /** `1003` */
  STRATEGY_BLOCK_TRADE: 1003,
  /** `1004` */
  BLOCK_STANDARD_CF: 1004,
  /** `1005` */
  BLOCK_COMBINATION_CF: 1005,
  /** `1006` */
  EFS_EFP_CF: 1006,
  /** `1007` */
  BLOCK_INTERNAL_CF: 1007,
  /** `1008` */
  PORTFOLIO_CF: 1008,
  /** `1009` */
  CORRECTION_CF: 1009,
  /** `1010` */
  BLOCK_COMBINATION_BUYER_CF: 1010,
  /** `1011` */
  BLOCK_COMBINATION_SELLER_CF: 1011,
  /** `1012` */
  EFS_EFP_COMBINATION_CF: 1012,
  /** `1013` */
  EFS_EFP_COMBINATION_BUYER_CF: 1013,
  /** `1014` */
  EFS_EFP_COMBINATION_SELLER_CF: 1014,
  /** `1015` */
  OTC_STANDARD_CIO: 1015,
  /** `1016` */
  OTC_COMBINATION_CIO: 1016,
  /** `1017` */
  OTC_COMBINATION_BUYER_CIO: 1017,
  /** `1018` */
  OTC_COMBINATION_SELLER_CIO: 1018,
  /** `1019` */
  STANDARD_TRADE_CD: 1019,
  /** `1020` */
  STANDARD_OUTSIDE_SPREAD_CD: 1020,
  /** `1021` */
  COMBINATION_CD: 1021,
  /** `1022` */
  OLD_CD: 1022,
  /** `1023` */
  INTERNAL_CD: 1023,
  /** `1024` */
  PORTFOLIO_CD: 1024,
  /** `1025` */
  CORRECTION_CD: 1025,
  /** `1026` */
  EXCHANGE_GRANTED_FD: 1026,
  /** `1027` */
  STANDARD_OUTSIDE_FD: 1027,
  /** `1028` */
  OFF_HOURS_FD: 1028,
  /** `1029` */
  BLOCK_FD: 1029,
  /** `1030` */
  EXCH_GRANTED_EXCEED_MAX_LOT_FD: 1030,
  /** `1031` */
  EXCH_GRANTED_EML_OFF_HOURS_FD: 1031,
  /** `1032` */
  EXCH_GRANTED_LATE_FD: 1032,
  /** `1033` */
  FLEX_CONTRACT_CONVERSION_FD: 1033,
  /** `1034` */
  ICE_EFRP: 1034,
  /** `1035` */
  ICEBLK: 1035,
  /** `1036` */
  BASIS: 1036,
  /** `1037` */
  VOLATILITY_CONTINGENT: 1037,
  /** `1038` */
  STOCK_CONTINGENT: 1038,
  /** `1039` */
  CCX_EFP: 1039,
  /** `1040` */
  OTHER_CLEARING_VALUE: 1040,
  /** `1041` */
  N2EX: 1041,
  /** `1042` */
  EEX: 1042,
  /** `1043` */
  EFS_EFP_CONTRA: 1043,
  /** `1044` */
  EFM: 1044,
  /** `1045` */
  NG_EFP_EFS: 1045,
  /** `1046` */
  CONTRA: 1046,
  /** `1047` */
  CPBLK: 1047,
  /** `1048` */
  BILATERAL_OFF_EXCH: 1048,
  /** `1049` */
  OTC_PRIVATELY_NEGOTIATED_TRADES: 1049,
  /** `1050` */
  OTC_LARGE_NOTIONAL_OFF_FACILITY_SWAP: 1050,
  /** `1051` */
  BLOCK_SWAP_TRADE: 1051,
  /** `1052` */
  LARGE_IN_SCALE: 1052,
  /** `1053` */
  AGAINST_ACTUAL: 1053,
  /** `1054` */
  LARGE_IN_SCALE_PACKAGE: 1054,
  /** `1055` */
  GUARANTEED_CROSS: 1055,
  /** `1056` */
  REQUEST_FOR_CROSS: 1056,
  /** `1057` */
  EFP_CD: 1057,
  /** `1058` */
  B_AND_S_NO_CLEARING_CD: 1058,
  /** `1059` */
  BUYER_NO_CLEARING_CD: 1059,
  /** `1060` */
  SELLER_NO_CLEARING_CD: 1060,
  /** `1061` */
  EFP_NO_FEE_CD: 1061,
  /** `1062` */
  MATCH_EXCH_MANUALLY_CD: 1062,
  /** `1063` */
  MATCH_EXCH_COMBINATION_CD: 1063,
  /** `1064` */
  FUT_DS_FUT_COMBO_CD: 1064,
  /** `1065` */
  BLOCK_NONFINANCIAL_CP_CD: 1065,
  /** `1066` */
  EXCH_FOR_SWAP_OPTIONS_CD: 1066,
  /** `1067` */
  BLOCK_NONFINANCIAL_CP_CF: 1067,
  /** `1068` */
  EXCH_FOR_SWAP_OPTIONS_CF: 1068,
  /** `1069` */
  ASSET_ALLOCATION: 1069,
  /** `1070` */
  CROSS_CONTRA_TRADE: 1070,
  /** `1071` */
  COMMITTED: 1071,
  /** `1072` */
  INTERNAL: 1072,
  /** `1073` */
  INTERBANK: 1073,
  /** `1074` */
  ONE_SIDED: 1074,
  /** `1075` */
  CROSS: 1075,
  /** `1076` */
  EFP_BOND: 1076,
  /** `1077` */
  EFP_SPI_XJO: 1077,
  /** `1078` */
  CASH_RELATED_TRADE: 1078,
  /** `1079` */
  NON_DISCLOSED_OTC_TRADE: 1079,
  /** `1080` */
  DISCLOSED_OTC_TRADE: 1080,
  /** `1081` */
  SI_TRADE: 1081,
  /** `1082` */
  EUREX_ENLIGHT_TRIGGERED_TRADE: 1082,
  /** `1083` */
  EFP_AGAINST_ACTUAL: 1083,
  /** `1084` */
  EFR: 1084,
  /** `1085` */
  EOO: 1085,
  /** `1086` */
  TAM: 1086,
  /** `1087` */
  EFS: 1087,
  /** `1088` */
  LP: 1088,
  /** `9999` */
  UNKNOWN: 9999,
} as const;
export type TrdType = (typeof TrdType)[keyof typeof TrdType];

/** Values of TrdSubType (829, INT). */
export const TrdSubType = {
  /** `1` */
  TRADE_PURPOSE_ARBITRAGE: 1,
  /** `2` */
  TRADE_PURPOSE_COMBINATION: 2,
  /** `3` */
  TRADE_PURPOSE_CROSS_TRADE: 3,
  /** `4` */
  TRADE_PURPOSE_EXCHANGE_FOR_PHYSICAL: 4,
  /** `5` */
  TRADE_PURPOSE_POSITION_CONSOLIDATION: 5,
  /** `6` */
  TRADE_PURPOSE_ROLLOVER: 6,
  /** `7` */
  TRADE_PURPOSE_OTHER: 7,
  /** `8` */
  TRADE_PURPOSE_IMPLIED_SPREAD_LEG_EXECUTED_AGAINST_AN_OUTRIGHT: 8,
  /** `36` */
  TRADE_PURPOSE_CONVERTED_SWAP: 36,
  /** `37` */
  TRADE_PURPOSE_CROSSED_TRADE: 37,
  /** `40` */
  TRADE_PURPOSE_TRADED_AT_SETTLEMENT: 40,
  /** `42` */
  TRADE_PURPOSE_AUCTION_TRADE: 42,
  /** `43` */
  TRADE_PURPOSE_TRADED_AT_MARKER: 43,
  /** `48` */
  TRADE_PURPOSE_MULTILATERAL_COMPRESSION: 48,
  /** `200` */
  TRADE_PURPOSE_DELIVERY_TRANSFER: 200,
} as const;
export type TrdSubType = (typeof TrdSubType)[keyof typeof TrdSubType];

/** Values of LastLiquidityIndicator (851, INT). */
export const LastLiquidityIndicator = {
  /** `1` */
  ADDED_LIQUIDITY: 1,
  /** `2` */
  REMOVED_LIQUIDITY: 2,
} as const;
export type LastLiquidityIndicator = (typeof LastLiquidityIndicator)[keyof typeof LastLiquidityIndicator];

/** Values of TradeReportType (856, INT). */
export const TradeReportType = {
  /** `0` */
  SUBMIT: 0,
  /** `1` */
  ALLEGED: 1,
  /** `2` */
  ACCEPT: 2,
  /** `3` */
  DECLINE: 3,
  /** `5` */
  NO_WAS: 5,
  /** `6` */
  CANCEL: 6,
  /** `11` */
  ALLEGED_NEW: 11,
  /** `13` */
  ALLEGED_NO_WAS: 13,
  /** `101` */
  NOTIFICATION: 101,
  /** `102` */
  WAITING_FOR_CANCEL_APPROVAL: 102,
  /** `103` */
  PARTIALLY_FILLED: 103,
  /** `999` */
  UNKNOWN: 999,
  /** `1000` */
  CLEARING: 1000,
} as const;
export type TradeReportType = (typeof TradeReportType)[keyof typeof TradeReportType];

/** Values of AllocNoOrdersType (857, INT). */
export const AllocNoOrdersType = {
  /** `0` */
  NOT_SPECIFIED: 0,
  /** `1` */
  EXPLICIT_LIST_PROVIDED: 1,
} as const;
export type AllocNoOrdersType = (typeof AllocNoOrdersType)[keyof typeof AllocNoOrdersType];

/** Values of EventType (865, INT). */
export const EventType = {
  /** `5` */
  EXPIRY_DATE: 5,
  /** `6` */
  LAST_TRADING_DATE: 6,
  /** `8` */
  SWAP_START_DATE: 8,
  /** `9` */
  SWAP_END_DATE: 9,
  /** `13` */
  FIRST_DELIVERY_DATE: 13,
  /** `14` */
  LAST_DELIVERY_DATE: 14,
  /** `101` */
  FIRST_TRADING_DATE: 101,
  /** `102` */
  SDAT_FIRST_TRADING_DATE: 102,
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType];

/** Values of InstrumentAttributeType (871, INT). */
export const InstrumentAttributeType = {
  /** `5` */
  VARIABLE_RATE: 5,
  /** `100` */
  COUPON_RATE: 100,
  /** `101` */
  OFFSET_TO_VARIABLE_COUPON_RATE: 101,
  /** `102` */
  SWAP_CUSTOMER_1: 102,
  /** `103` */
  SWAP_CUSTOMER_2: 103,
  /** `104` */
  CASH_BASKET_REFERENCE: 104,
} as const;
export type InstrumentAttributeType = (typeof InstrumentAttributeType)[keyof typeof InstrumentAttributeType];

/** Values of UnderlyingStipulationType (888, INT). */
export const UnderlyingStipulationType = {
  /** `1` */
  PAYFREQ: 1,
} as const;
export type UnderlyingStipulationType = (typeof UnderlyingStipulationType)[keyof typeof UnderlyingStipulationType];

/** Values of UnderlyingStipulationValue (889, STRING). */
export const UnderlyingStipulationValue = {
  /** `01` */
  ANNUALLY: "01",
  /** `02` */
  SEMI_ANNUALLY: "02",
  /** `04` */
  QUARTERLY: "04",
  /** `12` */
  MONTHLY: "12",
} as const;
export type UnderlyingStipulationValue = (typeof UnderlyingStipulationValue)[keyof typeof UnderlyingStipulationValue];

/** Values of TrdRptStatus (939, INT). */
export const TrdRptStatus = {
  /** `0` */
  ACCEPTED: 0,
  /** `1` */
  REJECTED: 1,
  /** `3` */
  ACCEPTED_WITH_ERRORS: 3,
  /** `99` */
  UNKNOWN: 99,
} as const;
export type TrdRptStatus = (typeof TrdRptStatus)[keyof typeof TrdRptStatus];

/** Values of StrategyParameterType (959, INT). */
export const StrategyParameterType = {
  /** `1` */
  INT: 1,
  /** `6` */
  FLOAT: 6,
  /** `7` */
  QTY: 7,
  /** `8` */
  PRICE: 8,
  /** `13` */
  BOOLEAN: 13,
  /** `14` */
  STRING: 14,
  /** `19` */
  UTCTIMESTAMP: 19,
} as const;
export type StrategyParameterType = (typeof StrategyParameterType)[keyof typeof StrategyParameterType];

/** Values of ManualOrderIndicator (1028, BOOLEAN). */
export const ManualOrderIndicator = {
  /** `N` */
  ELECTRONIC: false,
  /** `Y` */
  MANUAL: true,
} as const;
export type ManualOrderIndicator = (typeof ManualOrderIndicator)[keyof typeof ManualOrderIndicator];

/** Values of CustOrderHandlingInst (1031, CHAR). */
export const CustOrderHandlingInst = {
  /** `W` */
  DESK: "W",
  /** `Y` */
  ELECTRONIC: "Y",
  /** `C` */
  VENDOR_PLATFORM_BILLED_BY_EXECUTING_BROKER: "C",
  /** `G` */
  SPONSORED_ACCESS_VIA_API_OR_FIX_BY_EXECUTING_BROKER: "G",
  /** `H` */
  PREMIUM_ALGO_TRADING_PROVIDER_BILLED_BY_EXECUTING_BROKER: "H",
  /** `D` */
  OTHER: "D",
} as const;
export type CustOrderHandlingInst = (typeof CustOrderHandlingInst)[keyof typeof CustOrderHandlingInst];

/** Values of AllocPositionEffect (1047, CHAR). */
export const AllocPositionEffect = {
  /** `O` */
  OPEN: "O",
  /** `C` */
  CLOSE: "C",
  /** `R` */
  ROLLED: "R",
  /** `F` */
  FIFO: "F",
  /** `N` */
  CLOSE_BUT_NOTIFY_ON_OPEN: "N",
  /** `D` */
  DEFAULT: "D",
} as const;
export type AllocPositionEffect = (typeof AllocPositionEffect)[keyof typeof AllocPositionEffect];

/** Values of AggressorIndicator (1057, BOOLEAN). */
export const AggressorIndicator = {
  /** `N` */
  NO: false,
  /** `Y` */
  YES: true,
} as const;
export type AggressorIndicator = (typeof AggressorIndicator)[keyof typeof AggressorIndicator];

/** Values of RootPartyIDSource (1118, CHAR). */
export const RootPartyIDSource = {
  /** `F` */
  SETTLEMENT_ENTITY_LOCATION: "F",
} as const;
export type RootPartyIDSource = (typeof RootPartyIDSource)[keyof typeof RootPartyIDSource];

/** Values of RootPartyRole (1119, INT). */
export const RootPartyRole = {
  /** `10` */
  SETTLEMENT_LOCATION: 10,
} as const;
export type RootPartyRole = (typeof RootPartyRole)[keyof typeof RootPartyRole];

/** Values of TradeHandlingInstr (1123, CHAR). */
export const TradeHandlingInstr = {
  /** `0` */
  TRADE_CONFIRMATION: "0",
  /** `1` */
  TWO_PARTY_REPORT: "1",
  /** `2` */
  ONE_PARTY_REPORT_FOR_MATCHING: "2",
  /** `3` */
  ONE_PARTY_REPORT_FOR_PASS_THROUGH: "3",
  /** `4` */
  AUTOMATED_FLOOR_ORDER_ROUTING: "4",
  /** `7` */
  THIRD_PARTY_REPORT_FOR_PASS_THROUGH: "7",
  /** `8` */
  TRADE_HANDLING_INSTR_PENDING_TRADE_REPORT: "8",
  /** `9` */
  TRADE_HANDLING_INSTR_COMPLETED_TRADE_REPORT: "9",
  /** `A` */
  TRADE_HANDLING_INSTR_EXPIRED_TRADE_REPORT: "A",
  /** `B` */
  TRADE_HANDLING_INSTR_BROADCAST: "B",
  /** `C` */
  TRADE_HANDLING_INSTR_PENDING_APPROVAL: "C",
  /** `D` */
  TRADE_HANDLING_INSTR_APPROVED: "D",
  /** `E` */
  TRADE_HANDLING_INSTR_PENDING_CANCEL: "E",
} as const;
export type TradeHandlingInstr = (typeof TradeHandlingInstr)[keyof typeof TradeHandlingInstr];

/** Values of ContingencyType (1385, INT). */
export const ContingencyType = {
  /** `1` */
  ONE_CANCELS_THE_OTHER: 1,
  /** `2` */
  ONE_TRIGGERS_THE_OTHER: 2,
  /** `3` */
  ONE_UPDATES_THE_OTHER_3: 3,
  /** `4` */
  ONE_UPDATES_THE_OTHER_4: 4,
} as const;
export type ContingencyType = (typeof ContingencyType)[keyof typeof ContingencyType];

/** Values of TradePublishIndicator (1390, INT). */
export const TradePublishIndicator = {
  /** `0` */
  DO_NOT_PUBLISH_TRADE: 0,
  /** `1` */
  PUBLISH_TRADE: 1,
  /** `2` */
  DEFERRED_PUBLICATION: 2,
} as const;
export type TradePublishIndicator = (typeof TradePublishIndicator)[keyof typeof TradePublishIndicator];

/** Values of OrderOrigination (1724, INT). */
export const OrderOrigination = {
  /** `1` */
  ORDER_RECEIVED_FROM_CUSTOMER: 1,
  /** `2` */
  ORDER_RECEIVED_FROM_WITHIN_FIRM: 2,
  /** `3` */
  ORDER_RECEIVED_FROM_ANOTHER_BROKER_DEALER: 3,
  /** `4` */
  ORDER_RECEIVED_FROM_CUSTOMER_OR_ORIGINATED_WITHIN_FIRM: 4,
  /** `5` */
  ORDER_RECEIVED_FROM_DIRECT_OR_SPONSORED_ACCESS_CUSTOMER: 5,
  /** `99` */
  ORDER_RECEIVED_FROM_OTHER_NON_DEA: 99,
} as const;
export type OrderOrigination = (typeof OrderOrigination)[keyof typeof OrderOrigination];

/** Values of OrderEventType (1796, INT). */
export const OrderEventType = {
  /** `1` */
  ADDED: 1,
  /** `2` */
  MODIFIED: 2,
  /** `3` */
  DELETED: 3,
  /** `4` */
  PARTIALLY_FILLED: 4,
  /** `5` */
  FILLED: 5,
  /** `6` */
  SUSPENDED: 6,
  /** `7` */
  RELEASED: 7,
  /** `8` */
  RESTATED: 8,
  /** `9` */
  LOCKED: 9,
  /** `10` */
  TRIGGERED: 10,
  /** `11` */
  ACTIVATED: 11,
} as const;
export type OrderEventType = (typeof OrderEventType)[keyof typeof OrderEventType];

/** Values of OrderEventReason (1798, INT). */
export const OrderEventReason = {
  /** `1` */
  ADD_ORDER_REQUEST: 1,
  /** `2` */
  MODIFY_ORDER_REQUEST: 2,
  /** `3` */
  DELETE_ORDER_REQUEST: 3,
  /** `4` */
  ORDER_ENTERED_OUT_OF_BAND: 4,
  /** `5` */
  ORDER_MODIFIED_OUT_OF_BAND: 5,
  /** `6` */
  ORDER_DELETED_OUT_OF_BAND: 6,
  /** `7` */
  ORDER_ACTIVATED_OR_TRIGGERED: 7,
  /** `8` */
  ORDER_EXPIRED: 8,
  /** `9` */
  RESERVE_ORDER_REFRESHED: 9,
  /** `10` */
  AWAY_MARKET_BETTER: 10,
  /** `11` */
  CORPORATE_ACTION: 11,
  /** `12` */
  START_OF_DAY: 12,
  /** `13` */
  END_OF_DAY: 13,
  /** `100` */
  BINARY_TRADE_REPORTING: 100,
} as const;
export type OrderEventReason = (typeof OrderEventReason)[keyof typeof OrderEventReason];

/** Values of OrderEventLiquidityIndicator (1801, INT). */
export const OrderEventLiquidityIndicator = {
  /** `0` */
  NEITHER_ADDED_NOR_REMOVED_LIQUIDITY: 0,
  /** `1` */
  ADDED_LIQUIDITY: 1,
  /** `2` */
  REMOVED_LIQUIDITY: 2,
  /** `3` */
  LIQUIDITY_ROUTED_OUT: 3,
  /** `4` */
  AUCTION_EXECUTION: 4,
  /** `5` */
  TRIGGERED_STOP_ORDER: 5,
  /** `6` */
  TRIGGERED_CONTINGENCY_ORDER: 6,
  /** `7` */
  TRIGGERED_MARKET_ORDER: 7,
  /** `8` */
  REMOVED_LIQUIDITY_AFTER_FIRM_ORDER_COMMITMENT: 8,
  /** `9` */
  AUCTION_EXECUTION_AFTER_FIRM_ORDER_COMMITMENT: 9,
  /** `10` */
  UNKNOWN: 10,
  /** `11` */
  OTHER: 11,
} as const;
export type OrderEventLiquidityIndicator = (typeof OrderEventLiquidityIndicator)[keyof typeof OrderEventLiquidityIndicator];

/** Values of PartyRoleQualifier (2376, INT). */
export const PartyRoleQualifier = {
  /** `22` */
  ALGORITHM: 22,
  /** `23` */
  FIRM_OR_LEGAL_ENTITY: 23,
  /** `24` */
  NATURAL_PERSON: 24,
} as const;
export type PartyRoleQualifier = (typeof PartyRoleQualifier)[keyof typeof PartyRoleQualifier];

/** Values of AggressorSide (2446, INT). */
export const AggressorSide = {
  /** `0` */
  NO_AGGRESSOR: 0,
  /** `1` */
  BUY: 1,
  /** `2` */
  SELL: 2,
} as const;
export type AggressorSide = (typeof AggressorSide)[keyof typeof AggressorSide];

/** Values of OrderAttributeType (2594, INT). */
export const OrderAttributeType = {
  /** `0` */
  AGGREGATED_ORDER: 0,
  /** `1` */
  PENDING_ALLOCATION: 1,
  /** `2` */
  LIQUIDITY_PROVISION_ACTIVITY_ORDER: 2,
  /** `3` */
  RISK_REDUCTION_ORDER: 3,
  /** `4` */
  ALGORITHMIC_ORDER: 4,
  /** `5` */
  SYSTEMATIC_INTERNALIZER_ORDER: 5,
} as const;
export type OrderAttributeType = (typeof OrderAttributeType)[keyof typeof OrderAttributeType];

/** Values of SMPInstruction (8000, CHAR). */
export const SMPInstruction = {
  /** `O` */
  SMP_INST_TYPE_CANCEL_RESTING: "O",
  /** `N` */
  SMP_INST_TYPE_CANCEL_AGGRESSOR: "N",
  /** `B` */
  SMP_INST_TYPE_CANCEL_BOTH: "B",
  /** `M` */
  SMP_INST_TYPE_MATCH: "M",
  /** `m` */
  SMP_INST_TYPE_NOT_MATCH: "m",
  /** `S` */
  SMP_INST_TYPE_SMALLEST: "S",
  /** `D` */
  SMP_INST_TYPE_DECREMENT_LARGER: "D",
  /** `d` */
  SMP_INST_TYPE_DECREMENT_LEAVES_QTY: "d",
  /** `e` */
  SMP_INST_TYPE_MARKET_WIDE: "e",
  /** `f` */
  SMP_INST_TYPE_MARKET_WIDE_CANCEL_AGGRESSOR: "f",
  /** `g` */
  SMP_INST_TYPE_MARKET_WIDE_CANCEL_RESTING: "g",
  /** `h` */
  SMP_INST_TYPE_MARKET_WIDE_DECREMENT_LEAVES_QTY: "h",
} as const;
export type SMPInstruction = (typeof SMPInstruction)[keyof typeof SMPInstruction];

/** Values of TrdRegPublicationReason (8013, INT). */
export const TrdRegPublicationReason = {
  /** `4` */
  ILQD: 4,
  /** `5` */
  SIZE: 5,
  /** `6` */
  LRGS: 6,
} as const;
export type TrdRegPublicationReason = (typeof TrdRegPublicationReason)[keyof typeof TrdRegPublicationReason];

/** Values of IsFirm (9012, INT). */
export const IsFirm = {
  /** `1` */
  FIRM: 1,
  /** `2` */
  LAST_LOOK: 2,
} as const;
export type IsFirm = (typeof IsFirm)[keyof typeof IsFirm];

/** Values of LiquidityIndicator (9120, CHAR). */
export const LiquidityIndicator = {
  /** `A` */
  ADDED_LIQUIDITY: "A",
  /** `R` */
  REMOVED_LIQUIDITY: "R",
} as const;
export type LiquidityIndicator = (typeof LiquidityIndicator)[keyof typeof LiquidityIndicator];

/** Values of EndTimeOverride (9203, INT). */
export const EndTimeOverride = {
  /** `0` */
  None: 0,
  /** `1` */
  LastSessionClose: 1,
  /** `2` */
  NextSessionClose: 2,
  /** `3` */
  Settlement: 3,
} as const;
export type EndTimeOverride = (typeof EndTimeOverride)[keyof typeof EndTimeOverride];

/** Values of DirectElectronicAccess (9700, INT). */
export const DirectElectronicAccess = {
  /** `0` */
  NO: 0,
  /** `1` */
  YES: 1,
} as const;
export type DirectElectronicAccess = (typeof DirectElectronicAccess)[keyof typeof DirectElectronicAccess];

/** Values of TradingCapacity (9701, INT). */
export const TradingCapacity = {
  /** `0` */
  DEAL: 0,
  /** `1` */
  MTCH: 1,
  /** `2` */
  AOTC: 2,
} as const;
export type TradingCapacity = (typeof TradingCapacity)[keyof typeof TradingCapacity];

/** Values of LiquidityProvision (9702, INT). */
export const LiquidityProvision = {
  /** `0` */
  NO: 0,
  /** `1` */
  YES: 1,
} as const;
export type LiquidityProvision = (typeof LiquidityProvision)[keyof typeof LiquidityProvision];

/** Values of StagedOrderStatus (16109, CHAR). */
export const StagedOrderStatus = {
  /** `A` */
  Available: "A",
  /** `O` */
  Owned: "O",
} as const;
export type StagedOrderStatus = (typeof StagedOrderStatus)[keyof typeof StagedOrderStatus];

/** Values of LinkType (16114, CHAR). */
export const LinkType = {
  /** `7` */
  STAGED_CHILD: "7",
  /** `P` */
  PARENT_ORDER_ID: "P",
  /** `X` */
  POSITION_TRANSFER_ID: "X",
  /** `8` */
  STAGED_BULKED_CHILD: "8",
  /** `9` */
  STAGED_STICHED_CHILD: "9",
  /** `A` */
  STAGED_SPLIT_CHILD: "A",
  /** `E` */
  UNIQUE_EXEC_ID_ALLOCATED_FROM: "E",
  /** `R` */
  ROOT_ALGO_ORDER_ID: "R",
  /** `F` */
  PARENT_ACCOUNT_ID: "F",
} as const;
export type LinkType = (typeof LinkType)[keyof typeof LinkType];

/** Values of OrderSource (16117, INT). */
export const OrderSource = {
  /** `0` */
  SOURCE_ASE: 0,
  /** `2` */
  SOURCE_TTW: 2,
  /** `3` */
  SOURCE_INVALID: 3,
  /** `4` */
  SOURCE_T_TRADER: 4,
  /** `6` */
  SOURCE_MOBILE: 6,
  /** `7` */
  SOURCE_ROE: 7,
  /** `9` */
  SOURCE_EXTERNAL: 9,
  /** `10` */
  SOURCE_FIX_ADAPTER: 10,
  /** `11` */
  SOURCE_AGGREGATOR: 11,
  /** `12` */
  SOURCE_BOUNCER: 12,
  /** `13` */
  SOURCE_LAMBDA_LIQUIDATOR: 13,
  /** `14` */
  SOURCE_EXTERNAL_FIX_ADAPTER: 14,
  /** `15` */
  SOURCE_PRIME_ASE: 15,
  /** `16` */
  SOURCE_NIMBUS: 16,
  /** `17` */
  SOURCE_ADL: 17,
  /** `18` */
  SOURCE_TTSDK: 18,
  /** `19` */
  SOURCE_TT_ALGO: 19,
  /** `20` */
  SOURCE_ADL_PRIME: 20,
  /** `21` */
  SOURCE_TTSDK_PRIME: 21,
  /** `22` */
  SOURCE_TT_ALGO_PRIME: 22,
  /** `23` */
  SOURCE_CHART: 23,
  /** `24` */
  SOURCE_TTD: 24,
  /** `25` */
  SOURCE_TTD_CHART: 25,
  /** `26` */
  SOURCE_TTINT: 26,
  /** `27` */
  SOURCE_TT_ADMIN: 27,
  /** `28` */
  SOURCE_DOTNET_API_CLT: 28,
  /** `29` */
  SOURCE_DOTNET_API_SRV: 29,
  /** `30` */
  SOURCE_CPP_API: 30,
  /** `31` */
  SOURCE_OPTIONS_RISK: 31,
  /** `32` */
  SOURCE_EXTERNAL_UPLOAD: 32,
  /** `33` */
  SOURCE_STAGER: 33,
  /** `34` */
  SOURCE_SCORE: 34,
  /** `35` */
  SOURCE_FIX_ADAPTER_CHILD_ROUTER: 35,
  /** `36` */
  SOURCE_POT_CHILD_ROUTER: 36,
  /** `37` */
  SOURCE_TERMINATOR: 37,
} as const;
export type OrderSource = (typeof OrderSource)[keyof typeof OrderSource];

/** Values of FillLastLiquidityIndicator (16119, INT). */
export const FillLastLiquidityIndicator = {
  /** `1` */
  ADDED_LIQUIDITY: 1,
  /** `2` */
  REMOVED_LIQUIDITY: 2,
} as const;
export type FillLastLiquidityIndicator = (typeof FillLastLiquidityIndicator)[keyof typeof FillLastLiquidityIndicator];

/** Values of LegFillLastLiquidityIndicator (16125, INT). */
export const LegFillLastLiquidityIndicator = {
  /** `1` */
  ADDED_LIQUIDITY: 1,
  /** `2` */
  REMOVED_LIQUIDITY: 2,
} as const;
export type LegFillLastLiquidityIndicator = (typeof LegFillLastLiquidityIndicator)[keyof typeof LegFillLastLiquidityIndicator];

/** Values of RejectSource (16131, INT). */
export const RejectSource = {
  /** `1` */
  REJECT_SOURCE_EDGE: 1,
  /** `2` */
  REJECT_SOURCE_RISK: 2,
  /** `3` */
  REJECT_SOURCE_GATEWAY: 3,
  /** `4` */
  REJECT_SOURCE_EXCHANGE: 4,
  /** `5` */
  REJECT_SOURCE_ALGO: 5,
  /** `6` */
  REJECT_SOURCE_ASE: 6,
  /** `7` */
  REJECT_SOURCE_TTINT: 7,
  /** `8` */
  REJECT_SOURCE_EXTERNAL: 8,
  /** `9` */
  REJECT_SOURCE_TTAPI: 9,
  /** `10` */
  REJECT_SOURCE_CLIENT_APP: 10,
  /** `11` */
  REJECT_SOURCE_FIX_ADAPTER: 11,
  /** `12` */
  REJECT_SOURCE_STAGER: 12,
  /** `13` */
  REJECT_SOURCE_OPTIONS_RISK: 13,
} as const;
export type RejectSource = (typeof RejectSource)[keyof typeof RejectSource];

/** Values of DropCopyOrder (16566, BOOLEAN). */
export const DropCopyOrder = {
  /** `Y` */
  YES: true,
  /** `N` */
  NO: false,
} as const;
export type DropCopyOrder = (typeof DropCopyOrder)[keyof typeof DropCopyOrder];

/** Values of NVDR (16626, BOOLEAN). */
export const NVDR = {
  /** `Y` */
  YES: true,
  /** `N` */
  NO: false,
} as const;
export type NVDR = (typeof NVDR)[keyof typeof NVDR];

/** Values of TTF (16627, BOOLEAN). */
export const TTF = {
  /** `Y` */
  YES: true,
  /** `N` */
  NO: false,
} as const;
export type TTF = (typeof TTF)[keyof typeof TTF];

/** Values of TFUserType (16628, CHAR). */
export const TFUserType = {
  /** `T` */
  TRADITIONAL_TRADING: "T",
  /** `P` */
  PROGRAM_TRADING: "P",
  /** `M` */
  MARKET_MAKING: "M",
  /** `G` */
  MARKET_MAKING_WITH_PROGRAM_TRADING: "G",
} as const;
export type TFUserType = (typeof TFUserType)[keyof typeof TFUserType];

/** Values of FormulaBasedOn (16703, STRING). */
export const FormulaBasedOn = {
  /** `price_diff` */
  price_diff: "price_diff",
  /** `ratio` */
  ratio: "ratio",
  /** `net_change` */
  net_change: "net_change",
  /** `custom` */
  custom: "custom",
} as const;
export type FormulaBasedOn = (typeof FormulaBasedOn)[keyof typeof FormulaBasedOn];

/** Values of ConvertQuoteToHedge (16757, INT). */
export const ConvertQuoteToHedge = {
  /** `1` */
  Attempt: 1,
  /** `2` */
  Always: 2,
  /** `3` */
  AlwaysPreserveQueue: 3,
} as const;
export type ConvertQuoteToHedge = (typeof ConvertQuoteToHedge)[keyof typeof ConvertQuoteToHedge];

/** Values of TargetStrategyType (16848, INT). */
export const TargetStrategyType = {
  /** `0` */
  ADL: 0,
  /** `1` */
  SSE: 1,
  /** `3` */
  BANK_ALGO: 3,
  /** `12` */
  CORE_SDK: 12,
} as const;
export type TargetStrategyType = (typeof TargetStrategyType)[keyof typeof TargetStrategyType];

/** Values of TTSMPInstruction (16858, INT). */
export const TTSMPInstruction = {
  /** `1` */
  TT_SMP_INST_REJECT_NEW: 1,
  /** `3` */
  TT_SMP_INST_CANCEL_RESTING: 3,
  /** `4` */
  TT_SMP_INST_INTERNALIZATION: 4,
  /** `6` */
  TT_SMP_INST_INTERNALIZE_BEST: 6,
  /** `10` */
  TT_SMP_INST_INTERNALIZE_ALLOW_SPLIT: 10,
  /** `11` */
  TT_SMP_INST_INTERNALIZE_BEST_ALLOW_SPLIT: 11,
} as const;
export type TTSMPInstruction = (typeof TTSMPInstruction)[keyof typeof TTSMPInstruction];

/** Values of QuoteAckStatus (16859, INT). */
export const QuoteAckStatus = {
  /** `0` */
  QUOTE_REQUEST_STATUS_OK: 0,
  /** `5` */
  QUOTE_REQUEST_STATUS_REJECTED: 5,
} as const;
export type QuoteAckStatus = (typeof QuoteAckStatus)[keyof typeof QuoteAckStatus];

/** Values of BracketOrderType (16901, INT). */
export const BracketOrderType = {
  /** `0` */
  LIMIT: 0,
  /** `1` */
  STOP_LIMIT: 1,
  /** `2` */
  STOP_MARKET: 2,
} as const;
export type BracketOrderType = (typeof BracketOrderType)[keyof typeof BracketOrderType];

/** Values of ChildTIF (16903, CHAR). */
export const ChildTIF = {
  /** `0` */
  DAY: "0",
  /** `1` */
  GOOD_TILL_CANCEL: "1",
  /** `2` */
  AT_THE_OPENING: "2",
  /** `3` */
  IMMEDIATE_OR_CANCEL: "3",
  /** `4` */
  FILL_OR_KILL: "4",
  /** `5` */
  GOOD_TILL_CROSSING: "5",
  /** `6` */
  GOOD_TILL_DATE: "6",
  /** `7` */
  AT_THE_CLOSE: "7",
  /** `8` */
  GOOD_THROUGH_CROSSING: "8",
  /** `9` */
  AT_CROSSING: "9",
  /** `A` */
  AUCTION: "A",
  /** `V` */
  GOOD_IN_SESSION: "V",
  /** `W` */
  DAY_PLUS: "W",
  /** `X` */
  GOOD_TILL_CANCEL_PLUS: "X",
  /** `Y` */
  GOOD_TILL_DATE_PLUS: "Y",
} as const;
export type ChildTIF = (typeof ChildTIF)[keyof typeof ChildTIF];

/** Values of ETimeAct (16906, INT). */
export const ETimeAct = {
  /** `1` */
  CANCEL: 1,
  /** `2` */
  GOTOMARKET: 2,
} as const;
export type ETimeAct = (typeof ETimeAct)[keyof typeof ETimeAct];

/** Values of LeftoverAction (16909, INT). */
export const LeftoverAction = {
  /** `0` */
  LEAVE: 0,
  /** `1` */
  PAYUP: 1,
  /** `2` */
  MERGE: 2,
  /** `3` */
  GOTOMARKET: 3,
} as const;
export type LeftoverAction = (typeof LeftoverAction)[keyof typeof LeftoverAction];

/** Values of StopOrderType (16916, INT). */
export const StopOrderType = {
  /** `1` */
  LIMIT: 1,
  /** `2` */
  MARKET: 2,
  /** `3` */
  TT_STOP: 3,
} as const;
export type StopOrderType = (typeof StopOrderType)[keyof typeof StopOrderType];

/** Values of TriggerPriceType (16918, INT). */
export const TriggerPriceType = {
  /** `1` */
  BID: 1,
  /** `2` */
  ASK: 2,
  /** `3` */
  LTP: 3,
  /** `6` */
  SAMESIDE: 6,
  /** `7` */
  OPPOSITESIDE: 7,
} as const;
export type TriggerPriceType = (typeof TriggerPriceType)[keyof typeof TriggerPriceType];

/** Values of TriggerType (16920, INT). */
export const TriggerType = {
  /** `1` */
  STOP: 1,
  /** `2` */
  IT: 2,
} as const;
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/** Values of WithATickType (16921, INT). */
export const WithATickType = {
  /** `1` */
  QTY: 1,
  /** `2` */
  PERCENT: 2,
} as const;
export type WithATickType = (typeof WithATickType)[keyof typeof WithATickType];

/** Values of TriggerQtyType (16923, INT). */
export const TriggerQtyType = {
  /** `1` */
  QTY: 1,
  /** `2` */
  PERCENT: 2,
} as const;
export type TriggerQtyType = (typeof TriggerQtyType)[keyof typeof TriggerQtyType];

/** Values of TriggerQtyCompare (16924, INT). */
export const TriggerQtyCompare = {
  /** `3` */
  LTE: 3,
  /** `5` */
  GTE: 5,
} as const;
export type TriggerQtyCompare = (typeof TriggerQtyCompare)[keyof typeof TriggerQtyCompare];

/** Values of TTStopLimitPriceType (16927, INT). */
export const TTStopLimitPriceType = {
  /** `1` */
  BID: 1,
  /** `2` */
  ASK: 2,
  /** `3` */
  LTP: 3,
} as const;
export type TTStopLimitPriceType = (typeof TTStopLimitPriceType)[keyof typeof TTStopLimitPriceType];

/** Values of TTStopWithATickType (16928, INT). */
export const TTStopWithATickType = {
  /** `1` */
  QTY: 1,
  /** `2` */
  PERCENT: 2,
} as const;
export type TTStopWithATickType = (typeof TTStopWithATickType)[keyof typeof TTStopWithATickType];

/** Values of TTStopTriggerPriceType (16931, INT). */
export const TTStopTriggerPriceType = {
  /** `3` */
  LTP: 3,
  /** `1` */
  BID: 1,
  /** `2` */
  ASK: 2,
} as const;
export type TTStopTriggerPriceType = (typeof TTStopTriggerPriceType)[keyof typeof TTStopTriggerPriceType];

/** Values of TTStopIsTrlTrg (16932, BOOLEAN). */
export const TTStopIsTrlTrg = {
  /** `Y` */
  YES: true,
  /** `N` */
  NO: false,
} as const;
export type TTStopIsTrlTrg = (typeof TTStopIsTrlTrg)[keyof typeof TTStopIsTrlTrg];

/** Values of TTStopTriggerQtyType (16934, INT). */
export const TTStopTriggerQtyType = {
  /** `1` */
  QTY: 1,
  /** `2` */
  PERCENTAGE: 2,
} as const;
export type TTStopTriggerQtyType = (typeof TTStopTriggerQtyType)[keyof typeof TTStopTriggerQtyType];

/** Values of TTStopTriggerQTyCompare (16935, INT). */
export const TTStopTriggerQTyCompare = {
  /** `3` */
  LTE: 3,
  /** `5` */
  GTE: 5,
} as const;
export type TTStopTriggerQTyCompare = (typeof TTStopTriggerQTyCompare)[keyof typeof TTStopTriggerQTyCompare];

/** Values of TTStopTriggerLTPReset (16937, BOOLEAN). */
export const TTStopTriggerLTPReset = {
  /** `Y` */
  YES: true,
  /** `N` */
  NO: false,
} as const;
export type TTStopTriggerLTPReset = (typeof TTStopTriggerLTPReset)[keyof typeof TTStopTriggerLTPReset];

/** Values of TTStopTriggeredOrderType (16938, INT). */
export const TTStopTriggeredOrderType = {
  /** `1` */
  MKT: 1,
  /** `2` */
  LIMIT: 2,
  /** `21` */
  MLM: 21,
} as const;
export type TTStopTriggeredOrderType = (typeof TTStopTriggeredOrderType)[keyof typeof TTStopTriggeredOrderType];

/** Values of DurationBaseUnit (16945, INT). */
export const DurationBaseUnit = {
  /** `1` */
  HOUR: 1,
  /** `2` */
  MINUTE: 2,
  /** `3` */
  SECOND: 3,
} as const;
export type DurationBaseUnit = (typeof DurationBaseUnit)[keyof typeof DurationBaseUnit];

/** Values of LeftoverTimeAction (16948, INT). */
export const LeftoverTimeAction = {
  /** `0` */
  ATEND: 0,
  /** `1` */
  HALFLIFE: 1,
} as const;
export type LeftoverTimeAction = (typeof LeftoverTimeAction)[keyof typeof LeftoverTimeAction];

/** Values of ParentTIF (16950, INT). */
export const ParentTIF = {
  /** `1` */
  GTC: 1,
  /** `0` */
  DAY: 0,
  /** `7` */
  TIME: 7,
  /** `15` */
  DAYPLUS: 15,
  /** `16` */
  GTCPLUS: 16,
} as const;
export type ParentTIF = (typeof ParentTIF)[keyof typeof ParentTIF];

/** Values of TTStopSecondTriggerPriceType (16952, INT). */
export const TTStopSecondTriggerPriceType = {
  /** `3` */
  LTP: 3,
  /** `1` */
  BID: 1,
  /** `2` */
  ASK: 2,
  /** `6` */
  SAMESIDE: 6,
  /** `7` */
  OPPOSITESIDE: 7,
} as const;
export type TTStopSecondTriggerPriceType = (typeof TTStopSecondTriggerPriceType)[keyof typeof TTStopSecondTriggerPriceType];

/** Values of TTStopSecondTriggerQtyType (16955, INT). */
export const TTStopSecondTriggerQtyType = {
  /** `1` */
  QTY: 1,
  /** `2` */
  PERCENTAGE: 2,
} as const;
export type TTStopSecondTriggerQtyType = (typeof TTStopSecondTriggerQtyType)[keyof typeof TTStopSecondTriggerQtyType];

/** Values of TTStopSecondTriggerQtyCompare (16956, INT). */
export const TTStopSecondTriggerQtyCompare = {
  /** `3` */
  LTE: 3,
  /** `5` */
  GTE: 5,
} as const;
export type TTStopSecondTriggerQtyCompare = (typeof TTStopSecondTriggerQtyCompare)[keyof typeof TTStopSecondTriggerQtyCompare];

/** Values of SecondTriggerQtyType (16971, INT). */
export const SecondTriggerQtyType = {
  /** `1` */
  eQty: 1,
  /** `2` */
  ePercentage: 2,
} as const;
export type SecondTriggerQtyType = (typeof SecondTriggerQtyType)[keyof typeof SecondTriggerQtyType];

/** Values of SecondTriggerQtyCompare (16972, INT). */
export const SecondTriggerQtyCompare = {
  /** `3` */
  eLTE: 3,
  /** `5` */
  eGTE: 5,
} as const;
export type SecondTriggerQtyCompare = (typeof SecondTriggerQtyCompare)[keyof typeof SecondTriggerQtyCompare];

/** Values of LeftoverTime (16974, INT). */
export const LeftoverTime = {
  /** `0` */
  eAtEnd: 0,
  /** `1` */
  eAtHalfLife: 1,
} as const;
export type LeftoverTime = (typeof LeftoverTime)[keyof typeof LeftoverTime];

/** Values of SecondTriggerPriceType (16975, INT). */
export const SecondTriggerPriceType = {
  /** `1` */
  eBid: 1,
  /** `2` */
  eAsk: 2,
  /** `3` */
  eLtp: 3,
  /** `6` */
  eSameSide: 6,
  /** `7` */
  eOppositeSide: 7,
} as const;
export type SecondTriggerPriceType = (typeof SecondTriggerPriceType)[keyof typeof SecondTriggerPriceType];

/** Values of HedgeOrderType (16983, INT). */
export const HedgeOrderType = {
  /** `1` */
  eMkt: 1,
} as const;
export type HedgeOrderType = (typeof HedgeOrderType)[keyof typeof HedgeOrderType];

/** Values of DeltaRounding (16984, INT). */
export const DeltaRounding = {
  /** `0` */
  eRoundNormal: 0,
  /** `1` */
  eRoundUp: 1,
  /** `2` */
  eRoundDown: 2,
} as const;
export type DeltaRounding = (typeof DeltaRounding)[keyof typeof DeltaRounding];

/** Values of RequestTickTable (17000, BOOLEAN). */
export const RequestTickTable = {
  /** `Y` */
  YES: true,
  /** `N` */
  NO: false,
} as const;
export type RequestTickTable = (typeof RequestTickTable)[keyof typeof RequestTickTable];

/** Values of TwapStyle (17008, INT). */
export const TwapStyle = {
  /** `0` */
  eAggressive: 0,
  /** `1` */
  eDefault: 1,
  /** `2` */
  ePassive: 2,
} as const;
export type TwapStyle = (typeof TwapStyle)[keyof typeof TwapStyle];

/** Values of ForceLogout (18000, INT). */
export const ForceLogout = {
  /** `0` */
  NOT_FORCED: 0,
  /** `1` */
  FORCED: 1,
} as const;
export type ForceLogout = (typeof ForceLogout)[keyof typeof ForceLogout];

/** Values of MockOrderFlag (18001, INT). */
export const MockOrderFlag = {
  /** `0` */
  NOT_MockOrder: 0,
  /** `1` */
  MockOrder: 1,
} as const;
export type MockOrderFlag = (typeof MockOrderFlag)[keyof typeof MockOrderFlag];

/** Values of TradingStrategy (18009, INT). */
export const TradingStrategy = {
  /** `1` */
  ARBITRAGE: 1,
  /** `10` */
  HEDGE: 10,
  /** `11` */
  DIRECTIONAL: 11,
} as const;
export type TradingStrategy = (typeof TradingStrategy)[keyof typeof TradingStrategy];

/** Values of ReverseSpreadOC (18010, INT). */
export const ReverseSpreadOC = {
  /** `0` */
  DO_NOT_REVERSE_OPEN_CLOSE_FLAG_ON_FAR_LEG: 0,
  /** `1` */
  REVERSE_SPREAD_OPEN_CLOSE_FLAG_ON_FAR_LE: 1,
} as const;
export type ReverseSpreadOC = (typeof ReverseSpreadOC)[keyof typeof ReverseSpreadOC];

/** Values of DeliveryTerm (18211, CHAR). */
export const DeliveryTerm = {
  /** `D` */
  DAY: "D",
  /** `W` */
  WEEK: "W",
  /** `B` */
  BALANCE: "B",
  /** `Q` */
  QUARTER: "Q",
  /** `S` */
  SEASON: "S",
  /** `Y` */
  YEAR: "Y",
  /** `V` */
  VARIABLE: "V",
  /** `L` */
  BALANCE_OF_WEEK: "L",
  /** `X` */
  CUSTOM: "X",
  /** `A` */
  SAME_DAY: "A",
  /** `N` */
  NEXT_DAY: "N",
  /** `M` */
  MONTH: "M",
  /** `E` */
  WEEKLY: "E",
  /** `P` */
  PACK: "P",
  /** `U` */
  BUNDLE: "U",
  /** `T` */
  WEEKEND: "T",
  /** `H` */
  HOUR: "H",
  /** `C` */
  EOM: "C",
  /** `a` */
  QUARTER_HOUR: "a",
  /** `b` */
  HALF_HOUR: "b",
  /** `c` */
  ONE_HOUR: "c",
  /** `d` */
  TWO_HOUR: "d",
  /** `e` */
  FOUR_HOUR: "e",
  /** `f` */
  EIGHT_HOUR: "f",
  /** `g` */
  ONE_PLUS_TWO: "g",
  /** `h` */
  THREE_PLUS_FOUR: "h",
  /** `i` */
  BASELOAD: "i",
  /** `j` */
  PEAKLOAD: "j",
  /** `k` */
  OVERNIGHT: "k",
  /** `l` */
  EXTENDED_PEAK: "l",
  /** `Z` */
  HALF_YEAR: "Z",
} as const;
export type DeliveryTerm = (typeof DeliveryTerm)[keyof typeof DeliveryTerm];

/** Values of LegDeliveryTerm (18212, CHAR). */
export const LegDeliveryTerm = {
  /** `D` */
  DAY: "D",
  /** `W` */
  WEEK: "W",
  /** `B` */
  BALANCE: "B",
  /** `Q` */
  QUARTER: "Q",
  /** `S` */
  SEASON: "S",
  /** `Y` */
  YEAR: "Y",
  /** `V` */
  VARIABLE: "V",
  /** `L` */
  BALANCE_OF_WEEK: "L",
  /** `X` */
  CUSTOM: "X",
  /** `A` */
  SAME_DAY: "A",
  /** `N` */
  NEXT_DAY: "N",
  /** `M` */
  MONTH: "M",
  /** `E` */
  WEEKLY: "E",
  /** `P` */
  PACK: "P",
  /** `U` */
  BUNDLE: "U",
  /** `T` */
  WEEKEND: "T",
  /** `H` */
  HOUR: "H",
  /** `C` */
  EOM: "C",
  /** `a` */
  QUARTER_HOUR: "a",
  /** `b` */
  HALF_HOUR: "b",
  /** `c` */
  ONE_HOUR: "c",
  /** `d` */
  TWO_HOUR: "d",
  /** `e` */
  FOUR_HOUR: "e",
  /** `f` */
  EIGHT_HOUR: "f",
  /** `g` */
  ONE_PLUS_TWO: "g",
  /** `h` */
  THREE_PLUS_FOUR: "h",
  /** `i` */
  BASELOAD: "i",
  /** `j` */
  PEAKLOAD: "j",
  /** `k` */
  OVERNIGHT: "k",
  /** `l` */
  EXTENDED_PEAK: "l",
  /** `Z` */
  HALF_YEAR: "Z",
} as const;
export type LegDeliveryTerm = (typeof LegDeliveryTerm)[keyof typeof LegDeliveryTerm];

/** Values of IncludeNumberOfOrders (18214, CHAR). */
export const IncludeNumberOfOrders = {
  /** `N` */
  NO: "N",
  /** `Y` */
  YES: "Y",
} as const;
export type IncludeNumberOfOrders = (typeof IncludeNumberOfOrders)[keyof typeof IncludeNumberOfOrders];

/** Values of AOTCPreventionActionType (18222, CHAR). */
export const AOTCPreventionActionType = {
  /** `0` */
  CROSSING_ORDER_PREVENTION_NONE: "0",
  /** `1` */
  CROSSING_ORDER_PREVENTION_HELD: "1",
  /** `2` */
  CROSSING_ORDER_PREVENTION_CANCEL: "2",
  /** `3` */
  CROSSING_ORDER_PREVENTION_FILL: "3",
  /** `4` */
  CROSSING_ORDER_PREVENTION_REDUCED_ORDER: "4",
  /** `5` */
  CROSSING_ORDER_PREVENTION_REDUCED_CHANGE: "5",
  /** `6` */
  CROSSING_ORDER_PREVENTION_RELEASED_ORDER: "6",
  /** `7` */
  CROSSING_ORDER_PREVENTION_REPLACED_ORDER: "7",
  /** `8` */
  CROSSING_ORDER_PREVENTION_NO_ACTION_ON_ORDER: "8",
  /** `9` */
  CROSSING_ORDER_PREVENTION_CANCEL_REPLACE: "9",
} as const;
export type AOTCPreventionActionType = (typeof AOTCPreventionActionType)[keyof typeof AOTCPreventionActionType];

/** Values of ReviewStatus (18230, INT). */
export const ReviewStatus = {
  /** `1` */
  REVIEW_STATUS_NONE: 1,
  /** `2` */
  REVIEW_STATUS_REVIEWED: 2,
  /** `3` */
  REVIEW_STATUS_APPROVED: 3,
} as const;
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus];

/** Values of HedgeType (18235, INT). */
export const HedgeType = {
  /** `1` */
  HEDGE_TYPE_DURATION: 1,
  /** `2` */
  HEDGE_TYPE_NOMINAL: 2,
  /** `3` */
  HEDGE_TYPE_PRICE_FACTOR: 3,
} as const;
export type HedgeType = (typeof HedgeType)[keyof typeof HedgeType];

/** Values of QuoteSubType (18602, INT). */
export const QuoteSubType = {
  /** `1` */
  WORKING_DELTA: 1,
  /** `2` */
  BASIS_TRADE: 2,
  /** `3` */
  REGULAR_LDS_NEGOTIATION: 3,
  /** `4` */
  NEGOTIATE_UNDERLYING_OUTSIDE_EXCHANGE: 4,
  /** `5` */
  VOLA_STRATEGY_FIX: 5,
  /** `6` */
  VOLA_STRATEGY_NEGOTIATE_UNDERLYING: 6,
} as const;
export type QuoteSubType = (typeof QuoteSubType)[keyof typeof QuoteSubType];

/** Values of SRFQTransType (18605, INT). */
export const SRFQTransType = {
  /** `1` */
  NEW: 1,
  /** `2` */
  REPLACE: 2,
  /** `3` */
  CLOSE: 3,
  /** `4` */
  UPDATE: 4,
  /** `5` */
  EXPIRE: 5,
} as const;
export type SRFQTransType = (typeof SRFQTransType)[keyof typeof SRFQTransType];

/** Values of QuotingStatus (18610, INT). */
export const QuotingStatus = {
  /** `1` */
  QUOTING_STATUS_OPEN_ACTIVE: 1,
  /** `2` */
  QUOTING_STATUS_OPEN_WORKING: 2,
  /** `3` */
  QUOTING_STATUS_CLOSED_INACTIVE: 3,
} as const;
export type QuotingStatus = (typeof QuotingStatus)[keyof typeof QuotingStatus];

/** Every enumerated field, keyed by field name. */
export const FieldValues = {
  CommType,
  ExecInst,
  ExecTransType,
  HandlInst,
  IDSource,
  MsgType,
  OrdStatus,
  OrdType,
  PossDupFlag,
  Side,
  TimeInForce,
  AllocTransType,
  OpenClose,
  ProcessCode,
  AllocStatus,
  PossResend,
  EncryptMethod,
  CxlRejReason,
  OrdRejReason,
  GapFillFlag,
  DKReason,
  MiscFeeType,
  ResetSeqNumFlag,
  ExecType,
  SettlCurrFxRateCalc,
  SecurityType,
  PutOrCall,
  SubscriptionRequestType,
  MarketDepth,
  MDUpdateType,
  AggregatedBook,
  MDEntryType,
  QuoteCondition,
  MDUpdateAction,
  QuoteStatus,
  UnderlyingSecurityIDSource,
  UnderlyingSecurityType,
  SecurityRequestType,
  SecurityResponseType,
  SecurityTradingStatus,
  SessionRejectReason,
  ExecRestatementReason,
  BusinessRejectReason,
  PriceType,
  CxlRejResponseTo,
  MultiLegReportingType,
  PartyIDSource,
  PartyRole,
  SecurityAltIDSource,
  Product,
  TradeReportTransType,
  NestedPartyIDSource,
  OrderCapacity,
  OrderRestriction,
  QuoteType,
  NestedPartyRole,
  CrossType,
  TradeRequestType,
  PreviouslyReported,
  CustOrderCapacity,
  LegIDSource,
  LegSecurityAltIDSource,
  LegProduct,
  LegSecurityType,
  TradingSessionSubID,
  AllocType,
  AllocAcctIDSource,
  TradeRequestResult,
  TradeRequestStatus,
  TradeReportRejectReason,
  BenchmarkSecurityIDSource,
  AllocReportType,
  TrdType,
  TrdSubType,
  LastLiquidityIndicator,
  TradeReportType,
  AllocNoOrdersType,
  EventType,
  InstrumentAttributeType,
  UnderlyingStipulationType,
  UnderlyingStipulationValue,
  TrdRptStatus,
  StrategyParameterType,
  ManualOrderIndicator,
  CustOrderHandlingInst,
  AllocPositionEffect,
  AggressorIndicator,
  RootPartyIDSource,
  RootPartyRole,
  TradeHandlingInstr,
  ContingencyType,
  TradePublishIndicator,
  OrderOrigination,
  OrderEventType,
  OrderEventReason,
  OrderEventLiquidityIndicator,
  PartyRoleQualifier,
  AggressorSide,
  OrderAttributeType,
  SMPInstruction,
  TrdRegPublicationReason,
  IsFirm,
  LiquidityIndicator,
  EndTimeOverride,
  DirectElectronicAccess,
  TradingCapacity,
  LiquidityProvision,
  StagedOrderStatus,
  LinkType,
  OrderSource,
  FillLastLiquidityIndicator,
  LegFillLastLiquidityIndicator,
  RejectSource,
  DropCopyOrder,
  NVDR,
  TTF,
  TFUserType,
  FormulaBasedOn,
  ConvertQuoteToHedge,
  TargetStrategyType,
  TTSMPInstruction,
  QuoteAckStatus,
  BracketOrderType,
  ChildTIF,
  ETimeAct,
  LeftoverAction,
  StopOrderType,
  TriggerPriceType,
  TriggerType,
  WithATickType,
  TriggerQtyType,
  TriggerQtyCompare,
  TTStopLimitPriceType,
  TTStopWithATickType,
  TTStopTriggerPriceType,
  TTStopIsTrlTrg,
  TTStopTriggerQtyType,
  TTStopTriggerQTyCompare,
  TTStopTriggerLTPReset,
  TTStopTriggeredOrderType,
  DurationBaseUnit,
  LeftoverTimeAction,
  ParentTIF,
  TTStopSecondTriggerPriceType,
  TTStopSecondTriggerQtyType,
  TTStopSecondTriggerQtyCompare,
  SecondTriggerQtyType,
  SecondTriggerQtyCompare,
  LeftoverTime,
  SecondTriggerPriceType,
  HedgeOrderType,
  DeltaRounding,
  RequestTickTable,
  TwapStyle,
  ForceLogout,
  MockOrderFlag,
  TradingStrategy,
  ReverseSpreadOC,
  DeliveryTerm,
  LegDeliveryTerm,
  IncludeNumberOfOrders,
  AOTCPreventionActionType,
  ReviewStatus,
  HedgeType,
  QuoteSubType,
  SRFQTransType,
  QuotingStatus,
} as const;
