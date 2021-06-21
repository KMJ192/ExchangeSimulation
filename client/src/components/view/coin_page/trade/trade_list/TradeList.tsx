import React from 'react';
import { TradeListSt } from './TradeListStyle';

interface Props{
    coinCode: string;
}
function TradeList({ coinCode }: Props) {

    return (
        <TradeListSt.Container className="trade-list-container">
            <div className="trade-list-header">
                <div>체결시간</div>
                <div>체결가격</div>
                <div>체결량</div>
            </div>
            <div className="trade-list-body">
                {/* {trade?.map((trade, index) => {
                    <li key={index}>
                        <TradeListItem 
                            coinCode={coinCode}
                            date={trade.trade_date}
                            time={trade.}
                        />
                    </li>
                })} */}
            </div>
        </TradeListSt.Container>
    )
}

export default React.memo(TradeList);
