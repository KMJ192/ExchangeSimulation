import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export interface CandleParam{
    marketCode: string;
    time: string;
}

export interface MinuteCandleType{
    market:	string;
    candle_date_time_utc: string
    candle_date_time_kst: string
    opening_price: number;
    high_price: number;
    low_price: number;
    trade_price: number;
    timestamp: number;
    candle_acc_trade_price: number;
    candle_acc_trade_volume: number;
    unit: number;
}

export interface DayCandleType{
    market:	string;
    candle_date_time_utc: string;
    candle_date_time_kst: string
    opening_price: number;
    high_price: number;
    low_price: number;
    trade_price: number;
    timestamp: number;
    candle_acc_trade_price: number;
    candle_acc_trade_volume: number;
    prev_closing_price: number;
    change_price: number;
    change_rate: number;
    converted_trade_price: number;
}

export interface WeekCandleType{
    market: string;
    candle_date_time_utc: string;
    candle_date_time_kst: string;
    opening_price: number;
    high_price: number;
    low_price: number;
    trade_price: number;
    timestamp: number
    candle_acc_trade_price: number;
    candle_acc_trade_volume: number;
    first_day_of_period: string;
}

export interface MonthCandleType{
    market: string
    candle_date_time_utc: string;
    candle_date_time_kst: string;
    opening_price: number;
    high_price: number;
    low_price: number;
    trade_price: number;
    timestamp: number;
    candle_acc_trade_price: number;
    candle_acc_trade_volume: number;
    first_day_of_period: string;
}

export type CandleAction = ActionType<typeof actions>
export type MinuteCandleState = {
    minuteCandle: {
        loading: boolean;
        data: MinuteCandleType | null;
        error: Error | null;
    }
}
export type DayCandleState = {
    dayCandle: {
        loading: boolean;
        data: DayCandleType | null;
        error: Error | null;
    }
}
export type WeekCandleState = {
    weekCandle: {
        loading: boolean;
        data: WeekCandleType | null;
        error: Error | null;
    }
}
export type MonthCandleState = {
    monthCandle: {
        loading: boolean;
        data: MonthCandleType | null;
        error: Error | null;
    }
}

export const InitialMinuteCandle: MinuteCandleState = {
    minuteCandle: {
        loading: false,
        data: null,
        error: null
    }
}
export const InitialDayCandle: DayCandleState = {
    dayCandle: {
        loading: false,
        data: null,
        error: null
    }
}
export const InitialWeekCandle: WeekCandleState = {
    weekCandle: {
        loading: false,
        data: null,
        error: null
    }
}
export const InitialMonthCandle: MonthCandleState = {
    monthCandle: {
        loading: false,
        data: null,
        error: null
    }
}