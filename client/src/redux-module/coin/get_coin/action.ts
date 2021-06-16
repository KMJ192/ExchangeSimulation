import { createAsyncAction } from "typesafe-actions";
import { 
    Ticker, 
    Trade, 
    Orderbook,
    ReqUpbitSocketParam 
} from "./types";

export const GET_TICKER = 'coin/GET_COINDATA';
export const GET_TICKER_SUCCESS = 'coin/GET_COINDATA_SUCCESS';
export const GET_TICKER_ERROR = 'coin/GET_COINDATA_ERROR';

export const GET_TRADE = 'coin/GET_TRADE';
export const GET_TRADE_SUCCES = 'coin/GET_TRADE_SUCCES';
export const GET_TRADE_ERROR = 'coin/GET_TRADE_ERROR';

export const GET_ORDERBOOK = 'coin/GET_ORDERBOOK';
export const GET_ORDERBOOK_SUCCESS = 'coin/GET_ORDERBOOK_SUCCESS';
export const GET_ORDERBOOK_ERROR = 'coin/GET_ORDERBOOK_ERROR';

export const getTickerAsync = createAsyncAction(
    GET_TICKER,
    GET_TICKER_SUCCESS,
    GET_TICKER_ERROR
)<ReqUpbitSocketParam, Ticker, null>();

export const getTradeAsync = createAsyncAction(
    GET_TRADE,
    GET_TRADE_SUCCES,
    GET_TRADE_ERROR
)<ReqUpbitSocketParam, Trade, null>();

export const getOrderbookAsync = createAsyncAction(
    GET_ORDERBOOK,
    GET_ORDERBOOK_SUCCESS,
    GET_ORDERBOOK_ERROR
)<ReqUpbitSocketParam, Orderbook, null>();