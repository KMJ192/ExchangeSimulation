import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import { Trade } from '../../../../redux-module/coin/get_coin';
import TradeList from './trade_list/TradeList';
import DayTradeList from './day_trade_list/DayTradeList';

import { TradeBox } from './TradeStyle';
import './Trade.scss';

// interface TradeData{
//     code: string;
//     ask_bid: "ASK" | "BID";
//     changePrice: number;    //전일대비
//     tradeDate: string;      //체결날짜
//     tradeTime: string;      //체결시간
//     tradeVolume: number;    //체결량
// }

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
    }).then(response => response.data);
}

function TradeWindow() {
    const [selected, setSelected] = useState(true);
    const [trade, setTrade] = useState<Trade[]>();

    const tradeContents = () => {
        setSelected(true);
    }
    const dayContents = () => {
        setSelected(false);
    }

    const tradeData = useSelector((state: RootState) => state.trade.trade.data);
    const coinCode = useSelector((state: RootState) => state.selected_coin.coinCode);
    
    useEffect(() => {
        //console.log(trade);
        if(!trade){
            if(coinCode) {
                request(`https://api.upbit.com/v1/trades/ticks?market=${coinCode}&count=50`)
                .then(response => {
                    setTrade(response)
                });
            }
        }else if(marketCode(trade[0]).code && marketCode(trade[0]).code !== coinCode){
            if(coinCode) {
                request(`https://api.upbit.com/v1/trades/ticks?market=${coinCode}&count=50`)
                .then(response => setTrade(response));
            }
        }else if(tradeData) {
            const tradeListItem = getTradeData(trade, tradeData, coinCode);
            if(tradeListItem && trade !== tradeListItem) setTrade(tradeListItem)
        }
    }, [trade, tradeData, coinCode]);
    

    return (
        <TradeBox.Container className="trade-container">
            <TradeBox.Header className="trade-header">
                <TradeBox.HeaderCell.First
                    onClick={tradeContents}
                    toggle={selected} {...selected} 
                >체결</TradeBox.HeaderCell.First>
                <TradeBox.HeaderCell.Second 
                    onClick={dayContents}
                    toggle={selected} {...selected} 
                >일별</TradeBox.HeaderCell.Second>
            </TradeBox.Header>
            {selected ? 
                <TradeList
                    coinCode={coinCode}
                /> :
                <DayTradeList
                    coinCode={coinCode}
                />
            }
        </TradeBox.Container>
    )
}

export default React.memo(TradeWindow);
