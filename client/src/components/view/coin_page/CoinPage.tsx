import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux-module/RootReducer';
import MainChart from './chart/MainChart';
import RealTimeList from './real_time_list/RealTimeList';
import SellBuy from './sell_buy/SellBuy';
import Orderbook from './orderbook/Orderbook';
import Trade from './trade/Trade';
import { MarketList } from '../../../redux-module/coin/market_list';

import { PSGrid } from './CoinPageStyle';
import './CoinPage.scss';

export function numberToKrw(krw: string) {
    return krw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function marketListFilterKRW(marketList: MarketList){
    return Object.values(marketList).filter((list: MarketList) => list.market.includes("KRW-"));
}

function CoinPage() {
    const marketList = useSelector((state: RootState) => state.market_list.marketList);
    const [coinCode, setCoinCode] = useState("");

    const selectedCoin = (e: React.MouseEvent<HTMLLIElement>) => {
        const code = e.currentTarget.innerText.split("\n");
        setCoinCode(code[0]);
    }

    useEffect(() => {
        if(marketList.data){
            const capCoin = marketListFilterKRW(marketList.data);
            if(capCoin.length > 0) setCoinCode(capCoin[0].market);
        }
    }, [marketList])

    return (
        <div className="coin-page-container">
            <div className="chart-plotinv-dealstate-container">
                <MainChart/>
                <PSGrid>
                    <Orderbook
                       coinCode={coinCode} 
                    />
                    <SellBuy/>
                    <Trade/>
                </PSGrid>
            </div>
            <RealTimeList
                selectedCoin={selectedCoin} {...selectedCoin}
            />
        </div>
    )
}

export default React.memo(CoinPage);