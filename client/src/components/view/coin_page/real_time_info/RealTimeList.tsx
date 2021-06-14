import React, { useEffect, useState } from 'react';
import { RealTimeTableStyled } from './RealTimeListStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import { MarketList } from '../../../../redux-module/coin/market_list';
import RealTimeListItem from './RealTimeListItem';

import './RealTimeList.scss';

function marketListFilterKRW(marketList: MarketList){
    return Object.values(marketList).filter((list: MarketList) => list.market.includes("KRW-"));
}

function RealTimeTable() {
    const [mount, setMount] = useState(true);
    const [marketList, setMarketList] = useState<MarketList[]>([{
        market: "",
        korean_name: "",
        english_name: ""
    }]);
    const { data, loading, error } = useSelector((state: RootState) => state.market_list.marketList);

    useEffect(() => {
        if(data && mount){
            setMount(false);
            setMarketList(marketListFilterKRW(data));
        }
    }, [data, marketList, mount]);

    if(loading){
        return(
            <RealTimeTableStyled className="real-time-table">
                loading...
            </RealTimeTableStyled>
        );
    }
    if(error){
        return(
            <RealTimeTableStyled className="real-time-table">
                Network error : [{error}]
            </RealTimeTableStyled>
        );
    }
    return (
        <RealTimeTableStyled className="real-time-table">
            <div>
                <input placeholder="검색"></input>
                <i className="far fa-search"/>
            </div>
            <hr/>
            {marketList.length > 1 ?
            marketList.map((market) => {
                return(
                    <>
                        <RealTimeListItem 
                            market={market.market}
                            korean_name={market.korean_name}
                            english_name={market.english_name}
                        />
                        <hr/>
                    </>
                );
            })
            :
            <div>loading...</div>
            }
        </RealTimeTableStyled>
    );
}

export default RealTimeTable;
