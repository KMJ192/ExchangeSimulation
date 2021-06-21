import { ActionType } from "typesafe-actions";
import * as actions from './action';

export interface ResponseTicker{
    market: string;
    trade_date: string;
    trade_time: string;
    trade_date_kst: string;
    trade_time_kst: string;
    opening_price: number;
    high_price: number;
    low_price: number;
    trade_price: number;
    prev_closing_price: number;
    change:	"EVEN" | "RISE" | "FALL";
    change_price: number;
    change_rate: number;
    signed_change_price: number;
    signed_change_rate: number;
    trade_volume: number;
    acc_trade_price: number;
    acc_trade_price_24h: number;
    acc_trade_volume: number;
    acc_trade_volume_24h: number;
    highest_52_week_price: number;
    highest_52_week_date: string;
    lowest_52_week_price: number;
    lowest_52_week_date: string;
    timestamp: number;
}

export interface ResponseTrade{
    trade_date_utc: string;
    trade_time_utc: string;
    timestamp: number;
    trade_price: number;
    trade_volume: number;
    prev_closing_price: number;
    change_price: number;
    ask_bid: string;
    sequential_id: number;
}

interface OrderbookUnits{
    ask_price: number;
    bid_price: number;
    ask_size: number;
    bid_size: number;
}
export interface ResponseOrderbook{
    market: string;
    timestamp: number;
    total_ask_size: number;
    total_bid_size: number;
    orderbook_units: OrderbookUnits[];
}

export type RequestCoinAction = ActionType<typeof actions>;
export type RequestTickerState = {
    ticker: {
        loading: boolean;
        data: ResponseTicker | null;
        error: Error | null;
    }
}
export type RequestTradeState = {
    trade: {
        loading: boolean;
        data: ResponseTrade | null;
        error: Error | null;
    }
}
export type RequestOrderbookState = {
    orderbook: {
        loading: boolean;
        data: ResponseOrderbook | null;
        error: Error | null;
    }
}

export const InitialReqTicker: RequestTickerState = {
    ticker: {
        loading: false,
        data: null,
        error: null
    }
}
export const InitialReqTrade: RequestTradeState = {
    trade: {
        loading: false,
        data: null,
        error: null
    }
}
export const InitialReqOrderbook: RequestOrderbookState = {
    orderbook: {
        loading: false,
        data: null,
        error: null
    }
}

export interface RequestParam{
    marketCode: string;
}