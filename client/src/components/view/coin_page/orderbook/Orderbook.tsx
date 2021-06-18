import React, { useState } from 'react';
import DefOrderbook from './OrderbookList/DefOrderbook';
import ComOrderbook from './OrderbookList/ComOrderbook';
import { OrderbookContainer} from './OrderbookStyle';
import './Orderbook.scss';

interface Props{
    coinCode: string;
}

function Orderbook({ coinCode }: Props) {
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
                <DefOrderbook
                    coinCode={coinCode}
                /> :
                <ComOrderbook
                    coinCode={coinCode}
                />
            }
        </OrderbookContainer.Container>
    )
}

export default React.memo(Orderbook);