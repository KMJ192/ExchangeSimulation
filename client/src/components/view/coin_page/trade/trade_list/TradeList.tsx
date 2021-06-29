import React from 'react';
import { TradeListSt } from './TradeListStyle';
import { TradeData } from '../Trade';
import TradeListItem from './TradeListItem';

interface Props{
    data: TradeData[] | undefined;
}
function TradeList({ data }: Props) {
    console.log(data);
    return (
        <TradeListSt.Container className="trade-list-container">
            <div className="trade-list-header">
                <div>체결시간</div>
                <div>체결가격</div>
                <div>체결량</div>
            </div>
            <div className="trade-list-body">
                {data ? 
                    <ul>
                        {data.map((trade, index) => {
                            return(
                                <li key={index}>
                                    <TradeListItem 
                                        data={trade}
                                    />
                                </li>
                            );
                        })}
                    </ul> :
                    <div>loading...</div>
                }
            </div>
        </TradeListSt.Container>
    )
}

export default React.memo(TradeList);
