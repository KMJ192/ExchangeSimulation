import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';
import DataManufactoring from './DataManufactoring';
import { CandleChartOption } from './ChartComponent';

//분 상태 업데이트
function MinuteCandle() {
    const [candleState, setCandleState] = useState<CandleChartOption[]>();
    const minuteCandle = useSelector((state: RootState) => state.minute_candle.minuteCandle);
    //const socketData = useSelector((state: RootState) => state.)

    useEffect(() => {
        if(minuteCandle.data) {
            setCandleState(DataManufactoring(minuteCandle.data));
        }
    }, [minuteCandle])

    if(minuteCandle.loading){
        return <div>loading...</div>;
    }
    if(minuteCandle.error){
        return <div>error : [{minuteCandle.error}]</div>;
    }
    
    return (
        <div>
            Minute Chart
        </div>
    )
}

export default React.memo(MinuteCandle);
