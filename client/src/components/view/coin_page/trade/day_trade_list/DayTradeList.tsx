import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-module/RootReducer';
import DayTradeListItem from './DayTradeListItem';

import { DayTradeListSt } from './DayTradeListStyle';

export interface DTData{
    date_time: string;
    closing_price: number;
    change_price: number;
    transaction_rate: number;
}

function myGration(tradeData: any): DTData[]{
    let retVal: DTData[] = [];
    for(let i = 0; i < 60; i++){
        const data: DTData = {
            date_time: tradeData[i].candle_date_time_kst,
            closing_price: tradeData[i].prev_closing_price,
            change_price: tradeData[i].change_price,
            transaction_rate: tradeData[i].candle_acc_trade_volume
        }
        retVal.push(data);
    }
    return retVal;
}

function DayTradeList() {
    const [dayTrade, setDayTrade] = useState<DTData[]>();
    const dayTradeData = useSelector((state: RootState) => state.day_candle.dayCandle);

    useEffect(() => {
        if(dayTradeData.data){
            setDayTrade(myGration(dayTradeData.data));
        }
    }, [dayTradeData.data])


    if(dayTradeData.loading){
        return <DayTradeListSt.Container>loading...</DayTradeListSt.Container>;
    }
    if(dayTradeData.error){
        return <DayTradeListSt.Container>Error : [{dayTradeData.error}]</DayTradeListSt.Container>;
    }
    return (
        <DayTradeListSt.Container>
            <DayTradeListSt.Header>
                <div>일자</div>
                <div>종가</div>
                <div>전일대비</div>
                <div>거래량</div>
            </DayTradeListSt.Header>
            <DayTradeListSt.List>
                <ul>
                    {dayTrade && dayTrade.map((value, index) => {
                        return (
                            <li key={index}>
                                <DayTradeListItem
                                    date_time={value.date_time}
                                    closing_price={value.closing_price}
                                    change_price={value.change_price}
                                    transaction_rate={value.transaction_rate}
                                />
                            </li>
                        )
                    })}
                </ul>
            </DayTradeListSt.List>
        </DayTradeListSt.Container>
    );
}

export default React.memo(DayTradeList);
