import { combineReducers } from "redux";
import user  from './user';
import screen_size from "./screen_size";
import market_list from "./coin/market_list";
import {
    ticker,
    trade,
    orderbook
} from "./coin/get_coin";
import {
    minute_candle,
    day_candle,
    week_candle,
    month_candle
} from './coin/get_candle';
import {
    req_ticker,
    req_trade,
    req_orderbook
} from  './coin/req_coin';
import selected_coin from "./coin/selected_coin";
import { coinDataSaga } from "./coin/get_coin/saga";
import { candleSaga } from "./coin/get_candle/saga";
import { reqCoinSaga } from "./coin/req_coin";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    user,
    screen_size,
    market_list,
    ticker,
    trade,
    orderbook,
    minute_candle,
    day_candle,
    week_candle,
    month_candle,
    selected_coin,
    req_ticker,
    req_trade,
    req_orderbook
});

export default rootReducer;
export type RootState = ReturnType <typeof rootReducer>

export function* rootSaga(){
    yield all([coinDataSaga(), candleSaga(), reqCoinSaga()]);
}