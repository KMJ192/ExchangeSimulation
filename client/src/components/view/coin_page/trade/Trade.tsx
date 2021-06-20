import React, { useState } from 'react';
import TradeList from './trade_list/TradeList';
import DayTradeList from './day_trade_list/DayTradeList';

import { TradeBox } from './TradeStyle';
import './Trade.scss';

interface Props{
    coinCode: string;
}

function Trade({ coinCode }: Props) {
    const [selected, setSelected] = useState(true);

    const tradeContents = () => {
        setSelected(true);
    }
    const dayContents = () => {
        setSelected(false);
    }

    return (
        <TradeBox.Container className="trade-container">
            <TradeBox.Header className="trade-header">
                <TradeBox.HeaderCell.First
                    onClick={tradeContents}
                    toggle={selected} {...selected} 
                >체결</TradeBox.HeaderCell.First>
                <TradeBox.HeaderCell.Second 
                    onClick={dayContents}
                    toggle={selected} {...selected} 
                >일별</TradeBox.HeaderCell.Second>
            </TradeBox.Header>
            {selected ? 
                <TradeList
                    coinCode={coinCode}
                /> :
                <DayTradeList
                    coinCode={coinCode}
                />
            }
        </TradeBox.Container>
    )
}

export default React.memo(Trade);
