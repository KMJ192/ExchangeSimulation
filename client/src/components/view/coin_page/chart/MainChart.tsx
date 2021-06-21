import React from 'react'

import { MainChartStyled } from './MainChartStyle';
import './MainChart.scss';

function MainChart() {
    return (
        <MainChartStyled className="main-chart-container">
            Chart출력
        </MainChartStyled>
    )
}

export default React.memo(MainChart);
