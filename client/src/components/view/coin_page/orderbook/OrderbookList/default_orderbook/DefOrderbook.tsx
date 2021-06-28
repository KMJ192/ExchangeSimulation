import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Orderbook } from '../../../../../../redux-module/coin/get_coin';
import { RootState } from '../../../../../../redux-module/RootReducer';
import DefList from './DefListItem';
import { numberToKrw } from '../../../CoinPage';

import { Def } from '../OrderbookListStyle';
import '../OrderbookList.scss';

function getOrderbook(orderbook: any, coinCode: string): Orderbook{
    return orderbook[coinCode];
}
function myGration(orderbook: any){
    return {
        ...orderbook[0],
        code: orderbook[0].market
    }
}


function DefOrderbook() {
    const [defOrderbookList, setDefOrderbookList] = useState<Orderbook>({
        code: "",
        orderbook_units: [{
            ask_price: 0,
            ask_size: 0,
            bid_price: 0,
            bid_size: 0,
        }],
        stream_type: "",
        timestamp: 0,
        total_ask_size: 0,
        total_bid_size: 0,
        type: ""
    });
    const [tmpCoin, setTmpCoin] = useState("");
    const orderbookBody = useRef<HTMLDivElement>(null);

    const coinCode = useSelector((state: RootState) => state.selected_coin.coinCode,(prev, next) => prev === next);
    const orderbookData = useSelector((state: RootState) => state.orderbook.orderbook.data, (prev, next) => prev === next);

    const orderbookRes = useSelector((state: RootState) => state.req_orderbook.orderbook, (prev, next) => prev === next);
    const tickerRes = useSelector((state: RootState) => state.req_ticker.ticker, (prev, next) => prev === next);

    useEffect(() => {
        if(tmpCoin !== coinCode && coinCode && orderbookRes.data){
            setTmpCoin(coinCode);
            setDefOrderbookList(myGration(orderbookRes.data));
            orderbookBody.current?.scrollTo(0, (orderbookBody.current.clientHeight / 2) - 33);
        }else if(orderbookData && coinCode) {
            const orderbookArray = getOrderbook(orderbookData, coinCode);
            if(orderbookArray) setDefOrderbookList(orderbookArray);
        }else{
            orderbookBody.current?.scrollTo(0, (orderbookBody.current.clientHeight / 2) - 33);
        }
    }, [coinCode, defOrderbookList, orderbookData, orderbookRes.data, tmpCoin]);

    return (
        <Def.Container className="def-orderbook-container">
            {orderbookRes.loading || tickerRes.loading ?
                    <div>loading...</div>
                :
                <div 
                    className="def-orderbook-body"
                    ref={orderbookBody}
                >
                    {Object.values(defOrderbookList.orderbook_units).reverse().map((ask_bid, index) => {
                        return(
                            <Def.List key={index}>
                                <DefList
                                    ask_price={numberToKrw(String(ask_bid.ask_price))}
                                    ask_size={String(ask_bid.ask_size.toFixed(3))}
                                    bid_price={numberToKrw(String(ask_bid.bid_price))}
                                    bid_size={String(ask_bid.bid_size.toFixed(3))}
                                    ask_bid={"ASK"}
                                />
                            </Def.List>
                        )
                    })}
                    {Object.values(defOrderbookList.orderbook_units).map((ask_bid, index) => {
                        return(
                            <Def.List key={index}>
                                <DefList
                                    ask_price={numberToKrw(String(ask_bid.ask_price))}
                                    ask_size={String(ask_bid.ask_size.toFixed(3))}
                                    bid_price={numberToKrw(String(ask_bid.bid_price))}
                                    bid_size={String(ask_bid.bid_size.toFixed(3))}
                                    ask_bid={"BID"}
                                />
                            </Def.List>
                        )
                    })}
                </div>
            }
            <Def.Footer className="def-orderbook-footer">
                <div>
                    {defOrderbookList?.total_ask_size && numberToKrw(String(defOrderbookList?.total_ask_size.toFixed(3)))}
                </div>
                <div>
                    {defOrderbookList?.code ? coinCode.replace("KRW-", " 수량") : "loading..."}
                </div>
                <div>
                    {defOrderbookList?.total_bid_size && numberToKrw(String(defOrderbookList?.total_bid_size.toFixed(3)))}
                </div>
            </Def.Footer>
        </Def.Container>
    )
}

export default React.memo(DefOrderbook);