import React from 'react'
import { DTData } from './DayTradeList';

interface Props extends DTData{}

function DayTradeListItem({date_time, closing_price, change_price, transaction_rate}: Props) {
    return (
        <div>
            {date_time} {closing_price} {change_price} {transaction_rate}
        </div>
    )
}

export default React.memo(DayTradeListItem);
