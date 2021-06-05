import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { debounce, first } from 'lodash';
import Wrapper from '../../../wrapper/Wrapper';

const bitCoinUnit: string = "BTC";

const up_bit_url = "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1";
let reqURL_krw : string = up_bit_url;

//마켓명, 캔들기준시간UTC/KST, 시가, 고가, 저가, 종가, 마지막 틱이저장시간, 누적거래금액,누적거래량, 분
interface UpbitResponseType{
    market: string;
    candle_date_time_utc: string;
    candle_date_time_kst: string;
    timestamp: number;
    trade_price: number;
    trade_volume: number;
    prev_closing_price: number;
    chane_price: number;
    ask_bid: string;
}

function CoinTable() {
    const [firstSearch, setFristSearch] = useState<boolean>(true);
    const [searchDelay, setSearchDelay] = useState<number>(1000);
    const [coinData, setCoinData] = useState<UpbitResponseType>({
        market: "",
        candle_date_time_utc: "",
        candle_date_time_kst: "",
        timestamp: 0,
        trade_price: 0,
        trade_volume: 0,
        prev_closing_price: 0,
        chane_price: 0,
        ask_bid: ""
    })

    useEffect(() => {
        debounce(async () => {
            const response: UpbitResponseType = await axios.get(reqURL_krw, {
                withCredentials: false
            })
                .then(response => response.data[0])
                .catch(err => err);
            setCoinData({
                market: response.market,
                candle_date_time_utc: response.candle_date_time_utc,
                candle_date_time_kst: response.candle_date_time_kst,
                timestamp: response.timestamp,
                trade_price: response.trade_price,
                trade_volume: response.trade_volume,
                prev_closing_price: response.prev_closing_price,
                chane_price: response.chane_price,
                ask_bid: response.ask_bid
            });
            console.log(response);
            // const minuteCandle = await axios.get("https://api.upbit.com/v1/candles/minutes/1", {
            //     withCredentials: false
            // });
            // console.log(minuteCandle);
        }, searchDelay)();

        if(firstSearch === true) {
            setFristSearch(false);
            setSearchDelay(100000);
        }
    }, [coinData, firstSearch, searchDelay]);

    return (
        <Wrapper>
            <div className="hoga-table">

            </div>
        </Wrapper>
    );
}

export default React.memo(CoinTable);
