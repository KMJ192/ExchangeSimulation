import { createAsyncAction } from "typesafe-actions";
import { 
    Ticker, 
    Trade, 
    Orderbook,
    ReqUpbitSocketParam 
} from "./types";

export const GET_COINDATA = 'coin/GET_COINDATA';
export const GET_COINDATA_SUCCESS = 'coin/GET_COINDATA_SUCCESS';
export const GET_COINDATA_ERROR = 'coin/GET_COINDATA_ERROR';

export const getCoinDataAsync = createAsyncAction(
    GET_COINDATA,
    GET_COINDATA_SUCCESS,
    GET_COINDATA_ERROR
)<ReqUpbitSocketParam, Ticker | Trade | Orderbook, null>();