import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CoinPage from '../../components/view/coin_page/CoinPage'
import Wrapper from '../../components/wrapper/Wrapper'
import { getDayCandleAsync, getMinuteCandleAsync, getMonthCandleAsync, getWeekCandleAsync } from '../../redux-module/coin/get_candle';
import { getOrderbookAsync, getTickerAsync, getTradeAsync } from '../../redux-module/coin/get_coin/action';
import { getMarketListThunk, MarketList } from '../../redux-module/coin/market_list';
import { reqOrderbookAsync, reqTickerAsync, reqTradeAsync } from '../../redux-module/coin/req_coin';

import { RootState } from '../../redux-module/RootReducer';

function marketListToString(marketList: MarketList): string[]{
    const val: MarketList[] = Object.values(marketList);
    const tmp: string[] = val.filter((list: MarketList) => list.market.includes("KRW-")).map((list: MarketList) => list.market);
    return tmp;
}

function CoinContainer() {
    const [prevCoin, setNextCoin] = useState("");

    const marketListData = useSelector((state: RootState) => state.market_list.marketList.data);
    const marketListLoading = useSelector((state: RootState) => state.market_list.marketList.loading);
    const marketListError = useSelector((state: RootState) => state.market_list.marketList.error);
    const selectedCode = useSelector((state: RootState) => state.selected_coin.coinCode);
    const dispatch = useDispatch();

    const today = useCallback(() => {
        const today = new Date();
        let month = String(today.getMonth() + 1);
        let day = String(today.getDate());
        if(String(month).length === 1){
            month = `0${month}`;
        }
        if(String(day).length === 1){
            day = `0${day}`;
        }
        return `${today.getFullYear()}-${month}-${day}`
    }, [])

    useEffect(() => {
        dispatch(getMarketListThunk());
    }, [dispatch]);

    useEffect(() => {
        if(marketListData){
            const marketList: string[] = marketListToString(marketListData);
            dispatch(getTickerAsync.request({
                marketList: marketList,
                reqType: "ticker"
            }));
            dispatch(getOrderbookAsync.request({
                marketList: marketList,
                reqType: "orderbook"
            }));
            dispatch(getTradeAsync.request({
                marketList: marketList,
                reqType: "trade"
            }));
        }
    }, [dispatch, marketListData])

    useEffect(() => {
        if(prevCoin !== selectedCode){
            setNextCoin(selectedCode);
            dispatch(reqTickerAsync.request({
                marketCode: selectedCode
            }));
            dispatch(reqTradeAsync.request({
                marketCode: selectedCode
            }));
            dispatch(reqOrderbookAsync.request({
                marketCode: selectedCode
            }));
            const now = `${today()}T00:00:00Z`;
            dispatch(getMinuteCandleAsync.request({
                marketCode: selectedCode,
                time: now
            }));
            dispatch(getDayCandleAsync.request({
                marketCode: selectedCode,
                time: now
            }));
            dispatch(getWeekCandleAsync.request({
                marketCode: selectedCode,
                time: now
            }));
            dispatch(getMonthCandleAsync.request({
                marketCode: selectedCode,
                time: now
            }))
        }
    }, [dispatch, prevCoin, selectedCode, today])

    if(marketListLoading){
        return (
            <Wrapper>
                <div>loading...</div>
            </Wrapper>
        );
    }
    
    return (
        <Wrapper>
            {marketListError ? 
                <div>
                    Network Error. 
                    <br/>
                    error content : [{marketListError}]
                </div>
            :
                <CoinPage/>
            }
        </Wrapper>
    );
}

export default React.memo(CoinContainer);
