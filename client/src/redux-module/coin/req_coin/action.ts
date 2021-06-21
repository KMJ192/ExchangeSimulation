import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { 
    RequestParam, 
    ResponseTicker, 
    ResponseTrade, 
    ResponseOrderbook
} from "./types";

export const REQUEST_TICKER = 'coin/REQUEST_TICKER';
export const REQUEST_TICKER_SUCCESS = 'coin/REQUEST_TICKER_SUCCESS';
export const REQUEST_TICKER_ERROR = 'coin/REQUEST_TICKER_ERROR';

export const REQUEST_TRADE = 'coin/REQUEST_TRADE';
export const REQUEST_TRADE_SUCCESS = 'coin/REQUEST_TRADE_SUCCES';
export const REQUEST_TRADE_ERROR = 'coin/REQUEST_TRADE_ERROR';

export const REQUEST_ORDERBOOK = 'coin/REQUEST_ORDERBOOK';
export const REQUEST_ORDERBOOK_SUCCESS = 'coin/REQUEST_ORDERBOOK_SUCCESS';
export const REQUEST_ORDERBOOK_ERROR = 'coin/REQUEST_ORDERBOOK_ERROR';

export const reqTickerAsync = createAsyncAction(
    REQUEST_TICKER,
    REQUEST_TICKER_SUCCESS,
    REQUEST_TICKER_ERROR
)<RequestParam, ResponseTicker, AxiosError>();

export const reqTradeAsync = createAsyncAction(
    REQUEST_TRADE,
    REQUEST_TRADE_SUCCESS,
    REQUEST_TRADE_ERROR
)<RequestParam, ResponseTrade, AxiosError>();

export const reqOrderbookAsync = createAsyncAction(
    REQUEST_ORDERBOOK,
    REQUEST_ORDERBOOK_SUCCESS,
    REQUEST_ORDERBOOK_ERROR
)<RequestParam, ResponseOrderbook, AxiosError>();