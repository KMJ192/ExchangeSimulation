import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MinuteCandle from './chart_kinds/MinuteCandle';
import DayCandle from './chart_kinds/DayCandle';
import WeekCandle from './chart_kinds/WeekCandle';
import MonthCandle from './chart_kinds/MonthCandle';
import { 
    selectMinuteChart,
    selectDayChart,
    selectWeekChart,
    selectMonthChart
} from '../../../../redux-module/coin/selected_chart/action';

import { MainChartSt } from './MainChartStyle';
import './MainChart.scss';

function MainChart() {
    const [chartSelect, setChartSelect] = useState(0);
    const dispatch = useDispatch();
    const minuteClick = () => {
        setChartSelect(0);
        dispatch(selectMinuteChart());
    }
    const dayClick = () => {
        setChartSelect(1);
        dispatch(selectDayChart());
    }
    const weekClick = () => {
        setChartSelect(2);
        dispatch(selectWeekChart());
    }
    const monthClick = () => {
        setChartSelect(3);
        dispatch(selectMonthChart());
    }

    return (
        <MainChartSt.Container className="main-chart-container">
            <MainChartSt.Header>
                <button
                    onClick={minuteClick}
                >분</button>
                <button
                    onClick={dayClick}
                >일</button>
                <button
                    onClick={weekClick}
                >주</button>
                <button
                    onClick={monthClick}
                >월</button>
            </MainChartSt.Header>
            <div>
                {chartSelect === 0 && <MinuteCandle/>}
                {chartSelect === 1 && <DayCandle/>}
                {chartSelect === 2 && <WeekCandle/>}
                {chartSelect === 3 && <MonthCandle/>}
            </div>
        </MainChartSt.Container>
    )
}

export default React.memo(MainChart);
