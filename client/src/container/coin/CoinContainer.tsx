import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CoinPage from '../../components/view/coin_page/CoinPage'
import Wrapper from '../../components/wrapper/Wrapper'
import { connectSocketThunk } from '../../redux-module/coin/connect_socket';
//import { getDayCandleAsync, getMinuteCandleAsync, getMonthCandleAsync, getWeekCandleAsync } from '../../redux-module/coin/get_candle';
import { getCoinDataAsync } from '../../redux-module/coin/get_coin/action';
import { getMarketListThunk, MarketList } from '../../redux-module/coin/market_list';

import { RootState } from '../../redux-module/RootReducer';

function marketListToString(marketList: MarketList): string[]{
    const val: MarketList[] = Object.values(marketList);
    const tmp: string[] = val.filter((list: MarketList) => list.market.includes("KRW-")).map((list: MarketList) => list.market);
    return tmp;
}

function CoinContainer() {
    const [first, setFirst] = useState(true);
    const socket = useSelector((state: RootState) => state.connect_socket.connectSocket);
    //const marketList = useSelector((state: RootState) => state.market_list.marketList);
    const marketListError = useSelector((state: RootState) => state.market_list.marketList.error);
    const marketListData = useSelector((state: RootState) => state.market_list.marketList.data);

    //const coinData: any = useSelector((state: RootState) => state.get_coin);
    //console.log(coinData);

    const dispatch = useDispatch();

    useEffect(() => {
        if(first){
            setFirst(false);
            dispatch(getMarketListThunk());
            dispatch(connectSocketThunk("wss://api.upbit.com/websocket/v1"));
            // dispatch(getMinuteCandleAsync.request({
            //     marketCode: "KRW-BTC",
            //     time: "2020-01-01T00:00:00Z"
            // }));
            // dispatch(getDayCandleAsync.request({
            //     marketCode: "KRW-BTC",
            //     time: "2020-01-01T00:00:00Z"
            // }));
            // dispatch(getWeekCandleAsync.request({
            //     marketCode: "KRW-BTC",
            //     time: "2020-01-01T00:00:00Z"
            // }));
            // dispatch(getMonthCandleAsync.request({
            //     marketCode: "KRW-BTC",
            //     time: "2020-01-01T00:00:00Z"
            // }));
        }
        if(socket.data && socket.data.socketClient && marketListData){
            const marketList: string[] = marketListToString(marketListData);
            dispatch(getCoinDataAsync.request({
                ws: socket.data.socketClient,
                marketList: marketList,
                reqType: "ticker"
            }));
        }
    }, [dispatch, first, marketListData, socket.data])


    if(marketListError){
        <Wrapper>
            <div>
                Network Error. 
                <br/>
                error content : [{marketListError}]
            </div>
        </Wrapper>
    }

    if(socket.loading){
        return (
            <Wrapper>
                <div>loading...</div>
            </Wrapper>
        );
    }
    
    return (
        <Wrapper>
            {socket.error ? 
                <div>
                    Network Error. 
                    <br/>
                    error content : [{socket.error}]
                </div>
            :
                <CoinPage/>
            }
        </Wrapper>
    )
}

export default React.memo(CoinContainer);
