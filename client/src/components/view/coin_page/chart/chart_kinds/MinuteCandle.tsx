import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';
import ChartComponent from './ChartComponent';
import { DataManufactoring } from './DataManufactoring';
import { CandleChartOption } from './ChartComponent';

//분 상태 업데이트
function MinuteCandle() {
    const [mount, setMount] = useState(true);
    const [candleState, setCandleState] = useState<CandleChartOption[]>();
    const minuteCandle = useSelector((state: RootState) => state.minute_candle.minuteCandle);
    //const selectedCode = useSelector((state: RootState) => state.selected_coin.coinCode);
    //const socketData = useSelector((state: RootState) => state.ticker.ticker)

    //console.log(mount);
    useEffect(() => {
        if(mount && minuteCandle.data) {
            setMount(false);
            setCandleState(DataManufactoring(minuteCandle.data));
        }
    }, [minuteCandle, mount]);

    if(minuteCandle.loading){
        return <div>loading...</div>;
    }
    if(minuteCandle.error){
        return <div>error : [{minuteCandle.error}]</div>;
    }
    
    return (
        <ChartComponent
            data={candleState}
        />
    );
}

export default React.memo(MinuteCandle);
