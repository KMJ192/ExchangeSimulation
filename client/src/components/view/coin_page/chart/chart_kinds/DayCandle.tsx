import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';
import { DataManufactoring } from './DataManufactoring';
import ChartComponent from './ChartComponent';
import { CandleChartOption } from './ChartComponent';

function DayCandle() {
    const [candleState, setCandleState] = useState<CandleChartOption[]>();
    const dayCandle = useSelector((state: RootState) => state.day_candle.dayCandle);
    //console.log(dayCandle.data);

    useEffect(() => {
        if(dayCandle.data) {
            setCandleState(DataManufactoring(dayCandle.data));
        }
    }, [dayCandle])

    if(dayCandle.loading){
        return <div>loading...</div>;
    }
    if(dayCandle.error){
        return <div>error : [{dayCandle.error}]</div>;
    }

    return (
        <ChartComponent
            data={candleState}
        />
    )
}

export default React.memo(DayCandle);
