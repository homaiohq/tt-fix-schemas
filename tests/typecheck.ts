/**
 * Compile-time usage sample. Not executed: `pnpm typecheck` verifies that the generated
 * types behave as documented in the README.
 */
import { prod } from '../src/index.js';
import { MessageTypes, OrdType, Side, Tag, TimeInForce, type Header, type MessageMap, type NewOrderSingle } from '../src/generated/prod/fix44/index.js';

const order: NewOrderSingle = {
  ClOrdID: 'abc-1',
  Account: 'ACC',
  Side: Side.BUY,
  OrdType: OrdType.LIMIT,
  TimeInForce: TimeInForce.DAY,
  OrderQty: 1,
  Price: 100.5,
  Symbol: 'ES',
  SecurityID: '123',
  NoPartyIDs: [{ PartyID: 'trader', PartyRole: prod.fix44.PartyRole.ENTERING_TRADER }],
};

const header: Header = {
  BeginString: prod.fix44.beginString,
  BodyLength: 0,
  MsgType: prod.fix44.MsgType.ORDER_SINGLE,
  SenderCompID: 'me',
  TargetCompID: 'TT',
  MsgSeqNum: 1,
  SendingTime: '20260101-00:00:00.000',
  PossDupFlag: false,
};

// Discriminate a message body by its MsgType (35) value.
function handle<T extends keyof MessageMap>(msgType: T, body: MessageMap[T]): void {
  if (msgType === MessageTypes.ExecutionReport) {
    const er = body as MessageMap[typeof MessageTypes.ExecutionReport];
    const status: prod.fix44.OrdStatus | undefined = er.OrdStatus;
    void status;
  }
}
handle('D', order);

// @ts-expect-error: Side only accepts its enumerated values
const badSide: NewOrderSingle = { ClOrdID: 'x', Side: 'buy' };
// @ts-expect-error: ClOrdID is required
const missingRequired: NewOrderSingle = { Side: Side.SELL };
// @ts-expect-error: tag numbers are literal types
const wrongTag: typeof Tag.ClOrdID = 12;

void order;
void header;
void badSide;
void missingRequired;
void wrongTag;
