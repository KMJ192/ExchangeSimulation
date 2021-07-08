import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';

function DayCandle() {
    const tmp = useSelector((state: RootState) => state.day_candle.dayCandle);
    console.log(tmp);
    return (
        <div>
            Day Chart
        </div>
    )
}

export default React.memo(DayCandle);
