import React from 'react'

interface Props{
    coinCode: string; //코인
    date: string; //날짜
    time: string; //시간
    tradePrice: string; //체결가격
}

function TradeListItem({coinCode, date, time, tradePrice}: Props) {
    return (
        <div>
            item
        </div>
    )
}

export default React.memo(TradeListItem);
