import React from 'react';
import Wrapper from '../../wrapper/Wrapper';
//import { w3cwebsocket as W3CWebsocket } from 'websocket';
import axios, { AxiosResponse } from 'axios';

interface MarketList {
    market: string;
    korean_name: string;
    english_name : string;
}

async function getMarketList() {
    let returnData;
    try{
        returnData = await axios.get('https://api.upbit.com/v1/market/all', {
            withCredentials: false
        });
    }catch(e: any){
        returnData = e;
    }
    return returnData;
}
function filterMarket(response: AxiosResponse) : string[]{
    const marketList: string[] = response.data
        .filter((list: MarketList) => list.market.includes('KRW-'))
        .map((list: MarketList) => list.market);
    return marketList;
}

function CoinPage() {
    const run = () => {
        getMarketList().then((response: AxiosResponse) => {
            console.log(filterMarket(response));
        });
    }

    return (
        <Wrapper>
            CoinPage
            <button onClick={run}>test</button>
        </Wrapper>
    )
}

export default React.memo(CoinPage);
