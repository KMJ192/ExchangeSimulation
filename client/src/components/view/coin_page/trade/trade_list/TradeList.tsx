import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Trade } from '../../../../../redux-module/coin/get_coin';
import { RootState } from '../../../../../redux-module/RootReducer';
import TradeListItem from './TradeListItem';

import { TradeListSt } from './TradeListStyle';

interface Props{
    coinCode: string;
}

function getTradeData(trade: Trade[], tradeData: any, coinCode: string){
    if(tradeData[coinCode]){
        trade.unshift(tradeData[coinCode]);
        trade.pop();
    }
    return trade;
}

function marketCode(trade: any){
    return {
        ...trade,
        code: trade.market
    }
}

async function request(addr: string) {
    return await axios.get(addr, {
        withCredentials: false
    }).then(response => response.data)
}

function TradeList({ coinCode }: Props) {
    const [trade, setTrade] = useState<Trade[]>();
    const tradeData = useSelector((state: RootState) => state.trade.trade.data);
    
    useEffect(() => {
        //console.log(trade);
        if(!trade){
            if(coinCode) {
                request(`https://api.upbit.com/v1/trades/ticks?market=${coinCode}&count=50`)
                .then(response => setTrade(response));
            }
        }else if(marketCode(trade[0]).code && marketCode(trade[0]).code !== coinCode){
            if(coinCode) {
                request(`https://api.upbit.com/v1/trades/ticks?market=${coinCode}&count=50`)
                .then(response => setTrade(response));
            }
        }
        else if(tradeData) {
            const tradeListItem = getTradeData(trade, tradeData, coinCode);
            if(tradeListItem && trade !== tradeListItem) setTrade(tradeListItem)
        }
    }, [trade, tradeData, coinCode]);

    return (
        <TradeListSt.Container className="trade-list-container">
            <div className="trade-list-header">
                <div>체결시간</div>
                <div>체결가격</div>
                <div>체결량</div>
            </div>
            <div className="trade-list-body">
                {/* {} */}
            </div>
        </TradeListSt.Container>
    )
}

export default React.memo(TradeList);
