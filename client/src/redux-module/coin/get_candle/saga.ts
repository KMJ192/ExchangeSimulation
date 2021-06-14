import { call, put, takeEvery } from "redux-saga/effects";
import { 
    getDayCandle, 
    getMinutesCandles,
    getWeekCandle,
    getMonthCandle
} from "../api/get_candle";
import { 
    GET_MINUTE_CANDLE,
    GET_DAY_CANDLE,
    GET_WEEK_CANDLE,
    GET_MONTH_CANDLE,
    getMinuteCandleAsync,
    getDayCandleAsync,
    getWeekCandleAsync,
    getMonthCandleAsync
} from "./action";
import { 
    MinuteCandleType, 
    DayCandleType, 
    WeekCandleType, 
    MonthCandleType
} from "./types";

function* minuteCandleSaga(action: ReturnType<typeof getMinuteCandleAsync.request>){
    try{
        const request: MinuteCandleType = yield call(getMinutesCandles, action.payload);
        yield put(getMinuteCandleAsync.success(request))
    }catch(e: any){
        yield put(getMinuteCandleAsync.failure(e));
    }
}

function* dayCandleSaga(action: ReturnType<typeof getDayCandleAsync.request>){
    try{
        const request: DayCandleType = yield call(getDayCandle, action.payload);
        yield put(getDayCandleAsync.success(request));
    }catch(e: any){
        yield put(getDayCandleAsync.failure(e));
    }
}

function* weekCandleSaga(action: ReturnType<typeof getWeekCandleAsync.request>){
    try{
        const request: WeekCandleType = yield call(getWeekCandle, action.payload);
        yield put(getWeekCandleAsync.success(request));
    }catch(e: any){
        yield put(getWeekCandleAsync.failure(e));
    }
}

function* monthCandleSaga(action: ReturnType<typeof getMonthCandleAsync.request>){
    try{
        const request: MonthCandleType = yield call(getMonthCandle, action.payload);
        yield put(getMonthCandleAsync.success(request));
    }catch(e: any){
        yield put(getMonthCandleAsync.failure(e));
    }
}

export function* candleSaga(){
    yield takeEvery(GET_MINUTE_CANDLE, minuteCandleSaga);
    yield takeEvery(GET_DAY_CANDLE, dayCandleSaga);
    yield takeEvery(GET_WEEK_CANDLE, weekCandleSaga);
    yield takeEvery(GET_MONTH_CANDLE, monthCandleSaga);
}