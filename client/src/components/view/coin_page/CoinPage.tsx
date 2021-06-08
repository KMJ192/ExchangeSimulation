import { throttle } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { w3cwebsocket } from 'websocket';
import { getMarketListThunk } from '../../../redux-module/coin/market_list';
import { RootState } from '../../../redux-module/RootReducer';

const createSocket = (addr: string) => {
    const ws: w3cwebsocket = new w3cwebsocket(addr);
    ws.binaryType = "arraybuffer";
    return ws;
}


function CoinPage() {
    const [list, setList] = useState("");
    const [first, setFirst] = useState(true);
    const dispatch = useDispatch();
    const marketList = useSelector((state: RootState) => state.market_list.marketList);
    
    useEffect(() => {
        //업비트 새벽 2시 20분이후 cors block 내일 다시 확인
        if(first){
            dispatch(getMarketListThunk());
            setFirst(false);
        }
        if(list !== String(marketList.data)){
            setList(String(marketList.data));
        }
    }, [dispatch, marketList, first, list]);

    const ws: w3cwebsocket = createSocket("wss://api.upbit.com/websocket/v1");

    ws.onopen = () => {
        if(list !== "" || list !== null || list !== undefined){
            //const sendData = JSON.stringify(`[{"ticket":"test"},{"type":"ticker","codes": ${JSON.stringify(list)}}]`);
            const sendData = JSON.stringify("[{'ticket':'test'},{'type':'ticker','codes': 'KRW-BTC, KRW-ETH'}]");
            //const sendData = JSON.stringify([{ticket:"test"},{"type":"ticker","codes":["KRW-BTC"]}]);
            console.log(sendData);
            ws.send(sendData);
        }
    }

    ws.onmessage = (e: any) => {
        const enc =  new TextDecoder("utf-8");
        const data = JSON.parse(enc.decode(e.data));
        console.log(data);
        throttle(() => {
        }, 1000);
    }
    ws.onerror = (e: any) => {
        console.log(e);
        ws.close();
    }
    
    return (
        <div>
            coinPage
        </div>
    )
}

export default React.memo(CoinPage);