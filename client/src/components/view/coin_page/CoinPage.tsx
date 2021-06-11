import React from 'react';

import MainChart from './MainChart';
import RealTimeTable from './RealTimeTable';
import PlotInvest from './PlotInvest';
import DealState from './DealState';

import { PDGrid } from './CoinPageStyle';
import './CoinPage.scss';

function CoinPage() { 

    return (
        <div className="coin-page-container">
            <div className="chart-plotinv-dealstate-container">
                <MainChart/>
                <PDGrid>
                    <DealState/>
                    <PlotInvest/>
                </PDGrid>
            </div>
            <RealTimeTable/>
        </div>
    )
}

export default React.memo(CoinPage);