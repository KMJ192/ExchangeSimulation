import React from 'react';
import { MarketList } from '../../../../redux-module/coin/market_list';
import { ListItem } from './RealTimeListStyle';

interface Props extends MarketList{
    trade_price: string;
    signed_change_rate: string;
    acc_trade_price_24h: string;
}

//코인이름/단위, 현재가, 변동률, 거래금액
function RealTimeListItem({
    market, 
    korean_name, 
    trade_price,
    signed_change_rate,
    acc_trade_price_24h,
}: Props) {
    return (
        <ListItem.ListItemBox className="real-time-list-item">
            <div className="market-nc">
                <div className="market-code">
                    {market}
                </div>
                <div className="market-k-name">
                    {korean_name}
                </div>
            </div>
            <div className="current-price">
                {trade_price}
            </div>
            <div className="variation-rate">
                {signed_change_rate}
            </div>
            <div className="trade-price">
                {acc_trade_price_24h}
            </div>
        </ListItem.ListItemBox>
    )
}

export default React.memo(RealTimeListItem);