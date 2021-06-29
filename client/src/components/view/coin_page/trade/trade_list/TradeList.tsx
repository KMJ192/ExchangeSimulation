import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';
import TradeListItem from './TradeListItem';

import { TradeListSt } from './TradeListStyle';

export interface TradeData{
    code: string;
    ask_bid: "ASK" | "BID";       //매도 | 매수
    trade_date: string;           //체결날짜
    trade_time: string;           //체결시간
    trade_volume: number;         //체결량
    trade_price: number;          //체결가격
    
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
        }
    }
    return retVal;
}

function TradeList() {
    const [trade, setTrade] = useState<TradeData[]>();

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
    }, [trade, tradeData, coinCode, resTradeData]);

    return (
        <TradeListSt.Container className="trade-list-container">
            <div className="trade-list-header">
                <div>체결시간</div>
                <div>체결가격</div>
                <div>체결량</div>
            </div>
            <div className="trade-list-body">
                {trade ? 
                    <ul>
                        {trade.map((trade, index) => {
                            return(
                                <li key={index}>
                                    <TradeListItem 
                                        data={trade}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    :
                    <div>loading...</div>
                }
            </div>
        </TradeListSt.Container>
    )
}

export default React.memo(TradeList);
