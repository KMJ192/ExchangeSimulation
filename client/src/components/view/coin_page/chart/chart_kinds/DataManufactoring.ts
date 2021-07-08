import { CandleChartOption } from './ChartComponent';
// import { 
//     DayCandleType,
//     WeekCandleType,
//     MonthCandleType,
//     MinuteCandleType
// } from '../../../../../redux-module/coin/get_candle/types';

export default function DataManufactoring(
    candleData: any
): CandleChartOption[]{
    let retVal: CandleChartOption[] = [];
    for(let i = 0; i < candleData.length; i++){
        if(i !== candleData.length - 1){
            retVal.push({
                time: candleData[i].candle_date_time_kst,
                open: candleData[i].opening_price,
                high: candleData[i].high_price,
                low: candleData[i].low_price,
                close: candleData[i+1].opening_price
            });
        }else{
            retVal.push({
                time: candleData[i].candle_date_time_kst,
                open: candleData[i].opening_price,
                high: candleData[i].high_price,
                low: candleData[i].low_price,
                close: candleData[i].trade_price
            });
        }
    }

    return retVal;
}