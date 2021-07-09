import { CandleChartOption } from './ChartComponent';
// import { 
//     DayCandleType,
//     WeekCandleType,
//     MonthCandleType,
//     MinuteCandleType
// } from '../../../../../redux-module/coin/get_candle/types';

function DataManufactoring(
    candleData: any
): CandleChartOption[]{
    let retVal: CandleChartOption[] = [];
    for(let i = 0; i < candleData.length; i++){
        const dateTime = String(candleData[i].candle_date_time_kst).substr(0, 10);
        const year = Number(dateTime.substr(0, 4));
        const month = Number(dateTime.substr(5, 2));
        const day = Number(dateTime.substr(9, 2));
        if(i !== candleData.length - 1){
            retVal.push({
                time: {
                    year: year,
                    month: month,
                    day: day
                },
                open: candleData[i].opening_price,
                high: candleData[i].high_price,
                low: candleData[i].low_price,
                close: candleData[i+1].opening_price
            });
        }else{
            retVal.push({
                time: {
                    year: year,
                    month: month,
                    day: day
                },
                open: candleData[i].opening_price,
                high: candleData[i].high_price,
                low: candleData[i].low_price,
                close: candleData[i].trade_price
            });
        }
    }
    return retVal;
}
function SocketDataManufactoring(socketData: any){

}

export {
    DataManufactoring,
    SocketDataManufactoring
}