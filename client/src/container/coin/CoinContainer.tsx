import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CoinPage from '../../components/view/coin_page/CoinPage'
import Wrapper from '../../components/wrapper/Wrapper'
import { getOrderbookAsync, getTickerAsync, getTradeAsync } from '../../redux-module/coin/get_coin/action';
import { getMarketListThunk, MarketList } from '../../redux-module/coin/market_list';

import { RootState } from '../../redux-module/RootReducer';

function marketListToString(marketList: MarketList): string[]{
    const val: MarketList[] = Object.values(marketList);
    const tmp: string[] = val.filter((list: MarketList) => list.market.includes("KRW-")).map((list: MarketList) => list.market);
    return tmp;
}

function CoinContainer() {
    const [mount, setMount] = useState(true);
    const marketListData = useSelector((state: RootState) => state.market_list.marketList.data);
    const marketListLoading = useSelector((state: RootState) => state.market_list.marketList.loading);
    const marketListError = useSelector((state: RootState) => state.market_list.marketList.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if(mount){
            setMount(false);
            dispatch(getMarketListThunk());
        }
        if(marketListData){
            const marketList: string[] = marketListToString(marketListData);
            dispatch(getTickerAsync.request({
                marketList: marketList,
                reqType: "ticker"
            }));
            dispatch(getTradeAsync.request({
                marketList: marketList,
                reqType: "trade"
            }));            
            dispatch(getOrderbookAsync.request({
                marketList: marketList,
                reqType: "orderbook"
            }));
        }
    }, [dispatch, mount, marketListData])




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
