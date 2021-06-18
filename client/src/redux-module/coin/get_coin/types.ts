import { ActionType } from "typesafe-actions";
import * as actions from './action';

export interface Ticker {
    type: string;
    code: string;
    opening_price: number;
    high_price: number;
    trade_price: number;
    prev_closing_price: number;
    change: string;
    change_price: number;
    signed_change_price: number;
    change_rate: number;
    signed_change_rate: number;
    trade_volume: number;
    acc_trade_volume: number;
    acc_trade_volume_24h: number;
    acc_trade_price: number;
    acc_trade_price_24h: number;
    trade_date: string;
    trade_time: string;
    trade_timestamp: number;
    ask_bid: string;
    acc_ask_volume: number;
    acc_bid_volume: number;
    highest_52_week_price: number;
    highest_52_week_date: string;
    lowest_52_week_price: number;
    lowest_52_week_date: string;
    trade_status: string;
    market_state: string;
    market_state_for_ios: string;
    is_trading_suspended: boolean;
    delisting_date: Date;
    market_warning: string;
    timestamp: number;
    stream_type: string;
}

export interface Trade{
    ask_bid: "ASK" | "BID";
    change: string;
    change_price: string;
    code: string;
    prev_closing_price: number;
    sequential_id: number;
    stream_type: string;
    timestamp: number;
    trade_date: string;
    trade_price: number;
    trade_time: string;
    trade_timestamp: number;
    trade_volume: number;
    type: string;
}

export interface Orderbook{
    code: string;
    orderbook_units: [{
        ask_price: number;
        ask_size: number;
        bid_price: number;
        bid_size: number;
    }]
    stream_type: string;
    timestamp: number;
    total_ask_size: number;
    total_bid_size: number;
    type: string;
}

export type GetSocketDataAction = ActionType<typeof actions>;

export type GetTickerState = {
    ticker: {
        loading: boolean;
        data: Ticker | null;
        error: Error | null;
    }
};
export const InitialGetTicker: GetTickerState = {
    ticker: {
        loading: false,
        data: null,
        error: null
    }
}

export type GetTradeState = {
    trade: {
        loading: boolean;
        data: Trade | null;
        error: Error | null;
    }
};
export const InitialGetTrade: GetTradeState = {
    trade: {
        loading: false,
        data: null,
        error: null
    }
}

export type GetOrderbookState = {
    orderbook: {
        loading: boolean;
        data: Orderbook | null;
        error: Error | null;
    }
};
export const InitialGetOrderbook: GetOrderbookState = {
    orderbook: {
        loading: false,
        data: null,
        error: null
    }
}

export interface ReqUpbitSocketParam{
    marketList: string[];
    reqType: "ticker" | "orderbook" | "trade";
}