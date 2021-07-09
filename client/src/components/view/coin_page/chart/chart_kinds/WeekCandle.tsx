import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';
import { DataManufactoring } from './DataManufactoring';
import ChartComponent from './ChartComponent';
import { CandleChartOption } from './ChartComponent';

function WeekCandle() {
    const [candleState, setCandleState] = useState<CandleChartOption[]>();
    const weekCandle = useSelector((state: RootState) => state.week_candle.weekCandle);
    //console.log(weekCandle.data);

    useEffect(() => {
        if(weekCandle.data) {
            setCandleState(DataManufactoring(weekCandle.data));
        }
    }, [weekCandle]);

    if(weekCandle.loading){
        return <div>loading...</div>;
    }
    if(weekCandle.error){
        return <div>error : [{weekCandle.error}]</div>;
    }

    return (
        <ChartComponent
            data={candleState}
        />
    )
}

export default React.memo(WeekCandle);
