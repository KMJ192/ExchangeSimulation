import { combineReducers } from "redux";
import user  from './user';
import screen_size from "./screen_size";
import market_list from "./coin/market_list";
import connect_socket from "./coin/connect_socket";
import get_coin from "./coin/get_coin";
import {
    minute_candle,
    day_candle,
    week_candle,
    //month_candle
} from './coin/get_candle';
import { coinDataSaga } from "./coin/get_coin/saga";
import { candleSaga } from "./coin/get_candle/saga";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    user,
    screen_size,
    market_list,
    connect_socket,
    get_coin,
    minute_candle,
    day_candle,
    week_candle,
    //month_candle
});

export default rootReducer;
export type RootState= ReturnType <typeof rootReducer>

export function* rootSaga(){
    yield all([coinDataSaga(), candleSaga()]);
}