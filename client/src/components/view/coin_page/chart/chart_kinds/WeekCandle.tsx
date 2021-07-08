import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';

function WeekCandle() {
    const weekCandle = useSelector((state: RootState) => state.week_candle.weekCandle);
    //console.log(weekCandle.data);

    return (
        <div>
            WeekChart
        </div>
    )
}

export default React.memo(WeekCandle);
