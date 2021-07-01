import React from 'react'
import { DTData } from './DayTradeList';

import { DayTradeListSt } from './DayTradeListStyle';

interface Props extends DTData{}

function DayTradeListItem({date_time, closing_price, change_price, transaction_rate}: Props) {
    return (
        <DayTradeListSt.Item.Box>
            <DayTradeListSt.Item.Col1>
                {date_time.substring(0, 10)}
            </DayTradeListSt.Item.Col1>
            <DayTradeListSt.Item.Col2>
                {closing_price}   
            </DayTradeListSt.Item.Col2>
            <DayTradeListSt.Item.Col3
                change_price={change_price}
                {...change_price}
            >
                {change_price}
            </DayTradeListSt.Item.Col3>
            <DayTradeListSt.Item.Col4>
                {transaction_rate}
            </DayTradeListSt.Item.Col4>
        </DayTradeListSt.Item.Box>
    )
}

export default React.memo(DayTradeListItem);
