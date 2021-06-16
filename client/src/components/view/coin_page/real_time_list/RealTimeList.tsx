import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import { MarketList } from '../../../../redux-module/coin/market_list';
import { Ticker } from '../../../../redux-module/coin/get_coin';
import RealTimeListItem from './RealTimeListItem';

import { Container } from './RealTimeListStyle';
import './RealTimeList.scss';

function loadingComponent(){
    return(
        <Container.RealTimeList className="real-time-list">
            loading...
        </Container.RealTimeList>
    );
}
function errorComponent(error: Error){
    return(
        <Container.RealTimeList className="real-time-list">
            Network error : [{error}]
        </Container.RealTimeList>
    );
}

function marketListFilterKRW(marketList: MarketList){
    return Object.values(marketList).filter((list: MarketList) => list.market.includes("KRW-"));
}

function syncData(marketList: any[], coinData: Ticker){
    const tmp: any = coinData;
    let coinArray: string[] = Object.keys(coinData);
    let merge: string[][] = [];
    for(let i = 0; i < marketList.length; i++){}

    for(let i = 0; i < marketList.length; i++){
        for(let j = 0; j < coinArray.length; j++){
            if(marketList[i].market === coinArray[j]){
                let mergeTmp: string[] = [];
                mergeTmp.push(marketList[i].market);
                mergeTmp.push(marketList[i].korean_name);
                mergeTmp.push(marketList[i].english_name);
                mergeTmp.push(tmp[coinArray[j]]["trade_price"]);
                mergeTmp.push(tmp[coinArray[j]]["signed_change_rate"]);
                mergeTmp.push(tmp[coinArray[j]]["acc_trade_price_24h"]);
                merge.push(mergeTmp);
            }
        }
    }
    return merge;
}

function RealTimeList() {
    const [mount, setMount] = useState(true);
    const [marketList, setMarketList] = useState<any[]>([{
        market: "",
        korean_name: "",
        english_name: "",
    }]);
    const { data, loading, error } = useSelector((state: RootState) => state.market_list.marketList);
    const tickerData = useSelector((state: RootState) => state.ticker.ticker);

    useEffect(() => {
        if(data && mount){
            setMount(false);
            setMarketList(marketListFilterKRW(data));
        }
        if(marketList && tickerData.data){
            console.log(syncData(marketList, tickerData.data));
        }
    }, [data, marketList, mount, tickerData, tickerData.data]);

    if(loading){ return loadingComponent();}
    if(error){ return errorComponent(error);}
    return (
        <Container.Box className="real-time-list-container">
            <Container.SearchBox.Container className="real-time-list-search">
                <Container.SearchBox.InputBox placeholder="검색" />
                <Container.SearchBox.Button>
                    검색
                </Container.SearchBox.Button>
            </Container.SearchBox.Container>
            <Container.Header className="real-time-list-header">
                <div className="header-item">단위</div>
                <div className="header-item">현재가</div>
                <div className="header-item">전일대비</div>
                <div className="header-item">거래금액</div>
            </Container.Header>
            <Container.RealTimeList className="real-time-list">
                {marketList.length > 1 && !tickerData.loading ?
                marketList.map((market, index) => {
                    return(
                        <li key={index}>
                            <div className="list-item">
                                <RealTimeListItem 
                                    market={market.market}
                                    korean_name={market.korean_name}
                                    english_name={market.english_name}
                                    trade_price={"현재가"}
                                    signed_change_rate={"전일대비"}
                                    acc_trade_price_24h={"변동률"}
                                />
                            </div>
                            <div className="b-line"/>
                        </li>
                    );
                })
                :
                <div>loading...</div>
                }
            </Container.RealTimeList>
        </Container.Box>
    );
}

export default React.memo(RealTimeList);