import React from 'react'
import { Def } from '../OrderbookListStyle';

interface Props{
    ask_price: string;
    ask_size: string;
    bid_price: string;
    bid_size: string;
    ask_bid: "ASK" | "BID"
}

function DefList({ ask_price, ask_size, bid_price, bid_size, ask_bid}: Props) {
    return (
        <>
            <Def.Cell
                className="orderbook-list-item"
                ask_bid={ask_bid} {...ask_bid}
            >
                {ask_bid === "ASK" && ask_price}
                {ask_bid === "BID" && bid_price}
            </Def.Cell>
            <Def.Cell 
                className="orderbook-list-item"
                ask_bid={ask_bid} {...ask_bid}
            >
                {ask_bid === "ASK" && ask_size}
                {ask_bid === "BID" && bid_size}
            </Def.Cell>
        </>
        
    )
}

export default React.memo(DefList);
