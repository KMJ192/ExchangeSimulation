import React from 'react';
import { MarketList } from '../../../../redux-module/coin/market_list';

interface Props extends MarketList{}

function RealTimeListItem({market, korean_name, english_name}: Props) {
    return (
        <div>
            {market} {korean_name} {english_name}
        </div>
    )
}

export default RealTimeListItem;