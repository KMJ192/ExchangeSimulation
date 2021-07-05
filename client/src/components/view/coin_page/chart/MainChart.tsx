import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';

import { MainChartStyled } from './MainChartStyle';
import './MainChart.scss';

function candleArray(prev: any){
    console.log(Object.values(prev).length);
}

function MainChart() {
    const minuteCandle = useSelector((state: RootState) => state.minute_candle.minuteCandle);
    const dayCande = useSelector((state: RootState) => state.day_candle.dayCandle);
    const weekCandle = useSelector((state: RootState) => state.week_candle.weekCandle);
    const monthCandle = useSelector((state: RootState) => state.month_candle.monthCandle);

    useEffect(() => {
        // if(minuteCandle.data) candleArray(minuteCandle.data);
        // if(dayCande.data) candleArray(dayCande.data);
        // if(weekCandle.data) candleArray(weekCandle.data);
        // if(monthCandle.data) candleArray(monthCandle.data);
    }, [dayCande, minuteCandle, monthCandle, weekCandle])

    return (
        <MainChartStyled className="main-chart-container">
            Chart출력
        </MainChartStyled>
    )
}

export default React.memo(MainChart);
