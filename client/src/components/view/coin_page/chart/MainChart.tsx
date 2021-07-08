import React, { useState } from 'react';
import MinuteCandle from './chart_kinds/MinuteCandle';
import DayCandle from './chart_kinds/DayCandle';
import WeekCandle from './chart_kinds/WeekCandle';
import MonthCandle from './chart_kinds/MonthCandle';

import { MainChartSt } from './MainChartStyle';
import './MainChart.scss';

//chart kinds select redux modulization
function MainChart() {
    const [chartSelect, setChartSelect] = useState(0);
    
    const minuteClick = () => {
        setChartSelect(0);
    }
    const dayClick = () => {
        setChartSelect(1);
    }
    const weekClick = () => {
        setChartSelect(2);
    }
    const monthClick = () => {
        setChartSelect(3);
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
