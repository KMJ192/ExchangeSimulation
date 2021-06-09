import { call, put, takeEvery } from "redux-saga/effects";
import { getCoinDataAsync, GET_COINDATA } from "./action";

function* getCoinDataSaga(action: ReturnType<typeof getCoinDataAsync.request>){

    try{

    }catch(e: any){

    }
}

export function* coinDataSaga(){
    yield takeEvery(GET_COINDATA, getCoinDataSaga);
}

//redux-saga
//채널, 액션채널, 이벤트채널
//소켓 연결 -> 이벤트채널 api사용