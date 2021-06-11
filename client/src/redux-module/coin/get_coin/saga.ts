import { call, put, takeEvery } from "redux-saga/effects";
import upbitWebSocketNetworking from "../api/get_coin_data";
import { getCoinDataAsync, GET_COINDATA } from "./action";
import { Ticker, Trade, Orderbook } from "./types";

function* getCoinDataSaga(action: ReturnType<typeof getCoinDataAsync.request>){
  try{
    const coinData: Ticker | Trade | Orderbook = yield call(upbitWebSocketNetworking, action.payload);
    console.log(coinData);
    yield put(getCoinDataAsync.success(coinData));
  }catch(e: any){
    yield put(getCoinDataAsync.failure(e));
  }
}

export function* coinDataSaga(){
    yield takeEvery(GET_COINDATA, getCoinDataSaga);
}