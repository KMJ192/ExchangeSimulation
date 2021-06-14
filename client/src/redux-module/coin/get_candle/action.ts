import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { 
    CandleParam, 
    MinuteCandleType,
    DayCandleType,
    WeekCandleType,
    MonthCandleType
} from "./types";

export const GET_MINUTE_CANDLE = 'coin/GET_MINUTE_CANDLE';
export const GET_MINUTE_CANDLE_SUCCESS = 'coin/GET_MINUTE_CANDLE_SUCCESS';
export const GET_MINUTE_CANDLE_ERROR = 'coin/GET_MINUTE_CANDLE_ERROR';

export const GET_DAY_CANDLE = 'coin/GET_DAY_CANDLE';
export const GET_DAY_CANDLE_SUCCESS = 'coin/GET_DAY_CANDLE_SUCCESS';
export const GET_DAY_CANDLE_ERROR = 'coin/GET_DAY_CANDLE_ERROR';

export const GET_WEEK_CANDLE = 'coin/GET_WEEK_CANDLE';
export const GET_WEEK_CANDLE_SUCCESS = 'coin/GET_WEEK_CANDLE_SUCCESS';
export const GET_WEEK_CANDLE_ERROR = 'coin/GET_WEEK_CANDLE_ERROR';

export const GET_MONTH_CANDLE = 'coin/GET_MONTH_CANDLE';
export const GET_MONTH_CANDLE_SUCCESS = 'coin/GET_MONTH_CANDLE_SUCCESS';
export const GET_MONTH_CANDLE_ERROR = 'coin/GET_MONTH_CANDLE_ERROR';

export const getMinuteCandleAsync = createAsyncAction(
    GET_MINUTE_CANDLE,
    GET_MINUTE_CANDLE_SUCCESS,
    GET_MINUTE_CANDLE_ERROR
)<CandleParam, MinuteCandleType, AxiosError>();

export const getDayCandleAsync = createAsyncAction(
    GET_DAY_CANDLE,
    GET_DAY_CANDLE_SUCCESS,
    GET_DAY_CANDLE_ERROR
)<CandleParam, DayCandleType, AxiosError>();

export const getWeekCandleAsync = createAsyncAction(
    GET_WEEK_CANDLE,
    GET_WEEK_CANDLE_SUCCESS,
    GET_WEEK_CANDLE_ERROR
)<CandleParam, WeekCandleType, AxiosError>();

export const getMonthCandleAsync = createAsyncAction(
    GET_MONTH_CANDLE,
    GET_MONTH_CANDLE_SUCCESS,
    GET_MONTH_CANDLE_ERROR
)<CandleParam, MonthCandleType, AxiosError>();