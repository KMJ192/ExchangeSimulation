import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import TradeList from './trade_list/TradeList';
import DayTradeList from './day_trade_list/DayTradeList';

import { TradeBox } from './TradeStyle';
import './Trade.scss';

export interface TradeData{
    code: string;
    ask_bid: "ASK" | "BID" | "";
    trade_date: string;           //체결날짜
    trade_time: string;           //체결시간
    trade_volume: number;         //체결량
    trade_price: number;         //체결가격
    prev_closing_price: number;  //전일종가
    change_price: number;        //전일대비 값
}

function getTradeData(trade: TradeData[], tradeData: any, coinCode: string){
    if(tradeData[coinCode]){        
        trade.unshift(tradeData[coinCode]);
        trade.pop();
    }
    return trade;
}

function marketCode(trade: any): TradeData[]{
    const retVal: TradeData[] = [];
    for(let i = 0; i < trade.length; i++){
        retVal[i] = {
            code: trade[i].market,
            ask_bid: trade[i].ask_bid,
            trade_date: trade[i].trade_date_utc,
            trade_time: trade[i].trade_time_utc,
            trade_volume: trade[i].trade_volume,
            trade_price: trade[i].trade_price,
            prev_closing_price: trade[i].prev_closing_price,
            change_price: trade[i].change_price,
        }
    }
    return retVal;
}

function TradeWindow() {
    const [selected, setSelected] = useState(true);
    const [trade, setTrade] = useState<TradeData[]>();

    const tradeContents = () => {
        setSelected(true);
    }
    const dayContents = () => {
        setSelected(false);
    }
    const resTradeData = useSelector((state: RootState) => state.req_trade.trade, (prev, next) => prev === next);
    const tradeData = useSelector((state: RootState) => state.trade.trade.data, (prev, next) => prev === next);
    const coinCode = useSelector((state: RootState) => state.selected_coin.coinCode, (prev, next) => prev === next);

    useEffect(() => {
        if(!trade && resTradeData.data){
            setTrade(marketCode(resTradeData.data));
        }else if(trade && tradeData){
            const tradeListItem = getTradeData(trade, tradeData, coinCode);
            if(tradeListItem && trade !== tradeListItem) {
                setTrade(tradeListItem);
            }
        }
        //console.log(trade);
    }, [trade, tradeData, coinCode, resTradeData]);
    
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
                    data={trade}
                /> :
                <DayTradeList
                    coinCode={coinCode}
                />
            }
        </TradeBox.Container>
    );
}

export default React.memo(TradeWindow);
