import React from 'react';
import { MarketList } from '../../../../redux-module/coin/market_list';

interface Props extends MarketList{
    index: number;
}

function RealTimeListItem({index, market, korean_name, english_name}: Props) {
    return (
        <div className="real-time-list-item">
            {index+1} {market} {korean_name} {english_name} 
        </div>
    )
}

export default RealTimeListItem;