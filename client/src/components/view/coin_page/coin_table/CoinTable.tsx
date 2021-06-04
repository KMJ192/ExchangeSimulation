import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { debounce, first } from 'lodash';
import Wrapper from '../../../wrapper/Wrapper'

const up_bit_url = "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1";
let reqURL_krw : string = up_bit_url;

interface UpbitResponseType{
    market: string;
    trade_date_utc: string;
    trade_time_utc: string;
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
        trade_date_utc: "",
        trade_time_utc: "",
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
                trade_date_utc: response.trade_date_utc,
                trade_time_utc: response.trade_time_utc,
                timestamp: response.timestamp,
                trade_price: response.trade_price,
                trade_volume: response.trade_volume,
                prev_closing_price: response.prev_closing_price,
                chane_price: response.chane_price,
                ask_bid: response.ask_bid
            });
            console.log(response);
        }, searchDelay)();

        if(firstSearch === true) {
            setFristSearch(false);
            setSearchDelay(100000);
        }
    }, [coinData, firstSearch, searchDelay]);

    return (
        <Wrapper>
            will Coin Table
        </Wrapper>
    );
}

export default React.memo(CoinTable);
