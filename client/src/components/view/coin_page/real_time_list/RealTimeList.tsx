import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import { MarketList } from '../../../../redux-module/coin/market_list';
import RealTimeListItem from './RealTimeListItem';

import { 
    Container
 } from './RealTimeListStyle';
import './RealTimeList.scss';

function marketListFilterKRW(marketList: MarketList){
    return Object.values(marketList).filter((list: MarketList) => list.market.includes("KRW-"));
}

function RealTimeList() {
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
            <Container.RealTimeList className="real-time-list">
                loading...
            </Container.RealTimeList>
        );
    }
    if(error){
        return(
            <Container.RealTimeList className="real-time-list">
                Network error : [{error}]
            </Container.RealTimeList>
        );
    }
    return (
        <Container.Box className="real-time-list-container">
            <Container.SearchBox.Container className="real-time-list-search">
                <Container.SearchBox.InputBox placeholder="검색" ></Container.SearchBox.InputBox>
                <Container.SearchBox.Button>
                    <i className="far fa-search"/>
                    검색
                </Container.SearchBox.Button>
            </Container.SearchBox.Container>
            <Container.RealTimeList className="real-time-list">
                <div className="real-time-list-item">
                    인덱스 마켓 이름 영어
                </div>
                <hr/>
                {marketList.length > 1 ?
                marketList.map((market, key) => {
                    return(
                        <>
                            <RealTimeListItem 
                                index={key}
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
            </Container.RealTimeList>
        </Container.Box>
    );
}

export default RealTimeList;
