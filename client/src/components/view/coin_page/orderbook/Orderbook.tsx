import React, { useState } from 'react';
import DefOrderbook from './OrderbookList/default_orderbook/DefOrderbook';
import ComOrderbook from './OrderbookList/cumulation_orderbook/ComOrderbook';
import { OrderbookContainer} from './OrderbookStyle';
import './Orderbook.scss';

function Orderbook() {
    const [selected, setSelected] = useState(true);    
    const defaultOrderbook = () => {
        setSelected(true);
    }
    const cumulativeOrderbook = () => {
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
                    onClick={cumulativeOrderbook}
                >
                    누적호가
                </OrderbookContainer.HeaderCell.Second>
            </OrderbookContainer.Header>
            {selected ? 
                <DefOrderbook/> :
                <ComOrderbook/>
            }
        </OrderbookContainer.Container>
    )
}

export default React.memo(Orderbook);