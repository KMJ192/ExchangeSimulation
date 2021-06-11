import { call, put, takeEvery } from "redux-saga/effects";
import coinSocketNetworking from "../api/get_coin_data";
import { getCoinDataAsync, GET_COINDATA } from "./action";
import { CoinData } from "./types";

function* getCoinDataSaga(action: ReturnType<typeof getCoinDataAsync.request>){
  try{
    const coinData: CoinData = yield call(coinSocketNetworking, action.payload)
    yield put(getCoinDataAsync.success(coinData));
  }catch(e: any){
    yield put(getCoinDataAsync.failure(e));
  }
}

export function* coinDataSaga(){
    yield takeEvery(GET_COINDATA, getCoinDataSaga);
}
//redux-saga
//채널, 액션채널, 이벤트채널
//소켓 연결 -> 이벤트채널 api사용