import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Orderbook } from '../../../../../../redux-module/coin/get_coin';
import { RootState } from '../../../../../../redux-module/RootReducer';
import DefList from './DefListItem';

import { Def } from '../OrderbookListStyle';
import '../OrderbookList.scss';
import axios from 'axios';

interface Props{
    coinCode: string;
}

// interface OrderbookList{
//     orderbook_units: {
//         ask_price: string; //매도
//         ask_size: string;  
//         bid_price: string; //매수
//         bid_size:  string;
//         selected: boolean;
//     }[];
//     code: string;
//     total_ask_size: string;
//     total_bid_size: string;
//     ask_bid: string;
// }

// function getOrderbook(orderbook: any, trade: any, coinCode: string): OrderbookList | undefined{
//     if(!orderbook[coinCode] || !trade[coinCode]) {
//         return undefined;
//     }
//     const orderbookTmp: Orderbook = orderbook[coinCode];
//     const tradeTmp: Trade = trade[coinCode];
//     let orderbookList:  OrderbookList  = {
//         code: coinCode,
//         total_ask_size: String(orderbookTmp.total_ask_size.toFixed(3)),
//         total_bid_size: String(orderbookTmp.total_bid_size.toFixed(3)),
//         ask_bid: String(tradeTmp.ask_bid),
//         orderbook_units: Array.from({
//             length: orderbookTmp.orderbook_units.length
//         }, (orderbook_units) =>
//             orderbook_units = {
//                 ask_price: "",
//                 ask_size: "",
//                 bid_price: "",
//                 bid_size  : "",
//                 selected: false
//             })
//     }
//     for(let i = 0; i < orderbookTmp.orderbook_units.length; i++){
//         orderbookList.orderbook_units[i] = {
//             ask_price: String(orderbookTmp.orderbook_units[i].ask_price),
//             ask_size: String(orderbookTmp.orderbook_units[i].ask_size),
//             bid_price: String(orderbookTmp.orderbook_units[i].bid_price),
//             bid_size: String(orderbookTmp.orderbook_units[i].bid_size),
//             selected: orderbookTmp.orderbook_units[i].ask_price === tradeTmp.trade_price
//         }    
//     }
//     return orderbookList;
// }

function getOrderbook(orderbook: any, coinCode: string): Orderbook{
    //console.log(orderbook[coinCode]);
    return orderbook[coinCode];
}

function DefOrderbook({ coinCode }: Props) {
    const [defOrderbookList, setDefOrderbookList] = useState<Orderbook>();
    const [tmpCoin, setTmpCoin] = useState("");

    const orderbookData = useSelector((state: RootState) => state.orderbook.orderbook.data);

    useEffect(() => {
        if(tmpCoin !== coinCode && coinCode){
            console.log(tmpCoin);
            console.log(coinCode);
            setTmpCoin(coinCode);
            const request = async () => {
                await axios.get(`https://api.upbit.com/v1/orderbook?markets=${coinCode}`, {
                    withCredentials: false
                }).then(resposne => 
                    setDefOrderbookList(resposne.data)
                ).catch(e => e);
            }
            request();
        }else if(orderbookData && coinCode) {
            const orderbookArray = getOrderbook(orderbookData, coinCode);
            if(orderbookArray) setDefOrderbookList(orderbookArray);
        }
    }, [coinCode, defOrderbookList, orderbookData, tmpCoin]);

    return (
        <Def.Container className="def-orderbook-container">
            <Def.Body className="def-orderbook-body">
                <DefList/>
            </Def.Body>
            <Def.Footer className="def-orderbook-footer">
                <div>
                    {defOrderbookList?.total_ask_size && String(defOrderbookList?.total_ask_size.toFixed(3))}
                </div>
                <div>
                    {defOrderbookList?.code ? String(defOrderbookList?.code).replace("KRW-", " 수량") : "loading..."}
                </div>
                <div>
                    {defOrderbookList?.total_bid_size && String(defOrderbookList?.total_bid_size.toFixed(3))}
                </div>
            </Def.Footer>
        </Def.Container>
    )
}

export default React.memo(DefOrderbook);
