import { EventChannel } from "redux-saga";
import { call, delay, flush, put, select, takeEvery } from "redux-saga/effects";
import { RootState } from "../../RootReducer";
import { upbitWebSocketChannel } from "../api/get_coin_data";
import { createUpibtSocket } from "../api/socket";
import { 
  getTickerAsync, 
  getTradeAsync, 
  getOrderbookAsync, 
  GET_ORDERBOOK, GET_TICKER, GET_TRADE 
} from "./action";
import { Ticker, Trade, Orderbook } from "./types";

const socketDelay = 500;

function socketDataFilter(socketData: Ticker | Trade | Orderbook){
  const val: Ticker[] | Trade[] | Orderbook[] = Object.values(socketData);
  const filterData: any = {};
  for(let i = 0; i < val.length; i++){
    if(filterData[val[i].code]){
      filterData[val[i].code] = 
        (filterData[val[i].code].timestamp > val[i].timestamp) ? filterData[val[i].code] : val[i];
    }else{
      filterData[val[i].code] = val[i];
    }
  }
  return filterData;
}

function* getTickerSaga(action: ReturnType<typeof getTickerAsync.request>){
  try{
    const ws = createUpibtSocket();
    const coinData: EventChannel<Ticker> = yield call(upbitWebSocketChannel, ws, action.payload);
    try{
      while(1){
        const socketData: Ticker = yield flush(coinData);
        const filterData: Ticker = yield socketDataFilter(socketData);
        if(Object.keys(filterData).length){
          yield put(getTickerAsync.success(filterData));
        }
        yield delay(socketDelay); 
      }
    }catch(e: any){
      yield put(getTickerAsync.failure(e));
    }finally{
      ws.close();
    }
  }catch(e: any){
    yield put(getTickerAsync.failure(e));
  }
}

function* getTradeSaga(action: ReturnType<typeof getTradeAsync.request>){
  try{
    const ws = createUpibtSocket();
    const coinData: EventChannel<Trade> = yield call(upbitWebSocketChannel, ws, action.payload);
    try{
      while(1){
        const socketData: Trade = yield flush(coinData);
        const filterData: Trade = yield socketDataFilter(socketData);
        if(Object.keys(filterData).length){
          const windowSize: RootState = yield select();
          //windo ?????? ????????? 768????????? ?????? dispatch
          if(windowSize.screen_size.width > 768){ 
            yield put(getTradeAsync.success(filterData));
          }
        }
        yield delay(socketDelay);
      }
    }catch(e: any){
      yield put(getTradeAsync.failure(e));
    }finally{
      ws.close();
    }
  }catch(e: any){
    yield put(getTradeAsync.failure(e));
  }
}

function* getOrderbookSaga(action: ReturnType<typeof getOrderbookAsync.request>){
  try{
    const ws = createUpibtSocket();
    const coinData: EventChannel<Orderbook> = yield call(upbitWebSocketChannel, ws, action.payload);
    try{
      while(1){
        const socketData: Orderbook = yield flush(coinData);
        const filterData: Orderbook = yield socketDataFilter(socketData);
        if(Object.keys(filterData).length){
          const windowSize: RootState = yield select();
          //windo ?????? ????????? 768????????? ?????? dispatch
          if(windowSize.screen_size.width > 768){
            yield put(getOrderbookAsync.success(filterData));
          }
        }
        yield delay(socketDelay);
      }
    }catch(e: any){
      yield put(getOrderbookAsync.failure(e));
    }finally{
      ws.close();
    }
  }catch(e: any){
    yield put(getOrderbookAsync.failure(e));
  }
}

export function* coinDataSaga(){
  yield takeEvery(GET_TICKER, getTickerSaga);
  yield takeEvery(GET_TRADE, getTradeSaga);
  yield takeEvery(GET_ORDERBOOK, getOrderbookSaga);
}