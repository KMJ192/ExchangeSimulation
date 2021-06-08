import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { w3cwebsocket } from 'websocket';
import { connectSocketThunk } from '../../../redux-module/coin/connect_socket';
import { getMarketListThunk } from '../../../redux-module/coin/market_list';
import { RootState } from '../../../redux-module/RootReducer';

function CoinPage() {
    const [first, setFirst] = useState(true);
    const dispatch = useDispatch();
    const marketList = useSelector((state: RootState) => state.market_list.marketList);
    const ws = useSelector((state: RootState) => state.connect_socket.connectSocket.data?.socketClient);

    useEffect(() => {
        //업비트 새벽 2시 cors block
        if(first){
            dispatch(getMarketListThunk());
            dispatch(connectSocketThunk("wss://api.upbit.com/websocket/v1"));
            setFirst(false);
        }
    }, [dispatch, first, marketList]);
    
    if(ws){
        ws.onopen = () => {
            if(marketList.data){
                const sendData = JSON.stringify([
                    { ticket:"test" },
                    { type:"ticker", codes:marketList.data }
                ]);
                ws.send(sendData);
            }
        }
        ws.onmessage = (e: any) => {
            const enc =  new TextDecoder("utf-8");
            const data = JSON.parse(enc.decode(e.data));
            console.log(data);
        }
        ws.onerror = (e: any) => {
            ws.close();
            console.log(e);
        }
    }
    
    return (
        <div>
            coinPage
        </div>
    )
}

export default React.memo(CoinPage);