import { EventChannel } from "redux-saga";
import { call, delay, flush, put, takeEvery } from "redux-saga/effects";
import upbitWebSocketNetworking from "../api/get_coin_data";
import { getCoinDataAsync, GET_COINDATA } from "./action";
import { Ticker, Trade, Orderbook, ReqUpbitSocketParam } from "./types";

function socketDataFilter(socketData: Ticker | Trade | Orderbook){
  const val: Ticker[] | Trade[] | Orderbook[] = Object.values(socketData);
  const filterData: any = {};
  if(val.length > 0){
    for(let i = 0; i < val.length; i++){
      if(filterData[val[i].code]){
        filterData[val[i].code] 
          = (filterData[val[i].code].timestamp > val[i].timestamp) ?
            filterData[val[i].code] : val[i];
      }else{
        filterData[val[i].code] = val[i];
      }
    }
  }
  return filterData;
}

function* getCoinDataSaga(action: ReturnType<typeof getCoinDataAsync.request>){
  try{
    const coinData: EventChannel<ReqUpbitSocketParam> = yield call(upbitWebSocketNetworking, action.payload);
    while(1){
      const socketData: Ticker | Trade | Orderbook = yield flush(coinData);
      const filterData: Ticker | Trade | Orderbook = yield socketDataFilter(socketData);
      if(Object.keys(filterData).length){
        yield put(getCoinDataAsync.success(filterData));
      }
      yield delay(1000);
    }
  }catch(e: any){
    yield put(getCoinDataAsync.failure(e));
  }
}

export function* coinDataSaga(){
    yield takeEvery(GET_COINDATA, getCoinDataSaga);
}