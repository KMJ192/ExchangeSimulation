import React from 'react'
import { TradeData } from './TradeList';

import { TradeListSt } from './TradeListStyle';

interface Props{
    data: TradeData;
}

function TradeListItem({ data }: Props) {
    return (
        <TradeListSt.Container>
            {/* {data.ask_bid} */}
            <TradeListSt.TradeListItem.ItemBody>
                <TradeListSt.TradeListItem.Column1>
                    {data.trade_date}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {data.trade_time}
                </TradeListSt.TradeListItem.Column1>
                <TradeListSt.TradeListItem.Column2>
                    {data.trade_price}
                </TradeListSt.TradeListItem.Column2>
                <TradeListSt.TradeListItem.Column3
                    ask_bid={data.ask_bid} {...data.ask_bid}
                >
                    {data.trade_volume}
                </TradeListSt.TradeListItem.Column3>
            </TradeListSt.TradeListItem.ItemBody>    
        </TradeListSt.Container>
    )
}

export default React.memo(TradeListItem);
