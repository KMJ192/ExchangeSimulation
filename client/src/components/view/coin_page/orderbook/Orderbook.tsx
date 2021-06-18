import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';

import { OrderbookContainer} from './OrderbookStyle';
import './Orderbook.scss';
import { useState } from 'react';

function Orderbook() {
    //orderbook data socket
    const orderbook = useSelector((state: RootState) => state.orderbook.orderbook);
    //console.log(orderbook.data);
    const [selected, setSelected] = useState(true);

    const defaultOrderbook = () => {
        setSelected(true);
    }
    const cumulative = () => {
        setSelected(false);
    }

    return (
        <OrderbookContainer.Container className="orderbook-container">
            <OrderbookContainer.Header className="orderbook-header">
                <OrderbookContainer.HeaderCell.First
                    onClick={defaultOrderbook}
                    toggle={selected} {...selected}
                >
                    일반호가
                </OrderbookContainer.HeaderCell.First>
                <OrderbookContainer.HeaderCell.Second
                    toggle={selected} {...selected}
                    onClick={cumulative}
                >
                    누적호가
                </OrderbookContainer.HeaderCell.Second>
            </OrderbookContainer.Header>
            <div>contents</div>
            <div>footer</div>
        </OrderbookContainer.Container>
    )
}

export default Orderbook;