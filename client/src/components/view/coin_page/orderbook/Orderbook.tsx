import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';

import { OrderbookContainer} from './OrderbookStyle';
import './Orderbook.scss';

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
            {selected ? 
                <div>일반호가</div> : <div>누적호가</div>
            }
            <OrderbookContainer.Footer className="orderbook-footer">
                <div>footer1</div>
                <div>footer2</div>
                <div>footer3</div>
            </OrderbookContainer.Footer>
        </OrderbookContainer.Container>
    )
}

export default React.memo(Orderbook);