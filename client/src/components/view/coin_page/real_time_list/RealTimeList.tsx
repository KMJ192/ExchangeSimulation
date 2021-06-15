import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import { MarketList } from '../../../../redux-module/coin/market_list';
import RealTimeListItem from './RealTimeListItem';
import { Container } from './RealTimeListStyle';
import './RealTimeList.scss';

interface RealTimeCoinData{
    market: string;
    korean_name: string;
    english_name: string;
    tradeprice: string;
    signed_change_rate: string;
    acc_trade_price_24h: string;
}

function marketListFilterKRW(marketList: MarketList){
    return Object.values(marketList).filter((list: MarketList) => list.market.includes("KRW-"));
}

function syncData(marketList: MarketList, coinData: RealTimeCoinData){

}

function RealTimeList() {
    const [mount, setMount] = useState(true);
    const [marketList, setMarketList] = useState<MarketList[]>([{
        market: "",
        korean_name: "",
        english_name: "",
    }]);
    const { data, loading, error } = useSelector((state: RootState) => state.market_list.marketList);
    const realTimeData = useSelector((state: RootState) => state.get_coin.coinData);

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
                {marketList.length > 1 && !realTimeData.loading ?
                marketList.map((market, index) => {
                    return(
                        <li key={index}>
                            <RealTimeListItem 
                                market={market.market}
                                korean_name={market.korean_name}
                                english_name={market.english_name}
                                trade_price={"현재가"}
                                signed_change_rate={"변동률"}
                                acc_trade_price_24h={"누적거래량"}
                            />
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
