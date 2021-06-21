import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux-module/RootReducer';
import MainChart from './chart/MainChart';
import RealTimeList from './real_time_list/RealTimeList';
import SellBuy from './sell_buy/SellBuy';
import Orderbook from './orderbook/Orderbook';
import TradeWindow from './trade/Trade';
import { selectCoin } from '../../../redux-module/coin/selected_coin';
import { MarketList } from '../../../redux-module/coin/market_list';

import { PSGrid } from './CoinPageStyle';
import './CoinPage.scss';

export function numberToKrw(krw: string) {
    return krw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function marketListFilterKRW(marketList: MarketList){
    return Object.values(marketList).filter((list: MarketList) => list.market.includes("KRW-"));
}

function pullMarketData(ticker: any, trade: any, orderbook: any, marketCode: string){
    return {
        ticker: ticker[marketCode],
        trade: trade[marketCode],
        orderbook: orderbook[marketCode]
    }
}

function CoinPage() {
    const marketList = useSelector((state: RootState) => state.market_list.marketList);
    const dispatch = useDispatch();
    const selectedCoin = (e: React.MouseEvent<HTMLLIElement>) => {
        const code = e.currentTarget.innerText.split("\n");
        dispatch(selectCoin(code[0]));
    }
    const ticker = useSelector((state: RootState) => state.ticker.ticker.data, (prev, next) => prev === next);
    const trade = useSelector((state: RootState) => state.trade.trade.data, (prev, next) => prev === next);
    const orderbook = useSelector((state: RootState) => state.orderbook.orderbook.data, (prev, next) => prev === next);
    const marketCode = useSelector((state: RootState) => state.selected_coin.coinCode, (prev, next) => prev === next);

    useEffect(() => {
        if(marketList.data){
            const capCoin = marketListFilterKRW(marketList.data);
            if(capCoin.length > 0) {
                dispatch(selectCoin(capCoin[0].market));
            }
        }
        if(marketCode && ticker && trade && orderbook){
            const totalData = pullMarketData(ticker, trade, orderbook, marketCode);
            //console.log(totalData);
        }

    }, [dispatch, marketCode, marketList, orderbook, ticker, trade])

    return (
        <div className="coin-page-container">
            <div className="chart-plotinv-dealstate-container">
                <MainChart/>
                <PSGrid>
                    <Orderbook/>
                    <SellBuy/>
                    <TradeWindow/>
                </PSGrid>
            </div>
            <RealTimeList
                selectedCoin={selectedCoin} {...selectedCoin}
            />
        </div>
    );
}

export default React.memo(CoinPage);