import React from 'react'
import { TradeData } from '../Trade';
import { TradeListSt } from './TradeListStyle';



interface Props{
    data: TradeData;
}

function TradeListItem({ data }: Props) {
    return (
        <TradeListSt.Container>
            {data.ask_bid}
        </TradeListSt.Container>
    )
}

export default React.memo(TradeListItem);
