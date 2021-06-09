import { ActionType } from "typesafe-actions";
import * as actions from './action';

export interface CoinData {
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

export type GetCoinDataAction = ActionType<typeof actions>;
export type GetCoinDataState = {
    coinData: {
        loading: boolean;
        data: CoinData | null;
        error: Error | null;
    }
};
export const InitialCoinData: GetCoinDataState = {
    coinData: {
        loading: false,
        data: null,
        error: null
    }
}