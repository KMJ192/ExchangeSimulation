import { EventChannel } from "redux-saga";
import { call, delay, flush, put, select, SelectEffect, takeEvery } from "redux-saga/effects";
import upbitWebSocketNetworking from "../api/get_coin_data";
import { getCoinDataAsync, GET_COINDATA } from "./action";
import { Ticker, Trade, Orderbook } from "./types";

function* getCoinDataSaga(action: ReturnType<typeof getCoinDataAsync.request>){
  try{
    const coinData: EventChannel<unknown> = yield call(upbitWebSocketNetworking, action.payload);
    while(1){
      const socketData: Ticker | Trade | Orderbook = yield flush(coinData);
      const state: SelectEffect = yield select();
      yield put(getCoinDataAsync.success(socketData));
      // console.log(socketData);
      // console.log(state);
      yield delay(1000);
    }
  }catch(e: any){
    yield put(getCoinDataAsync.failure(e));
  }finally{
    //action.payload.ws.close();
  }
}

export function* coinDataSaga(){
    yield takeEvery(GET_COINDATA, getCoinDataSaga);
}