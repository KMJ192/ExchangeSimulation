import { call, put, takeEvery } from "redux-saga/effects";
import { reqOrderbook, reqTicker, reqTrade } from "../api/req_coin_data";
import { 
    reqTickerAsync, 
    reqTradeAsync, 
    reqOrderbookAsync, 
    REQUEST_TICKER, 
    REQUEST_TRADE,
    REQUEST_ORDERBOOK
} from "./action";
import { ResponseOrderbook, ResponseTicker, ResponseTrade } from "./types";

function* reqTickerSaga(action: ReturnType<typeof reqTickerAsync.request>){
    try{
        const request: ResponseTicker = yield call(reqTicker, action.payload);
        yield put(reqTickerAsync.success(request));
    }catch(e: any){
        yield put(reqTickerAsync.success(e));
    }

}
function* reqTradeSaga(action: ReturnType<typeof reqTradeAsync.request>){
    try{
        const request: ResponseTrade = yield call(reqTrade, action.payload);
        yield put(reqTradeAsync.success(request));
    }catch(e: any){
        yield put(reqTradeAsync.success(e));
    }
}
function* reqOrderbookSaga(action: ReturnType<typeof reqOrderbookAsync.request>){
    try{
        const request: ResponseOrderbook = yield call(reqOrderbook, action.payload);
        yield put(reqOrderbookAsync.success(request));
    }catch(e: any){
        yield put(reqOrderbookAsync.success(e));
    }
}

export function* reqCoinSaga(){
    yield takeEvery(REQUEST_TICKER, reqTickerSaga);
    yield takeEvery(REQUEST_TRADE, reqTradeSaga);
    yield takeEvery(REQUEST_ORDERBOOK, reqOrderbookSaga);
}