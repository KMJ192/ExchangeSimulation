import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CoinPage from '../../components/view/coin_page/CoinPage'
import Wrapper from '../../components/wrapper/Wrapper'
import { connectSocketThunk } from '../../redux-module/coin/connect_socket';
import { getMarketListThunk } from '../../redux-module/coin/market_list';
import { RootState } from '../../redux-module/RootReducer';

function CoinContainer() {
    const [first, setFirst] = useState(true);

    const { data, loading, error } = useSelector((state: RootState) => state.connect_socket.connectSocket);
    const marketListData = useSelector((state: RootState) => state.market_list.marketList.data);
    const marketListError = useSelector((state: RootState) => state.market_list.marketList.error);
    // const marketListLoading = useSelector((state: RootState) => state.market_list.marketList.loading);
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
            
        }
        return () => {
            if(data && data.socketClient){
                //unMount시 socket연결 해제
                data.socketClient.close();
                // if(ws){
                //     ws.onopen = () => {
                //         if(marketList){
                //             const sendData = JSON.stringify([
                //                 { ticket:"test" },
                //                 { type:"ticker", codes:marketList }
                //             ]);
                //             ws.send(sendData);
                //         }
                //     }
                //     ws.onmessage = (e: any) => {
                //         const enc =  new TextDecoder("utf-8");
                //         const data: CoinData = JSON.parse(enc.decode(e.data));
                //         console.log(data);
                //     }
                //     ws.onerror = (e: any) => {
                //         ws.close();
                //         console.log(e);
                //     }
                // }
            }
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
