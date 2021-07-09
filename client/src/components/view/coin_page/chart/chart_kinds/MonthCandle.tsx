import React, { useEffect, useState } from 'react';
import { DataManufactoring } from './DataManufactoring';
import { useSelector } from 'react-redux';
import ChartComponent from './ChartComponent';
import { RootState } from '../../../../../redux-module/RootReducer';
import { CandleChartOption } from './ChartComponent';

function MonthCandle() {
    const [candleState, setCandleState] = useState<CandleChartOption[]>();

    const monthCandle = useSelector((state: RootState) => state.month_candle.monthCandle);
    
    useEffect(() => {
        if(monthCandle.data) {
            setCandleState(DataManufactoring(monthCandle.data));
        }
    }, [monthCandle]);

    if(monthCandle.loading){
        return <div>loading...</div>;
    }
    if(monthCandle.error){
        return <div>error : [{monthCandle.error}]</div>;
    }

    return (
        <ChartComponent
            data={candleState}
        />
    )
}

export default React.memo(MonthCandle);
