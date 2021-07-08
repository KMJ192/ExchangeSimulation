import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';

function MonthCandle() {
    const monthCandle = useSelector((state: RootState) => state.month_candle.monthCandle);
    //console.log(monthCandle.data);
    
    return (
        <div>
            Month Chart
        </div>
    )
}

export default React.memo(MonthCandle);
