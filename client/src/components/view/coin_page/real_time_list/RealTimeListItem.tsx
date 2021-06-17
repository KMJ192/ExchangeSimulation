import React from 'react';
import { MarketList } from '../../../../redux-module/coin/market_list';
import { ListItem } from './RealTimeListStyle';

interface Props extends MarketList{
    trade_price: string;
    signed_change_rate: string;
    acc_trade_price_24h: string;
    signed_change_price: string;
    change: "RISE" | "EVEN" | "FALL" | "",
    update: "i" | "d" | ""
}

//코인이름/단위, 현재가, 변동률, 거래금액
function RealTimeListItem({
    market, 
    korean_name, 
    trade_price,
    signed_change_rate,
    signed_change_price,
    acc_trade_price_24h,
    change,
    update
}: Props) {
    return (
        <ListItem.ListItemBox className="real-time-list-item" ud={change} {...change}>
            <div className="market-nc">
                <div className="market-code">
                    {market}
                </div>
                <div className="market-k-name">
                    {korean_name}
                </div>
            </div>
            <ListItem.Cell className="current-price right-sort" ud={change} {...change}>
                <ListItem.FlashCell className="flase right-sort" flash={String(update)} {...update}>
                    {trade_price} 원
                </ListItem.FlashCell>
            </ListItem.Cell>
            <ListItem.Cell className="variation" ud={change} {...change}>
                <div className="rate right-sort">
                    {signed_change_rate} %
                </div>
                <div className="price right-sort">
                    {signed_change_price}원
                </div>
            </ListItem.Cell>
            <div className="right-sort str">
                {acc_trade_price_24h}백만
            </div>
        </ListItem.ListItemBox>
    )
}

export default React.memo(RealTimeListItem);