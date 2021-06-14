import axios, { AxiosError, AxiosResponse } from "axios";
import { CandleParam } from '../get_candle/types';

async function getMinutesCandles({marketCode, time}: CandleParam){
    const response = axios.get(`https://api.upbit.com/v1/candles/minutes/1?market=${marketCode}&to=${time}&count=200`)
        .then((response: AxiosResponse) => response.data)
        .catch((err: AxiosError) => err);
    return response;
}
async function getDayCandle({marketCode, time}: CandleParam) {
    const response = axios.get(`https://api.upbit.com/v1/candles/days?market=${marketCode}&to=${time}&count=200`)
        .then((response: AxiosResponse) => response.data)
        .catch((err: AxiosError) => err);
    return response;
}
async function getWeekCandle({marketCode, time}: CandleParam){
    const response = axios.get(`https://api.upbit.com/v1/candles/weeks?market=${marketCode}&to=${time}&count=200`)
        .then((response: AxiosResponse) => response.data)
        .catch((err: AxiosError) => err);
    return response;
}
async function getMonthCandle({marketCode, time}: CandleParam){
    const response = axios.get(`https://api.upbit.com/v1/candles/months?market=${marketCode}&to=${time}&count=200`)
        .then((response: AxiosResponse) => response.data)
        .catch((err: AxiosError) => err);
    return response;
}
export {
    getMinutesCandles,
    getDayCandle,
    getWeekCandle,
    getMonthCandle
}