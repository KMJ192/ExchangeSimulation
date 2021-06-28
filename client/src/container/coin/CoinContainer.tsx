import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CoinPage from '../../components/view/coin_page/CoinPage'
import Wrapper from '../../components/wrapper/Wrapper'
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
    const marketListData = useSelector((state: RootState) => state.market_list.marketList.data);
    const marketListLoading = useSelector((state: RootState) => state.market_list.marketList.loading);
    const marketListError = useSelector((state: RootState) => state.market_list.marketList.error);
    const selectedCode = useSelector((state: RootState) => state.selected_coin.coinCode);
    const dispatch = useDispatch();

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
        if(selectedCode){
            dispatch(reqTickerAsync.request({
                marketCode: selectedCode
            }));
            dispatch(reqTradeAsync.request({
                marketCode: selectedCode
            }));
            dispatch(reqOrderbookAsync.request({
                marketCode: selectedCode
            }));
        }
    }, [dispatch, selectedCode])

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
