import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { w3cwebsocket } from 'websocket';
import { connectSocketThunk } from '../../../redux-module/coin/connect_socket';
import { CoinData } from '../../../redux-module/coin/get_coin/types';
import { getMarketListThunk } from '../../../redux-module/coin/market_list';
import { MarketList } from '../../../redux-module/coin/market_list/types';

interface Props{
    ws: w3cwebsocket | undefined;
    marketList: MarketList | null;
}

function CoinPage({ws, marketList} : Props) {
    const [first, setFirst] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if(first){
            dispatch(getMarketListThunk());
            dispatch(connectSocketThunk("wss://api.upbit.com/websocket/v1"));
            setFirst(false);
        }
    }, [dispatch, first, marketList]);
    
    if(ws){
        ws.onopen = () => {
            if(marketList){
                const sendData = JSON.stringify([
                    { ticket:"test" },
                    { type:"ticker", codes:marketList }
                ]);
                ws.send(sendData);
            }
        }
        ws.onmessage = (e: any) => {
            const enc =  new TextDecoder("utf-8");
            const data: CoinData = JSON.parse(enc.decode(e.data));
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