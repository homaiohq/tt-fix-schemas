// dictionary.ts
// Generated from TT FIX.4.4 schema — TT FIX Version: PROD 2026-09-12 04:10:46 Git:6a77bcece9932eca75df3778f3537207659e7f12 MD5:ec5361665270743e5d87a857ce5c7f8f
// DO NOT EDIT: regenerate with `pnpm generate`.

import type { Dictionary } from '../../../common.js';

/** Runtime representation of the schema (structure, required flags, field types and values). */
export const dictionary: Dictionary = {
  "beginString": "FIX.4.4",
  "major": 4,
  "minor": 4,
  "servicePack": 0,
  "version": { "environment": "PROD", "date": "2026-09-12", "time": "04:10:46", "git": "6a77bcece9932eca75df3778f3537207659e7f12", "md5": "ec5361665270743e5d87a857ce5c7f8f", "raw": "TT FIX Version: PROD 2026-09-12 04:10:46 Git:6a77bcece9932eca75df3778f3537207659e7f12 MD5:ec5361665270743e5d87a857ce5c7f8f" },
  "header": [
    { "kind": "field", "name": "BeginString", "required": true },
    { "kind": "field", "name": "BodyLength", "required": true },
    { "kind": "field", "name": "MsgType", "required": true },
    { "kind": "field", "name": "SenderCompID", "required": true },
    { "kind": "field", "name": "TargetCompID", "required": true },
    { "kind": "field", "name": "MsgSeqNum", "required": true },
    { "kind": "field", "name": "SenderSubID", "required": false },
    { "kind": "field", "name": "TargetSubID", "required": false },
    { "kind": "field", "name": "SenderLocationID", "required": false },
    { "kind": "field", "name": "PossDupFlag", "required": false },
    { "kind": "field", "name": "PossResend", "required": false },
    { "kind": "field", "name": "SendingTime", "required": true },
    { "kind": "field", "name": "OrigSendingTime", "required": false },
    { "kind": "field", "name": "OnBehalfOfCompID", "required": false },
    { "kind": "field", "name": "OnBehalfOfSubID", "required": false },
    { "kind": "field", "name": "DeliverToCompID", "required": false },
    { "kind": "field", "name": "DeliverToSubID", "required": false },
    { "kind": "field", "name": "LastSeqNumProcessed", "required": false }
  ],
  "trailer": [
    { "kind": "field", "name": "CheckSum", "required": false }
  ],
  "messages": [
    {
      "name": "Heartbeat",
      "msgtype": "0",
      "msgcat": "admin",
      "items": [
        { "kind": "field", "name": "TestReqID", "required": false }
      ]
    },
    {
      "name": "TestRequest",
      "msgtype": "1",
      "msgcat": "admin",
      "items": [
        { "kind": "field", "name": "TestReqID", "required": true }
      ]
    },
    {
      "name": "ResendRequest",
      "msgtype": "2",
      "msgcat": "admin",
      "items": [
        { "kind": "field", "name": "BeginSeqNo", "required": true },
        { "kind": "field", "name": "EndSeqNo", "required": true }
      ]
    },
    {
      "name": "Reject",
      "msgtype": "3",
      "msgcat": "admin",
      "items": [
        { "kind": "field", "name": "RefSeqNum", "required": true },
        { "kind": "field", "name": "RefTagID", "required": false },
        { "kind": "field", "name": "RefMsgType", "required": false },
        { "kind": "field", "name": "SessionRejectReason", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "StartSequenceNumber", "required": false }
      ]
    },
    {
      "name": "SequenceReset",
      "msgtype": "4",
      "msgcat": "admin",
      "items": [
        { "kind": "field", "name": "GapFillFlag", "required": false },
        { "kind": "field", "name": "NewSeqNo", "required": true }
      ]
    },
    {
      "name": "Logout",
      "msgtype": "5",
      "msgcat": "admin",
      "items": [
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "ForceLogout", "required": false },
        { "kind": "field", "name": "NextExpectedMsgSeqNum", "required": false }
      ]
    },
    {
      "name": "ExecutionReport",
      "msgtype": "8",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "OrderID", "required": true },
        { "kind": "field", "name": "SecondaryOrderID", "required": false },
        { "kind": "field", "name": "SecondaryClOrdID", "required": false },
        { "kind": "field", "name": "SecondaryExecID", "required": false },
        { "kind": "field", "name": "ClOrdID", "required": false },
        { "kind": "field", "name": "OrigClOrdID", "required": false },
        { "kind": "field", "name": "TTClOrdID", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "field", "name": "ExecID", "required": false },
        { "kind": "field", "name": "ExecTransType", "required": false },
        { "kind": "field", "name": "ExecRefID", "required": false },
        { "kind": "field", "name": "ExecType", "required": true },
        { "kind": "field", "name": "ExecInst", "required": false },
        { "kind": "field", "name": "OrdStatus", "required": true },
        { "kind": "field", "name": "OrdRejReason", "required": false },
        { "kind": "field", "name": "ExecRestatementReason", "required": false },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "PriceTypeSupport", "required": false },
        { "kind": "field", "name": "Side", "required": false },
        { "kind": "field", "name": "OrderQty", "required": false },
        { "kind": "field", "name": "OrdType", "required": false },
        { "kind": "field", "name": "Price", "required": false },
        { "kind": "field", "name": "Spread", "required": false },
        { "kind": "field", "name": "Yield", "required": false },
        { "kind": "field", "name": "StopPx", "required": false },
        { "kind": "field", "name": "TimeInForce", "required": false },
        { "kind": "field", "name": "ExpireDate", "required": false },
        { "kind": "field", "name": "ClearingAccount", "required": false },
        { "kind": "field", "name": "LastShares", "required": false },
        { "kind": "field", "name": "LastPx", "required": false },
        { "kind": "field", "name": "LeavesQty", "required": true },
        { "kind": "field", "name": "CumQty", "required": true },
        { "kind": "field", "name": "AvgPx", "required": true },
        { "kind": "field", "name": "GrossTradeAmt", "required": false },
        { "kind": "field", "name": "AccruedInterestAmt", "required": false },
        { "kind": "field", "name": "NetMoney", "required": false },
        { "kind": "field", "name": "SettlCurrAmt", "required": false },
        { "kind": "field", "name": "SettlCurrency", "required": false },
        { "kind": "field", "name": "SettlCurrFxRate", "required": false },
        { "kind": "field", "name": "SettlCurrFxRateCalc", "required": false },
        { "kind": "field", "name": "TradeDate", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "MinQty", "required": false },
        { "kind": "field", "name": "LiquidityIndicator", "required": false },
        { "kind": "field", "name": "OpenClose", "required": false },
        { "kind": "field", "name": "DisplayQty", "required": false },
        { "kind": "field", "name": "RefreshQty", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "AllocsGrp", "required": false },
        { "kind": "field", "name": "MultiLegReportingType", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "ExchCred", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "field", "name": "CustOrderCapacity", "required": false },
        { "kind": "field", "name": "ContingencyType", "required": false },
        { "kind": "field", "name": "TTID", "required": false },
        { "kind": "field", "name": "TrdType", "required": false },
        { "kind": "field", "name": "TrdMatchID", "required": false },
        { "kind": "field", "name": "CrossID", "required": false },
        { "kind": "field", "name": "CrossType", "required": false },
        { "kind": "field", "name": "TradeReportID", "required": false },
        { "kind": "field", "name": "AOTCPreventionActionType", "required": false },
        { "kind": "field", "name": "TotalNumOrders", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "LastParPx", "required": false },
        { "kind": "field", "name": "HandlInst", "required": false },
        { "kind": "field", "name": "StagedOrderMsg", "required": false },
        { "kind": "field", "name": "StagedOrderOwner", "required": false },
        { "kind": "field", "name": "StagedOrderStatus", "required": false },
        { "kind": "field", "name": "ExternalSource", "required": false },
        { "kind": "component", "name": "StrategyParametersGrp", "required": false },
        { "kind": "field", "name": "AggressorIndicator", "required": false },
        { "kind": "field", "name": "EffectiveTime", "required": false },
        { "kind": "field", "name": "ExpireTime", "required": false },
        { "kind": "field", "name": "TextTTModifyingUser", "required": false },
        { "kind": "component", "name": "TargetStrategy", "required": false },
        { "kind": "field", "name": "BracketOrderType", "required": false },
        { "kind": "field", "name": "BracketStopLimitOffset", "required": false },
        { "kind": "field", "name": "ChildTIF", "required": false },
        { "kind": "field", "name": "DiscVal", "required": false },
        { "kind": "field", "name": "DiscValType", "required": false },
        { "kind": "field", "name": "ETimeAct", "required": false },
        { "kind": "field", "name": "Interval", "required": false },
        { "kind": "field", "name": "IsTrlTrg", "required": false },
        { "kind": "field", "name": "LeftoverAction", "required": false },
        { "kind": "field", "name": "LeftoverTicks", "required": false },
        { "kind": "field", "name": "LimitPriceType", "required": false },
        { "kind": "field", "name": "LimitTicksAway", "required": false },
        { "kind": "field", "name": "OcoStopTriggerPrice", "required": false },
        { "kind": "field", "name": "ProfitTarget", "required": false },
        { "kind": "field", "name": "StopLimitOffset", "required": false },
        { "kind": "field", "name": "StopOrderType", "required": false },
        { "kind": "field", "name": "StopTarget", "required": false },
        { "kind": "field", "name": "TriggerPriceType", "required": false },
        { "kind": "field", "name": "TriggerTicksAway", "required": false },
        { "kind": "field", "name": "TriggerType", "required": false },
        { "kind": "field", "name": "WithATickType", "required": false },
        { "kind": "field", "name": "WithATick", "required": false },
        { "kind": "field", "name": "AllocID", "required": false },
        { "kind": "field", "name": "RefID", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "component", "name": "LinksGrp", "required": false },
        { "kind": "component", "name": "FillsGrp", "required": false },
        { "kind": "field", "name": "ClearingAccountOverride", "required": false },
        { "kind": "field", "name": "DropCopyOrder", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "field", "name": "TrdRegPublicationReason", "required": false },
        { "kind": "field", "name": "TradingVenueRegulatoryTradeID", "required": false },
        { "kind": "field", "name": "LastLiquidityIndicator", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "field", "name": "OrderIDGUID", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "TextA", "required": false },
        { "kind": "field", "name": "TextB", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "field", "name": "TimeReceivedFromExchange", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "field", "name": "SelfMatchPreventionID", "required": false },
        { "kind": "field", "name": "SelfMatchPreventionIDICE", "required": false },
        { "kind": "field", "name": "SelfMatchPreventionInstruction", "required": false },
        { "kind": "field", "name": "SMPInstruction", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "field", "name": "UniqueExecID", "required": false },
        { "kind": "field", "name": "SpreadLegRatioQty", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "AccountRiskGroup", "required": false },
        { "kind": "field", "name": "MlegHeadExecId", "required": false },
        { "kind": "field", "name": "OrdStatusReqID", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "field", "name": "AccountID", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "InvestmentDecision", "required": false },
        { "kind": "field", "name": "DirectElectronicAccess", "required": false },
        { "kind": "field", "name": "TradingCapacity", "required": false },
        { "kind": "field", "name": "LiquidityProvision", "required": false },
        { "kind": "field", "name": "OriginalSecondaryExecID", "required": false },
        { "kind": "field", "name": "MiFIDID", "required": false },
        { "kind": "field", "name": "ExecutionDecision", "required": false },
        { "kind": "field", "name": "ClientIDCode", "required": false },
        { "kind": "field", "name": "TTSyntheticType", "required": false },
        { "kind": "field", "name": "VendorDefinedField1", "required": false },
        { "kind": "field", "name": "VendorDefinedField2", "required": false },
        { "kind": "field", "name": "VendorDefinedField3", "required": false },
        { "kind": "field", "name": "VendorDefinedField4", "required": false },
        { "kind": "field", "name": "VendorDefinedField5", "required": false },
        { "kind": "field", "name": "CustOrderHandlingInst", "required": false },
        { "kind": "field", "name": "Organization", "required": false },
        { "kind": "field", "name": "MockOrderFlag", "required": false },
        { "kind": "field", "name": "MaxShow", "required": false },
        { "kind": "field", "name": "ReviewUserID", "required": false },
        { "kind": "field", "name": "ReviewStatus", "required": false },
        { "kind": "component", "name": "TTReservedGrp", "required": false },
        { "kind": "field", "name": "UniqueLegID", "required": false },
        { "kind": "field", "name": "OrderRestriction", "required": false },
        { "kind": "field", "name": "LeftoverMktOrderLimitTicks", "required": false },
        { "kind": "field", "name": "TTStopNoImplies", "required": false },
        { "kind": "field", "name": "SecondConditionIsOn", "required": false },
        { "kind": "field", "name": "SecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "SecondTriggerQty", "required": false },
        { "kind": "field", "name": "LeftoverTime", "required": false },
        { "kind": "field", "name": "SecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "NoImplies", "required": false },
        { "kind": "field", "name": "CustomSliceSched", "required": false },
        { "kind": "field", "name": "ComplianceText", "required": false },
        { "kind": "field", "name": "LastTradingDate", "required": false },
        { "kind": "field", "name": "TradingStrategy", "required": false },
        { "kind": "field", "name": "ReverseSpreadOC", "required": false },
        { "kind": "field", "name": "MaxPart", "required": false },
        { "kind": "field", "name": "MaxDisp", "required": false },
        { "kind": "field", "name": "TwapStyle", "required": false },
        { "kind": "field", "name": "WouldIfPrc", "required": false },
        { "kind": "field", "name": "LimitPrc", "required": false },
        { "kind": "field", "name": "IntentToCross", "required": false },
        { "kind": "field", "name": "TTSMPID", "required": false },
        { "kind": "field", "name": "TTSMPInstruction", "required": false },
        { "kind": "field", "name": "NVDR", "required": false },
        { "kind": "field", "name": "TTF", "required": false },
        { "kind": "field", "name": "TFUserType", "required": false },
        { "kind": "field", "name": "DynamicEndTime", "required": false },
        { "kind": "component", "name": "UnderlyingInstrument", "required": false },
        { "kind": "field", "name": "MemoFieldICE", "required": false },
        { "kind": "field", "name": "SettlDate", "required": false },
        { "kind": "field", "name": "IfTouchedPrice", "required": false },
        { "kind": "field", "name": "IWouldPrice", "required": false },
        { "kind": "field", "name": "IsFirm", "required": false },
        { "kind": "field", "name": "FixingDate", "required": false },
        { "kind": "field", "name": "FixingSource", "required": false },
        { "kind": "field", "name": "ReportingParty", "required": false },
        { "kind": "field", "name": "TradeID", "required": false },
        { "kind": "field", "name": "HedgeOrderType", "required": false },
        { "kind": "field", "name": "DeltaRounding", "required": false },
        { "kind": "field", "name": "Vol", "required": false },
        { "kind": "component", "name": "NestedParties", "required": false },
        { "kind": "field", "name": "SettlType", "required": false },
        { "kind": "field", "name": "QuoteId", "required": false },
        { "kind": "field", "name": "LastSpotRate", "required": false },
        { "kind": "field", "name": "LastForwardPoints", "required": false },
        { "kind": "field", "name": "RejectSource", "required": false },
        { "kind": "field", "name": "TotalNumSecurities", "required": false },
        { "kind": "field", "name": "InsertTime", "required": false },
        { "kind": "field", "name": "BrokerRoute", "required": false },
        { "kind": "component", "name": "OrderEventGrp", "required": false }
      ]
    },
    {
      "name": "OrderCancelReject",
      "msgtype": "9",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "OrderID", "required": true },
        { "kind": "field", "name": "SecondaryOrderID", "required": false },
        { "kind": "field", "name": "ClOrdID", "required": false },
        { "kind": "field", "name": "TTClOrdID", "required": false },
        { "kind": "field", "name": "OrigClOrdID", "required": false },
        { "kind": "field", "name": "OrdStatus", "required": true },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "CxlRejResponseTo", "required": true },
        { "kind": "field", "name": "CxlRejReason", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "TTID", "required": false },
        { "kind": "field", "name": "AOTCPreventionActionType", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "HandlInst", "required": false },
        { "kind": "field", "name": "StagedOrderMsg", "required": false },
        { "kind": "field", "name": "StagedOrderOwner", "required": false },
        { "kind": "field", "name": "StagedOrderStatus", "required": false },
        { "kind": "field", "name": "ExternalSource", "required": false },
        { "kind": "field", "name": "OrderIDGUID", "required": false },
        { "kind": "field", "name": "ClearingAccountOverride", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "TextA", "required": false },
        { "kind": "field", "name": "TextB", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "component", "name": "StrategyParametersGrp", "required": false },
        { "kind": "field", "name": "TimeReceivedFromExchange", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "field", "name": "AccountID", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "component", "name": "Instrument", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "AllocID", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "field", "name": "CustOrderHandlingInst", "required": false },
        { "kind": "field", "name": "TTSyntheticType", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "field", "name": "Organization", "required": false },
        { "kind": "field", "name": "MockOrderFlag", "required": false },
        { "kind": "field", "name": "ExchCred", "required": false },
        { "kind": "field", "name": "MaxShow", "required": false },
        { "kind": "field", "name": "UniqueLegID", "required": false },
        { "kind": "field", "name": "TTStopNoImplies", "required": false },
        { "kind": "field", "name": "SecondConditionIsOn", "required": false },
        { "kind": "field", "name": "SecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "SecondTriggerQty", "required": false },
        { "kind": "field", "name": "LeftoverTime", "required": false },
        { "kind": "field", "name": "SecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "NoImplies", "required": false },
        { "kind": "field", "name": "CustomSliceSched", "required": false },
        { "kind": "field", "name": "ComplianceText", "required": false },
        { "kind": "field", "name": "TTSMPID", "required": false },
        { "kind": "field", "name": "TTSMPInstruction", "required": false },
        { "kind": "field", "name": "TFUserType", "required": false },
        { "kind": "field", "name": "NVDR", "required": false },
        { "kind": "field", "name": "TTF", "required": false },
        { "kind": "field", "name": "DynamicEndTime", "required": false },
        { "kind": "field", "name": "HedgeOrderType", "required": false },
        { "kind": "field", "name": "DeltaRounding", "required": false },
        { "kind": "field", "name": "Vol", "required": false },
        { "kind": "field", "name": "SelfMatchPreventionID", "required": false },
        { "kind": "field", "name": "RejectSource", "required": false },
        { "kind": "field", "name": "InsertTime", "required": false },
        { "kind": "field", "name": "BrokerRoute", "required": false },
        { "kind": "component", "name": "LinksGrp", "required": false }
      ]
    },
    {
      "name": "NewOrderMultileg",
      "msgtype": "AB",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "ClOrdID", "required": true },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "component", "name": "Instrument", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "component", "name": "PriceTypeSupport", "required": false },
        { "kind": "field", "name": "Account", "required": true },
        { "kind": "field", "name": "SecondaryAccount", "required": false },
        { "kind": "field", "name": "Price", "required": false },
        { "kind": "field", "name": "StopPx", "required": false },
        { "kind": "field", "name": "OrderQty", "required": true },
        { "kind": "field", "name": "MinQty", "required": false },
        { "kind": "field", "name": "DisplayQty", "required": false },
        { "kind": "field", "name": "Side", "required": true },
        { "kind": "field", "name": "OrdType", "required": true },
        { "kind": "field", "name": "OpenClose", "required": false },
        { "kind": "field", "name": "TimeInForce", "required": false },
        { "kind": "field", "name": "ExpireDate", "required": false },
        { "kind": "field", "name": "ExecInst", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "ClearingAccountOverride", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "TextA", "required": false },
        { "kind": "field", "name": "TextB", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "component", "name": "StrategyParametersGrp", "required": false },
        { "kind": "component", "name": "TargetStrategy", "required": false },
        { "kind": "field", "name": "ContingencyType", "required": false },
        { "kind": "field", "name": "HandlInst", "required": false },
        { "kind": "field", "name": "StagedOrderMsg", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "AllocsGrp", "required": false },
        { "kind": "field", "name": "DropCopyOrder", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "field", "name": "CustOrderCapacity", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "field", "name": "SelfMatchPreventionID", "required": false },
        { "kind": "field", "name": "SMPInstruction", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "field", "name": "OrderID", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "component", "name": "LinksGrp", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "ExpireTime", "required": false },
        { "kind": "field", "name": "EffectiveTime", "required": false },
        { "kind": "field", "name": "CustOrderHandlingInst", "required": false },
        { "kind": "field", "name": "TTSyntheticType", "required": false },
        { "kind": "field", "name": "Organization", "required": false },
        { "kind": "field", "name": "MockOrderFlag", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "OrderRestriction", "required": false },
        { "kind": "field", "name": "WaitingOption", "required": false },
        { "kind": "field", "name": "ChildTIF", "required": false },
        { "kind": "field", "name": "LeftoverMktOrderLimitTicks", "required": false },
        { "kind": "field", "name": "TTStopNoImplies", "required": false },
        { "kind": "field", "name": "SecondConditionIsOn", "required": false },
        { "kind": "field", "name": "SecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "SecondTriggerQty", "required": false },
        { "kind": "field", "name": "LeftoverTime", "required": false },
        { "kind": "field", "name": "SecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "NoImplies", "required": false },
        { "kind": "field", "name": "CustomSliceSched", "required": false },
        { "kind": "field", "name": "ComplianceText", "required": false },
        { "kind": "field", "name": "TradingStrategy", "required": false },
        { "kind": "field", "name": "ReverseSpreadOC", "required": false },
        { "kind": "field", "name": "ParentVendorOrderID", "required": false },
        { "kind": "field", "name": "ParentVendorUserID", "required": false },
        { "kind": "field", "name": "ParentVendorAccountID", "required": false },
        { "kind": "field", "name": "ParentVendorBrokerID", "required": false },
        { "kind": "field", "name": "ParentVendorProfileID", "required": false },
        { "kind": "field", "name": "MaxPart", "required": false },
        { "kind": "field", "name": "MaxDisp", "required": false },
        { "kind": "field", "name": "TwapStyle", "required": false },
        { "kind": "field", "name": "WouldIfPrc", "required": false },
        { "kind": "field", "name": "LimitPrc", "required": false },
        { "kind": "field", "name": "IntentToCross", "required": false },
        { "kind": "field", "name": "TFUserType", "required": false },
        { "kind": "field", "name": "DynamicEndTime", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoID", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoType", "required": false },
        { "kind": "field", "name": "PriceFormula", "required": false },
        { "kind": "field", "name": "ReloadOffset", "required": false },
        { "kind": "field", "name": "OverrideTickNumerator", "required": false },
        { "kind": "field", "name": "FormulaBasedOn", "required": false },
        { "kind": "field", "name": "ReloadDelay", "required": false },
        { "kind": "field", "name": "DisclosedQty", "required": false },
        { "kind": "field", "name": "Reload", "required": false },
        { "kind": "field", "name": "OverrideTickSize", "required": false },
        { "kind": "field", "name": "OverrideTickDenominator", "required": false },
        { "kind": "field", "name": "IsShared", "required": false },
        { "kind": "field", "name": "SubStrategy", "required": false },
        { "kind": "field", "name": "LegRiskAversion", "required": false },
        { "kind": "field", "name": "HedgeDiscretionTicks", "required": false },
        { "kind": "field", "name": "TTSMPID", "required": false },
        { "kind": "field", "name": "TTSMPInstruction", "required": false },
        { "kind": "field", "name": "IfTouchedPrice", "required": false },
        { "kind": "field", "name": "IWouldPrice", "required": false },
        { "kind": "field", "name": "HedgeOrderType", "required": false },
        { "kind": "field", "name": "DeltaRounding", "required": false },
        { "kind": "field", "name": "Vol", "required": false },
        { "kind": "field", "name": "QuoteId", "required": false },
        { "kind": "field", "name": "BrokerRoute", "required": false }
      ]
    },
    {
      "name": "NewOrderSingle",
      "msgtype": "D",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "ClOrdID", "required": true },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "PriceTypeSupport", "required": false },
        { "kind": "field", "name": "Account", "required": true },
        { "kind": "field", "name": "SecondaryAccount", "required": false },
        { "kind": "field", "name": "Price", "required": false },
        { "kind": "field", "name": "StopPx", "required": false },
        { "kind": "field", "name": "OrderQty", "required": true },
        { "kind": "field", "name": "MinQty", "required": false },
        { "kind": "field", "name": "DisplayQty", "required": false },
        { "kind": "field", "name": "Side", "required": true },
        { "kind": "field", "name": "OrdType", "required": true },
        { "kind": "field", "name": "OpenClose", "required": false },
        { "kind": "field", "name": "TimeInForce", "required": false },
        { "kind": "field", "name": "ExpireDate", "required": false },
        { "kind": "field", "name": "ExecInst", "required": false },
        { "kind": "field", "name": "ContingencyType", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "field", "name": "HandlInst", "required": false },
        { "kind": "field", "name": "StagedOrderMsg", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "EffectiveTime", "required": false },
        { "kind": "field", "name": "ExpireTime", "required": false },
        { "kind": "field", "name": "TextA", "required": false },
        { "kind": "field", "name": "TextB", "required": false },
        { "kind": "component", "name": "StrategyParametersGrp", "required": false },
        { "kind": "component", "name": "TargetStrategy", "required": false },
        { "kind": "field", "name": "BracketOrderType", "required": false },
        { "kind": "field", "name": "BracketStopLimitOffset", "required": false },
        { "kind": "field", "name": "ChildTIF", "required": false },
        { "kind": "field", "name": "DiscVal", "required": false },
        { "kind": "field", "name": "DiscValType", "required": false },
        { "kind": "field", "name": "ETimeAct", "required": false },
        { "kind": "field", "name": "Interval", "required": false },
        { "kind": "field", "name": "IsTrlTrg", "required": false },
        { "kind": "field", "name": "LeftoverAction", "required": false },
        { "kind": "field", "name": "LeftoverTicks", "required": false },
        { "kind": "field", "name": "LimitPriceType", "required": false },
        { "kind": "field", "name": "LimitTicksAway", "required": false },
        { "kind": "field", "name": "OcoStopTriggerPrice", "required": false },
        { "kind": "field", "name": "ProfitTarget", "required": false },
        { "kind": "field", "name": "StopLimitOffset", "required": false },
        { "kind": "field", "name": "StopOrderType", "required": false },
        { "kind": "field", "name": "StopTarget", "required": false },
        { "kind": "field", "name": "TriggerPriceType", "required": false },
        { "kind": "field", "name": "TriggerTicksAway", "required": false },
        { "kind": "field", "name": "TriggerType", "required": false },
        { "kind": "field", "name": "WithATickType", "required": false },
        { "kind": "field", "name": "WithATick", "required": false },
        { "kind": "field", "name": "TriggerQtyType", "required": false },
        { "kind": "field", "name": "TriggerQtyCompare", "required": false },
        { "kind": "field", "name": "TriggerQty", "required": false },
        { "kind": "field", "name": "TriggerLTPReset", "required": false },
        { "kind": "field", "name": "TTStopLimitPriceType", "required": false },
        { "kind": "field", "name": "TTStopWithATickType", "required": false },
        { "kind": "field", "name": "TTStopWithATick", "required": false },
        { "kind": "field", "name": "Payup", "required": false },
        { "kind": "field", "name": "TTStopTriggerPriceType", "required": false },
        { "kind": "field", "name": "TTStopIsTrlTrg", "required": false },
        { "kind": "field", "name": "TTStopTriggerTicksAway", "required": false },
        { "kind": "field", "name": "TTStopTriggerQtyType", "required": false },
        { "kind": "field", "name": "TTStopTriggerQTyCompare", "required": false },
        { "kind": "field", "name": "TTStopTriggerQty", "required": false },
        { "kind": "field", "name": "TTStopTriggerLTPReset", "required": false },
        { "kind": "field", "name": "TTStopTriggeredOrderType", "required": false },
        { "kind": "field", "name": "TTStopTriggeredOrderPrice", "required": false },
        { "kind": "field", "name": "TTStopLimitTicksAway", "required": false },
        { "kind": "field", "name": "TTStopPayup", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "AllocsGrp", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "field", "name": "ClearingAccountOverride", "required": false },
        { "kind": "field", "name": "DropCopyOrder", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "field", "name": "CustOrderCapacity", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "field", "name": "SelfMatchPreventionID", "required": false },
        { "kind": "field", "name": "SMPInstruction", "required": false },
        { "kind": "field", "name": "Duration", "required": false },
        { "kind": "field", "name": "DurationBaseUnit", "required": false },
        { "kind": "field", "name": "DurationSTime", "required": false },
        { "kind": "field", "name": "DurationETime", "required": false },
        { "kind": "field", "name": "LeftoverTimeAction", "required": false },
        { "kind": "field", "name": "AutoResubExpiredGTD", "required": false },
        { "kind": "field", "name": "ParentTIF", "required": false },
        { "kind": "field", "name": "TTStopSecondConditionIsOn", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "TTStopSecondConditionIsTrlTrg", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerQty", "required": false },
        { "kind": "field", "name": "Variance", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "field", "name": "OrderID", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "component", "name": "LinksGrp", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "ETAGoToMktTicks", "required": false },
        { "kind": "field", "name": "WaitingOption", "required": false },
        { "kind": "field", "name": "TTStopChildTIFOverride", "required": false },
        { "kind": "field", "name": "CustOrderHandlingInst", "required": false },
        { "kind": "field", "name": "TTSyntheticType", "required": false },
        { "kind": "field", "name": "Organization", "required": false },
        { "kind": "field", "name": "MockOrderFlag", "required": false },
        { "kind": "field", "name": "OrderRestriction", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "TTStopNoImplies", "required": false },
        { "kind": "field", "name": "SecondConditionIsOn", "required": false },
        { "kind": "field", "name": "SecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "SecondTriggerQty", "required": false },
        { "kind": "field", "name": "LeftoverTime", "required": false },
        { "kind": "field", "name": "SecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "NoImplies", "required": false },
        { "kind": "field", "name": "CustomSliceSched", "required": false },
        { "kind": "field", "name": "LeftoverMktOrderLimitTicks", "required": false },
        { "kind": "field", "name": "ComplianceText", "required": false },
        { "kind": "field", "name": "TradingStrategy", "required": false },
        { "kind": "field", "name": "ReverseSpreadOC", "required": false },
        { "kind": "field", "name": "ParentVendorOrderID", "required": false },
        { "kind": "field", "name": "ParentVendorUserID", "required": false },
        { "kind": "field", "name": "ParentVendorAccountID", "required": false },
        { "kind": "field", "name": "ParentVendorBrokerID", "required": false },
        { "kind": "field", "name": "ParentVendorProfileID", "required": false },
        { "kind": "field", "name": "MaxPart", "required": false },
        { "kind": "field", "name": "MaxDisp", "required": false },
        { "kind": "field", "name": "TwapStyle", "required": false },
        { "kind": "field", "name": "WouldIfPrc", "required": false },
        { "kind": "field", "name": "LimitPrc", "required": false },
        { "kind": "field", "name": "IntentToCross", "required": false },
        { "kind": "field", "name": "TFUserType", "required": false },
        { "kind": "field", "name": "DynamicEndTime", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoID", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoType", "required": false },
        { "kind": "field", "name": "TTSMPID", "required": false },
        { "kind": "field", "name": "TTSMPInstruction", "required": false },
        { "kind": "field", "name": "IfTouchedPrice", "required": false },
        { "kind": "field", "name": "IWouldPrice", "required": false },
        { "kind": "field", "name": "HedgeOrderType", "required": false },
        { "kind": "field", "name": "DeltaRounding", "required": false },
        { "kind": "field", "name": "Vol", "required": false },
        { "kind": "field", "name": "QuoteId", "required": false },
        { "kind": "field", "name": "BrokerRoute", "required": false }
      ]
    },
    {
      "name": "MultilegOrderCancelReplace",
      "msgtype": "AC",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "OrderID", "required": false },
        { "kind": "field", "name": "OrderIDGUID", "required": false },
        { "kind": "field", "name": "OrigClOrdID", "required": false },
        { "kind": "field", "name": "ClOrdID", "required": true },
        { "kind": "field", "name": "Account", "required": true },
        { "kind": "field", "name": "Price", "required": false },
        { "kind": "field", "name": "StopPx", "required": false },
        { "kind": "component", "name": "Instrument", "required": false },
        { "kind": "component", "name": "PriceTypeSupport", "required": false },
        { "kind": "field", "name": "OrderQty", "required": true },
        { "kind": "field", "name": "MinQty", "required": false },
        { "kind": "field", "name": "DisplayQty", "required": false },
        { "kind": "field", "name": "Side", "required": true },
        { "kind": "field", "name": "OrdType", "required": true },
        { "kind": "field", "name": "OpenClose", "required": false },
        { "kind": "field", "name": "TimeInForce", "required": false },
        { "kind": "field", "name": "ExpireDate", "required": false },
        { "kind": "field", "name": "ExecInst", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "ClearingAccountOverride", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "field", "name": "TextA", "required": false },
        { "kind": "field", "name": "TextB", "required": false },
        { "kind": "component", "name": "StrategyParametersGrp", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "field", "name": "HandlInst", "required": false },
        { "kind": "field", "name": "StagedOrderMsg", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "AllocsGrp", "required": false },
        { "kind": "field", "name": "DropCopyOrder", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "field", "name": "CustOrderCapacity", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "field", "name": "SelfMatchPreventionID", "required": false },
        { "kind": "field", "name": "SMPInstruction", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "component", "name": "LinksGrp", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "ExpireTime", "required": false },
        { "kind": "field", "name": "CustOrderHandlingInst", "required": false },
        { "kind": "field", "name": "TTSyntheticType", "required": false },
        { "kind": "field", "name": "Organization", "required": false },
        { "kind": "field", "name": "MockOrderFlag", "required": false },
        { "kind": "field", "name": "OrderRestriction", "required": false },
        { "kind": "field", "name": "WaitingOption", "required": false },
        { "kind": "field", "name": "ChildTIF", "required": false },
        { "kind": "field", "name": "LeftoverMktOrderLimitTicks", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "TTStopNoImplies", "required": false },
        { "kind": "field", "name": "SecondConditionIsOn", "required": false },
        { "kind": "field", "name": "SecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "SecondTriggerQty", "required": false },
        { "kind": "field", "name": "LeftoverTime", "required": false },
        { "kind": "field", "name": "SecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "NoImplies", "required": false },
        { "kind": "field", "name": "CustomSliceSched", "required": false },
        { "kind": "field", "name": "ComplianceText", "required": false },
        { "kind": "field", "name": "TradingStrategy", "required": false },
        { "kind": "field", "name": "ReverseSpreadOC", "required": false },
        { "kind": "field", "name": "ParentVendorOrderID", "required": false },
        { "kind": "field", "name": "ParentVendorUserID", "required": false },
        { "kind": "field", "name": "ParentVendorAccountID", "required": false },
        { "kind": "field", "name": "ParentVendorBrokerID", "required": false },
        { "kind": "field", "name": "ParentVendorProfileID", "required": false },
        { "kind": "field", "name": "MaxPart", "required": false },
        { "kind": "field", "name": "MaxDisp", "required": false },
        { "kind": "field", "name": "TwapStyle", "required": false },
        { "kind": "field", "name": "WouldIfPrc", "required": false },
        { "kind": "field", "name": "LimitPrc", "required": false },
        { "kind": "field", "name": "IntentToCross", "required": false },
        { "kind": "field", "name": "DynamicEndTime", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoID", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoType", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "HedgeOrderType", "required": false },
        { "kind": "field", "name": "DeltaRounding", "required": false },
        { "kind": "field", "name": "Vol", "required": false },
        { "kind": "field", "name": "BrokerRoute", "required": false }
      ]
    },
    {
      "name": "OrderCancelReplaceRequest",
      "msgtype": "G",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "OrderID", "required": false },
        { "kind": "field", "name": "OrderIDGUID", "required": false },
        { "kind": "field", "name": "OrigClOrdID", "required": false },
        { "kind": "field", "name": "ClOrdID", "required": true },
        { "kind": "field", "name": "Account", "required": true },
        { "kind": "field", "name": "Price", "required": false },
        { "kind": "field", "name": "StopPx", "required": false },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "PriceTypeSupport", "required": false },
        { "kind": "field", "name": "OrderQty", "required": true },
        { "kind": "field", "name": "MinQty", "required": false },
        { "kind": "field", "name": "DisplayQty", "required": false },
        { "kind": "field", "name": "Side", "required": true },
        { "kind": "field", "name": "OrdType", "required": true },
        { "kind": "field", "name": "OpenClose", "required": false },
        { "kind": "field", "name": "TimeInForce", "required": false },
        { "kind": "field", "name": "ExpireDate", "required": false },
        { "kind": "field", "name": "ExecInst", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "TextA", "required": false },
        { "kind": "field", "name": "TextB", "required": false },
        { "kind": "component", "name": "StrategyParametersGrp", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "field", "name": "HandlInst", "required": false },
        { "kind": "field", "name": "StagedOrderMsg", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "AllocsGrp", "required": false },
        { "kind": "field", "name": "BracketOrderType", "required": false },
        { "kind": "field", "name": "BracketStopLimitOffset", "required": false },
        { "kind": "field", "name": "ChildTIF", "required": false },
        { "kind": "field", "name": "DiscVal", "required": false },
        { "kind": "field", "name": "DiscValType", "required": false },
        { "kind": "field", "name": "ETimeAct", "required": false },
        { "kind": "field", "name": "Interval", "required": false },
        { "kind": "field", "name": "IsTrlTrg", "required": false },
        { "kind": "field", "name": "LeftoverAction", "required": false },
        { "kind": "field", "name": "LeftoverTicks", "required": false },
        { "kind": "field", "name": "LimitPriceType", "required": false },
        { "kind": "field", "name": "LimitTicksAway", "required": false },
        { "kind": "field", "name": "OcoStopTriggerPrice", "required": false },
        { "kind": "field", "name": "ProfitTarget", "required": false },
        { "kind": "field", "name": "StopLimitOffset", "required": false },
        { "kind": "field", "name": "StopOrderType", "required": false },
        { "kind": "field", "name": "StopTarget", "required": false },
        { "kind": "field", "name": "TriggerPriceType", "required": false },
        { "kind": "field", "name": "TriggerTicksAway", "required": false },
        { "kind": "field", "name": "TriggerType", "required": false },
        { "kind": "field", "name": "WithATickType", "required": false },
        { "kind": "field", "name": "WithATick", "required": false },
        { "kind": "field", "name": "TriggerQtyType", "required": false },
        { "kind": "field", "name": "TriggerQtyCompare", "required": false },
        { "kind": "field", "name": "TriggerQty", "required": false },
        { "kind": "field", "name": "TriggerLTPReset", "required": false },
        { "kind": "field", "name": "TTStopLimitPriceType", "required": false },
        { "kind": "field", "name": "TTStopWithATickType", "required": false },
        { "kind": "field", "name": "TTStopWithATick", "required": false },
        { "kind": "field", "name": "Payup", "required": false },
        { "kind": "field", "name": "TTStopTriggerPriceType", "required": false },
        { "kind": "field", "name": "TTStopIsTrlTrg", "required": false },
        { "kind": "field", "name": "TTStopTriggerTicksAway", "required": false },
        { "kind": "field", "name": "TTStopTriggerQtyType", "required": false },
        { "kind": "field", "name": "TTStopTriggerQTyCompare", "required": false },
        { "kind": "field", "name": "TTStopTriggerQty", "required": false },
        { "kind": "field", "name": "TTStopTriggerLTPReset", "required": false },
        { "kind": "field", "name": "TTStopTriggeredOrderType", "required": false },
        { "kind": "field", "name": "TTStopTriggeredOrderPrice", "required": false },
        { "kind": "field", "name": "TTStopLimitTicksAway", "required": false },
        { "kind": "field", "name": "TTStopPayup", "required": false },
        { "kind": "field", "name": "ClearingAccountOverride", "required": false },
        { "kind": "field", "name": "DropCopyOrder", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "field", "name": "CustOrderCapacity", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "field", "name": "SelfMatchPreventionID", "required": false },
        { "kind": "field", "name": "SMPInstruction", "required": false },
        { "kind": "field", "name": "Duration", "required": false },
        { "kind": "field", "name": "DurationBaseUnit", "required": false },
        { "kind": "field", "name": "DurationSTime", "required": false },
        { "kind": "field", "name": "DurationETime", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "LeftoverTimeAction", "required": false },
        { "kind": "field", "name": "AutoResubExpiredGTD", "required": false },
        { "kind": "field", "name": "ParentTIF", "required": false },
        { "kind": "field", "name": "TTStopSecondConditionIsOn", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "TTStopSecondConditionIsTrlTrg", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "TTStopSecondTriggerQty", "required": false },
        { "kind": "field", "name": "Variance", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "component", "name": "LinksGrp", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "ExpireTime", "required": false },
        { "kind": "field", "name": "CustOrderHandlingInst", "required": false },
        { "kind": "field", "name": "TTSyntheticType", "required": false },
        { "kind": "field", "name": "Organization", "required": false },
        { "kind": "field", "name": "MockOrderFlag", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "OrderRestriction", "required": false },
        { "kind": "field", "name": "WaitingOption", "required": false },
        { "kind": "field", "name": "LeftoverMktOrderLimitTicks", "required": false },
        { "kind": "field", "name": "TTStopNoImplies", "required": false },
        { "kind": "field", "name": "SecondConditionIsOn", "required": false },
        { "kind": "field", "name": "SecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "SecondTriggerQty", "required": false },
        { "kind": "field", "name": "LeftoverTime", "required": false },
        { "kind": "field", "name": "SecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "NoImplies", "required": false },
        { "kind": "field", "name": "CustomSliceSched", "required": false },
        { "kind": "field", "name": "ComplianceText", "required": false },
        { "kind": "field", "name": "TradingStrategy", "required": false },
        { "kind": "field", "name": "ReverseSpreadOC", "required": false },
        { "kind": "field", "name": "ParentVendorOrderID", "required": false },
        { "kind": "field", "name": "ParentVendorUserID", "required": false },
        { "kind": "field", "name": "ParentVendorAccountID", "required": false },
        { "kind": "field", "name": "ParentVendorBrokerID", "required": false },
        { "kind": "field", "name": "ParentVendorProfileID", "required": false },
        { "kind": "field", "name": "MaxPart", "required": false },
        { "kind": "field", "name": "MaxDisp", "required": false },
        { "kind": "field", "name": "TwapStyle", "required": false },
        { "kind": "field", "name": "WouldIfPrc", "required": false },
        { "kind": "field", "name": "LimitPrc", "required": false },
        { "kind": "field", "name": "IntentToCross", "required": false },
        { "kind": "field", "name": "DynamicEndTime", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoID", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoType", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "IfTouchedPrice", "required": false },
        { "kind": "field", "name": "IWouldPrice", "required": false },
        { "kind": "field", "name": "HedgeOrderType", "required": false },
        { "kind": "field", "name": "DeltaRounding", "required": false },
        { "kind": "field", "name": "Vol", "required": false },
        { "kind": "field", "name": "BrokerRoute", "required": false }
      ]
    },
    {
      "name": "OrderCancelRequest",
      "msgtype": "F",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "ClOrdID", "required": true },
        { "kind": "field", "name": "OrderID", "required": false },
        { "kind": "field", "name": "OrderIDGUID", "required": false },
        { "kind": "field", "name": "OrigClOrdID", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "ClearingAccountOverride", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "DropCopyOrder", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "StagedOrderMsg", "required": false },
        { "kind": "field", "name": "TTSyntheticType", "required": false },
        { "kind": "field", "name": "CustOrderHandlingInst", "required": false },
        { "kind": "component", "name": "LinksGrp", "required": false },
        { "kind": "field", "name": "Organization", "required": false },
        { "kind": "field", "name": "MockOrderFlag", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "OrderRestriction", "required": false },
        { "kind": "field", "name": "TTStopNoImplies", "required": false },
        { "kind": "field", "name": "SecondConditionIsOn", "required": false },
        { "kind": "field", "name": "SecondTriggerTicksAway", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyType", "required": false },
        { "kind": "field", "name": "SecondTriggerQtyCompare", "required": false },
        { "kind": "field", "name": "SecondTriggerQty", "required": false },
        { "kind": "field", "name": "LeftoverTime", "required": false },
        { "kind": "field", "name": "SecondTriggerPriceType", "required": false },
        { "kind": "field", "name": "NoImplies", "required": false },
        { "kind": "field", "name": "CustomSliceSched", "required": false },
        { "kind": "field", "name": "ComplianceText", "required": false },
        { "kind": "field", "name": "ParentVendorOrderID", "required": false },
        { "kind": "field", "name": "ParentVendorUserID", "required": false },
        { "kind": "field", "name": "ParentVendorAccountID", "required": false },
        { "kind": "field", "name": "ParentVendorBrokerID", "required": false },
        { "kind": "field", "name": "ParentVendorProfileID", "required": false },
        { "kind": "field", "name": "DynamicEndTime", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoID", "required": false },
        { "kind": "field", "name": "ParentVendorAlgoType", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "HedgeOrderType", "required": false },
        { "kind": "field", "name": "DeltaRounding", "required": false },
        { "kind": "field", "name": "Vol", "required": false },
        { "kind": "field", "name": "BrokerRoute", "required": false },
        { "kind": "field", "name": "Side", "required": false }
      ]
    },
    {
      "name": "SecurityDefinitionRequest",
      "msgtype": "c",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "SecurityReqID", "required": true },
        { "kind": "field", "name": "SecurityRequestType", "required": false },
        { "kind": "field", "name": "RequestTickTable", "required": false },
        { "kind": "component", "name": "Instrument", "required": false },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "field", "name": "ParentVendorUserID", "required": false },
        { "kind": "field", "name": "ParentVendorAccountID", "required": false },
        { "kind": "field", "name": "ParentVendorBrokerID", "required": false },
        { "kind": "field", "name": "ParentVendorProfileID", "required": false },
        { "kind": "field", "name": "Text", "required": false }
      ]
    },
    {
      "name": "SecurityDefinition",
      "msgtype": "d",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "SecurityReqID", "required": true },
        { "kind": "field", "name": "SecurityResponseID", "required": true },
        { "kind": "field", "name": "SecurityResponseType", "required": true },
        { "kind": "field", "name": "TotalNumSecurities", "required": true },
        { "kind": "component", "name": "Instrument", "required": false },
        { "kind": "field", "name": "DisplayFactor", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "MinLotSize", "required": false },
        { "kind": "field", "name": "NumberOfBlocks", "required": false },
        { "kind": "field", "name": "TradesInFlow", "required": false },
        { "kind": "field", "name": "ExchTickSize", "required": false },
        { "kind": "field", "name": "ExchPointValue", "required": false },
        { "kind": "component", "name": "TickTblEntriesGrp", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "field", "name": "PriceDisplayType", "required": false },
        { "kind": "field", "name": "RoundLot", "required": false },
        { "kind": "component", "name": "UnderlyingInstrument", "required": false },
        { "kind": "field", "name": "DisplayFactorQty", "required": false },
        { "kind": "field", "name": "ProductComplex", "required": false },
        { "kind": "field", "name": "DefSecuritySubTypeID", "required": false }
      ]
    },
    {
      "name": "SecurityStatusRequest",
      "msgtype": "e",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "SecurityStatusReqID", "required": true },
        { "kind": "field", "name": "SubscriptionRequestType", "required": true },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "LegsGrp", "required": false }
      ]
    },
    {
      "name": "SecurityStatus",
      "msgtype": "f",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "SecurityStatusReqID", "required": true },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "field", "name": "SecurityTradingStatus", "required": true },
        { "kind": "field", "name": "Text", "required": false }
      ]
    },
    {
      "name": "MarketDataRequest",
      "msgtype": "V",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "MDReqID", "required": true },
        { "kind": "field", "name": "SubscriptionRequestType", "required": true },
        { "kind": "field", "name": "MarketDepth", "required": false },
        { "kind": "field", "name": "MDUpdateType", "required": false },
        { "kind": "field", "name": "AggregatedBook", "required": false },
        { "kind": "component", "name": "MDEntryTypesGrp", "required": true },
        { "kind": "component", "name": "RelatedSymGrp", "required": true },
        { "kind": "field", "name": "IncludeNumberOfOrders", "required": false },
        { "kind": "field", "name": "IncludeQuotes", "required": false }
      ]
    },
    {
      "name": "MarketDataRequestReject",
      "msgtype": "Y",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "MDReqID", "required": true },
        { "kind": "field", "name": "SecurityID", "required": false },
        { "kind": "field", "name": "Text", "required": true }
      ]
    },
    {
      "name": "MarketDataSnapshot",
      "msgtype": "W",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "MDReqID", "required": true },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "field", "name": "PriceFeedStatus", "required": false },
        { "kind": "component", "name": "MDFullGrp", "required": true },
        { "kind": "field", "name": "ExchangeSendingTime", "required": false },
        { "kind": "field", "name": "ExchangeTransactTime", "required": false }
      ]
    },
    {
      "name": "MarketDataIncrementalRefresh",
      "msgtype": "X",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "MDReqID", "required": true },
        { "kind": "field", "name": "PriceFeedStatus", "required": false },
        { "kind": "component", "name": "MDIncGrp", "required": true },
        { "kind": "field", "name": "ExchangeSendingTime", "required": false },
        { "kind": "field", "name": "ExchangeTransactTime", "required": false },
        { "kind": "field", "name": "ExchangeSeqNum", "required": false }
      ]
    },
    {
      "name": "QuoteRequest",
      "msgtype": "R",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "QuoteReqID", "required": false },
        { "kind": "field", "name": "SRFQTransType", "required": false },
        { "kind": "field", "name": "ValidUntilTime", "required": false },
        { "kind": "component", "name": "RelatedSymGrp", "required": true },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "component", "name": "TargetPartyIDGrp", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "field", "name": "NegotiationID", "required": false },
        { "kind": "field", "name": "ParentVendorUserID", "required": false },
        { "kind": "field", "name": "ParentVendorAccountID", "required": false },
        { "kind": "field", "name": "ParentVendorBrokerID", "required": false },
        { "kind": "field", "name": "ParentVendorProfileID", "required": false }
      ]
    },
    {
      "name": "QuoteRequestResponse",
      "msgtype": "b",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "QuoteReqID", "required": false },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "ExecID", "required": false },
        { "kind": "field", "name": "QuoteAckStatus", "required": false },
        { "kind": "field", "name": "AccountID", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "OrderID", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "field", "name": "OrderQty", "required": false },
        { "kind": "field", "name": "SecondaryOrderID", "required": false },
        { "kind": "field", "name": "SecurityDesc", "required": false },
        { "kind": "field", "name": "Side", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "CustOrderCapacity", "required": false }
      ]
    },
    {
      "name": "Quote",
      "msgtype": "S",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "AccountID", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "TTID", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "BidPx", "required": false },
        { "kind": "field", "name": "OfferPx", "required": false },
        { "kind": "field", "name": "BidSize", "required": false },
        { "kind": "field", "name": "OfferSize", "required": false },
        { "kind": "field", "name": "ExpireTime", "required": false },
        { "kind": "field", "name": "QuoteRefPrice", "required": false },
        { "kind": "field", "name": "UnderlyingDeltaPercentage", "required": false },
        { "kind": "field", "name": "TargetPartyExchangeTraderID", "required": false },
        { "kind": "field", "name": "NegotiationID", "required": false },
        { "kind": "field", "name": "QuotingStatus", "required": false },
        { "kind": "field", "name": "SecondaryNegotiationID", "required": false },
        { "kind": "field", "name": "MktQuoteID", "required": false },
        { "kind": "field", "name": "Seq", "required": false },
        { "kind": "field", "name": "QuoteReqID", "required": false },
        { "kind": "field", "name": "SecondaryQuoteID", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "LegsGrp", "required": false }
      ]
    },
    {
      "name": "QuoteStatusReport",
      "msgtype": "AI",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "QuoteReqID", "required": false },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "ExecID", "required": false },
        { "kind": "field", "name": "AccountID", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "TTID", "required": false },
        { "kind": "field", "name": "OrderSource", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "OrderOrigination", "required": false },
        { "kind": "field", "name": "OrderQty", "required": false },
        { "kind": "field", "name": "Side", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "CustOrderCapacity", "required": false },
        { "kind": "field", "name": "QuoteType", "required": false },
        { "kind": "field", "name": "QuoteSubType", "required": false },
        { "kind": "field", "name": "QuoteRefPrice", "required": false },
        { "kind": "field", "name": "UnderlyingDeltaPercentage", "required": false },
        { "kind": "field", "name": "ValidUntilTime", "required": false },
        { "kind": "field", "name": "EffectiveTime", "required": false },
        { "kind": "field", "name": "LastUpdateTime", "required": false },
        { "kind": "field", "name": "BidPx", "required": false },
        { "kind": "field", "name": "OfferPx", "required": false },
        { "kind": "field", "name": "LastPx", "required": false },
        { "kind": "field", "name": "LastShares", "required": false },
        { "kind": "field", "name": "LeavesQty", "required": false },
        { "kind": "field", "name": "SRFQTransType", "required": false },
        { "kind": "component", "name": "TargetPartyIDGrp", "required": false },
        { "kind": "field", "name": "NegotiationID", "required": false },
        { "kind": "field", "name": "SecondaryNegotiationID", "required": false },
        { "kind": "field", "name": "QuoteStatus", "required": false },
        { "kind": "field", "name": "Seq", "required": false },
        { "kind": "field", "name": "QuoteCondition", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "component", "name": "Parties", "required": false }
      ]
    },
    {
      "name": "QuoteResponse",
      "msgtype": "AJ",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "TradeReportID", "required": false },
        { "kind": "field", "name": "NegotiationID", "required": false },
        { "kind": "field", "name": "MktQuoteID", "required": false },
        { "kind": "field", "name": "TradingSessionSubID", "required": false },
        { "kind": "field", "name": "TransBkdTime", "required": false },
        { "kind": "field", "name": "ValidUntilTime", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "field", "name": "BidPx", "required": false },
        { "kind": "field", "name": "OfferPx", "required": false },
        { "kind": "field", "name": "BidSize", "required": false },
        { "kind": "field", "name": "OfferSize", "required": false },
        { "kind": "field", "name": "LastPx", "required": false },
        { "kind": "field", "name": "LastShares", "required": false },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "field", "name": "HandlInst", "required": false }
      ]
    },
    {
      "name": "Logon",
      "msgtype": "A",
      "msgcat": "admin",
      "items": [
        { "kind": "field", "name": "EncryptMethod", "required": false },
        { "kind": "field", "name": "HeartBtInt", "required": true },
        { "kind": "field", "name": "RawData", "required": false },
        { "kind": "field", "name": "ResetSeqNumFlag", "required": false },
        { "kind": "field", "name": "NextExpectedMsgSeqNum", "required": false },
        { "kind": "field", "name": "ByPassSessionRecovery", "required": false },
        { "kind": "field", "name": "Password", "required": false },
        { "kind": "field", "name": "StartDate", "required": false },
        { "kind": "field", "name": "EndDate", "required": false },
        { "kind": "field", "name": "SecurityExchange", "required": false },
        { "kind": "field", "name": "ExDestination", "required": false },
        { "kind": "field", "name": "CustomMode", "required": false },
        { "kind": "field", "name": "Duration", "required": false }
      ]
    },
    {
      "name": "BusinessMessageReject",
      "msgtype": "j",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "RefSeqNum", "required": false },
        { "kind": "field", "name": "RefMsgType", "required": true },
        { "kind": "field", "name": "BusinessRejectRefID", "required": false },
        { "kind": "field", "name": "BusinessRejectReason", "required": true },
        { "kind": "field", "name": "Text", "required": false }
      ]
    },
    {
      "name": "OrderStatusRequest",
      "msgtype": "H",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "ClOrdID", "required": false },
        { "kind": "field", "name": "OrderID", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "ClearingAccountOverride", "required": false },
        { "kind": "field", "name": "OrdStatusReqID", "required": false }
      ]
    },
    {
      "name": "TradeCaptureReportRequest",
      "msgtype": "AD",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "TradeRequestID", "required": false },
        { "kind": "field", "name": "TradeRequestType", "required": false },
        { "kind": "field", "name": "SubscriptionRequestType", "required": true },
        { "kind": "field", "name": "LastUpdateTime", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "field", "name": "MultiLegReportingType", "required": false }
      ]
    },
    {
      "name": "TradeCaptureReportRequestAck",
      "msgtype": "AQ",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "TradeRequestID", "required": false },
        { "kind": "field", "name": "TradeRequestType", "required": false },
        { "kind": "field", "name": "TradeRequestResult", "required": false },
        { "kind": "field", "name": "TradeRequestStatus", "required": false },
        { "kind": "field", "name": "Text", "required": false }
      ]
    },
    {
      "name": "TradeCaptureReport",
      "msgtype": "AE",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "TradeReportID", "required": false },
        { "kind": "field", "name": "ExecID", "required": false },
        { "kind": "field", "name": "SecondaryExecID", "required": false },
        { "kind": "field", "name": "ExecType", "required": false },
        { "kind": "field", "name": "TradeReportTransType", "required": false },
        { "kind": "field", "name": "TradeReportType", "required": false },
        { "kind": "field", "name": "TradeHandlingInstr", "required": false },
        { "kind": "field", "name": "TrdType", "required": false },
        { "kind": "field", "name": "TrdSubType", "required": false },
        { "kind": "field", "name": "Price", "required": false },
        { "kind": "field", "name": "LastPx", "required": false },
        { "kind": "field", "name": "LastShares", "required": false },
        { "kind": "field", "name": "LeavesQty", "required": false },
        { "kind": "field", "name": "MultiLegReportingType", "required": false },
        { "kind": "field", "name": "TradeLinkID", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "TradeReportRefID", "required": false },
        { "kind": "field", "name": "SecondaryTradeReportID", "required": false },
        { "kind": "field", "name": "TradeID", "required": false },
        { "kind": "field", "name": "OrigTradeID", "required": false },
        { "kind": "field", "name": "TrdMatchID", "required": false },
        { "kind": "field", "name": "FutureReferencePrice", "required": false },
        { "kind": "field", "name": "TradeDate", "required": false },
        { "kind": "field", "name": "OrigTradeDate", "required": false },
        { "kind": "field", "name": "PreviouslyReported", "required": false },
        { "kind": "field", "name": "TransBkdTime", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "field", "name": "AvgPx", "required": false },
        { "kind": "field", "name": "TradingVenueRegulatoryTradeID", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "component", "name": "SidesGrp", "required": true },
        { "kind": "component", "name": "TCRLegsGrp", "required": false },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "RoutingAccount", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "field", "name": "Seq", "required": false },
        { "kind": "field", "name": "LegFillSeq", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "TTID", "required": false },
        { "kind": "field", "name": "TradePublishIndicator", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "component", "name": "UnderlyingInstrument", "required": false },
        { "kind": "component", "name": "InstrumentExtension", "required": false },
        { "kind": "field", "name": "RelatedTradeID", "required": false },
        { "kind": "field", "name": "RelatedTradeQty", "required": false },
        { "kind": "component", "name": "RootPartyIDGrp", "required": false },
        { "kind": "field", "name": "SettlDate", "required": false },
        { "kind": "field", "name": "HedgeType", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "TradingSessionSubID", "required": false },
        { "kind": "field", "name": "TFUserType", "required": false },
        { "kind": "field", "name": "NegotiationID", "required": false },
        { "kind": "field", "name": "SecondaryNegotiationID", "required": false },
        { "kind": "field", "name": "ExpireTime", "required": false },
        { "kind": "field", "name": "IfTouchedPrice", "required": false },
        { "kind": "field", "name": "IWouldPrice", "required": false },
        { "kind": "field", "name": "LimitPrc", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "UniqueExecID", "required": false },
        { "kind": "field", "name": "TrdRptStatus", "required": false },
        { "kind": "field", "name": "InsertTime", "required": false },
        { "kind": "field", "name": "OneOffSharedKey", "required": false }
      ]
    },
    {
      "name": "TradeCaptureReportAck",
      "msgtype": "AR",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "TradeReportID", "required": false },
        { "kind": "field", "name": "TradeReportRefID", "required": false },
        { "kind": "field", "name": "SecondaryTradeReportID", "required": false },
        { "kind": "field", "name": "ExecType", "required": false },
        { "kind": "field", "name": "ExecID", "required": false },
        { "kind": "field", "name": "TradeLinkID", "required": false },
        { "kind": "field", "name": "TradeReportTransType", "required": false },
        { "kind": "field", "name": "TradeReportType", "required": false },
        { "kind": "field", "name": "TrdRptStatus", "required": false },
        { "kind": "field", "name": "TrdSubType", "required": false },
        { "kind": "field", "name": "TradeReportRejectReason", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "PreviouslyReported", "required": false },
        { "kind": "field", "name": "TransBkdTime", "required": false },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "field", "name": "LastPx", "required": false },
        { "kind": "field", "name": "LastShares", "required": false },
        { "kind": "component", "name": "LegsGrp", "required": false },
        { "kind": "component", "name": "SidesGrp", "required": false },
        { "kind": "field", "name": "TTCustomerName", "required": false },
        { "kind": "field", "name": "Seq", "required": false },
        { "kind": "field", "name": "CompanyID", "required": false },
        { "kind": "field", "name": "BrokerID", "required": false },
        { "kind": "field", "name": "UserID", "required": false },
        { "kind": "field", "name": "TTID", "required": false },
        { "kind": "field", "name": "TradePublishIndicator", "required": false },
        { "kind": "field", "name": "OrderCapacity", "required": false },
        { "kind": "component", "name": "OrderAttributesGrp", "required": false },
        { "kind": "field", "name": "TrdType", "required": false },
        { "kind": "field", "name": "EchoDC_01", "required": false },
        { "kind": "field", "name": "EchoDC_02", "required": false },
        { "kind": "field", "name": "EchoDC_03", "required": false },
        { "kind": "field", "name": "EchoDC_04", "required": false },
        { "kind": "field", "name": "EchoDC_05", "required": false },
        { "kind": "field", "name": "EchoDC_06", "required": false },
        { "kind": "field", "name": "EchoDC_07", "required": false },
        { "kind": "field", "name": "EchoDC_08", "required": false },
        { "kind": "field", "name": "EchoDC_09", "required": false },
        { "kind": "field", "name": "EchoDC_10", "required": false },
        { "kind": "field", "name": "EchoDC_11", "required": false },
        { "kind": "field", "name": "EchoDC_12", "required": false },
        { "kind": "field", "name": "EchoDC_13", "required": false },
        { "kind": "field", "name": "EchoDC_14", "required": false },
        { "kind": "field", "name": "EchoDC_15", "required": false },
        { "kind": "field", "name": "EchoDC_16", "required": false },
        { "kind": "field", "name": "EchoDC_17", "required": false },
        { "kind": "field", "name": "EchoDC_18", "required": false },
        { "kind": "field", "name": "EchoDC_19", "required": false },
        { "kind": "field", "name": "EchoDC_20", "required": false },
        { "kind": "field", "name": "TextC", "required": false },
        { "kind": "field", "name": "TextTT", "required": false },
        { "kind": "field", "name": "TradingSessionSubID", "required": false },
        { "kind": "field", "name": "TFUserType", "required": false },
        { "kind": "field", "name": "NegotiationID", "required": false },
        { "kind": "field", "name": "SecondaryNegotiationID", "required": false },
        { "kind": "field", "name": "ManualOrderIndicator", "required": false },
        { "kind": "field", "name": "RoutingAccount", "required": false },
        { "kind": "field", "name": "InsertTime", "required": false }
      ]
    },
    {
      "name": "News",
      "msgtype": "B",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "Headline", "required": true },
        { "kind": "field", "name": "LinesOfText", "required": true },
        { "kind": "field", "name": "Text", "required": true },
        { "kind": "field", "name": "NewsReportID", "required": false }
      ]
    },
    {
      "name": "OutOfBandRecoveryRequest",
      "msgtype": "U2",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "StartDate", "required": false },
        { "kind": "field", "name": "EndDate", "required": false },
        { "kind": "field", "name": "SecurityExchange", "required": false },
        { "kind": "field", "name": "ExDestination", "required": false },
        { "kind": "field", "name": "CustomMode", "required": false },
        { "kind": "field", "name": "Duration", "required": false }
      ]
    },
    {
      "name": "DontKnowTrade",
      "msgtype": "Q",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "OrderID", "required": true },
        { "kind": "field", "name": "ExecID", "required": true },
        { "kind": "field", "name": "DKReason", "required": true },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "field", "name": "Side", "required": false },
        { "kind": "field", "name": "OrderQty", "required": false },
        { "kind": "field", "name": "LastShares", "required": false },
        { "kind": "field", "name": "LastPx", "required": false },
        { "kind": "field", "name": "Text", "required": false }
      ]
    },
    {
      "name": "AllocationInstruction",
      "msgtype": "J",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "AllocID", "required": true },
        { "kind": "field", "name": "AllocTransType", "required": false },
        { "kind": "field", "name": "AllocType", "required": true },
        { "kind": "field", "name": "AllocLinkID", "required": false },
        { "kind": "field", "name": "AllocNoOrdersType", "required": true },
        { "kind": "component", "name": "OrdersGrp", "required": false },
        { "kind": "component", "name": "ExecsGrp", "required": false },
        { "kind": "field", "name": "Side", "required": true },
        { "kind": "component", "name": "Instrument", "required": true },
        { "kind": "component", "name": "UnderlyingsGrp", "required": false },
        { "kind": "field", "name": "Quantity", "required": true },
        { "kind": "field", "name": "LastMkt", "required": false },
        { "kind": "field", "name": "PriceType", "required": false },
        { "kind": "field", "name": "AvgPx", "required": true },
        { "kind": "field", "name": "AvgParPx", "required": false },
        { "kind": "component", "name": "Parties", "required": false },
        { "kind": "field", "name": "TradeDate", "required": true },
        { "kind": "field", "name": "TransactTime", "required": false },
        { "kind": "field", "name": "SettlDate", "required": false },
        { "kind": "field", "name": "GrossTradeAmt", "required": false },
        { "kind": "field", "name": "NetMoney", "required": false },
        { "kind": "field", "name": "OpenClose", "required": false },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "AllocsGrp", "required": true },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "AllocStrategy", "required": false },
        { "kind": "field", "name": "VendorDefinedField1", "required": false },
        { "kind": "field", "name": "VendorDefinedField2", "required": false },
        { "kind": "field", "name": "VendorDefinedField3", "required": false },
        { "kind": "field", "name": "VendorDefinedField4", "required": false },
        { "kind": "field", "name": "VendorDefinedField5", "required": false },
        { "kind": "field", "name": "AllocVolumeType", "required": false }
      ]
    },
    {
      "name": "AllocationInstructionAck",
      "msgtype": "P",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "AllocID", "required": true },
        { "kind": "field", "name": "TransactTime", "required": true },
        { "kind": "field", "name": "AllocStatus", "required": true },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "VendorDefinedField1", "required": false },
        { "kind": "field", "name": "VendorDefinedField2", "required": false },
        { "kind": "field", "name": "VendorDefinedField3", "required": false },
        { "kind": "field", "name": "VendorDefinedField4", "required": false },
        { "kind": "field", "name": "VendorDefinedField5", "required": false }
      ]
    },
    {
      "name": "AllocationReport",
      "msgtype": "AS",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "AllocReportID", "required": true },
        { "kind": "field", "name": "AllocTransType", "required": true },
        { "kind": "field", "name": "AllocReportType", "required": true },
        { "kind": "field", "name": "AllocStatus", "required": true },
        { "kind": "field", "name": "AllocNoOrdersType", "required": true },
        { "kind": "component", "name": "OrdersGrp", "required": false },
        { "kind": "component", "name": "ExecsGrp", "required": false },
        { "kind": "field", "name": "Side", "required": true },
        { "kind": "field", "name": "Quantity", "required": true },
        { "kind": "field", "name": "AvgPx", "required": true },
        { "kind": "field", "name": "TradeDate", "required": true },
        { "kind": "field", "name": "Text", "required": false },
        { "kind": "component", "name": "AllocsGrp", "required": true },
        { "kind": "field", "name": "Account", "required": false },
        { "kind": "field", "name": "VendorDefinedField1", "required": false },
        { "kind": "field", "name": "VendorDefinedField2", "required": false },
        { "kind": "field", "name": "VendorDefinedField3", "required": false },
        { "kind": "field", "name": "VendorDefinedField4", "required": false },
        { "kind": "field", "name": "VendorDefinedField5", "required": false },
        { "kind": "field", "name": "AllocVolumeType", "required": false },
        { "kind": "field", "name": "TransactTime", "required": false }
      ]
    },
    {
      "name": "NewOrderList",
      "msgtype": "E",
      "msgcat": "app",
      "items": [
        { "kind": "field", "name": "ListID", "required": true },
        { "kind": "field", "name": "ListExecInst", "required": false },
        { "kind": "component", "name": "OrdersGrp", "required": true }
      ]
    }
  ],
  "components": [
    {
      "name": "PriceTypeSupport",
      "items": [
        { "kind": "field", "name": "PriceType", "required": false },
        { "kind": "field", "name": "BenchmarkSecurityID", "required": false },
        { "kind": "field", "name": "BenchmarkSecurityIDSource", "required": false }
      ]
    },
    {
      "name": "Parties",
      "items": [
        {
          "kind": "group",
          "name": "NoPartyIDs",
          "required": false,
          "items": [
            { "kind": "field", "name": "PartyID", "required": false },
            { "kind": "field", "name": "PartyRole", "required": false },
            { "kind": "field", "name": "PartyRoleQualifier", "required": false },
            { "kind": "field", "name": "PartyIDSource", "required": false }
          ]
        }
      ]
    },
    {
      "name": "OrderEventGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoOrderEvents",
          "required": false,
          "items": [
            { "kind": "field", "name": "OrderEventType", "required": false },
            { "kind": "field", "name": "OrderEventExecID", "required": false },
            { "kind": "field", "name": "OrderEventReason", "required": false },
            { "kind": "field", "name": "OrderEventPx", "required": false },
            { "kind": "field", "name": "OrderEventQty", "required": false },
            { "kind": "field", "name": "OrderEventLiquidityIndicator", "required": false },
            { "kind": "field", "name": "OrderEventText", "required": false }
          ]
        }
      ]
    },
    {
      "name": "FillsGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoFills",
          "required": false,
          "items": [
            { "kind": "field", "name": "FillExecID", "required": false },
            { "kind": "field", "name": "FillPx", "required": false },
            { "kind": "field", "name": "FillQty", "required": false },
            { "kind": "field", "name": "FillTradingVenueRegulatoryTradeID", "required": false },
            { "kind": "field", "name": "FillLastLiquidityIndicator", "required": false },
            { "kind": "field", "name": "FillYieldType", "required": false }
          ]
        }
      ]
    },
    {
      "name": "StrategyParametersGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoStrategyParameters",
          "required": false,
          "items": [
            { "kind": "field", "name": "StrategyParameterName", "required": false },
            { "kind": "field", "name": "StrategyParameterType", "required": false },
            { "kind": "field", "name": "StrategyParameterValue", "required": false }
          ]
        }
      ]
    },
    {
      "name": "SecurityAltIDGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoSecurityAltID",
          "required": false,
          "items": [
            { "kind": "field", "name": "SecurityAltID", "required": false },
            { "kind": "field", "name": "SecurityAltIDSource", "required": false },
            { "kind": "field", "name": "BloombergSecurityExchange", "required": false }
          ]
        }
      ]
    },
    {
      "name": "LegSecurityAltIDGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoLegSecurityAltID",
          "required": false,
          "items": [
            { "kind": "field", "name": "LegSecurityAltID", "required": false },
            { "kind": "field", "name": "LegSecurityAltIDSource", "required": false },
            { "kind": "field", "name": "LegBloombergSecurityExchange", "required": false }
          ]
        }
      ]
    },
    {
      "name": "OrderAttributesGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoOrderAttributes",
          "required": false,
          "items": [
            { "kind": "field", "name": "OrderAttributeType", "required": false },
            { "kind": "field", "name": "OrderAttributeValue", "required": false }
          ]
        }
      ]
    },
    {
      "name": "LinksGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoLinks",
          "required": false,
          "items": [
            { "kind": "field", "name": "LinkID", "required": true },
            { "kind": "field", "name": "LinkType", "required": true }
          ]
        }
      ]
    },
    {
      "name": "ExecsGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoExecs",
          "required": false,
          "items": [
            { "kind": "field", "name": "LastShares", "required": false },
            { "kind": "field", "name": "ExecID", "required": false },
            { "kind": "field", "name": "SecondaryExecID", "required": false },
            { "kind": "field", "name": "LastPx", "required": false }
          ]
        }
      ]
    },
    {
      "name": "OrdersGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoOrders",
          "required": false,
          "items": [
            { "kind": "field", "name": "ClOrdID", "required": false },
            { "kind": "field", "name": "ListSeqNo", "required": false },
            { "kind": "field", "name": "OrderID", "required": false },
            { "kind": "field", "name": "OrderQty", "required": false },
            { "kind": "field", "name": "OrderAvgPx", "required": false },
            { "kind": "field", "name": "Account", "required": false },
            { "kind": "field", "name": "ExecInst", "required": false },
            { "kind": "component", "name": "Instrument", "required": false },
            { "kind": "field", "name": "Side", "required": false },
            { "kind": "field", "name": "OrdType", "required": false },
            { "kind": "field", "name": "Price", "required": false },
            { "kind": "field", "name": "TimeInForce", "required": false },
            { "kind": "field", "name": "ExpireDate", "required": false },
            { "kind": "field", "name": "ExpireTime", "required": false },
            { "kind": "field", "name": "TextA", "required": false },
            { "kind": "field", "name": "TextB", "required": false },
            { "kind": "field", "name": "TextTT", "required": false },
            { "kind": "field", "name": "TextC", "required": false },
            { "kind": "field", "name": "EchoDC_01", "required": false },
            { "kind": "field", "name": "EchoDC_02", "required": false },
            { "kind": "field", "name": "EchoDC_03", "required": false },
            { "kind": "field", "name": "EchoDC_04", "required": false },
            { "kind": "field", "name": "EchoDC_05", "required": false },
            { "kind": "field", "name": "EchoDC_06", "required": false },
            { "kind": "field", "name": "EchoDC_07", "required": false },
            { "kind": "field", "name": "EchoDC_08", "required": false },
            { "kind": "field", "name": "EchoDC_09", "required": false },
            { "kind": "field", "name": "EchoDC_10", "required": false },
            { "kind": "field", "name": "EchoDC_11", "required": false },
            { "kind": "field", "name": "EchoDC_12", "required": false },
            { "kind": "field", "name": "EchoDC_13", "required": false },
            { "kind": "field", "name": "EchoDC_14", "required": false },
            { "kind": "field", "name": "EchoDC_15", "required": false },
            { "kind": "field", "name": "EchoDC_16", "required": false },
            { "kind": "field", "name": "EchoDC_17", "required": false },
            { "kind": "field", "name": "EchoDC_18", "required": false },
            { "kind": "field", "name": "EchoDC_19", "required": false },
            { "kind": "field", "name": "EchoDC_20", "required": false }
          ]
        }
      ]
    },
    {
      "name": "NestedParties",
      "items": [
        {
          "kind": "group",
          "name": "NoNestedPartyIDs",
          "required": false,
          "items": [
            { "kind": "field", "name": "NestedPartyID", "required": false },
            { "kind": "field", "name": "NestedPartyIDSource", "required": false },
            { "kind": "field", "name": "NestedPartyRole", "required": false }
          ]
        }
      ]
    },
    {
      "name": "MiscFeesGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoMiscFees",
          "required": false,
          "items": [
            { "kind": "field", "name": "MiscFeeAmt", "required": false },
            { "kind": "field", "name": "MiscFeeCurr", "required": false },
            { "kind": "field", "name": "MiscFeeType", "required": false }
          ]
        }
      ]
    },
    {
      "name": "AllocsGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoAllocs",
          "required": true,
          "items": [
            { "kind": "field", "name": "AllocAccount", "required": true },
            { "kind": "field", "name": "AllocAcctIDSource", "required": false },
            { "kind": "field", "name": "AllocQty", "required": true },
            { "kind": "field", "name": "AllocPrice", "required": false },
            { "kind": "field", "name": "IndividualAllocID", "required": false },
            { "kind": "field", "name": "ProcessCode", "required": false },
            { "kind": "component", "name": "NestedParties", "required": false },
            { "kind": "field", "name": "AllocText", "required": false },
            { "kind": "field", "name": "Commission", "required": false },
            { "kind": "field", "name": "CommType", "required": false },
            { "kind": "field", "name": "AllocAvgPx", "required": false },
            { "kind": "field", "name": "AllocNetMoney", "required": false },
            { "kind": "component", "name": "MiscFeesGrp", "required": false }
          ]
        }
      ]
    },
    {
      "name": "TTReservedGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoTTReserved",
          "required": false,
          "items": [
            { "kind": "field", "name": "TTReservedName", "required": false },
            { "kind": "field", "name": "TTReservedValue", "required": false }
          ]
        }
      ]
    },
    {
      "name": "EvntGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoEvents",
          "required": false,
          "items": [
            { "kind": "field", "name": "EventType", "required": false },
            { "kind": "field", "name": "EventDate", "required": false },
            { "kind": "field", "name": "EventTime", "required": false }
          ]
        }
      ]
    },
    {
      "name": "TickTblEntriesGrp",
      "items": [
        {
          "kind": "group",
          "name": "NumTickTblEntries",
          "required": false,
          "items": [
            { "kind": "field", "name": "NumTicks", "required": false },
            { "kind": "field", "name": "MaxPrice", "required": false }
          ]
        }
      ]
    },
    {
      "name": "MDEntryTypesGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoMDEntryTypes",
          "required": false,
          "items": [
            { "kind": "field", "name": "MDEntryType", "required": true }
          ]
        }
      ]
    },
    {
      "name": "MDFullGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoMDEntries",
          "required": true,
          "items": [
            { "kind": "field", "name": "MDEntryType", "required": true },
            { "kind": "field", "name": "MDEntryPx", "required": false },
            { "kind": "field", "name": "MDEntrySize", "required": false },
            { "kind": "field", "name": "MDEntryDate", "required": false },
            { "kind": "field", "name": "MDEntryTime", "required": false },
            { "kind": "field", "name": "MDEntryPositionNo", "required": false },
            { "kind": "field", "name": "NumberOfOrders", "required": false },
            { "kind": "field", "name": "AggressorSide", "required": false },
            { "kind": "field", "name": "MDEntryOriginator", "required": false }
          ]
        }
      ]
    },
    {
      "name": "MDIncGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoMDEntries",
          "required": true,
          "items": [
            { "kind": "field", "name": "MDUpdateAction", "required": true },
            { "kind": "field", "name": "MDEntryType", "required": false },
            { "kind": "component", "name": "Instrument", "required": false },
            { "kind": "field", "name": "MDEntryPx", "required": false },
            { "kind": "field", "name": "MDEntrySize", "required": false },
            { "kind": "field", "name": "MDEntryDate", "required": false },
            { "kind": "field", "name": "MDEntryTime", "required": false },
            { "kind": "field", "name": "MDEntryPositionNo", "required": false },
            { "kind": "field", "name": "SecondaryOrderID", "required": false },
            { "kind": "field", "name": "NumberOfOrders", "required": false },
            { "kind": "field", "name": "AggressorSide", "required": false }
          ]
        }
      ]
    },
    {
      "name": "Instrument",
      "items": [
        { "kind": "field", "name": "Symbol", "required": false },
        { "kind": "field", "name": "SecurityID", "required": false },
        { "kind": "field", "name": "IDSource", "required": false },
        { "kind": "component", "name": "SecurityAltIDGrp", "required": false },
        { "kind": "field", "name": "Product", "required": false },
        { "kind": "field", "name": "CFICode", "required": false },
        { "kind": "field", "name": "SecurityType", "required": false },
        { "kind": "field", "name": "SecuritySubType", "required": false },
        { "kind": "field", "name": "MaturityMonthYear", "required": false },
        { "kind": "field", "name": "MaturityDate", "required": false },
        { "kind": "field", "name": "MaturityDay", "required": false },
        { "kind": "field", "name": "ContractYearMonth", "required": false },
        { "kind": "field", "name": "DeliveryTerm", "required": false },
        { "kind": "field", "name": "DeliveryDate", "required": false },
        { "kind": "field", "name": "PutOrCall", "required": false },
        { "kind": "field", "name": "StrikePrice", "required": false },
        { "kind": "field", "name": "OptAttribute", "required": false },
        { "kind": "field", "name": "SecurityExchange", "required": false },
        { "kind": "field", "name": "ExDestination", "required": false },
        { "kind": "field", "name": "SecurityDesc", "required": false },
        { "kind": "field", "name": "Currency", "required": false },
        { "kind": "field", "name": "ExerciseStyle", "required": false },
        { "kind": "component", "name": "EvntGrp", "required": false },
        { "kind": "field", "name": "Timezone", "required": false }
      ]
    },
    {
      "name": "InstrumentLeg",
      "items": [
        { "kind": "field", "name": "LegSymbol", "required": false },
        { "kind": "field", "name": "LegSecurityID", "required": false },
        { "kind": "field", "name": "LegIDSource", "required": false },
        { "kind": "component", "name": "LegSecurityAltIDGrp", "required": false },
        { "kind": "field", "name": "LegProduct", "required": false },
        { "kind": "field", "name": "LegCFICode", "required": false },
        { "kind": "field", "name": "LegSecurityType", "required": false },
        { "kind": "field", "name": "LegSecuritySubType", "required": false },
        { "kind": "field", "name": "LegMaturityMonthYear", "required": false },
        { "kind": "field", "name": "LegMaturityDate", "required": false },
        { "kind": "field", "name": "LegMaturityDay", "required": false },
        { "kind": "field", "name": "LegContractYearMonth", "required": false },
        { "kind": "field", "name": "LegDeliveryTerm", "required": false },
        { "kind": "field", "name": "LegDeliveryDate", "required": false },
        { "kind": "field", "name": "LegPutOrCall", "required": false },
        { "kind": "field", "name": "LegStrikePrice", "required": false },
        { "kind": "field", "name": "LegOptAttribute", "required": false },
        { "kind": "field", "name": "LegSecurityExchange", "required": false },
        { "kind": "field", "name": "LegExDestination", "required": false },
        { "kind": "field", "name": "LegSecurityDesc", "required": false },
        { "kind": "field", "name": "LegRatioQty", "required": false },
        { "kind": "field", "name": "LegSide", "required": false },
        { "kind": "field", "name": "LegCurrency", "required": false },
        { "kind": "field", "name": "LegRatioExt", "required": false },
        { "kind": "field", "name": "LegExerciseStyle", "required": false }
      ]
    },
    {
      "name": "LegFillsGrp",
      "items": [
        {
          "kind": "group",
          "name": "LegNoFills",
          "required": false,
          "items": [
            { "kind": "field", "name": "LegFillExecID", "required": false },
            { "kind": "field", "name": "LegFillPx", "required": false },
            { "kind": "field", "name": "LegFillQty", "required": false },
            { "kind": "field", "name": "LegFillTradingVenueRegulatoryTradeID", "required": false },
            { "kind": "field", "name": "LegFillLastLiquidityIndicator", "required": false }
          ]
        }
      ]
    },
    {
      "name": "LegsGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoLegs",
          "required": false,
          "items": [
            { "kind": "component", "name": "InstrumentLeg", "required": false },
            { "kind": "field", "name": "LegOrderQty", "required": false },
            { "kind": "field", "name": "LegQty", "required": false },
            { "kind": "field", "name": "LegRefID", "required": false },
            { "kind": "field", "name": "LegPrice", "required": false },
            { "kind": "field", "name": "LastSwapPoints", "required": false },
            { "kind": "field", "name": "LegSettlDate", "required": false },
            { "kind": "field", "name": "LegLastPx", "required": false },
            { "kind": "field", "name": "LegAvgPx", "required": false },
            { "kind": "field", "name": "LegLastQty", "required": false },
            { "kind": "field", "name": "LegAllocID", "required": false },
            { "kind": "component", "name": "LegFillsGrp", "required": false },
            { "kind": "field", "name": "Multiplier", "required": false },
            { "kind": "field", "name": "IsHedging", "required": false },
            { "kind": "field", "name": "QueueHolder", "required": false },
            { "kind": "field", "name": "MLQ", "required": false },
            { "kind": "field", "name": "PayupTicks", "required": false },
            { "kind": "field", "name": "IsQuoting", "required": false },
            { "kind": "field", "name": "ConvertQuoteToHedge", "required": false },
            { "kind": "field", "name": "IsLeanIndicative", "required": false },
            { "kind": "field", "name": "OptionDelta", "required": false },
            { "kind": "field", "name": "LegNumber", "required": false },
            { "kind": "field", "name": "LegParentVendorAccountID", "required": false },
            { "kind": "field", "name": "LegTTRoutingAccount", "required": false }
          ]
        }
      ]
    },
    {
      "name": "RelatedSymGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoRelatedSym",
          "required": true,
          "items": [
            { "kind": "component", "name": "Instrument", "required": false },
            { "kind": "field", "name": "QuoteType", "required": false },
            { "kind": "field", "name": "QuoteSubType", "required": false },
            { "kind": "field", "name": "QuoteRefPrice", "required": false },
            { "kind": "field", "name": "UnderlyingDeltaPercentage", "required": false },
            { "kind": "field", "name": "Side", "required": false },
            { "kind": "field", "name": "OrderQty", "required": false },
            { "kind": "component", "name": "LegsGrp", "required": false },
            { "kind": "field", "name": "Price", "required": false },
            { "kind": "field", "name": "Account", "required": false }
          ]
        }
      ]
    },
    {
      "name": "UnderlyingSecurityAltIDGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoUnderlyingSecurityAltID",
          "required": false,
          "items": [
            { "kind": "field", "name": "UnderlyingSecurityAltID", "required": false },
            { "kind": "field", "name": "UnderlyingSecurityAltIDSource", "required": false }
          ]
        }
      ]
    },
    {
      "name": "UnderlyingStipulations",
      "items": [
        {
          "kind": "group",
          "name": "NoUnderlyingStipulations",
          "required": false,
          "items": [
            { "kind": "field", "name": "UnderlyingStipulationType", "required": false },
            { "kind": "field", "name": "UnderlyingStipulationValue", "required": false }
          ]
        }
      ]
    },
    {
      "name": "UnderlyingInstrument",
      "items": [
        { "kind": "field", "name": "UnderlyingSymbol", "required": false },
        { "kind": "field", "name": "UnderlyingSecurityID", "required": false },
        { "kind": "field", "name": "UnderlyingSecurityIDSource", "required": false },
        { "kind": "field", "name": "UnderlyingSecurityType", "required": false },
        { "kind": "field", "name": "UnderlyingPx", "required": false },
        { "kind": "field", "name": "UnderlyingQty", "required": false },
        { "kind": "component", "name": "UnderlyingSecurityAltIDGrp", "required": false },
        { "kind": "field", "name": "UnderlyingMaturityDate", "required": false },
        { "kind": "field", "name": "UnderlyingIssuer", "required": false },
        { "kind": "field", "name": "UnderlyingCurrency", "required": false },
        { "kind": "component", "name": "UnderlyingStipulations", "required": false },
        { "kind": "field", "name": "UnderlyingMemo", "required": false },
        { "kind": "field", "name": "UnderlyingStrikePrice", "required": false },
        { "kind": "field", "name": "UnderlyingSpotRate", "required": false },
        { "kind": "field", "name": "UnderlyingSecuritySubType", "required": false }
      ]
    },
    {
      "name": "UnderlyingsGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoUnderlyings",
          "required": false,
          "items": [
            { "kind": "component", "name": "UnderlyingInstrument", "required": false }
          ]
        }
      ]
    },
    {
      "name": "SidesGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoSides",
          "required": false,
          "items": [
            { "kind": "field", "name": "Side", "required": false },
            { "kind": "field", "name": "OrderID", "required": false },
            { "kind": "component", "name": "Parties", "required": false },
            { "kind": "field", "name": "ClOrdID", "required": false },
            { "kind": "field", "name": "SecondaryClOrdID", "required": false },
            { "kind": "field", "name": "Text", "required": false },
            { "kind": "field", "name": "AggressorIndicator", "required": false },
            { "kind": "field", "name": "CustOrderHandlingInst", "required": false },
            { "kind": "field", "name": "CustOrderCapacity", "required": false },
            { "kind": "field", "name": "OrderIDGUID", "required": false },
            { "kind": "field", "name": "Account", "required": false },
            { "kind": "field", "name": "AllocQty", "required": false },
            { "kind": "field", "name": "AllocPositionEffect", "required": false },
            { "kind": "field", "name": "TTCustomerName", "required": false },
            { "kind": "field", "name": "LegNumber", "required": false },
            { "kind": "field", "name": "SideTextA", "required": false },
            { "kind": "field", "name": "SideTextB", "required": false },
            { "kind": "field", "name": "SideTextC", "required": false },
            { "kind": "component", "name": "LinksGrp", "required": false },
            { "kind": "field", "name": "ComplianceText", "required": false },
            { "kind": "field", "name": "ClearingAccountOverride", "required": false },
            { "kind": "field", "name": "EchoDC_01", "required": false },
            { "kind": "field", "name": "EchoDC_02", "required": false },
            { "kind": "field", "name": "EchoDC_03", "required": false },
            { "kind": "field", "name": "EchoDC_04", "required": false },
            { "kind": "field", "name": "EchoDC_05", "required": false },
            { "kind": "field", "name": "EchoDC_06", "required": false },
            { "kind": "field", "name": "EchoDC_07", "required": false },
            { "kind": "field", "name": "EchoDC_08", "required": false },
            { "kind": "field", "name": "EchoDC_09", "required": false },
            { "kind": "field", "name": "EchoDC_10", "required": false },
            { "kind": "field", "name": "EchoDC_11", "required": false },
            { "kind": "field", "name": "EchoDC_12", "required": false },
            { "kind": "field", "name": "EchoDC_13", "required": false },
            { "kind": "field", "name": "EchoDC_14", "required": false },
            { "kind": "field", "name": "EchoDC_15", "required": false },
            { "kind": "field", "name": "EchoDC_16", "required": false },
            { "kind": "field", "name": "EchoDC_17", "required": false },
            { "kind": "field", "name": "EchoDC_18", "required": false },
            { "kind": "field", "name": "EchoDC_19", "required": false },
            { "kind": "field", "name": "EchoDC_20", "required": false },
            { "kind": "field", "name": "MktQuoteID", "required": false },
            { "kind": "field", "name": "SecondaryQuoteID", "required": false },
            { "kind": "field", "name": "MinTradeVol", "required": false },
            { "kind": "component", "name": "UnderlyingsGrp", "required": false }
          ]
        }
      ]
    },
    {
      "name": "TCRLegsGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoTCRLegs",
          "required": false,
          "items": [
            { "kind": "field", "name": "LegLastPx", "required": false },
            { "kind": "field", "name": "LegLastQty", "required": false },
            { "kind": "component", "name": "SidesGrp", "required": false }
          ]
        }
      ]
    },
    {
      "name": "TargetPartyIDGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoTargetPartyIDs",
          "required": false,
          "items": [
            { "kind": "field", "name": "TargetPartyExchangeTraderID", "required": false }
          ]
        }
      ]
    },
    {
      "name": "InstrumentExtension",
      "items": [
        {
          "kind": "group",
          "name": "NoInstrumentExtensions",
          "required": false,
          "items": [
            { "kind": "field", "name": "InstrumentAttributeType", "required": false },
            { "kind": "field", "name": "InstrumentAttributeValue", "required": false }
          ]
        }
      ]
    },
    {
      "name": "RootPartyIDGrp",
      "items": [
        {
          "kind": "group",
          "name": "NoRootPartyIDs",
          "required": false,
          "items": [
            { "kind": "field", "name": "RootPartyID", "required": false },
            { "kind": "field", "name": "RootPartyRole", "required": false },
            { "kind": "field", "name": "RootPartyIDSource", "required": false }
          ]
        }
      ]
    },
    {
      "name": "TargetStrategy",
      "items": [
        { "kind": "field", "name": "TargetStrategyName", "required": false },
        { "kind": "field", "name": "TargetStrategyType", "required": false }
      ]
    }
  ],
  "fields": [
    {
      "name": "Account",
      "number": 1,
      "type": "STRING",
      "values": []
    },
    {
      "name": "AvgPx",
      "number": 6,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "BeginSeqNo",
      "number": 7,
      "type": "SEQNUM",
      "values": []
    },
    {
      "name": "BeginString",
      "number": 8,
      "type": "STRING",
      "values": []
    },
    {
      "name": "BodyLength",
      "number": 9,
      "type": "INT",
      "values": []
    },
    {
      "name": "CheckSum",
      "number": 10,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ClOrdID",
      "number": 11,
      "type": "STRING",
      "values": []
    },
    {
      "name": "Commission",
      "number": 12,
      "type": "AMT",
      "values": []
    },
    {
      "name": "CommType",
      "number": 13,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "PER_UNIT" },
        { "enum": "2", "description": "PERCENTAGE" },
        { "enum": "3", "description": "ABSOLUTE" },
        { "enum": "4", "description": "PERCENTAGE_WAIVED_CASH_DISCOUNT" },
        { "enum": "5", "description": "PERCENTAGE_WAIVED_ENHANCED_UNITS" },
        { "enum": "6", "description": "POINTS_PER_BOND_OR_CONTRACT" }
      ]
    },
    {
      "name": "CumQty",
      "number": 14,
      "type": "QTY",
      "values": []
    },
    {
      "name": "Currency",
      "number": 15,
      "type": "CURRENCY",
      "values": []
    },
    {
      "name": "EndSeqNo",
      "number": 16,
      "type": "SEQNUM",
      "values": []
    },
    {
      "name": "ExecID",
      "number": 17,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ExecInst",
      "number": 18,
      "type": "MULTIPLESTRINGVALUE",
      "values": [
        { "enum": "1", "description": "NOT_HELD" },
        { "enum": "2", "description": "WORK" },
        { "enum": "5", "description": "HELD" },
        { "enum": "6", "description": "PARTICIPATE_DONT_INITIATE" },
        { "enum": "G", "description": "ALL_OR_NONE" },
        { "enum": "S", "description": "SUSPEND" },
        { "enum": "q", "description": "RELEASE_FROM_SUSPENSION" },
        { "enum": "o", "description": "CANCEL_ON_CONNECTION_LOSS" },
        { "enum": "X", "description": "TEST_REQUEST" }
      ]
    },
    {
      "name": "ExecRefID",
      "number": 19,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ExecTransType",
      "number": 20,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "NEW" },
        { "enum": "1", "description": "CANCEL" },
        { "enum": "2", "description": "CORRECT" },
        { "enum": "3", "description": "STATUS" }
      ]
    },
    {
      "name": "HandlInst",
      "number": 21,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION" },
        { "enum": "2", "description": "AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK" },
        { "enum": "3", "description": "MANUAL_ORDER_BEST_EXECUTION" }
      ]
    },
    {
      "name": "IDSource",
      "number": 22,
      "type": "STRING",
      "values": [
        { "enum": "1", "description": "CUSIP" },
        { "enum": "4", "description": "ISIN_NUMBER" },
        { "enum": "5", "description": "RIC_CODE" },
        { "enum": "8", "description": "EXCHANGE_SECURITY_ID" },
        { "enum": "91", "description": "EXCHANGE_TICKER" },
        { "enum": "96", "description": "TT_SECURITY_ID" },
        { "enum": "97", "description": "ALIAS" },
        { "enum": "98", "description": "NAME" },
        { "enum": "A", "description": "BLOOMBERG_CODE" },
        { "enum": "S", "description": "OPENFIGI_ID" },
        { "enum": "X", "description": "SERIES_KEY" },
        { "enum": "H", "description": "CLEARING_HOUSE" }
      ]
    },
    {
      "name": "LastMkt",
      "number": 30,
      "type": "EXCHANGE",
      "values": []
    },
    {
      "name": "LastPx",
      "number": 31,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "LastShares",
      "number": 32,
      "type": "QTY",
      "values": []
    },
    {
      "name": "LinesOfText",
      "number": 33,
      "type": "INT",
      "values": []
    },
    {
      "name": "MsgSeqNum",
      "number": 34,
      "type": "SEQNUM",
      "values": []
    },
    {
      "name": "MsgType",
      "number": 35,
      "type": "STRING",
      "values": [
        { "enum": "0", "description": "HEARTBEAT" },
        { "enum": "1", "description": "TEST_REQUEST" },
        { "enum": "2", "description": "RESEND_REQUEST" },
        { "enum": "3", "description": "REJECT" },
        { "enum": "4", "description": "SEQUENCE_RESET" },
        { "enum": "5", "description": "LOGOUT" },
        { "enum": "8", "description": "EXECUTION_REPORT" },
        { "enum": "9", "description": "ORDER_CANCEL_REJECT" },
        { "enum": "A", "description": "LOGON" },
        { "enum": "B", "description": "NEWS" },
        { "enum": "b", "description": "QUOTE_REQUEST_RESPONSE" },
        { "enum": "c", "description": "SECURITY_DEFINITION_REQUEST" },
        { "enum": "D", "description": "ORDER_SINGLE" },
        { "enum": "AB", "description": "ORDER_MULTI_LEG" },
        { "enum": "AC", "description": "ORDER_MULTI_LEG_CANCEL_REPLACE_REQUEST" },
        { "enum": "d", "description": "SECURITY_DEFINITION" },
        { "enum": "e", "description": "SECURITY_STATUS_REQUEST" },
        { "enum": "f", "description": "SECURITY_STATUS" },
        { "enum": "F", "description": "ORDER_CANCEL_REQUEST" },
        { "enum": "G", "description": "ORDER_CANCEL_REPLACE_REQUEST" },
        { "enum": "g", "description": "TRADING_SESSION_STATUS_REQUEST" },
        { "enum": "H", "description": "ORDER_STATUS_REQUEST" },
        { "enum": "j", "description": "BUSINESS_MESSAGE_REJECT" },
        { "enum": "R", "description": "QUOTE_REQUEST" },
        { "enum": "V", "description": "MARKET_DATA_REQUEST" },
        { "enum": "W", "description": "MARKET_DATA_SNAPSHOT_FULL_REFRESH" },
        { "enum": "X", "description": "MARKET_DATA_INCREMENTAL_REFRESH" },
        { "enum": "Y", "description": "MARKET_DATA_REQUEST_REJECT" },
        { "enum": "AE", "description": "TRADE_CAPTURE_REPORT" },
        { "enum": "AR", "description": "TRADE_CAPTURE_REPORT_ACK" },
        { "enum": "U2", "description": "OUTOFBAND_RECOVERY_REQUEST" },
        { "enum": "Q", "description": "DONT_KNOW_TRADE" },
        { "enum": "AD", "description": "TRADE_CAPTURE_REPORT_REQUEST" },
        { "enum": "AQ", "description": "TRADE_CAPTURE_REPORT_REQUEST_ACK" },
        { "enum": "J", "description": "ALLOCATION_INSTRUCTION" },
        { "enum": "P", "description": "ALLOCATION_INSTRUCTION_ACK" },
        { "enum": "AS", "description": "ALLOCATION_REPORT" },
        { "enum": "AI", "description": "QUOTE_STATUS_REPORT" },
        { "enum": "AJ", "description": "QUOTE_RESPONSE" },
        { "enum": "E", "description": "NEW_ORDER_LIST" }
      ]
    },
    {
      "name": "NewSeqNo",
      "number": 36,
      "type": "SEQNUM",
      "values": []
    },
    {
      "name": "OrderID",
      "number": 37,
      "type": "STRING",
      "values": []
    },
    {
      "name": "OrderQty",
      "number": 38,
      "type": "QTY",
      "values": []
    },
    {
      "name": "OrdStatus",
      "number": 39,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "NEW" },
        { "enum": "1", "description": "PARTIALLY_FILLED" },
        { "enum": "2", "description": "FILLED" },
        { "enum": "3", "description": "DONE_FOR_DAY" },
        { "enum": "4", "description": "CANCELED" },
        { "enum": "5", "description": "REPLACED" },
        { "enum": "6", "description": "PENDING_CANCEL" },
        { "enum": "7", "description": "STOPPED" },
        { "enum": "8", "description": "REJECTED" },
        { "enum": "9", "description": "SUSPENDED" },
        { "enum": "A", "description": "PENDING_NEW" },
        { "enum": "B", "description": "CALCULATED" },
        { "enum": "C", "description": "EXPIRED" },
        { "enum": "D", "description": "ACCEPTED_FOR_BIDDING" },
        { "enum": "E", "description": "PENDING_REPLACE" },
        { "enum": "H", "description": "TRADE_CANCEL" },
        { "enum": "z", "description": "INACTIVE" }
      ]
    },
    {
      "name": "OrdType",
      "number": 40,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "MARKET" },
        { "enum": "2", "description": "LIMIT" },
        { "enum": "3", "description": "STOP" },
        { "enum": "4", "description": "STOP_LIMIT" },
        { "enum": "5", "description": "MARKET_ON_CLOSE" },
        { "enum": "B", "description": "LIMIT_ON_CLOSE" },
        { "enum": "D", "description": "PREVIOUSLY_QUOTED" },
        { "enum": "K", "description": "MARKET_WITH_LEFT_OVER_AS_LIMIT" },
        { "enum": "Q", "description": "MARKET_LIMIT_MARKET_LEFT_OVER_AS_LIMIT" },
        { "enum": "S", "description": "STOP_MARKET_TO_LIMIT" },
        { "enum": "T", "description": "IF_TOUCHED_LIMIT" },
        { "enum": "J", "description": "IF_TOUCHED_MARKET" },
        { "enum": "U", "description": "IF_TOUCHED_MARKET_TO_LIMIT" },
        { "enum": "p", "description": "LIMIT_POST_ONLY" },
        { "enum": "V", "description": "MARKET_CLOSE_TODAY" },
        { "enum": "W", "description": "LIMIT_CLOSE_TODAY" },
        { "enum": "P", "description": "PEG" },
        { "enum": "X", "description": "ICEBERG" },
        { "enum": "O", "description": "OCO" }
      ]
    },
    {
      "name": "OrigClOrdID",
      "number": 41,
      "type": "STRING",
      "values": []
    },
    {
      "name": "PossDupFlag",
      "number": 43,
      "type": "BOOLEAN",
      "values": [
        { "enum": "N", "description": "NO" },
        { "enum": "Y", "description": "YES" }
      ]
    },
    {
      "name": "Price",
      "number": 44,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "RefSeqNum",
      "number": 45,
      "type": "SEQNUM",
      "values": []
    },
    {
      "name": "SecurityID",
      "number": 48,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SenderCompID",
      "number": 49,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SenderSubID",
      "number": 50,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SendingTime",
      "number": 52,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "Quantity",
      "number": 53,
      "type": "QTY",
      "values": []
    },
    {
      "name": "Side",
      "number": 54,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "BUY" },
        { "enum": "2", "description": "SELL" },
        { "enum": "3", "description": "BUY_MINUS" },
        { "enum": "4", "description": "SELL_PLUS" },
        { "enum": "5", "description": "SELL_SHORT" },
        { "enum": "6", "description": "SELL_SHORT_EXEMPT" },
        { "enum": "7", "description": "UNDISCLOSED" },
        { "enum": "8", "description": "CROSS" },
        { "enum": "9", "description": "CROSS_SHORT" },
        { "enum": "B", "description": "AS_DEFINED" },
        { "enum": "C", "description": "OPPOSITE" }
      ]
    },
    {
      "name": "Symbol",
      "number": 55,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TargetCompID",
      "number": 56,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TargetSubID",
      "number": 57,
      "type": "STRING",
      "values": []
    },
    {
      "name": "Text",
      "number": 58,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TimeInForce",
      "number": 59,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "DAY" },
        { "enum": "1", "description": "GOOD_TILL_CANCEL" },
        { "enum": "2", "description": "AT_THE_OPENING" },
        { "enum": "3", "description": "IMMEDIATE_OR_CANCEL" },
        { "enum": "4", "description": "FILL_OR_KILL" },
        { "enum": "5", "description": "GOOD_TILL_CROSSING" },
        { "enum": "6", "description": "GOOD_TILL_DATE" },
        { "enum": "7", "description": "AT_THE_CLOSE" },
        { "enum": "8", "description": "GOOD_THROUGH_CROSSING" },
        { "enum": "9", "description": "AT_CROSSING" },
        { "enum": "A", "description": "AUCTION" },
        { "enum": "S", "description": "TIME_IN_FORCE_MORNING_AT_THE_CLOSE" },
        { "enum": "T", "description": "TIME_IN_FORCE_AFTERNOON_AT_THE_CLOSE" },
        { "enum": "U", "description": "TIME_IN_FORCE_NIGHT_AT_THE_CLOSE" },
        { "enum": "V", "description": "GOOD_IN_SESSION" },
        { "enum": "W", "description": "DAY_PLUS" },
        { "enum": "X", "description": "GOOD_TILL_CANCEL_PLUS" },
        { "enum": "Y", "description": "GOOD_TILL_DATE_PLUS" }
      ]
    },
    {
      "name": "TransactTime",
      "number": 60,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "ValidUntilTime",
      "number": 62,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "SettlType",
      "number": 63,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SettlDate",
      "number": 64,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "ListID",
      "number": 66,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ListSeqNo",
      "number": 67,
      "type": "INT",
      "values": []
    },
    {
      "name": "ListExecInst",
      "number": 69,
      "type": "STRING",
      "values": []
    },
    {
      "name": "AllocID",
      "number": 70,
      "type": "STRING",
      "values": []
    },
    {
      "name": "AllocTransType",
      "number": 71,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "NEW" },
        { "enum": "1", "description": "REPLACE" },
        { "enum": "2", "description": "CANCEL" }
      ]
    },
    {
      "name": "NoOrders",
      "number": 73,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "TradeDate",
      "number": 75,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "OpenClose",
      "number": 77,
      "type": "CHAR",
      "values": [
        { "enum": "C", "description": "CLOSE" },
        { "enum": "O", "description": "OPEN" },
        { "enum": "F", "description": "FIFO" }
      ]
    },
    {
      "name": "NoAllocs",
      "number": 78,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "AllocAccount",
      "number": 79,
      "type": "STRING",
      "values": []
    },
    {
      "name": "AllocQty",
      "number": 80,
      "type": "QTY",
      "values": []
    },
    {
      "name": "ProcessCode",
      "number": 81,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "REGULAR" },
        { "enum": "1", "description": "SOFT_DOLLAR" },
        { "enum": "2", "description": "STEP_IN" },
        { "enum": "3", "description": "SETP_OUT" },
        { "enum": "4", "description": "SOFT_DOLLAR_STEP_IN" },
        { "enum": "5", "description": "SOFT_DOLLAR_STEP_OUT" },
        { "enum": "6", "description": "PLAN_SPONSOR" }
      ]
    },
    {
      "name": "AllocStatus",
      "number": 87,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "ACCEPTED" },
        { "enum": "1", "description": "BLOCK_LEVEL_REJECT" },
        { "enum": "2", "description": "ACCOUNT_LEVEL_REJECT" },
        { "enum": "3", "description": "RECEIVED" },
        { "enum": "4", "description": "INCOMPLETE" },
        { "enum": "5", "description": "REJECTED_BY_INTERMEDIARY" }
      ]
    },
    {
      "name": "RawData",
      "number": 96,
      "type": "STRING",
      "values": []
    },
    {
      "name": "PossResend",
      "number": 97,
      "type": "BOOLEAN",
      "values": [
        { "enum": "N", "description": "NO" },
        { "enum": "Y", "description": "YES" }
      ]
    },
    {
      "name": "EncryptMethod",
      "number": 98,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NONE" }
      ]
    },
    {
      "name": "StopPx",
      "number": 99,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "ExDestination",
      "number": 100,
      "type": "EXCHANGE",
      "values": []
    },
    {
      "name": "CxlRejReason",
      "number": 102,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "TOO_LATE_TO_CANCEL" },
        { "enum": "1", "description": "UNKNOWN_ORDER" },
        { "enum": "2", "description": "BROKER_OPTION" },
        { "enum": "3", "description": "ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS" },
        { "enum": "4", "description": "UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST" },
        { "enum": "5", "description": "ORIGORDMODTIME" },
        { "enum": "6", "description": "DUPLICATE_CLORDID" },
        { "enum": "7", "description": "DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER" },
        { "enum": "8", "description": "STALE_ORDER" },
        { "enum": "9", "description": "TRADE_ALONG_REQUIRED" },
        { "enum": "10", "description": "INVALID_INVESTOR_ID" },
        { "enum": "11", "description": "UNSUPPORTED_ORDER_CHARACTERISTIC" },
        { "enum": "12", "description": "SURVEILLENCE_OPTION" },
        { "enum": "13", "description": "INCORRECT_QUANTITY" },
        { "enum": "14", "description": "INCORRECT_ALLOCATED_QUANTITY" },
        { "enum": "15", "description": "UNKNOWN_ACCOUNT" },
        { "enum": "16", "description": "PRICE_EXCEEDS_CURRENT_PRICE_BAND" },
        { "enum": "18", "description": "INVALID_PRICE_INCREMENT" },
        { "enum": "19", "description": "MESSAGE_PENDING" },
        { "enum": "20", "description": "ROUTING_ERROR" },
        { "enum": "99", "description": "OTHER" },
        { "enum": "1003", "description": "MARKET_CLOSED" },
        { "enum": "1007", "description": "FIX_FIELD_MISSING_OR_INCORRECT" },
        { "enum": "1010", "description": "REQUIRED_FIELD_MISSING" },
        { "enum": "1011", "description": "FIX_FIELD_INCORRECT" },
        { "enum": "1012", "description": "PRICE_MUST_BE_GREATER_THAN_ZERO" },
        { "enum": "1013", "description": "INVALID_ORDER_QUALIFIER" },
        { "enum": "1014", "description": "USER_NOT_AUTHORIZED" },
        { "enum": "2013", "description": "MARKET_ORDERS_NOT_SUPPORTED_BY_OPPOSITE" },
        { "enum": "2019", "description": "INVALID_EXPIRE_DATE" },
        { "enum": "2044", "description": "ORDER_NOT_IN_BOOK" },
        { "enum": "2045", "description": "ORDER_NOT_IN_BOOK2" },
        { "enum": "2046", "description": "DISCLOSED_QTY_CANNOT_BE_GREATER" },
        { "enum": "2047", "description": "UNKNOWN_CONTRACT" },
        { "enum": "2048", "description": "CANCEL_WITH_DIFFERENT_SENDER_COMP_ID" },
        { "enum": "2049", "description": "CLORDID_DIFFERENT_THAN_CORRELATIONCLORDID" },
        { "enum": "2050", "description": "CLORDID_DIFFERENT_THAN_ORIGINALCLORDID" },
        { "enum": "2051", "description": "DIFFERENT_SIDE" },
        { "enum": "2052", "description": "DIFFERENT_GROUP" },
        { "enum": "2053", "description": "DIFFERENT_SECURITY_TYPE" },
        { "enum": "2054", "description": "DIFFERENT_ACCOUNT" },
        { "enum": "2055", "description": "DIFFERENT_QTY" },
        { "enum": "2056", "description": "CANCEL_WITH_DIFFERENT_TRADER_ID" },
        { "enum": "2058", "description": "STOP_PRICE_MUST_BE_GREATER" },
        { "enum": "2059", "description": "STOP_PRICE_MUST_BE_SMALLER" },
        { "enum": "2060", "description": "SELL_STOP_PRICE_MUST_BE_BELOW_LTP" },
        { "enum": "2061", "description": "BUY_STOP_PRICE_MUST_BE_ABOVE_LTP" },
        { "enum": "2100", "description": "DIFFERENT_PRODUCT" },
        { "enum": "2101", "description": "DIFFERENT_INFLIGHT_FILL_MITIGATION" },
        { "enum": "2102", "description": "MODIFY_WITH_DIFFERENT_SENDER_COMP_ID" },
        { "enum": "2103", "description": "MODIFY_WITH_DIFFERENT_TRADER_ID" },
        { "enum": "2115", "description": "ORDER_QTY_OUTSIDE_ALLOWABLE_RANGE" },
        { "enum": "2130", "description": "INVALID_ORDER_TYPE_FOR_PCP" },
        { "enum": "2137", "description": "ORDER_PRICE_OUTSIDE_LIMITS" },
        { "enum": "2179", "description": "ORDER_PRICE_OUTSIDE_BANDS" },
        { "enum": "2311", "description": "INVALID_ORDER_TYPE_FOR_GROUP" },
        { "enum": "2500", "description": "INSTRUMENT_CROSS_REQUEST_IN_PROGRESS" },
        { "enum": "2501", "description": "ORDER_QTY_TOO_LOW" },
        { "enum": "2600", "description": "MARKET_MAKER_PROTECTION_HAS_TRIPPED" },
        { "enum": "4000", "description": "ENGINE_DID_NOT_RESPOND" },
        { "enum": "5001", "description": "EURONEXT_UNKNOWN_ORDER" },
        { "enum": "5099", "description": "EURONEXT_OTHER" },
        { "enum": "5020", "description": "COMP_ID_PROBLEM" },
        { "enum": "5300", "description": "LOGON_PROBLEM" },
        { "enum": "5313", "description": "NO_ROUTER_FOR_SECURITY_GROUP" },
        { "enum": "5314", "description": "ROUTER_NOT_AVAILABLE_OR_CONNECTED" },
        { "enum": "5318", "description": "INVALID_PRICE" },
        { "enum": "5319", "description": "INVALID_ORDQTY" },
        { "enum": "5320", "description": "INVALID_ORDTYPE" },
        { "enum": "5321", "description": "INVALID_SIDE" },
        { "enum": "6000", "description": "FULLY_FILLED" },
        { "enum": "6001", "description": "PENDING_REPLACE" },
        { "enum": "6002", "description": "PENDING_CANCEL" },
        { "enum": "7000", "description": "ORDER_REJECTED" },
        { "enum": "7001", "description": "CONTRACT_NOT_GTC_GTD_ELIGIBLE" },
        { "enum": "7009", "description": "CONTRACT_PAST_EXPIRATION" },
        { "enum": "7011", "description": "MAX_CONTRACT_WORKING_QTY_EXCEEDED" },
        { "enum": "7015", "description": "MODIFY_WITH_DIFFERENT_SIDE" },
        { "enum": "7018", "description": "CONTRACT_NOT_GTC_GTD_ELIGIBLE2" },
        { "enum": "7020", "description": "NO_TRADING_CALENDAR_FOR_EXPIRE_DATE" },
        { "enum": "7021", "description": "EXPIRE_DATE_BEYOND_INSTRUMENT_EXPIRATION" },
        { "enum": "7022", "description": "EXPIRE_DATE_BEYOND_LEG_INSTRUMENT_EXPIRATION" },
        { "enum": "7024", "description": "MARKET_IN_NO_CANCEL" },
        { "enum": "7027", "description": "INVALID_ORDER_TYPE_FOR_RESERVED_MARKET" },
        { "enum": "7028", "description": "ORDER_SESSION_DATE_IN_PAST" },
        { "enum": "7613", "description": "DISCLOSED_QTY_CANNOT_BE_SMALLER" },
        { "enum": "9999", "description": "TECHNICAL_ERROR_FUNCTION_NOT_PERFORMED" }
      ]
    },
    {
      "name": "OrdRejReason",
      "number": 103,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "BROKER_OPTION" },
        { "enum": "1", "description": "UNKNOWN_SYMBOL" },
        { "enum": "2", "description": "EXCHANGE_CLOSED" },
        { "enum": "3", "description": "ORDER_EXCEEDS_LIMIT" },
        { "enum": "4", "description": "TOO_LATE_TO_ENTER" },
        { "enum": "5", "description": "UNKNOWN_ORDER" },
        { "enum": "6", "description": "DUPLICATE_ORDER" },
        { "enum": "7", "description": "DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER" },
        { "enum": "8", "description": "STALE_ORDER" },
        { "enum": "9", "description": "TRADE_ALONG_REQUIRED" },
        { "enum": "10", "description": "INVALID_INVESTOR_ID" },
        { "enum": "11", "description": "UNSUPPORTED_ORDER_CHARACTERISTIC" },
        { "enum": "12", "description": "SURVEILLENCE_OPTION" },
        { "enum": "13", "description": "INCORRECT_QUANTITY" },
        { "enum": "14", "description": "INCORRECT_ALLOCATED_QUANTITY" },
        { "enum": "15", "description": "UNKNOWN_ACCOUNT" },
        { "enum": "16", "description": "PRICE_EXCEEDS_CURRENT_PRICE_BAND" },
        { "enum": "18", "description": "INVALID_PRICE_INCREMENT" },
        { "enum": "19", "description": "MESSAGE_PENDING" },
        { "enum": "20", "description": "ROUTING_ERROR" },
        { "enum": "99", "description": "OTHER" },
        { "enum": "100", "description": "TIME_OUT" },
        { "enum": "1003", "description": "MARKET_CLOSED" },
        { "enum": "1007", "description": "FIX_FIELD_MISSING_OR_INCORRECT" },
        { "enum": "1010", "description": "REQUIRED_FIELD_MISSING" },
        { "enum": "1011", "description": "FIX_FIELD_INCORRECT" },
        { "enum": "1012", "description": "PRICE_MUST_BE_GREATER_THAN_ZERO" },
        { "enum": "1013", "description": "INVALID_ORDER_QUALIFIER" },
        { "enum": "1014", "description": "USER_NOT_AUTHORIZED" },
        { "enum": "2013", "description": "MARKET_HOURS_NOT_SUPORTED_BY_OPPOSITE" },
        { "enum": "2019", "description": "INVALID_EXPIRE_DATE" },
        { "enum": "2044", "description": "ORDER_NOT_IN_BOOK" },
        { "enum": "2045", "description": "ORDER_NOT_IN_BOOK_2" },
        { "enum": "2046", "description": "DISCLOSED_QTY_CANNOT_BE_GREATER" },
        { "enum": "2047", "description": "UNKNOWN_CONTRACT" },
        { "enum": "2048", "description": "CANCEL_WITH_DIFFERENT_SENDER_COMP_ID" },
        { "enum": "2049", "description": "CLORDID_DIFFERENT_THAN_CORRELEATION_CLORDID" },
        { "enum": "2050", "description": "CLORDID_DIFFERENT_THAN_ORIGINAL_CLORDID" },
        { "enum": "2051", "description": "DIFFERENT_SIDE" },
        { "enum": "2052", "description": "DIFFERENT_GROUP" },
        { "enum": "2053", "description": "DIFFERENT_SECURITY_TYPE" },
        { "enum": "2054", "description": "DIFFERENT_ACCOUNT" },
        { "enum": "2055", "description": "DIFFERENT_QTY" },
        { "enum": "2056", "description": "CANCEL_WITH_DIFFERENT_TRADER_ID" },
        { "enum": "2058", "description": "STOP_PRICE_MUST_BE_GREATER" },
        { "enum": "2059", "description": "STOP_PRICE_MUST_BE_SMALLER" },
        { "enum": "2060", "description": "SELL_STOP_PRICE_MUST_BE_BELOW_LTP" },
        { "enum": "2061", "description": "BUY_STOP_PRICE_MUST_BE_ABOVE_LTP" },
        { "enum": "2100", "description": "DIFFERENT_PRODUCT" },
        { "enum": "2101", "description": "DIFFERENT_INFLIGHT_FILL_MODIFICATION" },
        { "enum": "2102", "description": "MODIFY_WITH_DIFFERENT_SENDER_COMP_ID" },
        { "enum": "2103", "description": "MODIFY_WITH_DIFFERENT_TRADER_ID" },
        { "enum": "2115", "description": "ORDER_QTY_OUTSIDE_ALLOWABLE_RANGE" },
        { "enum": "2130", "description": "INVALID_ORDER_TYPE_FOR_PCP" },
        { "enum": "2137", "description": "ORDER_PRICE_OUTSIDE_LIMITS" },
        { "enum": "2179", "description": "ORDER_PRICE_OUTSIDE_BANDS" },
        { "enum": "2311", "description": "INVALID_ORDER_TYPE_FOR_GROUP" },
        { "enum": "2500", "description": "INSTRUMENT_CROSS_REQUEST_IN_PROCESS" },
        { "enum": "2501", "description": "ORDR_QTY_TOO_LOW" },
        { "enum": "2600", "description": "MARKET_MAKER_PROTECTION_HAS_TRIPPED" },
        { "enum": "4000", "description": "ENGINE_DID_NOT_RESPOND" },
        { "enum": "6001", "description": "PENDING_REPLACE" },
        { "enum": "6002", "description": "PENDING_CANCEL" },
        { "enum": "7000", "description": "ORDER_REJECTED" },
        { "enum": "7001", "description": "CONTRACT_NOT_GTC_GTD_ELIGIBLE" },
        { "enum": "7009", "description": "CONTRACT_PAST_EXPIRATION" },
        { "enum": "7011", "description": "MAX_CONTRACT_WORKING_QTY_EXCEEDED" },
        { "enum": "7015", "description": "MODIFY_WITH_DIFFERENT_SIDE" },
        { "enum": "7018", "description": "CONTRACT_NOT_GTC_GTD_ELIGIBLE_2" },
        { "enum": "7020", "description": "NO_TRADING_CALENDAR_FOR_EXPIRE_DATE" },
        { "enum": "7021", "description": "EXPIRE_DATE_BEYOND_INSTRUMENT_EXPIRATION" },
        { "enum": "7022", "description": "EXPIRE_DATE_BEYOND_LEG_INSTRUMENT_EXPIRATION" },
        { "enum": "7024", "description": "MARKET_IN_NO_CANCEL" },
        { "enum": "7027", "description": "INVALID_ORDER_TYPE_FOR_RESERVED_MARKET" },
        { "enum": "7028", "description": "ORDER_SESSION_DATE_IN_PAST" },
        { "enum": "7613", "description": "DISCLOSED_QTY_CANNOT_BE_SMALLER" },
        { "enum": "9999", "description": "TECHNICAL_ERROR_FUNCTION_NOT_PERFORMED" }
      ]
    },
    {
      "name": "SecurityDesc",
      "number": 107,
      "type": "STRING",
      "values": []
    },
    {
      "name": "HeartBtInt",
      "number": 108,
      "type": "INT",
      "values": []
    },
    {
      "name": "MinQty",
      "number": 110,
      "type": "QTY",
      "values": []
    },
    {
      "name": "TestReqID",
      "number": 112,
      "type": "STRING",
      "values": []
    },
    {
      "name": "OnBehalfOfCompID",
      "number": 115,
      "type": "STRING",
      "values": []
    },
    {
      "name": "OnBehalfOfSubID",
      "number": 116,
      "type": "STRING",
      "values": []
    },
    {
      "name": "QuoteId",
      "number": 117,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NetMoney",
      "number": 118,
      "type": "AMT",
      "values": []
    },
    {
      "name": "SettlCurrAmt",
      "number": 119,
      "type": "AMT",
      "values": []
    },
    {
      "name": "SettlCurrency",
      "number": 120,
      "type": "CURRENCY",
      "values": []
    },
    {
      "name": "OrigSendingTime",
      "number": 122,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "GapFillFlag",
      "number": 123,
      "type": "BOOLEAN",
      "values": [
        { "enum": "N", "description": "NO" },
        { "enum": "Y", "description": "YES" }
      ]
    },
    {
      "name": "NoExecs",
      "number": 124,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "ExpireTime",
      "number": 126,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "DKReason",
      "number": 127,
      "type": "CHAR",
      "values": [
        { "enum": "A", "description": "UnknownSymbol" },
        { "enum": "Z", "description": "Other" }
      ]
    },
    {
      "name": "DeliverToCompID",
      "number": 128,
      "type": "STRING",
      "values": []
    },
    {
      "name": "DeliverToSubID",
      "number": 129,
      "type": "STRING",
      "values": []
    },
    {
      "name": "QuoteReqID",
      "number": 131,
      "type": "STRING",
      "values": []
    },
    {
      "name": "BidPx",
      "number": 132,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "OfferPx",
      "number": 133,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "BidSize",
      "number": 134,
      "type": "QTY",
      "values": []
    },
    {
      "name": "OfferSize",
      "number": 135,
      "type": "QTY",
      "values": []
    },
    {
      "name": "NoMiscFees",
      "number": 136,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "MiscFeeAmt",
      "number": 137,
      "type": "AMT",
      "values": []
    },
    {
      "name": "MiscFeeCurr",
      "number": 138,
      "type": "CURRENCY",
      "values": []
    },
    {
      "name": "MiscFeeType",
      "number": 139,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "REGULATORY" },
        { "enum": "2", "description": "TAX" },
        { "enum": "3", "description": "LOCAL_COMMISSION" },
        { "enum": "4", "description": "EXCHANGE_FEES" },
        { "enum": "5", "description": "STAMP" },
        { "enum": "6", "description": "LEVY" },
        { "enum": "7", "description": "OTHER" },
        { "enum": "8", "description": "MARKUP" },
        { "enum": "9", "description": "CONSUMPTION_TAX" },
        { "enum": "10", "description": "PER_TRANSACTION" },
        { "enum": "11", "description": "CONVERSION" },
        { "enum": "12", "description": "AGENT" }
      ]
    },
    {
      "name": "ResetSeqNumFlag",
      "number": 141,
      "type": "BOOLEAN",
      "values": [
        { "enum": "N", "description": "NO" },
        { "enum": "Y", "description": "YES" }
      ]
    },
    {
      "name": "SenderLocationID",
      "number": 142,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NoRelatedSym",
      "number": 146,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "Headline",
      "number": 148,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ExecType",
      "number": 150,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "NEW" },
        { "enum": "1", "description": "PARTIAL_FILL" },
        { "enum": "2", "description": "FILL" },
        { "enum": "3", "description": "DONE_FOR_DAY" },
        { "enum": "4", "description": "CANCELED" },
        { "enum": "5", "description": "REPLACE" },
        { "enum": "6", "description": "PENDING_CANCEL" },
        { "enum": "7", "description": "STOPPED" },
        { "enum": "8", "description": "REJECTED" },
        { "enum": "9", "description": "SUSPENDED" },
        { "enum": "A", "description": "PENDING_NEW" },
        { "enum": "B", "description": "CALCULATED" },
        { "enum": "C", "description": "EXPIRED" },
        { "enum": "D", "description": "RESTATED" },
        { "enum": "E", "description": "PENDING_REPLACE" },
        { "enum": "F", "description": "TRADE" },
        { "enum": "G", "description": "TRADE_CORRECT" },
        { "enum": "H", "description": "TRADE_CANCEL" },
        { "enum": "I", "description": "ORDER_STATUS" },
        { "enum": "J", "description": "TRADE_IN_A_CLEARING_HOLD" },
        { "enum": "K", "description": "TRADE_HAS_BEEN_RELEASED_TO_CLEARING" },
        { "enum": "L", "description": "TRIGGERED_OR_ACTIVATED_BY_SYSTEM" },
        { "enum": "a", "description": "CANCELLED_BY_STP" },
        { "enum": "b", "description": "ORDER_CANCELLED_DUE_TO_COD_MECHANISM" },
        { "enum": "n", "description": "ORDER_CANCELLED_DUE_TO_POTENTIAL_TRADE_OUTSIDE_FSP_LIMITS" },
        { "enum": "u", "description": "ORDER_CANCELLED_DUE_TO_MARKET_MAKER_PROTECTION" },
        { "enum": "v", "description": "ORDER_CANCELLED_BY_CLEARING_RISK_MANAGER" },
        { "enum": "w", "description": "ORDER_CANCELLED_DUE_TO_TRADE_PRICE_VALIDATION" },
        { "enum": "O", "description": "ELIMINATED_BY_CORPORATE_EVENT" },
        { "enum": "P", "description": "CANCELLED_BY_MEMBER_RISK_MANAGER" },
        { "enum": "U", "description": "ORDER_CANCELLED_BY_MARKET_OPERATIONS" },
        { "enum": "V", "description": "CANCELLED_DUE_TO_KILL_COMMAND" },
        { "enum": "X", "description": "REMAINING_QUANTITY_KILLED" },
        { "enum": "Y", "description": "BEGINNING_OF_PAKO_PERIOD" },
        { "enum": "R", "description": "RFQ_PARTIALLY_OR_FULLY_MATCHED_WITH_OTHER_COUNTERPARTS" }
      ]
    },
    {
      "name": "LeavesQty",
      "number": 151,
      "type": "QTY",
      "values": []
    },
    {
      "name": "AllocAvgPx",
      "number": 153,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "AllocNetMoney",
      "number": 154,
      "type": "AMT",
      "values": []
    },
    {
      "name": "SettlCurrFxRate",
      "number": 155,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "SettlCurrFxRateCalc",
      "number": 156,
      "type": "CHAR",
      "values": [
        { "enum": "M", "description": "MULTIPLY" },
        { "enum": "D", "description": "DIVIDE" }
      ]
    },
    {
      "name": "AccruedInterestAmt",
      "number": 159,
      "type": "AMT",
      "values": []
    },
    {
      "name": "AllocText",
      "number": 161,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecurityType",
      "number": 167,
      "type": "STRING",
      "values": [
        { "enum": "FUT", "description": "FUTURE" },
        { "enum": "OPT", "description": "OPTION" },
        { "enum": "MLEG", "description": "SPREAD" },
        { "enum": "SPOT", "description": "SPOT" },
        { "enum": "TBOND", "description": "TBOND" },
        { "enum": "CUR", "description": "CURRENCY" },
        { "enum": "CS", "description": "COMMON_STOCK" },
        { "enum": "INDEX", "description": "INDEX" },
        { "enum": "NONE", "description": "NONE" }
      ]
    },
    {
      "name": "EffectiveTime",
      "number": 168,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "LastSpotRate",
      "number": 194,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "LastForwardPoints",
      "number": 195,
      "type": "PRICEOFFSET",
      "values": []
    },
    {
      "name": "AllocLinkID",
      "number": 196,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecondaryOrderID",
      "number": 198,
      "type": "STRING",
      "values": []
    },
    {
      "name": "MaturityMonthYear",
      "number": 200,
      "type": "MONTHYEAR",
      "values": []
    },
    {
      "name": "PutOrCall",
      "number": 201,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "PUT" },
        { "enum": "1", "description": "CALL" }
      ]
    },
    {
      "name": "StrikePrice",
      "number": 202,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "MaturityDay",
      "number": 205,
      "type": "DAYOFMONTH",
      "values": []
    },
    {
      "name": "OptAttribute",
      "number": 206,
      "type": "CHAR",
      "values": []
    },
    {
      "name": "SecurityExchange",
      "number": 207,
      "type": "EXCHANGE",
      "values": []
    },
    {
      "name": "MaxShow",
      "number": 210,
      "type": "INT",
      "values": []
    },
    {
      "name": "Spread",
      "number": 218,
      "type": "PRICEOFFSET",
      "values": []
    },
    {
      "name": "Yield",
      "number": 236,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "MDReqID",
      "number": 262,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SubscriptionRequestType",
      "number": 263,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "SNAPSHOT" },
        { "enum": "1", "description": "SNAPSHOT_PLUS_UPDATES" },
        { "enum": "2", "description": "DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST" }
      ]
    },
    {
      "name": "MarketDepth",
      "number": 264,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "FULL_BOOK" },
        { "enum": "1", "description": "TOP_OF_BOOK" }
      ]
    },
    {
      "name": "MDUpdateType",
      "number": 265,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "FULL_REFRESH" },
        { "enum": "1", "description": "INCREMENTAL_REFRESH" }
      ]
    },
    {
      "name": "AggregatedBook",
      "number": 266,
      "type": "BOOLEAN",
      "values": [
        { "enum": "N", "description": "NO" },
        { "enum": "Y", "description": "YES" }
      ]
    },
    {
      "name": "NoMDEntryTypes",
      "number": 267,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "NoMDEntries",
      "number": 268,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "MDEntryType",
      "number": 269,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "BID" },
        { "enum": "1", "description": "ASK" },
        { "enum": "2", "description": "TRADE" },
        { "enum": "4", "description": "OPENING_PRICE" },
        { "enum": "5", "description": "CLOSING_PRICE" },
        { "enum": "6", "description": "SETTLEMENT_PRICE" },
        { "enum": "7", "description": "TRADING_SESSION_HIGH_PRICE" },
        { "enum": "8", "description": "TRADING_SESSION_LOW_PRICE" },
        { "enum": "9", "description": "TRADING_SESSION_VWAP_PRICE" },
        { "enum": "B", "description": "TRADE_VOLUME" },
        { "enum": "J", "description": "EMPTY_BOOK" },
        { "enum": "L", "description": "LEG_TRADE" },
        { "enum": "Y", "description": "IMPLIED_BID" },
        { "enum": "Z", "description": "IMPLIED_ASK" },
        { "enum": "m", "description": "OTC_TRADE" },
        { "enum": "p", "description": "INDICATIVE_OPEN" },
        { "enum": "q", "description": "INDICATIVE_CLOSE" },
        { "enum": "r", "description": "INDICATIVE_BID" },
        { "enum": "s", "description": "INDICATIVE_ASK" },
        { "enum": "t", "description": "INDICATIVE_SETTLEMENT" },
        { "enum": "u", "description": "EXCHANGE_SENDING_TIME" },
        { "enum": "v", "description": "EXCHANGE_TRANSACT_TIME" },
        { "enum": "w", "description": "EXCHANGE_SEQ_NUM" },
        { "enum": "x", "description": "LAST_TRADED" },
        { "enum": "A", "description": "IMBALANCE" },
        { "enum": "o", "description": "MARKETBIDQTY" },
        { "enum": "n", "description": "MARKETASKQTY" }
      ]
    },
    {
      "name": "MDEntryPx",
      "number": 270,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "MDEntrySize",
      "number": 271,
      "type": "QTY",
      "values": []
    },
    {
      "name": "MDEntryDate",
      "number": 272,
      "type": "UTCDATEONLY",
      "values": []
    },
    {
      "name": "MDEntryTime",
      "number": 273,
      "type": "UTCTIMEONLY",
      "values": []
    },
    {
      "name": "QuoteCondition",
      "number": 276,
      "type": "CHAR",
      "values": [
        { "enum": "A", "description": "OPEN_ACTIVE" },
        { "enum": "B", "description": "CLOSED_INACTIVE" },
        { "enum": "z", "description": "SUSPENDED" }
      ]
    },
    {
      "name": "MDUpdateAction",
      "number": 279,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "NEW" },
        { "enum": "1", "description": "CHANGE" },
        { "enum": "2", "description": "DELETE" }
      ]
    },
    {
      "name": "MDEntryOriginator",
      "number": 282,
      "type": "STRING",
      "values": []
    },
    {
      "name": "MDEntryPositionNo",
      "number": 290,
      "type": "INT",
      "values": []
    },
    {
      "name": "QuoteStatus",
      "number": 297,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "ACCEPTED" },
        { "enum": "5", "description": "REJECTED" },
        { "enum": "7", "description": "EXPIRED" }
      ]
    },
    {
      "name": "UnderlyingSecurityIDSource",
      "number": 305,
      "type": "STRING",
      "values": [
        { "enum": "4", "description": "ISIN_NUMBER" },
        { "enum": "5", "description": "RIC_CODE" },
        { "enum": "8", "description": "EXCHANGE_SECURITY_ID" },
        { "enum": "91", "description": "EXCHANGE_TICKER" },
        { "enum": "96", "description": "TT_SECURITY_ID" },
        { "enum": "97", "description": "ALIAS" },
        { "enum": "98", "description": "NAME" },
        { "enum": "A", "description": "BLOOMBERG_CODE" },
        { "enum": "S", "description": "OPENFIGI_ID" },
        { "enum": "X", "description": "SERIES_KEY" },
        { "enum": "H", "description": "CLEARING_HOUSE" }
      ]
    },
    {
      "name": "UnderlyingIssuer",
      "number": 306,
      "type": "STRING",
      "values": []
    },
    {
      "name": "UnderlyingSecurityID",
      "number": 309,
      "type": "STRING",
      "values": []
    },
    {
      "name": "UnderlyingSecurityType",
      "number": 310,
      "type": "STRING",
      "values": [
        { "enum": "FUT", "description": "FUTURE" },
        { "enum": "OPT", "description": "OPTION" },
        { "enum": "MLEG", "description": "SPREAD" },
        { "enum": "SPOT", "description": "SPOT" },
        { "enum": "TBOND", "description": "TBOND" },
        { "enum": "CUR", "description": "CURRENCY" },
        { "enum": "CS", "description": "COMMON_STOCK" },
        { "enum": "NONE", "description": "NONE" }
      ]
    },
    {
      "name": "UnderlyingSymbol",
      "number": 311,
      "type": "STRING",
      "values": []
    },
    {
      "name": "UnderlyingStrikePrice",
      "number": 316,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "UnderlyingCurrency",
      "number": 318,
      "type": "CURRENCY",
      "values": []
    },
    {
      "name": "SecurityReqID",
      "number": 320,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecurityRequestType",
      "number": 321,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS" },
        { "enum": "1", "description": "REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED" },
        { "enum": "2", "description": "REQUEST_LIST_SECURITY_TYPES" },
        { "enum": "3", "description": "REQUEST_LIST_SECURITIES" }
      ]
    },
    {
      "name": "SecurityResponseID",
      "number": 322,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecurityResponseType",
      "number": 323,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ACCEPT_SECURITY_PROPOSAL_AS_IS" },
        { "enum": "2", "description": "ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE" },
        { "enum": "3", "description": "LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST" },
        { "enum": "4", "description": "LIST_OF_SECURITIES_RETURNED_PER_REQUEST" },
        { "enum": "5", "description": "REJECT_SECURITY_PROPOSAL" },
        { "enum": "6", "description": "CAN_NOT_MATCH_SELECTION_CRITERIA" }
      ]
    },
    {
      "name": "SecurityStatusReqID",
      "number": 324,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecurityTradingStatus",
      "number": 326,
      "type": "INT",
      "values": [
        { "enum": "2", "description": "TRADING_HALT" },
        { "enum": "9", "description": "CIRCUIT_BREAKER" },
        { "enum": "17", "description": "READY_TO_TRADE" },
        { "enum": "18", "description": "NOT_AVAILABLE_FOR_TRADING" },
        { "enum": "20", "description": "UNKNOWN_OR_INVALID" },
        { "enum": "21", "description": "PREOPEN" },
        { "enum": "23", "description": "FAST_MARKET" },
        { "enum": "98", "description": "POST_CLOSE" },
        { "enum": "99", "description": "PRE_TRADE" }
      ]
    },
    {
      "name": "ContraTrader",
      "number": 337,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NumberOfOrders",
      "number": 346,
      "type": "INT",
      "values": []
    },
    {
      "name": "AllocPrice",
      "number": 366,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "LastSeqNumProcessed",
      "number": 369,
      "type": "SEQNUM",
      "values": []
    },
    {
      "name": "RefTagID",
      "number": 371,
      "type": "INT",
      "values": []
    },
    {
      "name": "RefMsgType",
      "number": 372,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SessionRejectReason",
      "number": 373,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "INVALID_TAG_NUMBER" },
        { "enum": "1", "description": "REQUIRED_TAG_MISSING" },
        { "enum": "10", "description": "SENDINGTIME_ACCURACY_PROBLEM" },
        { "enum": "11", "description": "INVALID_MSGTYPE" },
        { "enum": "2", "description": "TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE" },
        { "enum": "3", "description": "UNDEFINED_TAG" },
        { "enum": "4", "description": "TAG_SPECIFIED_WITHOUT_A_VALUE" },
        { "enum": "5", "description": "VALUE_IS_INCORRECT" },
        { "enum": "6", "description": "INCORRECT_DATA_FORMAT_FOR_VALUE" },
        { "enum": "7", "description": "DECRYPTION_PROBLEM" },
        { "enum": "8", "description": "SIGNATURE_PROBLEM" },
        { "enum": "9", "description": "COMPID_PROBLEM" },
        { "enum": "99", "description": "OTHER" }
      ]
    },
    {
      "name": "ContraBroker",
      "number": 375,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ExecRestatementReason",
      "number": 378,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "GT_CORPORATE_ACTION" },
        { "enum": "1", "description": "GT_RENEWAL" },
        { "enum": "2", "description": "VERBAL_CHANGE" },
        { "enum": "3", "description": "REPRICING_OF_ORDER" },
        { "enum": "4", "description": "BROKER_OPTION" },
        { "enum": "5", "description": "PARTIAL_DECLINE_OF_ORDERQTY" },
        { "enum": "6", "description": "CANCEL_ON_TRADING_HALT" },
        { "enum": "7", "description": "CANCEL_ON_SYSTEM_FAILURE" },
        { "enum": "8", "description": "MARKET" },
        { "enum": "9", "description": "CANCEL_NOT_BEST" },
        { "enum": "10", "description": "WAREHOUSE_RECAP" },
        { "enum": "11", "description": "PEG_REFRESH" },
        { "enum": "50", "description": "CONTROL_USER_ACTIVITY" },
        { "enum": "51", "description": "CORPORATE_MANAGER_ACTIVITY" },
        { "enum": "52", "description": "BRANCH_MANAGER_ACTIVITY" },
        { "enum": "53", "description": "EXCHANGE_AND_FIX_SERVER_CONNECTION_DOWN" },
        { "enum": "99", "description": "OTHER" },
        { "enum": "100", "description": "CANCEL_ON_DISCONNECT" },
        { "enum": "103", "description": "CANCEL_RESTING_SMP" },
        { "enum": "104", "description": "CANCEL_FROM_CREDIT_VIOLATION" },
        { "enum": "105", "description": "CANCEL_FROM_FIRMSOFT" },
        { "enum": "106", "description": "CANCEL_FROM_RISK" },
        { "enum": "107", "description": "CANCEL_AGGRESSING_SMP" },
        { "enum": "108", "description": "CANCEL_FROM_MIN_LOT_SIZE" },
        { "enum": "109", "description": "EXEC_RESTATEMENT_REASON_CANCEL_BY_SYSTEM" },
        { "enum": "110", "description": "EXEC_RESTATEMENT_REASON_CANCEL_BY_PROXY" },
        { "enum": "111", "description": "EXEC_RESTATEMENT_REASON_CANCEL_ORDER_EXPIRED" },
        { "enum": "112", "description": "EXEC_RESTATEMENT_REASON_CANCEL_OUTSIDE_PRICE_LIMITS" },
        { "enum": "113", "description": "EXEC_RESTATEMENT_REASON_CANCEL_SESSION_TRANSITION" },
        { "enum": "114", "description": "EXEC_RESTATEMENT_REASON_CANCEL_AUCTION_DELETE" },
        { "enum": "115", "description": "EXEC_RESTATEMENT_REASON_CANCEL_OTHER" },
        { "enum": "116", "description": "ORDER_PASSING_REQUEST_ACCEPTED" },
        { "enum": "117", "description": "ORDER_PASSING_REQUEST_REJECTED" },
        { "enum": "118", "description": "INCOMING_ORDER_SELF_MATCH_PREVENTION" },
        { "enum": "119", "description": "RESTING_ORDER_SELF_MATCH_PREVENTION" },
        { "enum": "120", "description": "CANCEL_DUE_TO_SELF_MATCH_PREVENTION" },
        { "enum": "121", "description": "EXEC_RESTATEMENT_REASON_GTC_GTD_CARRYOVER" },
        { "enum": "122", "description": "EXEC_RESTATEMENT_REASON_REDUCTION_OF_ORDQTY" },
        { "enum": "123", "description": "EXEC_RESTATEMENT_REASON_PRICE_SLIDING_REPRICE" },
        { "enum": "124", "description": "EXEC_RESTATEMENT_REASON_STATE_CHANGE" },
        { "enum": "125", "description": "ORDER_PASSING_REQUEST_INITIATE" },
        { "enum": "126", "description": "ORDER_PASSING_REQUEST_UNDO" },
        { "enum": "127", "description": "CANCEL_FROM_EXCHANGE_WEBSITE" },
        { "enum": "9000", "description": "EXEC_RESTATEMENT_REASON_UNSOLICITED_ORDER_RECOVERY" },
        { "enum": "9001", "description": "EXEC_RESTATEMENT_REASON_TIMEOUT" },
        { "enum": "9002", "description": "EXEC_RESTATEMENT_REASON_PENDING" },
        { "enum": "9003", "description": "EXEC_RESTATEMENT_REASON_REVIVED" }
      ]
    },
    {
      "name": "BusinessRejectRefID",
      "number": 379,
      "type": "STRING",
      "values": []
    },
    {
      "name": "BusinessRejectReason",
      "number": 380,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "OTHER" },
        { "enum": "1", "description": "UNKOWN_ID" },
        { "enum": "2", "description": "UNKNOWN_SECURITY" },
        { "enum": "3", "description": "UNSUPPORTED_MESSAGE_TYPE" },
        { "enum": "4", "description": "APPLICATION_NOT_AVAILABLE" },
        { "enum": "5", "description": "CONDITIONALLY_REQUIRED_FIELD_MISSING" }
      ]
    },
    {
      "name": "GrossTradeAmt",
      "number": 381,
      "type": "AMT",
      "values": []
    },
    {
      "name": "TotalNumSecurities",
      "number": 393,
      "type": "INT",
      "values": []
    },
    {
      "name": "PriceType",
      "number": 423,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "PERCENTAGE" },
        { "enum": "2", "description": "PER_UNIT" },
        { "enum": "3", "description": "FIXED_AMOUNT" },
        { "enum": "4", "description": "DISCOUNT" },
        { "enum": "5", "description": "PREMIUM" },
        { "enum": "6", "description": "SPREAD" },
        { "enum": "7", "description": "TED_PRICE" },
        { "enum": "8", "description": "TED_YIELD" },
        { "enum": "9", "description": "YIELD" },
        { "enum": "10", "description": "FIXED_CABINET_TRADE_PRICE" },
        { "enum": "11", "description": "VARIABLE_CABINET_TRADE_PRICE" }
      ]
    },
    {
      "name": "ExpireDate",
      "number": 432,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "CxlRejResponseTo",
      "number": 434,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "ORDER_CANCEL_REQUEST" },
        { "enum": "2", "description": "ORDER_CANCEL_REPLACE_REQUEST" },
        { "enum": "3", "description": "QUOTE_CANCEL" },
        { "enum": "4", "description": "QUOTE_REPLACE" }
      ]
    },
    {
      "name": "UnderlyingSpotRate",
      "number": 435,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "ClearingAccount",
      "number": 440,
      "type": "STRING",
      "values": []
    },
    {
      "name": "MultiLegReportingType",
      "number": 442,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "SINGLE_SECURITY" },
        { "enum": "2", "description": "INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY" },
        { "enum": "3", "description": "MULTI_LEG_SECURITY" }
      ]
    },
    {
      "name": "PartyIDSource",
      "number": 447,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "KOREAN_INVESTOR_ID" },
        { "enum": "2", "description": "TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII_FID" },
        { "enum": "3", "description": "TAIWANESE_TRADING_ACCT" },
        { "enum": "4", "description": "MALAYSIAN_CENTRAL_DEPOSITORY" },
        { "enum": "5", "description": "CHINESE_INVESTOR_ID" },
        { "enum": "6", "description": "UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER" },
        { "enum": "7", "description": "US_SOCIAL_SECURITY_NUMBER" },
        { "enum": "8", "description": "US_EMPLOYER_OR_TAX_ID_NUMBER" },
        { "enum": "9", "description": "AUSTRALIAN_BUSINESS_NUMBER" },
        { "enum": "A", "description": "AUSTRALIAN_TAX_FILE_NUMBER" },
        { "enum": "B", "description": "BIC" },
        { "enum": "C", "description": "GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER" },
        { "enum": "D", "description": "PROPRIETARY" },
        { "enum": "E", "description": "ISO_COUNTRY_CODE" },
        { "enum": "F", "description": "SETTLEMENT_ENTITY_LOCATION" },
        { "enum": "G", "description": "MIC" },
        { "enum": "H", "description": "CSD_PARTICIPANT_MEMBER_CODE" },
        { "enum": "I", "description": "DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT" },
        { "enum": "P", "description": "SHORT_CODE_IDENTIFIER" },
        { "enum": "N", "description": "LEGAL_ENTITY_ID" }
      ]
    },
    {
      "name": "PartyID",
      "number": 448,
      "type": "STRING",
      "values": []
    },
    {
      "name": "PartyRole",
      "number": 452,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "EXECUTING_FIRM" },
        { "enum": "10", "description": "SETTLEMENT_LOCATION" },
        { "enum": "11", "description": "ORDER_ORIGINATION_TRADER" },
        { "enum": "12", "description": "EXECUTING_TRADER" },
        { "enum": "122", "description": "INVESTMENT_DECISION_MAKER" },
        { "enum": "13", "description": "ORDER_ORIGINATION_FIRM" },
        { "enum": "14", "description": "GIVEUP_CLEARING_FIRM" },
        { "enum": "15", "description": "CORRESPONDANT_CLEARING_FIRM" },
        { "enum": "16", "description": "EXECUTING_SYSTEM" },
        { "enum": "17", "description": "CONTRA_FIRM" },
        { "enum": "18", "description": "CONTRA_CLEARING_FIRM" },
        { "enum": "19", "description": "SPONSORING_FIRM" },
        { "enum": "2", "description": "BROKER_OF_CREDIT" },
        { "enum": "20", "description": "UNDERLYING_CONTRA_FIRM" },
        { "enum": "21", "description": "CLEARING_ORGANIZATION" },
        { "enum": "22", "description": "EXCHANGE" },
        { "enum": "24", "description": "CUSTOMER_ACCOUNT" },
        { "enum": "25", "description": "CORRESPONDENT_CLEARING_ORGANIZATION" },
        { "enum": "26", "description": "CORRESPONDENT_BROKER" },
        { "enum": "27", "description": "BUYER_SELLER" },
        { "enum": "28", "description": "CUSTODIAN" },
        { "enum": "29", "description": "INTERMEDIARY" },
        { "enum": "3", "description": "CLIENT_ID" },
        { "enum": "30", "description": "AGENT" },
        { "enum": "31", "description": "SUB_CUSTODIAN" },
        { "enum": "32", "description": "BENEFICIARY" },
        { "enum": "33", "description": "INTERESTED_PARTY" },
        { "enum": "34", "description": "REGULATORY_BODY" },
        { "enum": "35", "description": "LIQUIDITY_PROVIDER" },
        { "enum": "36", "description": "ENTERING_TRADER" },
        { "enum": "37", "description": "CONTRA_TRADER" },
        { "enum": "38", "description": "POSITION_ACCOUNT" },
        { "enum": "4", "description": "CLEARING_FIRM" },
        { "enum": "5", "description": "INVESTOR_ID" },
        { "enum": "6", "description": "INTRODUCING_FIRM" },
        { "enum": "7", "description": "ENTERING_FIRM" },
        { "enum": "8", "description": "LOCATE" },
        { "enum": "9", "description": "FUND_MANAGER_CLIENT_ID" },
        { "enum": "60", "description": "INTRODUCING_BROKER" },
        { "enum": "41", "description": "CONTRA_POSITION_ACCOUNT" },
        { "enum": "42", "description": "CONTRA_EXCHANGE" },
        { "enum": "43", "description": "INTERNAL_CARRY_ACCOUNT" },
        { "enum": "44", "description": "ORDER_ENTRY_OPERATOR_ID" },
        { "enum": "45", "description": "SECONDARY_ACCOUNT_NUMBER" },
        { "enum": "46", "description": "FOREIGN_FIRM" },
        { "enum": "47", "description": "THIRD_PARTY_ALLOCATION_FIRM" },
        { "enum": "48", "description": "CLAIMING_ACCOUNT" },
        { "enum": "49", "description": "ASSET_MANAGER" },
        { "enum": "50", "description": "PLEDGOR_ACCOUNT" },
        { "enum": "51", "description": "PLEDGEE_ACCOUNT" },
        { "enum": "52", "description": "LARGE_TRADER_REPORTABLE_ACCOUNT" },
        { "enum": "53", "description": "TRADER_MNEMONIC" },
        { "enum": "54", "description": "SENDER_LOCATION" },
        { "enum": "55", "description": "SESSION_ID" },
        { "enum": "56", "description": "ACCEPTABLE_COUNTERPARTY" },
        { "enum": "57", "description": "UNACCEPTABLE_COUNTERPARTY" },
        { "enum": "58", "description": "ENTERING_UNIT" },
        { "enum": "59", "description": "EXECUTING_UNIT" },
        { "enum": "39", "description": "CONTRA_INVESTOR_ID" },
        { "enum": "40", "description": "TRANSFER_TO_FIRM" },
        { "enum": "61", "description": "QUOTE_ORIGINATOR" },
        { "enum": "62", "description": "REPORT_ORIGINATOR" },
        { "enum": "63", "description": "SYSTEMATIC_INTERNALISER" },
        { "enum": "64", "description": "MULTILATERAL_TRADING_FACILITY" },
        { "enum": "65", "description": "REGULATED_MARKET" },
        { "enum": "66", "description": "MARKET_MAKER" },
        { "enum": "67", "description": "INVESTMENT_FIRM" },
        { "enum": "68", "description": "HOST_COMPETENT_AUTHORITY" },
        { "enum": "69", "description": "HOME_COMPETENT_AUTHORITY" },
        { "enum": "70", "description": "COMPETENT_AUTHORITY_OF_THE_MOST_RELEVANT_MARKET_IN_TERMS_OF_LIQUIDITY" },
        { "enum": "71", "description": "COMPETENT_AUTHORITY_OF_THE_TRANSACTION" },
        { "enum": "72", "description": "REPORTING_INTERMEDIARY" },
        { "enum": "73", "description": "EXECUTION_VENUE" },
        { "enum": "74", "description": "MARKET_DATA_ENTRY_ORIGINATOR" },
        { "enum": "75", "description": "LOCATION_ID" },
        { "enum": "76", "description": "DESK_ID" },
        { "enum": "77", "description": "MARKET_DATA_MARKET" },
        { "enum": "78", "description": "ALLOCATION_ENTITY" },
        { "enum": "79", "description": "PRIME_BROKER_PROVIDING_GENERAL_TRADE_SERVICES" },
        { "enum": "80", "description": "STEP_OUT_FIRM" },
        { "enum": "81", "description": "BROKERCLEARINGID" },
        { "enum": "82", "description": "CENTRAL_REGISTRATION_DEPOSITORY" },
        { "enum": "83", "description": "CLEARING_ACCOUNT" },
        { "enum": "84", "description": "ACCEPTABLE_SETTLING_COUNTERPARTY" },
        { "enum": "85", "description": "UNACCEPTABLE_SETTLING_COUNTERPARTY" },
        { "enum": "118", "description": "PARTY_ROLE_DECISION_MAKER" },
        { "enum": "119", "description": "PARTY_ROLE_CLIENT_ID_HOUSE" },
        { "enum": "200", "description": "ACCOUNT_CODE" },
        { "enum": "201", "description": "TAKEUP_FIRM" },
        { "enum": "202", "description": "CLEARING_INSTRUCTION" },
        { "enum": "203", "description": "CUSTOMER_INFO" },
        { "enum": "204", "description": "ALLOCATION_ENTITY_ID" },
        { "enum": "205", "description": "ACCOUNT_TYPE" },
        { "enum": "206", "description": "GIVEUP_FIRM" },
        { "enum": "207", "description": "MIFID_ID" },
        { "enum": "208", "description": "COMPOSITE_MIFID_ID" },
        { "enum": "209", "description": "CTI_CODE" },
        { "enum": "210", "description": "LMA_CLEARING_ACCOUNT" },
        { "enum": "211", "description": "AUTHORIZED_TRADER_ID" },
        { "enum": "212", "description": "FREQUENT_TRADER_ID" },
        { "enum": "213", "description": "PARTY_ROLE_USER" },
        { "enum": "214", "description": "PARTY_ROLE_MEMBER" },
        { "enum": "215", "description": "PARTY_ROLE_TRADING_MEMBER" },
        { "enum": "216", "description": "PARTY_ROLE_CLEARING_MEMBER" },
        { "enum": "217", "description": "PARTY_ROLE_ACTING_USER" },
        { "enum": "218", "description": "PARTY_ROLE_TRADER_ID" },
        { "enum": "219", "description": "PARTY_ROLE_OWNER_TYPE" },
        { "enum": "220", "description": "PARTY_ROLE_ROUTING_MEMBER_ID" },
        { "enum": "221", "description": "GIVEUP_QUALIFIER" },
        { "enum": "222", "description": "ALGO_STRATEGY_TYPE" },
        { "enum": "223", "description": "SECONDARY_CLIENT_ID" },
        { "enum": "224", "description": "SECONDARY_EXECUTING_TRADER" },
        { "enum": "300", "description": "INVESTMENT_DECISION_IN_FIRM" },
        { "enum": "301", "description": "EXECUTION_DECISION_IN_FIRM" },
        { "enum": "302", "description": "INVESTMENT_DECISION_COUNTRY" },
        { "enum": "303", "description": "EXECUTION_DECISION_COUNTRY" },
        { "enum": "304", "description": "PARTY_ROLE_COUNTRY_CODE" }
      ]
    },
    {
      "name": "NoPartyIDs",
      "number": 453,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "NoSecurityAltID",
      "number": 454,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "SecurityAltID",
      "number": 455,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecurityAltIDSource",
      "number": 456,
      "type": "STRING",
      "values": [
        { "enum": "4", "description": "ISIN_NUMBER" },
        { "enum": "5", "description": "RIC_CODE" },
        { "enum": "8", "description": "EXCHANGE_SECURITY_ID" },
        { "enum": "91", "description": "EXCHANGE_TICKER" },
        { "enum": "92", "description": "TT_PRODUCT_FAMILY_ID" },
        { "enum": "93", "description": "TT_Product_ID" },
        { "enum": "94", "description": "ALT_SYMBOL" },
        { "enum": "95", "description": "CLEARPORT" },
        { "enum": "97", "description": "ALIAS" },
        { "enum": "98", "description": "NAME" },
        { "enum": "99", "description": "SECURITY_GROUP" },
        { "enum": "100", "description": "ENERGY_IDENTIFIER_CODE" },
        { "enum": "A", "description": "BLOOMBERG_CODE" },
        { "enum": "S", "description": "OPENFIGI_ID" },
        { "enum": "H", "description": "CLEARING_HOUSE" },
        { "enum": "1", "description": "CUSIP" },
        { "enum": "X", "description": "SERIES_KEY" }
      ]
    },
    {
      "name": "NoUnderlyingSecurityAltID",
      "number": 457,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "UnderlyingSecurityAltID",
      "number": 458,
      "type": "STRING",
      "values": []
    },
    {
      "name": "UnderlyingSecurityAltIDSource",
      "number": 459,
      "type": "STRING",
      "values": []
    },
    {
      "name": "Product",
      "number": 460,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "AGENCY" },
        { "enum": "2", "description": "COMMODITY" },
        { "enum": "3", "description": "CORPORATE" },
        { "enum": "4", "description": "CURRENCY" },
        { "enum": "5", "description": "EQUITY" },
        { "enum": "6", "description": "GOVERNMENT" },
        { "enum": "7", "description": "INDEX" },
        { "enum": "8", "description": "LOAN" },
        { "enum": "9", "description": "MONEYMARKET" },
        { "enum": "10", "description": "MORTGAGE" },
        { "enum": "11", "description": "MUNICIPAL" },
        { "enum": "12", "description": "OTHER" },
        { "enum": "13", "description": "FINANCING" },
        { "enum": "14", "description": "ENERGY" }
      ]
    },
    {
      "name": "CFICode",
      "number": 461,
      "type": "STRING",
      "values": []
    },
    {
      "name": "IndividualAllocID",
      "number": 467,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TransBkdTime",
      "number": 483,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "TradeReportTransType",
      "number": 487,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NEW" },
        { "enum": "1", "description": "CANCEL" },
        { "enum": "2", "description": "REPLACE" },
        { "enum": "3", "description": "RELEASE" },
        { "enum": "4", "description": "REVERSE" },
        { "enum": "5", "description": "CANCEL_DUE_TO_BACK_OUT_OF_TRADE" },
        { "enum": "101", "description": "INQUIRE" },
        { "enum": "102", "description": "ACCEPT" },
        { "enum": "103", "description": "APPROVE" },
        { "enum": "999", "description": "UNKNOWN" }
      ]
    },
    {
      "name": "NestedPartyID",
      "number": 524,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NestedPartyIDSource",
      "number": 525,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "KOREAN_INVESTOR_ID" },
        { "enum": "2", "description": "TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII_FID" },
        { "enum": "3", "description": "TAIWANESE_TRADING_ACCT" },
        { "enum": "4", "description": "MALAYSIAN_CENTRAL_DEPOSITORY" },
        { "enum": "5", "description": "CHINESE_INVESTOR_ID" },
        { "enum": "6", "description": "UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER" },
        { "enum": "7", "description": "US_SOCIAL_SECURITY_NUMBER" },
        { "enum": "8", "description": "US_EMPLOYER_OR_TAX_ID_NUMBER" },
        { "enum": "9", "description": "AUSTRALIAN_BUSINESS_NUMBER" },
        { "enum": "A", "description": "AUSTRALIAN_TAX_FILE_NUMBER" },
        { "enum": "B", "description": "BIC" },
        { "enum": "C", "description": "GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER" },
        { "enum": "D", "description": "PROPRIETARY" },
        { "enum": "E", "description": "ISO_COUNTRY_CODE" },
        { "enum": "F", "description": "SETTLEMENT_ENTITY_LOCATION" },
        { "enum": "G", "description": "MIC" },
        { "enum": "H", "description": "CSD_PARTICIPANT_MEMBER_CODE" },
        { "enum": "I", "description": "DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT" }
      ]
    },
    {
      "name": "SecondaryClOrdID",
      "number": 526,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecondaryExecID",
      "number": 527,
      "type": "STRING",
      "values": []
    },
    {
      "name": "OrderCapacity",
      "number": 528,
      "type": "CHAR",
      "values": [
        { "enum": "A", "description": "AGENCY" },
        { "enum": "G", "description": "PROPRIETARY" },
        { "enum": "I", "description": "INDIVIDUAL" },
        { "enum": "P", "description": "PRINCIPAL" },
        { "enum": "R", "description": "RISKLESS_PRINCIPAL" },
        { "enum": "W", "description": "AGENT_FOR_OTHER_MEMBER" }
      ]
    },
    {
      "name": "OrderRestriction",
      "number": 529,
      "type": "CHAR",
      "values": [
        { "enum": "1", "description": "PROGRAM_TRADE" },
        { "enum": "2", "description": "INDEX_ARBITAGE" },
        { "enum": "3", "description": "NON_INDEX_ARBITAGE" },
        { "enum": "4", "description": "COMPETING_MARKET_MAKER" },
        { "enum": "5", "description": "ACTING_MARKET_MAKER" },
        { "enum": "6", "description": "ACTING_MARKET_MAKER_UNDERLYING_SECURITY" },
        { "enum": "7", "description": "FOREIGN_ENTITY" },
        { "enum": "8", "description": "EXTERNAL_MARKET_PARTICIPANT" },
        { "enum": "9", "description": "EXTERNAL_MARKET_LINKAGE" },
        { "enum": "A", "description": "RISKLESS_ARBITAGE" },
        { "enum": "B", "description": "HOLDING" },
        { "enum": "C", "description": "PRICE_STABILIZATION" },
        { "enum": "D", "description": "NON_ALGORITHMIC" },
        { "enum": "E", "description": "ALGORITHMIC" }
      ]
    },
    {
      "name": "QuoteType",
      "number": 537,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "INDICATIVE" },
        { "enum": "1", "description": "TRADABLE" },
        { "enum": "99", "description": "CROSS_TRADE_REQUEST" },
        { "enum": "255", "description": "UNKNOWN" }
      ]
    },
    {
      "name": "NestedPartyRole",
      "number": 538,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "EXECUTING_FIRM" },
        { "enum": "2", "description": "BROKER_OF_CREDIT" },
        { "enum": "3", "description": "CLIENT_ID" },
        { "enum": "4", "description": "CLEARING_FIRM" },
        { "enum": "5", "description": "INVESTOR_ID" },
        { "enum": "6", "description": "INTRODUCING_FIRM" },
        { "enum": "7", "description": "ENTERING_FIRM" },
        { "enum": "8", "description": "LOCATE_LENDING_FIRM" },
        { "enum": "9", "description": "FUND_MANAGER_CLIENT_ID" },
        { "enum": "10", "description": "SETTLEMENT_LOCATION" },
        { "enum": "11", "description": "ORDER_ORIGINATION_TRADER" },
        { "enum": "12", "description": "EXECUTING_TRADER" },
        { "enum": "13", "description": "ORDER_ORIGINATION_FIRM" },
        { "enum": "14", "description": "GIVEUP_CLEARING_FIRM" },
        { "enum": "15", "description": "CORRESPONDANT_CLEARING_FIRM" },
        { "enum": "16", "description": "EXECUTING_SYSTEM" },
        { "enum": "17", "description": "CONTRA_FIRM" },
        { "enum": "18", "description": "CONTRA_CLEARING_FIRM" },
        { "enum": "19", "description": "SPONSORING_FIRM" },
        { "enum": "20", "description": "UNDERLYING_CONTRA_FIRM" },
        { "enum": "21", "description": "CLEARING_ORGANIZATION" },
        { "enum": "22", "description": "EXCHANGE" },
        { "enum": "24", "description": "CUSTOMER_ACCOUNT" },
        { "enum": "25", "description": "CORRESPONDENT_CLEARING_ORGANIZATION" },
        { "enum": "26", "description": "CORRESPONDENT_BROKER" },
        { "enum": "27", "description": "BUYER_SELLER" },
        { "enum": "28", "description": "CUSTODIAN" },
        { "enum": "29", "description": "INTERMEDIARY" },
        { "enum": "30", "description": "AGENT" },
        { "enum": "31", "description": "SUB_CUSTODIAN" },
        { "enum": "32", "description": "BENEFICIARY" },
        { "enum": "33", "description": "INTERESTED_PARTY" },
        { "enum": "34", "description": "REGULATORY_BODY" },
        { "enum": "35", "description": "LIQUIDITY_PROVIDER" },
        { "enum": "36", "description": "ENTERING_TRADER" },
        { "enum": "37", "description": "CONTRA_TRADER" },
        { "enum": "38", "description": "POSITION_ACCOUNT" }
      ]
    },
    {
      "name": "NoNestedPartyIDs",
      "number": 539,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "MaturityDate",
      "number": 541,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "UnderlyingMaturityDate",
      "number": 542,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "CrossID",
      "number": 548,
      "type": "STRING",
      "values": []
    },
    {
      "name": "CrossType",
      "number": 549,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "CROSS_AON" },
        { "enum": "2", "description": "CROSS_IOC" },
        { "enum": "3", "description": "CROSS_ONE_SIDE" },
        { "enum": "4", "description": "CROSS_SAME_PRICE" }
      ]
    },
    {
      "name": "NoSides",
      "number": 552,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "Password",
      "number": 554,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NoLegs",
      "number": 555,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "LegCurrency",
      "number": 556,
      "type": "CURRENCY",
      "values": []
    },
    {
      "name": "RoundLot",
      "number": 561,
      "type": "QTY",
      "values": []
    },
    {
      "name": "MinTradeVol",
      "number": 562,
      "type": "QTY",
      "values": []
    },
    {
      "name": "LegPrice",
      "number": 566,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "TradeRequestID",
      "number": 568,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TradeRequestType",
      "number": 569,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "ALL_TRADES" },
        { "enum": "1", "description": "MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST" },
        { "enum": "2", "description": "UNMATCHED_TRADES_THAT_MATCH_CRITERIA" },
        { "enum": "3", "description": "UNREPORTED_TRADES_THAT_MATCH_CRITERIA" },
        { "enum": "4", "description": "ADVISORIES_THAT_MATCH_CRITERIA" }
      ]
    },
    {
      "name": "PreviouslyReported",
      "number": 570,
      "type": "BOOLEAN",
      "values": [
        { "enum": "N", "description": "NOT_REPORTED_TO_COUNTERPARTY" },
        { "enum": "Y", "description": "PERVIOUSLY_REPORTED_TO_COUNTERPARTY" }
      ]
    },
    {
      "name": "TradeReportID",
      "number": 571,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TradeReportRefID",
      "number": 572,
      "type": "STRING",
      "values": []
    },
    {
      "name": "CustOrderCapacity",
      "number": 582,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT" },
        { "enum": "2", "description": "CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT" },
        { "enum": "3", "description": "MEMBER_TRADING_FOR_ANOTHER_MEMBER" },
        { "enum": "4", "description": "ALL_OTHER" }
      ]
    },
    {
      "name": "MassStatusReqID",
      "number": 584,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegSettlDate",
      "number": 588,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "LegSymbol",
      "number": 600,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegSecurityID",
      "number": 602,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegIDSource",
      "number": 603,
      "type": "STRING",
      "values": [
        { "enum": "1", "description": "CUSIP" },
        { "enum": "4", "description": "ISIN_NUMBER" },
        { "enum": "5", "description": "RIC_CODE" },
        { "enum": "8", "description": "EXCHANGE_SECURITY_ID" },
        { "enum": "96", "description": "TT_SECURITY_ID" },
        { "enum": "97", "description": "ALIAS" },
        { "enum": "98", "description": "NAME" },
        { "enum": "X", "description": "SERIES_KEY" },
        { "enum": "91", "description": "EXCHANGE_TICKER" },
        { "enum": "A", "description": "BLOOMBERG_CODE" },
        { "enum": "S", "description": "OPENFIGI_ID" },
        { "enum": "H", "description": "CLEARING_HOUSE" }
      ]
    },
    {
      "name": "NoLegSecurityAltID",
      "number": 604,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "LegSecurityAltID",
      "number": 605,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegSecurityAltIDSource",
      "number": 606,
      "type": "STRING",
      "values": [
        { "enum": "4", "description": "ISIN_NUMBER" },
        { "enum": "5", "description": "RIC_CODE" },
        { "enum": "8", "description": "EXCHANGE_SECURITY_ID" },
        { "enum": "94", "description": "ALT_SYMBOL" },
        { "enum": "95", "description": "CLEARPORT" },
        { "enum": "97", "description": "ALIAS" },
        { "enum": "98", "description": "NAME" },
        { "enum": "99", "description": "SECURITY_GROUP" },
        { "enum": "91", "description": "EXCHANGE_TICKER" },
        { "enum": "A", "description": "BLOOMBERG_CODE" },
        { "enum": "S", "description": "OPENFIGI_ID" },
        { "enum": "H", "description": "CLEARING_HOUSE" },
        { "enum": "1", "description": "CUSIP" },
        { "enum": "X", "description": "SERIES_KEY" }
      ]
    },
    {
      "name": "LegProduct",
      "number": 607,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "AGENCY" },
        { "enum": "2", "description": "COMMODITY" },
        { "enum": "3", "description": "CORPORATE" },
        { "enum": "4", "description": "CURRENCY" },
        { "enum": "5", "description": "EQUITY" },
        { "enum": "6", "description": "GOVERNMENT" },
        { "enum": "7", "description": "INDEX" },
        { "enum": "8", "description": "LOAN" },
        { "enum": "9", "description": "MONEYMARKET" },
        { "enum": "10", "description": "MORTGAGE" },
        { "enum": "11", "description": "MUNICIPAL" },
        { "enum": "12", "description": "OTHER" },
        { "enum": "13", "description": "FINANCING" },
        { "enum": "14", "description": "ENERGY" }
      ]
    },
    {
      "name": "LegCFICode",
      "number": 608,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegSecurityType",
      "number": 609,
      "type": "STRING",
      "values": [
        { "enum": "FUT", "description": "FUTURE" },
        { "enum": "OPT", "description": "OPTION" },
        { "enum": "MLEG", "description": "SPREAD" },
        { "enum": "SPOT", "description": "SPOT" },
        { "enum": "TBOND", "description": "TBOND" },
        { "enum": "CS", "description": "COMMON_STOCK" },
        { "enum": "NONE", "description": "NONE" }
      ]
    },
    {
      "name": "LegMaturityMonthYear",
      "number": 610,
      "type": "MONTHYEAR",
      "values": []
    },
    {
      "name": "LegMaturityDate",
      "number": 611,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "LegStrikePrice",
      "number": 612,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "LegOptAttribute",
      "number": 613,
      "type": "CHAR",
      "values": []
    },
    {
      "name": "LegSecurityExchange",
      "number": 616,
      "type": "EXCHANGE",
      "values": []
    },
    {
      "name": "LegSecurityDesc",
      "number": 620,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegRatioQty",
      "number": 623,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "LegSide",
      "number": 624,
      "type": "CHAR",
      "values": []
    },
    {
      "name": "TradingSessionSubID",
      "number": 625,
      "type": "STRING",
      "values": [
        { "enum": "1", "description": "PRE_TRADING" },
        { "enum": "2", "description": "OPENING_OR_OPENING_AUCTION" },
        { "enum": "3", "description": "CONTINUOUS" },
        { "enum": "4", "description": "CLOSING_OR_CLOSING_AUCTION" },
        { "enum": "5", "description": "POST_TRADING" },
        { "enum": "6", "description": "INTRADAY_AUCTION" },
        { "enum": "7", "description": "QUIESCENT" }
      ]
    },
    {
      "name": "AllocType",
      "number": 626,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "CALCULATED" },
        { "enum": "2", "description": "PRELIMINARY" },
        { "enum": "5", "description": "READY_TO_BOOK" },
        { "enum": "7", "description": "WAREHOUSE_INSTRUCTION" },
        { "enum": "8", "description": "REQUEST_TO_INTERMEDIARY" }
      ]
    },
    {
      "name": "LegLastPx",
      "number": 637,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "LegRefID",
      "number": 654,
      "type": "STRING",
      "values": []
    },
    {
      "name": "AllocAcctIDSource",
      "number": 661,
      "type": "INT",
      "values": [
        { "enum": "4", "description": "OMGEO" },
        { "enum": "99", "description": "OTHER" }
      ]
    },
    {
      "name": "LastParPx",
      "number": 669,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "LegOrderQty",
      "number": 685,
      "type": "QTY",
      "values": []
    },
    {
      "name": "LegQty",
      "number": 687,
      "type": "QTY",
      "values": []
    },
    {
      "name": "BenchmarkSecurityID",
      "number": 699,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NoUnderlyings",
      "number": 711,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "DeliveryDate",
      "number": 743,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "TradeRequestResult",
      "number": 749,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "SUCCESSFUL" },
        { "enum": "1", "description": "INVALID_OR_UNKNOWN_INSTRUMENT" },
        { "enum": "2", "description": "INVALID_TYPE_REQUESTED" },
        { "enum": "3", "description": "INVALID_PARTIES" },
        { "enum": "4", "description": "INVALID_TRANSPORT_TYPE_REQUESTED" },
        { "enum": "5", "description": "INVALID_DESTINATION_REQUESTED" },
        { "enum": "8", "description": "TRADE_REQUEST_TYPE_NOT_SUPPORTED" },
        { "enum": "9", "description": "UNAUTHORIZED_FOR_TRADE_CAPTURE_REPORT_REQUEST" },
        { "enum": "99", "description": "OTHER" }
      ]
    },
    {
      "name": "TradeRequestStatus",
      "number": 750,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "ACCEPTED" },
        { "enum": "1", "description": "COMPLETED" },
        { "enum": "2", "description": "REJECTED" }
      ]
    },
    {
      "name": "TradeReportRejectReason",
      "number": 751,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "SUCCESSFUL" },
        { "enum": "1", "description": "INVALID_PARTY_INFORMATION" },
        { "enum": "2", "description": "UNKNOWN_INSTRUMENT" },
        { "enum": "3", "description": "UNAUTHORIZED_TO_REPORT_TRADES" },
        { "enum": "4", "description": "INVALID_TRADE_TYPE" },
        { "enum": "99", "description": "OTHER" }
      ]
    },
    {
      "name": "AllocReportID",
      "number": 755,
      "type": "STRING",
      "values": []
    },
    {
      "name": "BenchmarkSecurityIDSource",
      "number": 761,
      "type": "STRING",
      "values": [
        { "enum": "1", "description": "CUSIP" },
        { "enum": "4", "description": "ISIN_NUMBER" },
        { "enum": "5", "description": "RIC_CODE" },
        { "enum": "8", "description": "EXCHANGE_SECURITY_ID" },
        { "enum": "91", "description": "EXCHANGE_TICKER" },
        { "enum": "96", "description": "TT_SECURITY_ID" },
        { "enum": "97", "description": "ALIAS" },
        { "enum": "98", "description": "NAME" },
        { "enum": "A", "description": "BLOOMBERG_CODE" },
        { "enum": "S", "description": "OPENFIGI_ID" },
        { "enum": "X", "description": "SERIES_KEY" },
        { "enum": "H", "description": "CLEARING_HOUSE" }
      ]
    },
    {
      "name": "SecuritySubType",
      "number": 762,
      "type": "STRING",
      "values": []
    },
    {
      "name": "UnderlyingSecuritySubType",
      "number": 763,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegSecuritySubType",
      "number": 764,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LastUpdateTime",
      "number": 779,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "NextExpectedMsgSeqNum",
      "number": 789,
      "type": "SEQNUM",
      "values": []
    },
    {
      "name": "OrdStatusReqID",
      "number": 790,
      "type": "STRING",
      "values": []
    },
    {
      "name": "AllocReportType",
      "number": 794,
      "type": "INT",
      "values": [
        { "enum": "3", "description": "SELLSIDE_CALCULATED_USING_PRELIMINARY" },
        { "enum": "4", "description": "SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY" },
        { "enum": "5", "description": "WAREHOUSE_RECAP" },
        { "enum": "8", "description": "REQUEST_TO_INTERMEDIARY" }
      ]
    },
    {
      "name": "OrderAvgPx",
      "number": 799,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "UnderlyingPx",
      "number": 810,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "OptionDelta",
      "number": 811,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "SecondaryTradeReportID",
      "number": 818,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TradeLinkID",
      "number": 820,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TrdType",
      "number": 828,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "REGULAR_TRADE" },
        { "enum": "1", "description": "BLOCK_TRADE" },
        { "enum": "2", "description": "EXCHANGE_FOR_PHYSICAL" },
        { "enum": "3", "description": "TRANSFER" },
        { "enum": "11", "description": "EXCHANGE_FOR_RISK" },
        { "enum": "12", "description": "EXCHANGE_FOR_SWAP" },
        { "enum": "14", "description": "EXCHANGE_OF_OPTIONS_FOR_OPTIONS" },
        { "enum": "22", "description": "OVER_THE_COUNTER_PRIVATELY_NEGOTIATED_TRADES" },
        { "enum": "23", "description": "SUBSTITUTION_OF_FUTURES_FOR_FORWARDS" },
        { "enum": "45", "description": "OPTION_EXERCISE" },
        { "enum": "54", "description": "LARGE_NOTIONAL_OFF_FACILITY_SWAP" },
        { "enum": "55", "description": "EXCHANGE_BASIS_FACILITY" },
        { "enum": "57", "description": "NETTED_TRADE" },
        { "enum": "58", "description": "STP_BLOCK_SWAP_TRADE" },
        { "enum": "59", "description": "CREDIT_EVENT_TRADE" },
        { "enum": "60", "description": "SUCCESSION_EVENT_TRADE" },
        { "enum": "1000", "description": "VOLATILITY" },
        { "enum": "1001", "description": "EFP_FINANCIAL" },
        { "enum": "1002", "description": "EFP_INDEX_FUTURES" },
        { "enum": "1003", "description": "STRATEGY_BLOCK_TRADE" },
        { "enum": "1004", "description": "BLOCK_STANDARD_CF" },
        { "enum": "1005", "description": "BLOCK_COMBINATION_CF" },
        { "enum": "1006", "description": "EFS_EFP_CF" },
        { "enum": "1007", "description": "BLOCK_INTERNAL_CF" },
        { "enum": "1008", "description": "PORTFOLIO_CF" },
        { "enum": "1009", "description": "CORRECTION_CF" },
        { "enum": "1010", "description": "BLOCK_COMBINATION_BUYER_CF" },
        { "enum": "1011", "description": "BLOCK_COMBINATION_SELLER_CF" },
        { "enum": "1012", "description": "EFS_EFP_COMBINATION_CF" },
        { "enum": "1013", "description": "EFS_EFP_COMBINATION_BUYER_CF" },
        { "enum": "1014", "description": "EFS_EFP_COMBINATION_SELLER_CF" },
        { "enum": "1015", "description": "OTC_STANDARD_CIO" },
        { "enum": "1016", "description": "OTC_COMBINATION_CIO" },
        { "enum": "1017", "description": "OTC_COMBINATION_BUYER_CIO" },
        { "enum": "1018", "description": "OTC_COMBINATION_SELLER_CIO" },
        { "enum": "1019", "description": "STANDARD_TRADE_CD" },
        { "enum": "1020", "description": "STANDARD_OUTSIDE_SPREAD_CD" },
        { "enum": "1021", "description": "COMBINATION_CD" },
        { "enum": "1022", "description": "OLD_CD" },
        { "enum": "1023", "description": "INTERNAL_CD" },
        { "enum": "1024", "description": "PORTFOLIO_CD" },
        { "enum": "1025", "description": "CORRECTION_CD" },
        { "enum": "1026", "description": "EXCHANGE_GRANTED_FD" },
        { "enum": "1027", "description": "STANDARD_OUTSIDE_FD" },
        { "enum": "1028", "description": "OFF_HOURS_FD" },
        { "enum": "1029", "description": "BLOCK_FD" },
        { "enum": "1030", "description": "EXCH_GRANTED_EXCEED_MAX_LOT_FD" },
        { "enum": "1031", "description": "EXCH_GRANTED_EML_OFF_HOURS_FD" },
        { "enum": "1032", "description": "EXCH_GRANTED_LATE_FD" },
        { "enum": "1033", "description": "FLEX_CONTRACT_CONVERSION_FD" },
        { "enum": "1034", "description": "ICE_EFRP" },
        { "enum": "1035", "description": "ICEBLK" },
        { "enum": "1036", "description": "BASIS" },
        { "enum": "1037", "description": "VOLATILITY_CONTINGENT" },
        { "enum": "1038", "description": "STOCK_CONTINGENT" },
        { "enum": "1039", "description": "CCX_EFP" },
        { "enum": "1040", "description": "OTHER_CLEARING_VALUE" },
        { "enum": "1041", "description": "N2EX" },
        { "enum": "1042", "description": "EEX" },
        { "enum": "1043", "description": "EFS_EFP_CONTRA" },
        { "enum": "1044", "description": "EFM" },
        { "enum": "1045", "description": "NG_EFP_EFS" },
        { "enum": "1046", "description": "CONTRA" },
        { "enum": "1047", "description": "CPBLK" },
        { "enum": "1048", "description": "BILATERAL_OFF_EXCH" },
        { "enum": "1049", "description": "OTC_PRIVATELY_NEGOTIATED_TRADES" },
        { "enum": "1050", "description": "OTC_LARGE_NOTIONAL_OFF_FACILITY_SWAP" },
        { "enum": "1051", "description": "BLOCK_SWAP_TRADE" },
        { "enum": "1052", "description": "LARGE_IN_SCALE" },
        { "enum": "1053", "description": "AGAINST_ACTUAL" },
        { "enum": "1054", "description": "LARGE_IN_SCALE_PACKAGE" },
        { "enum": "1055", "description": "GUARANTEED_CROSS" },
        { "enum": "1056", "description": "REQUEST_FOR_CROSS" },
        { "enum": "1057", "description": "EFP_CD" },
        { "enum": "1058", "description": "B_AND_S_NO_CLEARING_CD" },
        { "enum": "1059", "description": "BUYER_NO_CLEARING_CD" },
        { "enum": "1060", "description": "SELLER_NO_CLEARING_CD" },
        { "enum": "1061", "description": "EFP_NO_FEE_CD" },
        { "enum": "1062", "description": "MATCH_EXCH_MANUALLY_CD" },
        { "enum": "1063", "description": "MATCH_EXCH_COMBINATION_CD" },
        { "enum": "1064", "description": "FUT_DS_FUT_COMBO_CD" },
        { "enum": "1065", "description": "BLOCK_NONFINANCIAL_CP_CD" },
        { "enum": "1066", "description": "EXCH_FOR_SWAP_OPTIONS_CD" },
        { "enum": "1067", "description": "BLOCK_NONFINANCIAL_CP_CF" },
        { "enum": "1068", "description": "EXCH_FOR_SWAP_OPTIONS_CF" },
        { "enum": "1069", "description": "ASSET_ALLOCATION" },
        { "enum": "1070", "description": "CROSS_CONTRA_TRADE" },
        { "enum": "1071", "description": "COMMITTED" },
        { "enum": "1072", "description": "INTERNAL" },
        { "enum": "1073", "description": "INTERBANK" },
        { "enum": "1074", "description": "ONE_SIDED" },
        { "enum": "1075", "description": "CROSS" },
        { "enum": "1076", "description": "EFP_BOND" },
        { "enum": "1077", "description": "EFP_SPI_XJO" },
        { "enum": "1078", "description": "CASH_RELATED_TRADE" },
        { "enum": "1079", "description": "NON_DISCLOSED_OTC_TRADE" },
        { "enum": "1080", "description": "DISCLOSED_OTC_TRADE" },
        { "enum": "1081", "description": "SI_TRADE" },
        { "enum": "1082", "description": "EUREX_ENLIGHT_TRIGGERED_TRADE" },
        { "enum": "1083", "description": "EFP_AGAINST_ACTUAL" },
        { "enum": "1084", "description": "EFR" },
        { "enum": "1085", "description": "EOO" },
        { "enum": "1086", "description": "TAM" },
        { "enum": "1087", "description": "EFS" },
        { "enum": "1088", "description": "LP" },
        { "enum": "9999", "description": "UNKNOWN" }
      ]
    },
    {
      "name": "TrdSubType",
      "number": 829,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "TRADE_PURPOSE_ARBITRAGE" },
        { "enum": "2", "description": "TRADE_PURPOSE_COMBINATION" },
        { "enum": "3", "description": "TRADE_PURPOSE_CROSS_TRADE" },
        { "enum": "4", "description": "TRADE_PURPOSE_EXCHANGE_FOR_PHYSICAL" },
        { "enum": "5", "description": "TRADE_PURPOSE_POSITION_CONSOLIDATION" },
        { "enum": "6", "description": "TRADE_PURPOSE_ROLLOVER" },
        { "enum": "7", "description": "TRADE_PURPOSE_OTHER" },
        { "enum": "8", "description": "TRADE_PURPOSE_IMPLIED_SPREAD_LEG_EXECUTED_AGAINST_AN_OUTRIGHT" },
        { "enum": "36", "description": "TRADE_PURPOSE_CONVERTED_SWAP" },
        { "enum": "37", "description": "TRADE_PURPOSE_CROSSED_TRADE" },
        { "enum": "40", "description": "TRADE_PURPOSE_TRADED_AT_SETTLEMENT" },
        { "enum": "42", "description": "TRADE_PURPOSE_AUCTION_TRADE" },
        { "enum": "43", "description": "TRADE_PURPOSE_TRADED_AT_MARKER" },
        { "enum": "48", "description": "TRADE_PURPOSE_MULTILATERAL_COMPRESSION" },
        { "enum": "200", "description": "TRADE_PURPOSE_DELIVERY_TRANSFER" }
      ]
    },
    {
      "name": "LastLiquidityIndicator",
      "number": 851,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ADDED_LIQUIDITY" },
        { "enum": "2", "description": "REMOVED_LIQUIDITY" }
      ]
    },
    {
      "name": "TradeReportType",
      "number": 856,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "SUBMIT" },
        { "enum": "1", "description": "ALLEGED" },
        { "enum": "2", "description": "ACCEPT" },
        { "enum": "3", "description": "DECLINE" },
        { "enum": "5", "description": "NO_WAS" },
        { "enum": "6", "description": "CANCEL" },
        { "enum": "11", "description": "ALLEGED_NEW" },
        { "enum": "13", "description": "ALLEGED_NO_WAS" },
        { "enum": "101", "description": "NOTIFICATION" },
        { "enum": "102", "description": "WAITING_FOR_CANCEL_APPROVAL" },
        { "enum": "103", "description": "PARTIALLY_FILLED" },
        { "enum": "999", "description": "UNKNOWN" },
        { "enum": "1000", "description": "CLEARING" }
      ]
    },
    {
      "name": "AllocNoOrdersType",
      "number": 857,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NOT_SPECIFIED" },
        { "enum": "1", "description": "EXPLICIT_LIST_PROVIDED" }
      ]
    },
    {
      "name": "AvgParPx",
      "number": 860,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "NoEvents",
      "number": 864,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "EventType",
      "number": 865,
      "type": "INT",
      "values": [
        { "enum": "5", "description": "EXPIRY_DATE" },
        { "enum": "6", "description": "LAST_TRADING_DATE" },
        { "enum": "8", "description": "SWAP_START_DATE" },
        { "enum": "9", "description": "SWAP_END_DATE" },
        { "enum": "13", "description": "FIRST_DELIVERY_DATE" },
        { "enum": "14", "description": "LAST_DELIVERY_DATE" },
        { "enum": "101", "description": "FIRST_TRADING_DATE" },
        { "enum": "102", "description": "SDAT_FIRST_TRADING_DATE" }
      ]
    },
    {
      "name": "EventDate",
      "number": 866,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "NoInstrumentExtensions",
      "number": 870,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "InstrumentAttributeType",
      "number": 871,
      "type": "INT",
      "values": [
        { "enum": "5", "description": "VARIABLE_RATE" },
        { "enum": "100", "description": "COUPON_RATE" },
        { "enum": "101", "description": "OFFSET_TO_VARIABLE_COUPON_RATE" },
        { "enum": "102", "description": "SWAP_CUSTOMER_1" },
        { "enum": "103", "description": "SWAP_CUSTOMER_2" },
        { "enum": "104", "description": "CASH_BASKET_REFERENCE" }
      ]
    },
    {
      "name": "InstrumentAttributeValue",
      "number": 872,
      "type": "STRING",
      "values": []
    },
    {
      "name": "UnderlyingQty",
      "number": 879,
      "type": "QTY",
      "values": []
    },
    {
      "name": "TrdMatchID",
      "number": 880,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NoUnderlyingStipulations",
      "number": 887,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "UnderlyingStipulationType",
      "number": 888,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "PAYFREQ" }
      ]
    },
    {
      "name": "UnderlyingStipulationValue",
      "number": 889,
      "type": "STRING",
      "values": [
        { "enum": "01", "description": "ANNUALLY" },
        { "enum": "02", "description": "SEMI_ANNUALLY" },
        { "enum": "04", "description": "QUARTERLY" },
        { "enum": "12", "description": "MONTHLY" }
      ]
    },
    {
      "name": "LastRptRequested",
      "number": 912,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "StartDate",
      "number": 916,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "EndDate",
      "number": 917,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "TrdRptStatus",
      "number": 939,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "ACCEPTED" },
        { "enum": "1", "description": "REJECTED" },
        { "enum": "3", "description": "ACCEPTED_WITH_ERRORS" },
        { "enum": "99", "description": "UNKNOWN" }
      ]
    },
    {
      "name": "NoStrategyParameters",
      "number": 957,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "StrategyParameterName",
      "number": 958,
      "type": "STRING",
      "values": []
    },
    {
      "name": "StrategyParameterType",
      "number": 959,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "INT" },
        { "enum": "6", "description": "FLOAT" },
        { "enum": "7", "description": "QTY" },
        { "enum": "8", "description": "PRICE" },
        { "enum": "13", "description": "BOOLEAN" },
        { "enum": "14", "description": "STRING" },
        { "enum": "19", "description": "UTCTIMESTAMP" }
      ]
    },
    {
      "name": "StrategyParameterValue",
      "number": 960,
      "type": "STRING",
      "values": []
    },
    {
      "name": "HostCrossID",
      "number": 961,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TradeID",
      "number": 1003,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ManualOrderIndicator",
      "number": 1028,
      "type": "BOOLEAN",
      "values": [
        { "enum": "N", "description": "ELECTRONIC" },
        { "enum": "Y", "description": "MANUAL" }
      ]
    },
    {
      "name": "CustOrderHandlingInst",
      "number": 1031,
      "type": "CHAR",
      "values": [
        { "enum": "W", "description": "DESK" },
        { "enum": "Y", "description": "ELECTRONIC" },
        { "enum": "C", "description": "VENDOR_PLATFORM_BILLED_BY_EXECUTING_BROKER" },
        { "enum": "G", "description": "SPONSORED_ACCESS_VIA_API_OR_FIX_BY_EXECUTING_BROKER" },
        { "enum": "H", "description": "PREMIUM_ALGO_TRADING_PROVIDER_BILLED_BY_EXECUTING_BROKER" },
        { "enum": "D", "description": "OTHER" }
      ]
    },
    {
      "name": "AllocPositionEffect",
      "number": 1047,
      "type": "CHAR",
      "values": [
        { "enum": "O", "description": "OPEN" },
        { "enum": "C", "description": "CLOSE" },
        { "enum": "R", "description": "ROLLED" },
        { "enum": "F", "description": "FIFO" },
        { "enum": "N", "description": "CLOSE_BUT_NOTIFY_ON_OPEN" },
        { "enum": "D", "description": "DEFAULT" }
      ]
    },
    {
      "name": "AggressorIndicator",
      "number": 1057,
      "type": "BOOLEAN",
      "values": [
        { "enum": "N", "description": "NO" },
        { "enum": "Y", "description": "YES" }
      ]
    },
    {
      "name": "LastSwapPoints",
      "number": 1071,
      "type": "PRICEOFFSET",
      "values": []
    },
    {
      "name": "RefreshQty",
      "number": 1088,
      "type": "QTY",
      "values": []
    },
    {
      "name": "NoRootPartyIDs",
      "number": 1116,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "RootPartyID",
      "number": 1117,
      "type": "STRING",
      "values": []
    },
    {
      "name": "RootPartyIDSource",
      "number": 1118,
      "type": "CHAR",
      "values": [
        { "enum": "F", "description": "SETTLEMENT_ENTITY_LOCATION" }
      ]
    },
    {
      "name": "RootPartyRole",
      "number": 1119,
      "type": "INT",
      "values": [
        { "enum": "10", "description": "SETTLEMENT_LOCATION" }
      ]
    },
    {
      "name": "TradeHandlingInstr",
      "number": 1123,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "TRADE_CONFIRMATION" },
        { "enum": "1", "description": "TWO_PARTY_REPORT" },
        { "enum": "2", "description": "ONE_PARTY_REPORT_FOR_MATCHING" },
        { "enum": "3", "description": "ONE_PARTY_REPORT_FOR_PASS_THROUGH" },
        { "enum": "4", "description": "AUTOMATED_FLOOR_ORDER_ROUTING" },
        { "enum": "7", "description": "THIRD_PARTY_REPORT_FOR_PASS_THROUGH" },
        { "enum": "8", "description": "TRADE_HANDLING_INSTR_PENDING_TRADE_REPORT" },
        { "enum": "9", "description": "TRADE_HANDLING_INSTR_COMPLETED_TRADE_REPORT" },
        { "enum": "A", "description": "TRADE_HANDLING_INSTR_EXPIRED_TRADE_REPORT" },
        { "enum": "B", "description": "TRADE_HANDLING_INSTR_BROADCAST" },
        { "enum": "C", "description": "TRADE_HANDLING_INSTR_PENDING_APPROVAL" },
        { "enum": "D", "description": "TRADE_HANDLING_INSTR_APPROVED" },
        { "enum": "E", "description": "TRADE_HANDLING_INSTR_PENDING_CANCEL" }
      ]
    },
    {
      "name": "OrigTradeDate",
      "number": 1125,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "OrigTradeID",
      "number": 1126,
      "type": "STRING",
      "values": []
    },
    {
      "name": "DisplayQty",
      "number": 1138,
      "type": "QTY",
      "values": []
    },
    {
      "name": "EventTime",
      "number": 1145,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "LegNumber",
      "number": 1152,
      "type": "INT",
      "values": []
    },
    {
      "name": "Volatility",
      "number": 1188,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ExpirationTimeValue",
      "number": 1189,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "RiskFreeRate",
      "number": 1190,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "ExerciseStyle",
      "number": 1194,
      "type": "INT",
      "values": []
    },
    {
      "name": "ProductComplex",
      "number": 1227,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegPutOrCall",
      "number": 1358,
      "type": "INT",
      "values": []
    },
    {
      "name": "NoFills",
      "number": 1362,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "FillExecID",
      "number": 1363,
      "type": "STRING",
      "values": []
    },
    {
      "name": "FillPx",
      "number": 1364,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "FillQty",
      "number": 1365,
      "type": "QTY",
      "values": []
    },
    {
      "name": "LegAllocID",
      "number": 1366,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ContingencyType",
      "number": 1385,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ONE_CANCELS_THE_OTHER" },
        { "enum": "2", "description": "ONE_TRIGGERS_THE_OTHER" },
        { "enum": "3", "description": "ONE_UPDATES_THE_OTHER_3" },
        { "enum": "4", "description": "ONE_UPDATES_THE_OTHER_4" }
      ]
    },
    {
      "name": "TradePublishIndicator",
      "number": 1390,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "DO_NOT_PUBLISH_TRADE" },
        { "enum": "1", "description": "PUBLISH_TRADE" },
        { "enum": "2", "description": "DEFERRED_PUBLICATION" }
      ]
    },
    {
      "name": "LegLastQty",
      "number": 1418,
      "type": "QTY",
      "values": []
    },
    {
      "name": "LegExerciseStyle",
      "number": 1420,
      "type": "INT",
      "values": []
    },
    {
      "name": "NoTargetPartyIDs",
      "number": 1461,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "TargetPartyExchangeTraderID",
      "number": 1462,
      "type": "STRING",
      "values": []
    },
    {
      "name": "FillYieldType",
      "number": 1622,
      "type": "STRING",
      "values": []
    },
    {
      "name": "OrderOrigination",
      "number": 1724,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ORDER_RECEIVED_FROM_CUSTOMER" },
        { "enum": "2", "description": "ORDER_RECEIVED_FROM_WITHIN_FIRM" },
        { "enum": "3", "description": "ORDER_RECEIVED_FROM_ANOTHER_BROKER_DEALER" },
        { "enum": "4", "description": "ORDER_RECEIVED_FROM_CUSTOMER_OR_ORIGINATED_WITHIN_FIRM" },
        { "enum": "5", "description": "ORDER_RECEIVED_FROM_DIRECT_OR_SPONSORED_ACCESS_CUSTOMER" },
        { "enum": "99", "description": "ORDER_RECEIVED_FROM_OTHER_NON_DEA" }
      ]
    },
    {
      "name": "NoOrderEvents",
      "number": 1795,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "OrderEventType",
      "number": 1796,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ADDED" },
        { "enum": "2", "description": "MODIFIED" },
        { "enum": "3", "description": "DELETED" },
        { "enum": "4", "description": "PARTIALLY_FILLED" },
        { "enum": "5", "description": "FILLED" },
        { "enum": "6", "description": "SUSPENDED" },
        { "enum": "7", "description": "RELEASED" },
        { "enum": "8", "description": "RESTATED" },
        { "enum": "9", "description": "LOCKED" },
        { "enum": "10", "description": "TRIGGERED" },
        { "enum": "11", "description": "ACTIVATED" }
      ]
    },
    {
      "name": "OrderEventExecID",
      "number": 1797,
      "type": "STRING",
      "values": []
    },
    {
      "name": "OrderEventReason",
      "number": 1798,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ADD_ORDER_REQUEST" },
        { "enum": "2", "description": "MODIFY_ORDER_REQUEST" },
        { "enum": "3", "description": "DELETE_ORDER_REQUEST" },
        { "enum": "4", "description": "ORDER_ENTERED_OUT_OF_BAND" },
        { "enum": "5", "description": "ORDER_MODIFIED_OUT_OF_BAND" },
        { "enum": "6", "description": "ORDER_DELETED_OUT_OF_BAND" },
        { "enum": "7", "description": "ORDER_ACTIVATED_OR_TRIGGERED" },
        { "enum": "8", "description": "ORDER_EXPIRED" },
        { "enum": "9", "description": "RESERVE_ORDER_REFRESHED" },
        { "enum": "10", "description": "AWAY_MARKET_BETTER" },
        { "enum": "11", "description": "CORPORATE_ACTION" },
        { "enum": "12", "description": "START_OF_DAY" },
        { "enum": "13", "description": "END_OF_DAY" },
        { "enum": "100", "description": "BINARY_TRADE_REPORTING" }
      ]
    },
    {
      "name": "OrderEventPx",
      "number": 1799,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "OrderEventQty",
      "number": 1800,
      "type": "QTY",
      "values": []
    },
    {
      "name": "OrderEventLiquidityIndicator",
      "number": 1801,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NEITHER_ADDED_NOR_REMOVED_LIQUIDITY" },
        { "enum": "1", "description": "ADDED_LIQUIDITY" },
        { "enum": "2", "description": "REMOVED_LIQUIDITY" },
        { "enum": "3", "description": "LIQUIDITY_ROUTED_OUT" },
        { "enum": "4", "description": "AUCTION_EXECUTION" },
        { "enum": "5", "description": "TRIGGERED_STOP_ORDER" },
        { "enum": "6", "description": "TRIGGERED_CONTINGENCY_ORDER" },
        { "enum": "7", "description": "TRIGGERED_MARKET_ORDER" },
        { "enum": "8", "description": "REMOVED_LIQUIDITY_AFTER_FIRM_ORDER_COMMITMENT" },
        { "enum": "9", "description": "AUCTION_EXECUTION_AFTER_FIRM_ORDER_COMMITMENT" },
        { "enum": "10", "description": "UNKNOWN" },
        { "enum": "11", "description": "OTHER" }
      ]
    },
    {
      "name": "OrderEventText",
      "number": 1802,
      "type": "STRING",
      "values": []
    },
    {
      "name": "RelatedTradeID",
      "number": 1856,
      "type": "STRING",
      "values": []
    },
    {
      "name": "RelatedTradeQty",
      "number": 1860,
      "type": "QTY",
      "values": []
    },
    {
      "name": "PartyRoleQualifier",
      "number": 2376,
      "type": "INT",
      "values": [
        { "enum": "22", "description": "ALGORITHM" },
        { "enum": "23", "description": "FIRM_OR_LEGAL_ENTITY" },
        { "enum": "24", "description": "NATURAL_PERSON" }
      ]
    },
    {
      "name": "ComplianceText",
      "number": 2404,
      "type": "STRING",
      "values": []
    },
    {
      "name": "AggressorSide",
      "number": 2446,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NO_AGGRESSOR" },
        { "enum": "1", "description": "BUY" },
        { "enum": "2", "description": "SELL" }
      ]
    },
    {
      "name": "NoOrderAttributes",
      "number": 2593,
      "type": "INT",
      "values": []
    },
    {
      "name": "OrderAttributeType",
      "number": 2594,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "AGGREGATED_ORDER" },
        { "enum": "1", "description": "PENDING_ALLOCATION" },
        { "enum": "2", "description": "LIQUIDITY_PROVISION_ACTIVITY_ORDER" },
        { "enum": "3", "description": "RISK_REDUCTION_ORDER" },
        { "enum": "4", "description": "ALGORITHMIC_ORDER" },
        { "enum": "5", "description": "SYSTEMATIC_INTERNALIZER_ORDER" }
      ]
    },
    {
      "name": "OrderAttributeValue",
      "number": 2595,
      "type": "STRING",
      "values": []
    },
    {
      "name": "StartSequenceNumber",
      "number": 5024,
      "type": "SEQNUM",
      "values": []
    },
    {
      "name": "AllocStrategy",
      "number": 7111,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SelfMatchPreventionID",
      "number": 7928,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SMPInstruction",
      "number": 8000,
      "type": "CHAR",
      "values": [
        { "enum": "O", "description": "SMP_INST_TYPE_CANCEL_RESTING" },
        { "enum": "N", "description": "SMP_INST_TYPE_CANCEL_AGGRESSOR" },
        { "enum": "B", "description": "SMP_INST_TYPE_CANCEL_BOTH" },
        { "enum": "M", "description": "SMP_INST_TYPE_MATCH" },
        { "enum": "m", "description": "SMP_INST_TYPE_NOT_MATCH" },
        { "enum": "S", "description": "SMP_INST_TYPE_SMALLEST" },
        { "enum": "D", "description": "SMP_INST_TYPE_DECREMENT_LARGER" },
        { "enum": "d", "description": "SMP_INST_TYPE_DECREMENT_LEAVES_QTY" },
        { "enum": "e", "description": "SMP_INST_TYPE_MARKET_WIDE" },
        { "enum": "f", "description": "SMP_INST_TYPE_MARKET_WIDE_CANCEL_AGGRESSOR" },
        { "enum": "g", "description": "SMP_INST_TYPE_MARKET_WIDE_CANCEL_RESTING" },
        { "enum": "h", "description": "SMP_INST_TYPE_MARKET_WIDE_DECREMENT_LEAVES_QTY" }
      ]
    },
    {
      "name": "TrdRegPublicationReason",
      "number": 8013,
      "type": "INT",
      "values": [
        { "enum": "4", "description": "ILQD" },
        { "enum": "5", "description": "SIZE" },
        { "enum": "6", "description": "LRGS" }
      ]
    },
    {
      "name": "TradingVenueRegulatoryTradeID",
      "number": 8016,
      "type": "STRING",
      "values": []
    },
    {
      "name": "IsFirm",
      "number": 9012,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "FIRM" },
        { "enum": "2", "description": "LAST_LOOK" }
      ]
    },
    {
      "name": "FixingDate",
      "number": 9020,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "FixingSource",
      "number": 9021,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ReportingParty",
      "number": 9032,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "MaxParticipation",
      "number": 9103,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "IWouldPrice",
      "number": 9106,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "Aggression",
      "number": 9111,
      "type": "INT",
      "values": []
    },
    {
      "name": "TiltMode",
      "number": 9112,
      "type": "INT",
      "values": []
    },
    {
      "name": "BriskLimitMode",
      "number": 9115,
      "type": "INT",
      "values": []
    },
    {
      "name": "BlockLimit",
      "number": 9117,
      "type": "INT",
      "values": []
    },
    {
      "name": "LiquidityIndicator",
      "number": 9120,
      "type": "CHAR",
      "values": [
        { "enum": "A", "description": "ADDED_LIQUIDITY" },
        { "enum": "R", "description": "REMOVED_LIQUIDITY" }
      ]
    },
    {
      "name": "MemoFieldICE",
      "number": 9121,
      "type": "STRING",
      "values": []
    },
    {
      "name": "OriginatorUserID",
      "number": 9139,
      "type": "STRING",
      "values": []
    },
    {
      "name": "Tracking",
      "number": 9145,
      "type": "INT",
      "values": []
    },
    {
      "name": "MinParticipation",
      "number": 9147,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "IfTouchedPrice",
      "number": 9190,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "PostTriggerDuration",
      "number": 9191,
      "type": "INT",
      "values": []
    },
    {
      "name": "SubStrategy",
      "number": 9200,
      "type": "STRING",
      "values": []
    },
    {
      "name": "DurationRCM",
      "number": 9202,
      "type": "INT",
      "values": []
    },
    {
      "name": "EndTimeOverride",
      "number": 9203,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "None" },
        { "enum": "1", "description": "LastSessionClose" },
        { "enum": "2", "description": "NextSessionClose" },
        { "enum": "3", "description": "Settlement" }
      ]
    },
    {
      "name": "CustomerAccountRefID",
      "number": 9207,
      "type": "STRING",
      "values": []
    },
    {
      "name": "MaxShowRCM",
      "number": 9210,
      "type": "INT",
      "values": []
    },
    {
      "name": "MinShow",
      "number": 9211,
      "type": "INT",
      "values": []
    },
    {
      "name": "PassivePriceLevel",
      "number": 9212,
      "type": "INT",
      "values": []
    },
    {
      "name": "NumPostLevels",
      "number": 9213,
      "type": "INT",
      "values": []
    },
    {
      "name": "AverageDelay",
      "number": 9214,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "IWouldQty",
      "number": 9215,
      "type": "INT",
      "values": []
    },
    {
      "name": "IWouldQtyPct",
      "number": 9216,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "WithATickQty",
      "number": 9217,
      "type": "INT",
      "values": []
    },
    {
      "name": "WithATickQtyPct",
      "number": 9218,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "CleanupPct",
      "number": 9219,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "PostTicksApart",
      "number": 9220,
      "type": "INT",
      "values": []
    },
    {
      "name": "MaxSpreadCrossTicks",
      "number": 9221,
      "type": "INT",
      "values": []
    },
    {
      "name": "TacticalPeg",
      "number": 9222,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "IWouldQtyVariancePct",
      "number": 9225,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "DynamicEndTime",
      "number": 9302,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "DirectElectronicAccess",
      "number": 9700,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NO" },
        { "enum": "1", "description": "YES" }
      ]
    },
    {
      "name": "TradingCapacity",
      "number": 9701,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "DEAL" },
        { "enum": "1", "description": "MTCH" },
        { "enum": "2", "description": "AOTC" }
      ]
    },
    {
      "name": "LiquidityProvision",
      "number": 9702,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NO" },
        { "enum": "1", "description": "YES" }
      ]
    },
    {
      "name": "OriginalSecondaryExecID",
      "number": 9703,
      "type": "STRING",
      "values": []
    },
    {
      "name": "InvestmentDecision",
      "number": 9704,
      "type": "INT",
      "values": []
    },
    {
      "name": "ExecutionDecision",
      "number": 9705,
      "type": "INT",
      "values": []
    },
    {
      "name": "ClientIDCode",
      "number": 9706,
      "type": "INT",
      "values": []
    },
    {
      "name": "MiFIDID",
      "number": 9707,
      "type": "STRING",
      "values": []
    },
    {
      "name": "CorrelationClOrdID",
      "number": 9717,
      "type": "STRING",
      "values": []
    },
    {
      "name": "DisplayFactor",
      "number": 9787,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SelfMatchPreventionIDICE",
      "number": 9821,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SelfMatchPreventionInstruction",
      "number": 9822,
      "type": "CHAR",
      "values": []
    },
    {
      "name": "LegRiskAversion",
      "number": 9991,
      "type": "INT",
      "values": []
    },
    {
      "name": "HedgeDiscretionTicks",
      "number": 9992,
      "type": "INT",
      "values": []
    },
    {
      "name": "DisplayFactorQty",
      "number": 10010,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TTClOrdID",
      "number": 10011,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TTID",
      "number": 10553,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NoTCRLegs",
      "number": 10555,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "Timezone",
      "number": 16000,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ExchangeSendingTime",
      "number": 16052,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ExchangeTransactTime",
      "number": 16060,
      "type": "STRING",
      "values": []
    },
    {
      "name": "StagedOrderMsg",
      "number": 16106,
      "type": "STRING",
      "values": []
    },
    {
      "name": "StagedOrderStatus",
      "number": 16109,
      "type": "CHAR",
      "values": [
        { "enum": "A", "description": "Available" },
        { "enum": "O", "description": "Owned" }
      ]
    },
    {
      "name": "StagedOrderOwner",
      "number": 16110,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NoLinks",
      "number": 16112,
      "type": "INT",
      "values": []
    },
    {
      "name": "LinkID",
      "number": 16113,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LinkType",
      "number": 16114,
      "type": "CHAR",
      "values": [
        { "enum": "7", "description": "STAGED_CHILD" },
        { "enum": "P", "description": "PARENT_ORDER_ID" },
        { "enum": "X", "description": "POSITION_TRANSFER_ID" },
        { "enum": "8", "description": "STAGED_BULKED_CHILD" },
        { "enum": "9", "description": "STAGED_STICHED_CHILD" },
        { "enum": "A", "description": "STAGED_SPLIT_CHILD" },
        { "enum": "E", "description": "UNIQUE_EXEC_ID_ALLOCATED_FROM" },
        { "enum": "R", "description": "ROOT_ALGO_ORDER_ID" },
        { "enum": "F", "description": "PARENT_ACCOUNT_ID" }
      ]
    },
    {
      "name": "ExternalSource",
      "number": 16115,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "OrderIDGUID",
      "number": 16116,
      "type": "STRING",
      "values": []
    },
    {
      "name": "OrderSource",
      "number": 16117,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "SOURCE_ASE" },
        { "enum": "2", "description": "SOURCE_TTW" },
        { "enum": "3", "description": "SOURCE_INVALID" },
        { "enum": "4", "description": "SOURCE_T_TRADER" },
        { "enum": "6", "description": "SOURCE_MOBILE" },
        { "enum": "7", "description": "SOURCE_ROE" },
        { "enum": "9", "description": "SOURCE_EXTERNAL" },
        { "enum": "10", "description": "SOURCE_FIX_ADAPTER" },
        { "enum": "11", "description": "SOURCE_AGGREGATOR" },
        { "enum": "12", "description": "SOURCE_BOUNCER" },
        { "enum": "13", "description": "SOURCE_LAMBDA_LIQUIDATOR" },
        { "enum": "14", "description": "SOURCE_EXTERNAL_FIX_ADAPTER" },
        { "enum": "15", "description": "SOURCE_PRIME_ASE" },
        { "enum": "16", "description": "SOURCE_NIMBUS" },
        { "enum": "17", "description": "SOURCE_ADL" },
        { "enum": "18", "description": "SOURCE_TTSDK" },
        { "enum": "19", "description": "SOURCE_TT_ALGO" },
        { "enum": "20", "description": "SOURCE_ADL_PRIME" },
        { "enum": "21", "description": "SOURCE_TTSDK_PRIME" },
        { "enum": "22", "description": "SOURCE_TT_ALGO_PRIME" },
        { "enum": "23", "description": "SOURCE_CHART" },
        { "enum": "24", "description": "SOURCE_TTD" },
        { "enum": "25", "description": "SOURCE_TTD_CHART" },
        { "enum": "26", "description": "SOURCE_TTINT" },
        { "enum": "27", "description": "SOURCE_TT_ADMIN" },
        { "enum": "28", "description": "SOURCE_DOTNET_API_CLT" },
        { "enum": "29", "description": "SOURCE_DOTNET_API_SRV" },
        { "enum": "30", "description": "SOURCE_CPP_API" },
        { "enum": "31", "description": "SOURCE_OPTIONS_RISK" },
        { "enum": "32", "description": "SOURCE_EXTERNAL_UPLOAD" },
        { "enum": "33", "description": "SOURCE_STAGER" },
        { "enum": "34", "description": "SOURCE_SCORE" },
        { "enum": "35", "description": "SOURCE_FIX_ADAPTER_CHILD_ROUTER" },
        { "enum": "36", "description": "SOURCE_POT_CHILD_ROUTER" },
        { "enum": "37", "description": "SOURCE_TERMINATOR" }
      ]
    },
    {
      "name": "FillTradingVenueRegulatoryTradeID",
      "number": 16118,
      "type": "STRING",
      "values": []
    },
    {
      "name": "FillLastLiquidityIndicator",
      "number": 16119,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ADDED_LIQUIDITY" },
        { "enum": "2", "description": "REMOVED_LIQUIDITY" }
      ]
    },
    {
      "name": "LegNoFills",
      "number": 16120,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "LegFillExecID",
      "number": 16121,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegFillPx",
      "number": 16122,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "LegFillQty",
      "number": 16123,
      "type": "QTY",
      "values": []
    },
    {
      "name": "LegFillTradingVenueRegulatoryTradeID",
      "number": 16124,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegFillLastLiquidityIndicator",
      "number": 16125,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ADDED_LIQUIDITY" },
        { "enum": "2", "description": "REMOVED_LIQUIDITY" }
      ]
    },
    {
      "name": "IntentToCross",
      "number": 16130,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "RejectSource",
      "number": 16131,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "REJECT_SOURCE_EDGE" },
        { "enum": "2", "description": "REJECT_SOURCE_RISK" },
        { "enum": "3", "description": "REJECT_SOURCE_GATEWAY" },
        { "enum": "4", "description": "REJECT_SOURCE_EXCHANGE" },
        { "enum": "5", "description": "REJECT_SOURCE_ALGO" },
        { "enum": "6", "description": "REJECT_SOURCE_ASE" },
        { "enum": "7", "description": "REJECT_SOURCE_TTINT" },
        { "enum": "8", "description": "REJECT_SOURCE_EXTERNAL" },
        { "enum": "9", "description": "REJECT_SOURCE_TTAPI" },
        { "enum": "10", "description": "REJECT_SOURCE_CLIENT_APP" },
        { "enum": "11", "description": "REJECT_SOURCE_FIX_ADAPTER" },
        { "enum": "12", "description": "REJECT_SOURCE_STAGER" },
        { "enum": "13", "description": "REJECT_SOURCE_OPTIONS_RISK" }
      ]
    },
    {
      "name": "BloombergSecurityExchange",
      "number": 16207,
      "type": "STRING",
      "values": []
    },
    {
      "name": "PriceDisplayType",
      "number": 16451,
      "type": "INT",
      "values": []
    },
    {
      "name": "NumTickTblEntries",
      "number": 16456,
      "type": "INT",
      "values": []
    },
    {
      "name": "NumTicks",
      "number": 16457,
      "type": "INT",
      "values": []
    },
    {
      "name": "MaxPrice",
      "number": 16458,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "MinLotSize",
      "number": 16460,
      "type": "INT",
      "values": []
    },
    {
      "name": "NumberOfBlocks",
      "number": 16463,
      "type": "INT",
      "values": []
    },
    {
      "name": "TradesInFlow",
      "number": 16464,
      "type": "CHAR",
      "values": []
    },
    {
      "name": "ExchTickSize",
      "number": 16552,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "ExchPointValue",
      "number": 16554,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "TextA",
      "number": 16556,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TextB",
      "number": 16557,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TextTT",
      "number": 16558,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TextC",
      "number": 16559,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TimeReceivedFromExchange",
      "number": 16561,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "DropCopyOrder",
      "number": 16566,
      "type": "BOOLEAN",
      "values": [
        { "enum": "Y", "description": "YES" },
        { "enum": "N", "description": "NO" }
      ]
    },
    {
      "name": "ByPassSessionRecovery",
      "number": 16567,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "LegAvgPx",
      "number": 16568,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "EchoDC_01",
      "number": 16601,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_02",
      "number": 16602,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_03",
      "number": 16603,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_04",
      "number": 16604,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_05",
      "number": 16605,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_06",
      "number": 16606,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_07",
      "number": 16607,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_08",
      "number": 16608,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_09",
      "number": 16609,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_10",
      "number": 16610,
      "type": "STRING",
      "values": []
    },
    {
      "name": "MlegHeadExecId",
      "number": 16611,
      "type": "STRING",
      "values": []
    },
    {
      "name": "UniqueExecID",
      "number": 16612,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegTTRoutingAccount",
      "number": 16615,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegBloombergSecurityExchange",
      "number": 16616,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SpreadLegRatioQty",
      "number": 16623,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "AccountRiskGroup",
      "number": 16624,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TextTTModifyingUser",
      "number": 16625,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NVDR",
      "number": 16626,
      "type": "BOOLEAN",
      "values": [
        { "enum": "Y", "description": "YES" },
        { "enum": "N", "description": "NO" }
      ]
    },
    {
      "name": "TTF",
      "number": 16627,
      "type": "BOOLEAN",
      "values": [
        { "enum": "Y", "description": "YES" },
        { "enum": "N", "description": "NO" }
      ]
    },
    {
      "name": "TFUserType",
      "number": 16628,
      "type": "CHAR",
      "values": [
        { "enum": "T", "description": "TRADITIONAL_TRADING" },
        { "enum": "P", "description": "PROGRAM_TRADING" },
        { "enum": "M", "description": "MARKET_MAKING" },
        { "enum": "G", "description": "MARKET_MAKING_WITH_PROGRAM_TRADING" }
      ]
    },
    {
      "name": "EchoDC_11",
      "number": 16631,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_12",
      "number": 16632,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_13",
      "number": 16633,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_14",
      "number": 16634,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_15",
      "number": 16635,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_16",
      "number": 16636,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_17",
      "number": 16637,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_18",
      "number": 16638,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_19",
      "number": 16639,
      "type": "STRING",
      "values": []
    },
    {
      "name": "EchoDC_20",
      "number": 16640,
      "type": "STRING",
      "values": []
    },
    {
      "name": "PriceFormula",
      "number": 16700,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ReloadOffset",
      "number": 16701,
      "type": "INT",
      "values": []
    },
    {
      "name": "OverrideTickNumerator",
      "number": 16702,
      "type": "INT",
      "values": []
    },
    {
      "name": "FormulaBasedOn",
      "number": 16703,
      "type": "STRING",
      "values": [
        { "enum": "price_diff", "description": "price_diff" },
        { "enum": "ratio", "description": "ratio" },
        { "enum": "net_change", "description": "net_change" },
        { "enum": "custom", "description": "custom" }
      ]
    },
    {
      "name": "ReloadDelay",
      "number": 16704,
      "type": "INT",
      "values": []
    },
    {
      "name": "DisclosedQty",
      "number": 16705,
      "type": "QTY",
      "values": []
    },
    {
      "name": "Reload",
      "number": 16706,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "OverrideTickSize",
      "number": 16707,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "OverrideTickDenominator",
      "number": 16708,
      "type": "INT",
      "values": []
    },
    {
      "name": "TotalNumOrders",
      "number": 16728,
      "type": "INT",
      "values": []
    },
    {
      "name": "Multiplier",
      "number": 16751,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "IsHedging",
      "number": 16752,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "QueueHolder",
      "number": 16753,
      "type": "QTY",
      "values": []
    },
    {
      "name": "MLQ",
      "number": 16754,
      "type": "STRING",
      "values": []
    },
    {
      "name": "PayupTicks",
      "number": 16755,
      "type": "INT",
      "values": []
    },
    {
      "name": "IsQuoting",
      "number": 16756,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "ConvertQuoteToHedge",
      "number": 16757,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "Attempt" },
        { "enum": "2", "description": "Always" },
        { "enum": "3", "description": "AlwaysPreserveQueue" }
      ]
    },
    {
      "name": "IsLeanIndicative",
      "number": 16758,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "IsShared",
      "number": 16759,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "LegRatioExt",
      "number": 16760,
      "type": "INT",
      "values": []
    },
    {
      "name": "InsertTime",
      "number": 16761,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "DefSecuritySubTypeID",
      "number": 16762,
      "type": "INT",
      "values": []
    },
    {
      "name": "TargetStrategyName",
      "number": 16847,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TargetStrategyType",
      "number": 16848,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "ADL" },
        { "enum": "1", "description": "SSE" },
        { "enum": "3", "description": "BANK_ALGO" },
        { "enum": "12", "description": "CORE_SDK" }
      ]
    },
    {
      "name": "SideTextA",
      "number": 16849,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SideTextB",
      "number": 16850,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SideTextC",
      "number": 16851,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ParentVendorOrderID",
      "number": 16852,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ParentVendorUserID",
      "number": 16853,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ParentVendorAccountID",
      "number": 16854,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ParentVendorBrokerID",
      "number": 16855,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ParentVendorProfileID",
      "number": 16856,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TTSMPID",
      "number": 16857,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TTSMPInstruction",
      "number": 16858,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "TT_SMP_INST_REJECT_NEW" },
        { "enum": "3", "description": "TT_SMP_INST_CANCEL_RESTING" },
        { "enum": "4", "description": "TT_SMP_INST_INTERNALIZATION" },
        { "enum": "6", "description": "TT_SMP_INST_INTERNALIZE_BEST" },
        { "enum": "10", "description": "TT_SMP_INST_INTERNALIZE_ALLOW_SPLIT" },
        { "enum": "11", "description": "TT_SMP_INST_INTERNALIZE_BEST_ALLOW_SPLIT" }
      ]
    },
    {
      "name": "QuoteAckStatus",
      "number": 16859,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "QUOTE_REQUEST_STATUS_OK" },
        { "enum": "5", "description": "QUOTE_REQUEST_STATUS_REJECTED" }
      ]
    },
    {
      "name": "ParentVendorAlgoID",
      "number": 16860,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ParentVendorAlgoType",
      "number": 16861,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegParentVendorAccountID",
      "number": 16874,
      "type": "STRING",
      "values": []
    },
    {
      "name": "NewsReportID",
      "number": 16875,
      "type": "STRING",
      "values": []
    },
    {
      "name": "BracketOrderType",
      "number": 16901,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "LIMIT" },
        { "enum": "1", "description": "STOP_LIMIT" },
        { "enum": "2", "description": "STOP_MARKET" }
      ]
    },
    {
      "name": "BracketStopLimitOffset",
      "number": 16902,
      "type": "INT",
      "values": []
    },
    {
      "name": "ChildTIF",
      "number": 16903,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "DAY" },
        { "enum": "1", "description": "GOOD_TILL_CANCEL" },
        { "enum": "2", "description": "AT_THE_OPENING" },
        { "enum": "3", "description": "IMMEDIATE_OR_CANCEL" },
        { "enum": "4", "description": "FILL_OR_KILL" },
        { "enum": "5", "description": "GOOD_TILL_CROSSING" },
        { "enum": "6", "description": "GOOD_TILL_DATE" },
        { "enum": "7", "description": "AT_THE_CLOSE" },
        { "enum": "8", "description": "GOOD_THROUGH_CROSSING" },
        { "enum": "9", "description": "AT_CROSSING" },
        { "enum": "A", "description": "AUCTION" },
        { "enum": "V", "description": "GOOD_IN_SESSION" },
        { "enum": "W", "description": "DAY_PLUS" },
        { "enum": "X", "description": "GOOD_TILL_CANCEL_PLUS" },
        { "enum": "Y", "description": "GOOD_TILL_DATE_PLUS" }
      ]
    },
    {
      "name": "DiscVal",
      "number": 16904,
      "type": "INT",
      "values": []
    },
    {
      "name": "DiscValType",
      "number": 16905,
      "type": "INT",
      "values": []
    },
    {
      "name": "ETimeAct",
      "number": 16906,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "CANCEL" },
        { "enum": "2", "description": "GOTOMARKET" }
      ]
    },
    {
      "name": "Interval",
      "number": 16907,
      "type": "INT",
      "values": []
    },
    {
      "name": "IsTrlTrg",
      "number": 16908,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LeftoverAction",
      "number": 16909,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "LEAVE" },
        { "enum": "1", "description": "PAYUP" },
        { "enum": "2", "description": "MERGE" },
        { "enum": "3", "description": "GOTOMARKET" }
      ]
    },
    {
      "name": "LeftoverTicks",
      "number": 16910,
      "type": "INT",
      "values": []
    },
    {
      "name": "LimitPriceType",
      "number": 16911,
      "type": "INT",
      "values": []
    },
    {
      "name": "LimitTicksAway",
      "number": 16912,
      "type": "INT",
      "values": []
    },
    {
      "name": "OcoStopTriggerPrice",
      "number": 16913,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "ProfitTarget",
      "number": 16914,
      "type": "INT",
      "values": []
    },
    {
      "name": "StopLimitOffset",
      "number": 16915,
      "type": "INT",
      "values": []
    },
    {
      "name": "StopOrderType",
      "number": 16916,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "LIMIT" },
        { "enum": "2", "description": "MARKET" },
        { "enum": "3", "description": "TT_STOP" }
      ]
    },
    {
      "name": "StopTarget",
      "number": 16917,
      "type": "INT",
      "values": []
    },
    {
      "name": "TriggerPriceType",
      "number": 16918,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "BID" },
        { "enum": "2", "description": "ASK" },
        { "enum": "3", "description": "LTP" },
        { "enum": "6", "description": "SAMESIDE" },
        { "enum": "7", "description": "OPPOSITESIDE" }
      ]
    },
    {
      "name": "TriggerTicksAway",
      "number": 16919,
      "type": "INT",
      "values": []
    },
    {
      "name": "TriggerType",
      "number": 16920,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "STOP" },
        { "enum": "2", "description": "IT" }
      ]
    },
    {
      "name": "WithATickType",
      "number": 16921,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "QTY" },
        { "enum": "2", "description": "PERCENT" }
      ]
    },
    {
      "name": "WithATick",
      "number": 16922,
      "type": "INT",
      "values": []
    },
    {
      "name": "TriggerQtyType",
      "number": 16923,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "QTY" },
        { "enum": "2", "description": "PERCENT" }
      ]
    },
    {
      "name": "TriggerQtyCompare",
      "number": 16924,
      "type": "INT",
      "values": [
        { "enum": "3", "description": "LTE" },
        { "enum": "5", "description": "GTE" }
      ]
    },
    {
      "name": "TriggerQty",
      "number": 16925,
      "type": "INT",
      "values": []
    },
    {
      "name": "TriggerLTPReset",
      "number": 16926,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "TTStopLimitPriceType",
      "number": 16927,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "BID" },
        { "enum": "2", "description": "ASK" },
        { "enum": "3", "description": "LTP" }
      ]
    },
    {
      "name": "TTStopWithATickType",
      "number": 16928,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "QTY" },
        { "enum": "2", "description": "PERCENT" }
      ]
    },
    {
      "name": "TTStopWithATick",
      "number": 16929,
      "type": "INT",
      "values": []
    },
    {
      "name": "Payup",
      "number": 16930,
      "type": "INT",
      "values": []
    },
    {
      "name": "TTStopTriggerPriceType",
      "number": 16931,
      "type": "INT",
      "values": [
        { "enum": "3", "description": "LTP" },
        { "enum": "1", "description": "BID" },
        { "enum": "2", "description": "ASK" }
      ]
    },
    {
      "name": "TTStopIsTrlTrg",
      "number": 16932,
      "type": "BOOLEAN",
      "values": [
        { "enum": "Y", "description": "YES" },
        { "enum": "N", "description": "NO" }
      ]
    },
    {
      "name": "TTStopTriggerTicksAway",
      "number": 16933,
      "type": "INT",
      "values": []
    },
    {
      "name": "TTStopTriggerQtyType",
      "number": 16934,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "QTY" },
        { "enum": "2", "description": "PERCENTAGE" }
      ]
    },
    {
      "name": "TTStopTriggerQTyCompare",
      "number": 16935,
      "type": "INT",
      "values": [
        { "enum": "3", "description": "LTE" },
        { "enum": "5", "description": "GTE" }
      ]
    },
    {
      "name": "TTStopTriggerQty",
      "number": 16936,
      "type": "INT",
      "values": []
    },
    {
      "name": "TTStopTriggerLTPReset",
      "number": 16937,
      "type": "BOOLEAN",
      "values": [
        { "enum": "Y", "description": "YES" },
        { "enum": "N", "description": "NO" }
      ]
    },
    {
      "name": "TTStopTriggeredOrderType",
      "number": 16938,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "MKT" },
        { "enum": "2", "description": "LIMIT" },
        { "enum": "21", "description": "MLM" }
      ]
    },
    {
      "name": "TTStopTriggeredOrderPrice",
      "number": 16939,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "TTStopLimitTicksAway",
      "number": 16940,
      "type": "INT",
      "values": []
    },
    {
      "name": "TTStopPayup",
      "number": 16941,
      "type": "INT",
      "values": []
    },
    {
      "name": "RetryCount",
      "number": 16942,
      "type": "INT",
      "values": []
    },
    {
      "name": "RetryInterval",
      "number": 16943,
      "type": "INT",
      "values": []
    },
    {
      "name": "Duration",
      "number": 16944,
      "type": "INT",
      "values": []
    },
    {
      "name": "DurationBaseUnit",
      "number": 16945,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "HOUR" },
        { "enum": "2", "description": "MINUTE" },
        { "enum": "3", "description": "SECOND" }
      ]
    },
    {
      "name": "DurationSTime",
      "number": 16946,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "DurationETime",
      "number": 16947,
      "type": "UTCTIMESTAMP",
      "values": []
    },
    {
      "name": "LeftoverTimeAction",
      "number": 16948,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "ATEND" },
        { "enum": "1", "description": "HALFLIFE" }
      ]
    },
    {
      "name": "AutoResubExpiredGTD",
      "number": 16949,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "ParentTIF",
      "number": 16950,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "GTC" },
        { "enum": "0", "description": "DAY" },
        { "enum": "7", "description": "TIME" },
        { "enum": "15", "description": "DAYPLUS" },
        { "enum": "16", "description": "GTCPLUS" }
      ]
    },
    {
      "name": "TTStopSecondConditionIsOn",
      "number": 16951,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "TTStopSecondTriggerPriceType",
      "number": 16952,
      "type": "INT",
      "values": [
        { "enum": "3", "description": "LTP" },
        { "enum": "1", "description": "BID" },
        { "enum": "2", "description": "ASK" },
        { "enum": "6", "description": "SAMESIDE" },
        { "enum": "7", "description": "OPPOSITESIDE" }
      ]
    },
    {
      "name": "TTStopSecondConditionIsTrlTrg",
      "number": 16953,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "TTStopSecondTriggerTicksAway",
      "number": 16954,
      "type": "INT",
      "values": []
    },
    {
      "name": "TTStopSecondTriggerQtyType",
      "number": 16955,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "QTY" },
        { "enum": "2", "description": "PERCENTAGE" }
      ]
    },
    {
      "name": "TTStopSecondTriggerQtyCompare",
      "number": 16956,
      "type": "INT",
      "values": [
        { "enum": "3", "description": "LTE" },
        { "enum": "5", "description": "GTE" }
      ]
    },
    {
      "name": "TTStopSecondTriggerQty",
      "number": 16957,
      "type": "QTY",
      "values": []
    },
    {
      "name": "Variance",
      "number": 16958,
      "type": "INT",
      "values": []
    },
    {
      "name": "IncludeQuotes",
      "number": 16959,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "ETAGoToMktTicks",
      "number": 16960,
      "type": "INT",
      "values": []
    },
    {
      "name": "WaitingOption",
      "number": 16961,
      "type": "INT",
      "values": []
    },
    {
      "name": "TTStopChildTIFOverride",
      "number": 16962,
      "type": "INT",
      "values": []
    },
    {
      "name": "Seq",
      "number": 16963,
      "type": "INT",
      "values": []
    },
    {
      "name": "LegFillSeq",
      "number": 16964,
      "type": "INT",
      "values": []
    },
    {
      "name": "NoTTReserved",
      "number": 16965,
      "type": "NUMINGROUP",
      "values": []
    },
    {
      "name": "TTReservedName",
      "number": 16966,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TTReservedValue",
      "number": 16967,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LeftoverMktOrderLimitTicks",
      "number": 16968,
      "type": "INT",
      "values": []
    },
    {
      "name": "SecondConditionIsOn",
      "number": 16969,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "SecondTriggerTicksAway",
      "number": 16970,
      "type": "INT",
      "values": []
    },
    {
      "name": "SecondTriggerQtyType",
      "number": 16971,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "eQty" },
        { "enum": "2", "description": "ePercentage" }
      ]
    },
    {
      "name": "SecondTriggerQtyCompare",
      "number": 16972,
      "type": "INT",
      "values": [
        { "enum": "3", "description": "eLTE" },
        { "enum": "5", "description": "eGTE" }
      ]
    },
    {
      "name": "SecondTriggerQty",
      "number": 16973,
      "type": "QTY",
      "values": []
    },
    {
      "name": "LeftoverTime",
      "number": 16974,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "eAtEnd" },
        { "enum": "1", "description": "eAtHalfLife" }
      ]
    },
    {
      "name": "SecondTriggerPriceType",
      "number": 16975,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "eBid" },
        { "enum": "2", "description": "eAsk" },
        { "enum": "3", "description": "eLtp" },
        { "enum": "6", "description": "eSameSide" },
        { "enum": "7", "description": "eOppositeSide" }
      ]
    },
    {
      "name": "NoImplies",
      "number": 16976,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "CustomSliceSched",
      "number": 16977,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TTStopNoImplies",
      "number": 16978,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "HKExSSEAlgoHandling",
      "number": 16979,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "Aggressiveness",
      "number": 16980,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "IgnoreMarketState",
      "number": 16981,
      "type": "BOOLEAN",
      "values": []
    },
    {
      "name": "InstanceName",
      "number": 16982,
      "type": "STRING",
      "values": []
    },
    {
      "name": "HedgeOrderType",
      "number": 16983,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "eMkt" }
      ]
    },
    {
      "name": "DeltaRounding",
      "number": 16984,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "eRoundNormal" },
        { "enum": "1", "description": "eRoundUp" },
        { "enum": "2", "description": "eRoundDown" }
      ]
    },
    {
      "name": "Vol",
      "number": 16990,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "ClearingAccountOverride",
      "number": 16999,
      "type": "STRING",
      "values": []
    },
    {
      "name": "RequestTickTable",
      "number": 17000,
      "type": "BOOLEAN",
      "values": [
        { "enum": "Y", "description": "YES" },
        { "enum": "N", "description": "NO" }
      ]
    },
    {
      "name": "VendorDefinedField1",
      "number": 17001,
      "type": "STRING",
      "values": []
    },
    {
      "name": "VendorDefinedField2",
      "number": 17002,
      "type": "STRING",
      "values": []
    },
    {
      "name": "VendorDefinedField3",
      "number": 17003,
      "type": "STRING",
      "values": []
    },
    {
      "name": "VendorDefinedField4",
      "number": 17004,
      "type": "STRING",
      "values": []
    },
    {
      "name": "VendorDefinedField5",
      "number": 17005,
      "type": "STRING",
      "values": []
    },
    {
      "name": "MaxPart",
      "number": 17006,
      "type": "INT",
      "values": []
    },
    {
      "name": "MaxDisp",
      "number": 17007,
      "type": "INT",
      "values": []
    },
    {
      "name": "TwapStyle",
      "number": 17008,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "eAggressive" },
        { "enum": "1", "description": "eDefault" },
        { "enum": "2", "description": "ePassive" }
      ]
    },
    {
      "name": "WouldIfPrc",
      "number": 17009,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "LimitPrc",
      "number": 17010,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "ForceLogout",
      "number": 18000,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NOT_FORCED" },
        { "enum": "1", "description": "FORCED" }
      ]
    },
    {
      "name": "MockOrderFlag",
      "number": 18001,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "NOT_MockOrder" },
        { "enum": "1", "description": "MockOrder" }
      ]
    },
    {
      "name": "CustomMode",
      "number": 18002,
      "type": "CHAR",
      "values": []
    },
    {
      "name": "TradingStrategy",
      "number": 18009,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "ARBITRAGE" },
        { "enum": "10", "description": "HEDGE" },
        { "enum": "11", "description": "DIRECTIONAL" }
      ]
    },
    {
      "name": "ReverseSpreadOC",
      "number": 18010,
      "type": "INT",
      "values": [
        { "enum": "0", "description": "DO_NOT_REVERSE_OPEN_CLOSE_FLAG_ON_FAR_LEG" },
        { "enum": "1", "description": "REVERSE_SPREAD_OPEN_CLOSE_FLAG_ON_FAR_LE" }
      ]
    },
    {
      "name": "LegExDestination",
      "number": 18100,
      "type": "EXCHANGE",
      "values": []
    },
    {
      "name": "AccountID",
      "number": 18101,
      "type": "STRING",
      "values": []
    },
    {
      "name": "UserID",
      "number": 18102,
      "type": "STRING",
      "values": []
    },
    {
      "name": "PriceFeedStatus",
      "number": 18210,
      "type": "INT",
      "values": []
    },
    {
      "name": "DeliveryTerm",
      "number": 18211,
      "type": "CHAR",
      "values": [
        { "enum": "D", "description": "DAY" },
        { "enum": "W", "description": "WEEK" },
        { "enum": "B", "description": "BALANCE" },
        { "enum": "Q", "description": "QUARTER" },
        { "enum": "S", "description": "SEASON" },
        { "enum": "Y", "description": "YEAR" },
        { "enum": "V", "description": "VARIABLE" },
        { "enum": "L", "description": "BALANCE_OF_WEEK" },
        { "enum": "X", "description": "CUSTOM" },
        { "enum": "A", "description": "SAME_DAY" },
        { "enum": "N", "description": "NEXT_DAY" },
        { "enum": "M", "description": "MONTH" },
        { "enum": "E", "description": "WEEKLY" },
        { "enum": "P", "description": "PACK" },
        { "enum": "U", "description": "BUNDLE" },
        { "enum": "T", "description": "WEEKEND" },
        { "enum": "H", "description": "HOUR" },
        { "enum": "C", "description": "EOM" },
        { "enum": "a", "description": "QUARTER_HOUR" },
        { "enum": "b", "description": "HALF_HOUR" },
        { "enum": "c", "description": "ONE_HOUR" },
        { "enum": "d", "description": "TWO_HOUR" },
        { "enum": "e", "description": "FOUR_HOUR" },
        { "enum": "f", "description": "EIGHT_HOUR" },
        { "enum": "g", "description": "ONE_PLUS_TWO" },
        { "enum": "h", "description": "THREE_PLUS_FOUR" },
        { "enum": "i", "description": "BASELOAD" },
        { "enum": "j", "description": "PEAKLOAD" },
        { "enum": "k", "description": "OVERNIGHT" },
        { "enum": "l", "description": "EXTENDED_PEAK" },
        { "enum": "Z", "description": "HALF_YEAR" }
      ]
    },
    {
      "name": "LegDeliveryTerm",
      "number": 18212,
      "type": "CHAR",
      "values": [
        { "enum": "D", "description": "DAY" },
        { "enum": "W", "description": "WEEK" },
        { "enum": "B", "description": "BALANCE" },
        { "enum": "Q", "description": "QUARTER" },
        { "enum": "S", "description": "SEASON" },
        { "enum": "Y", "description": "YEAR" },
        { "enum": "V", "description": "VARIABLE" },
        { "enum": "L", "description": "BALANCE_OF_WEEK" },
        { "enum": "X", "description": "CUSTOM" },
        { "enum": "A", "description": "SAME_DAY" },
        { "enum": "N", "description": "NEXT_DAY" },
        { "enum": "M", "description": "MONTH" },
        { "enum": "E", "description": "WEEKLY" },
        { "enum": "P", "description": "PACK" },
        { "enum": "U", "description": "BUNDLE" },
        { "enum": "T", "description": "WEEKEND" },
        { "enum": "H", "description": "HOUR" },
        { "enum": "C", "description": "EOM" },
        { "enum": "a", "description": "QUARTER_HOUR" },
        { "enum": "b", "description": "HALF_HOUR" },
        { "enum": "c", "description": "ONE_HOUR" },
        { "enum": "d", "description": "TWO_HOUR" },
        { "enum": "e", "description": "FOUR_HOUR" },
        { "enum": "f", "description": "EIGHT_HOUR" },
        { "enum": "g", "description": "ONE_PLUS_TWO" },
        { "enum": "h", "description": "THREE_PLUS_FOUR" },
        { "enum": "i", "description": "BASELOAD" },
        { "enum": "j", "description": "PEAKLOAD" },
        { "enum": "k", "description": "OVERNIGHT" },
        { "enum": "l", "description": "EXTENDED_PEAK" },
        { "enum": "Z", "description": "HALF_YEAR" }
      ]
    },
    {
      "name": "LegDeliveryDate",
      "number": 18213,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "IncludeNumberOfOrders",
      "number": 18214,
      "type": "CHAR",
      "values": [
        { "enum": "N", "description": "NO" },
        { "enum": "Y", "description": "YES" }
      ]
    },
    {
      "name": "ExchCred",
      "number": 18216,
      "type": "STRING",
      "values": []
    },
    {
      "name": "RefID",
      "number": 18217,
      "type": "STRING",
      "values": []
    },
    {
      "name": "TTCustomerName",
      "number": 18218,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecondaryAccount",
      "number": 18219,
      "type": "STRING",
      "values": []
    },
    {
      "name": "BrokerID",
      "number": 18220,
      "type": "STRING",
      "values": []
    },
    {
      "name": "CompanyID",
      "number": 18221,
      "type": "STRING",
      "values": []
    },
    {
      "name": "AOTCPreventionActionType",
      "number": 18222,
      "type": "CHAR",
      "values": [
        { "enum": "0", "description": "CROSSING_ORDER_PREVENTION_NONE" },
        { "enum": "1", "description": "CROSSING_ORDER_PREVENTION_HELD" },
        { "enum": "2", "description": "CROSSING_ORDER_PREVENTION_CANCEL" },
        { "enum": "3", "description": "CROSSING_ORDER_PREVENTION_FILL" },
        { "enum": "4", "description": "CROSSING_ORDER_PREVENTION_REDUCED_ORDER" },
        { "enum": "5", "description": "CROSSING_ORDER_PREVENTION_REDUCED_CHANGE" },
        { "enum": "6", "description": "CROSSING_ORDER_PREVENTION_RELEASED_ORDER" },
        { "enum": "7", "description": "CROSSING_ORDER_PREVENTION_REPLACED_ORDER" },
        { "enum": "8", "description": "CROSSING_ORDER_PREVENTION_NO_ACTION_ON_ORDER" },
        { "enum": "9", "description": "CROSSING_ORDER_PREVENTION_CANCEL_REPLACE" }
      ]
    },
    {
      "name": "ContractYearMonth",
      "number": 18223,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegContractYearMonth",
      "number": 18224,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ExchangeSeqNum",
      "number": 18225,
      "type": "INT",
      "values": []
    },
    {
      "name": "TTSyntheticType",
      "number": 18226,
      "type": "INT",
      "values": []
    },
    {
      "name": "Organization",
      "number": 18227,
      "type": "STRING",
      "values": []
    },
    {
      "name": "RoutingAccount",
      "number": 18228,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ReviewUserID",
      "number": 18229,
      "type": "STRING",
      "values": []
    },
    {
      "name": "ReviewStatus",
      "number": 18230,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "REVIEW_STATUS_NONE" },
        { "enum": "2", "description": "REVIEW_STATUS_REVIEWED" },
        { "enum": "3", "description": "REVIEW_STATUS_APPROVED" }
      ]
    },
    {
      "name": "UniqueLegID",
      "number": 18231,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LastTradingDate",
      "number": 18232,
      "type": "LOCALMKTDATE",
      "values": []
    },
    {
      "name": "BrokerRoute",
      "number": 18233,
      "type": "STRING",
      "values": []
    },
    {
      "name": "HedgeType",
      "number": 18235,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "HEDGE_TYPE_DURATION" },
        { "enum": "2", "description": "HEDGE_TYPE_NOMINAL" },
        { "enum": "3", "description": "HEDGE_TYPE_PRICE_FACTOR" }
      ]
    },
    {
      "name": "UnderlyingMemo",
      "number": 18236,
      "type": "STRING",
      "values": []
    },
    {
      "name": "LegMaturityDay",
      "number": 18314,
      "type": "DAYOFMONTH",
      "values": []
    },
    {
      "name": "QuoteSubType",
      "number": 18602,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "WORKING_DELTA" },
        { "enum": "2", "description": "BASIS_TRADE" },
        { "enum": "3", "description": "REGULAR_LDS_NEGOTIATION" },
        { "enum": "4", "description": "NEGOTIATE_UNDERLYING_OUTSIDE_EXCHANGE" },
        { "enum": "5", "description": "VOLA_STRATEGY_FIX" },
        { "enum": "6", "description": "VOLA_STRATEGY_NEGOTIATE_UNDERLYING" }
      ]
    },
    {
      "name": "QuoteRefPrice",
      "number": 18603,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "UnderlyingDeltaPercentage",
      "number": 18604,
      "type": "FLOAT",
      "values": []
    },
    {
      "name": "SRFQTransType",
      "number": 18605,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "NEW" },
        { "enum": "2", "description": "REPLACE" },
        { "enum": "3", "description": "CLOSE" },
        { "enum": "4", "description": "UPDATE" },
        { "enum": "5", "description": "EXPIRE" }
      ]
    },
    {
      "name": "NegotiationID",
      "number": 18606,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecondaryNegotiationID",
      "number": 18607,
      "type": "STRING",
      "values": []
    },
    {
      "name": "MktQuoteID",
      "number": 18608,
      "type": "STRING",
      "values": []
    },
    {
      "name": "SecondaryQuoteID",
      "number": 18609,
      "type": "STRING",
      "values": []
    },
    {
      "name": "QuotingStatus",
      "number": 18610,
      "type": "INT",
      "values": [
        { "enum": "1", "description": "QUOTING_STATUS_OPEN_ACTIVE" },
        { "enum": "2", "description": "QUOTING_STATUS_OPEN_WORKING" },
        { "enum": "3", "description": "QUOTING_STATUS_CLOSED_INACTIVE" }
      ]
    },
    {
      "name": "OneOffSharedKey",
      "number": 20000,
      "type": "STRING",
      "values": []
    },
    {
      "name": "FutureReferencePrice",
      "number": 20016,
      "type": "PRICE",
      "values": []
    },
    {
      "name": "MDTradeEntryID",
      "number": 37711,
      "type": "INT",
      "values": []
    },
    {
      "name": "AllocVolumeType",
      "number": 60111,
      "type": "STRING",
      "values": []
    }
  ]
};
