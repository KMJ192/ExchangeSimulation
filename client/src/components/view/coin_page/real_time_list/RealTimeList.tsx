import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';
import RealTimeListItem from './RealTimeListItem';
import { marketListFilterKRW } from '../CoinPage';

import { Container } from './RealTimeListStyle';
import './RealTimeList.scss';

interface marketList {
    market: string,
    korean_name: string,
    english_name: string,
    trade_price: string,
    signed_change_rate: string,
    signed_change_price: string,
    acc_trade_price_24h: string,
    change: "RISE" | "EVEN" | "FALL" | "",
    update: "i" | "d" | ""
}

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

function syncData(marketList: marketList[], coinData: any){
    for(let i = 0; i < marketList.length; i++){
        if(coinData[marketList[i].market]) {
            const before = marketList[i].trade_price;
            const after = coinData[marketList[i].market]["trade_price"];
            if(before !== after){
                if(before < after) marketList[i].update = "i";
                else if(before > after) marketList[i].update = "d";
                marketList[i].trade_price = after;
            }else marketList[i].update = "";
            marketList[i].signed_change_rate = String((coinData[marketList[i].market]["signed_change_rate"]*100).toFixed(2));
            marketList[i].signed_change_price = coinData[marketList[i].market]["signed_change_price"];
            marketList[i].acc_trade_price_24h = String(Math.round(coinData[marketList[i].market]["acc_trade_price_24h"] / 1000000));
            marketList[i].change = coinData[marketList[i].market]["change"];
        }else if (marketList[i].update){
            marketList[i].update = ""
        }
    }
    return marketList;
}

interface Props{
    selectedCoin: (e: React.MouseEvent<HTMLLIElement>) => void;
}

function RealTimeList({ selectedCoin }: Props) {
    const [mount, setMount] = useState(true);
    const [marketList, setMarketList] = useState<marketList[]>([{
        market: "",
        korean_name: "",
        english_name: "",
        trade_price: "",
        signed_change_rate: "",
        signed_change_price: "",
        acc_trade_price_24h: "",
        change : "",
        update: ""
    }]);
    const { data, loading, error } = useSelector((state: RootState) => state.market_list.marketList);
    const tickerData = useSelector((state: RootState) => state.ticker.ticker);

    useEffect(() => {
        if(data && mount){
            setMount(false);
            setMarketList(marketListFilterKRW(data));
        }
        if(tickerData.data) setMarketList(syncData(marketList, tickerData.data));
    }, [data, marketList, mount, tickerData, tickerData.data]);

    if(loading){ return loadingComponent();}
    if(error){ return errorComponent(error);}
    return (
        <Container.Box className="real-time-list-container">
            <div className="real-time-list-search">
                <Container.SearchBox.InputBox placeholder="검색" />
            </div>
            <Container.Header className="real-time-list-header">
                <div>단위</div>
                <div className="right-sort">현재가</div>
                <div className="right-sort">전일대비</div>
                <div className="right-sort">거래금액</div>
            </Container.Header>
            <Container.RealTimeList className="real-time-list">
                {marketList.length > 1 && !tickerData.loading ?
                marketList.map((market, index) => {
                    return(
                        <li key={index}
                            onClick={selectedCoin}
                        >
                            <div className="list-item">
                                <RealTimeListItem 
                                    market={market.market}
                                    korean_name={market.korean_name}
                                    english_name={market.english_name}
                                    trade_price={market.trade_price ? market.trade_price : "0"}
                                    signed_change_rate={market.signed_change_rate ? market.signed_change_rate : "0"}
                                    signed_change_price={market.signed_change_price ? market.signed_change_price : "0"}
                                    acc_trade_price_24h={market.acc_trade_price_24h ? market.acc_trade_price_24h : "0"}
                                    change={market.change}
                                    update={market.update}
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