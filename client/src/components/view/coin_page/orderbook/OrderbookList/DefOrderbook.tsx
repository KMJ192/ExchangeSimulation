import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Orderbook } from '../../../../../redux-module/coin/get_coin';
import { RootState } from '../../../../../redux-module/RootReducer';


import { Def } from './OrderbookListStyle';
import './OrderbookList.scss';

interface OrderbookList{
    ask_price: string;  //매도 호가
    ask_size: string;   //매도 잔량
    bid_price: string;  //매수 호가
    bid_size: string;   //매수 잔량
}

interface Props{
    coinCode: string;
}

function getOrderbook(orderbook: any, coinCode: string){
    //console.log(orderbook[coinCode]);
}

function DefOrderbook({ coinCode }: Props) {
    const [mount, setMount] = useState(true);
    const [orderbook, setOrderbook] = useState<Orderbook>();
    const orderbookData = useSelector((state: RootState) => state.orderbook.orderbook);

    useEffect(() => {
        if(mount && orderbookData.data){
            setMount(false);
            setOrderbook(orderbookData.data);
        }
        if(orderbook) getOrderbook(orderbook, coinCode);

    }, [coinCode, mount, orderbook, orderbookData.data]);

    return (
        <Def.Container className="def-orderbook-container">
            <div className="def-orderbook-body">
                <div className="def-orderbook-ask">
                    <div>
                        <div>test1</div>
                        <div>test2</div>
                        <div>test3</div>
                        <div>test4</div>
                        <div>test5</div>
                        <div>test5</div>
                        <div>test5</div>
                        <div>test5</div>
                        <div>test5</div>
                    </div>
                    <div>ask_size</div>
                </div>
                <div className="def-orderbook-bid">
                    <div>
                        bid_price
                    </div>
                    <div>
                        bid_size
                    </div>
                </div>
            </div>
            <Def.Footer className="def-orderbook-footer">
                <div>
                    footer1
                </div>
                <div>
                    footer2
                </div>
                <div>
                    footer3
                </div>
            </Def.Footer>
        </Def.Container>
    )
}

export default React.memo(DefOrderbook);
