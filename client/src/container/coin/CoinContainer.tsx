import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CoinPage from '../../components/view/coin_page/CoinPage'
import Wrapper from '../../components/wrapper/Wrapper'
import { connectSocketThunk } from '../../redux-module/coin/connect_socket';
import { getCoinDataAsync } from '../../redux-module/coin/get_coin/action';
import { getMarketListThunk, MarketList } from '../../redux-module/coin/market_list';
import { RootState } from '../../redux-module/RootReducer';

function CoinContainer() {
    const [first, setFirst] = useState(true);

    const { data, loading, error } = useSelector((state: RootState) => state.connect_socket.connectSocket);
    const marketListData  = useSelector((state: RootState) => state.market_list.marketList.data);
    const marketListError = useSelector((state: RootState) => state.market_list.marketList.error);
    // const marketListLoading = useSelector((state: RootState) => state.market_list.marketList.loading);
    // const getCoinData = useSelector((state: RootState) => state.get_coin.coinData.data);
    const dispatch = useDispatch();

    //marketlist를 받고, ws에 연결한 후 데이터 입력 받기
    useEffect(() => {
        if(first){
            setFirst(false);
            dispatch(getMarketListThunk());
            dispatch(connectSocketThunk("wss://api.upbit.com/websocket/v1"));
        }
        //socket client, marketlist 모두 받아온 경우
        if(data && data.socketClient && marketListData){
            //파라미터로 ws, marketList, request type(ticker or trade or orderbook)을 넣어서 saga에 dispatch
            let tmp: any = marketListData;
            tmp = tmp.filter((list: MarketList) => list.market.includes("KRW-")).map((list: MarketList) => list.market);
            dispatch(getCoinDataAsync.request({
                ws: data.socketClient,
                marketList: tmp,
                reqType: "orderbook"
            }));
        }
    }, [dispatch, first, marketListData, data])


    if(marketListError){
        <Wrapper>
            <div>
                Network Error. 
                <br/>
                error content : [{error}]
            </div>
        </Wrapper>
    }

    if(loading){
        return (
            <Wrapper>
                <div>loading...</div>
            </Wrapper>
        );
    }
    
    return (
        <Wrapper>
            {error ? 
                <div>
                    Network Error. 
                    <br/>
                    error content : [{error}]
                </div>
            :
                <CoinPage/>
            }
        </Wrapper>
    )
}

export default CoinContainer;
