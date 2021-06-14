import React from 'react';
import MainChart from './chart/MainChart';
import RealTimeTable from './real_time_info/RealTimeList';
import SellBuy from './sell_buy/SellBuy';
import DealState from './deal_state/DealState';

import { PSGrid } from './CoinPageStyle';
import './CoinPage.scss';

function CoinPage() { 

    return (
        <div className="coin-page-container">
            <div className="chart-plotinv-dealstate-container">
                <MainChart/>
                <PSGrid>
                    <DealState/>
                    <SellBuy/>
                </PSGrid>
            </div>
            <RealTimeTable/>
        </div>
    )
}

export default React.memo(CoinPage);