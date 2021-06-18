import React from 'react';
import MainChart from './chart/MainChart';
import RealTimeList from './real_time_list/RealTimeList';
import SellBuy from './sell_buy/SellBuy';
import Orderbook from './orderbook/Orderbook';
import Trade from './trade/Trade';

import { PSGrid } from './CoinPageStyle';
import './CoinPage.scss';

function CoinPage() { 

    return (
        <div className="coin-page-container">
            <div className="chart-plotinv-dealstate-container">
                <MainChart/>
                <PSGrid>
                    <Orderbook/>
                    <SellBuy/>
                    <Trade/>
                </PSGrid>
            </div>
            <RealTimeList/>
        </div>
    )
}

export default React.memo(CoinPage);