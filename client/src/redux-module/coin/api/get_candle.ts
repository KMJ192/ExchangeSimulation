import axios, { AxiosResponse } from "axios";
import { CandleParam } from '../get_candle/types';

async function requestToUpbit(addr: string){
    return await axios.get(addr, {
        withCredentials: false
    }).then((response: AxiosResponse) => response.data);
}

function getMinutesCandles({marketCode, time}: CandleParam){
    return requestToUpbit(`https://api.upbit.com/v1/candles/minutes/1?market=${marketCode}&to=${time}&count=200`);
}
function getDayCandle({marketCode, time}: CandleParam) {
    return requestToUpbit(`https://api.upbit.com/v1/candles/days?market=${marketCode}&to=${time}&count=200`);
}
function getWeekCandle({marketCode, time}: CandleParam){
    return requestToUpbit(`https://api.upbit.com/v1/candles/weeks?market=${marketCode}&to=${time}&count=200`);
}
async function getMonthCandle({marketCode, time}: CandleParam){
    return requestToUpbit(`https://api.upbit.com/v1/candles/months?market=${marketCode}&to=${time}&count=200`);
}
export {
    getMinutesCandles,
    getDayCandle,
    getWeekCandle,
    getMonthCandle
};