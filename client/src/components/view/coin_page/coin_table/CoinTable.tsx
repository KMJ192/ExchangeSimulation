import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { debounce } from 'lodash';
import Wrapper from '../../../wrapper/Wrapper'
import useLocalStorage from '../../../../custom_hook/useLocalStorage';

const bitsum_url = "https://api.bithumb.com/public/ticker/{order_currency}_{payment_currency}";
let reqURL_krw : string = bitsum_url;
reqURL_krw = reqURL_krw.replace("{order_currency}", "all");
reqURL_krw = reqURL_krw.replace("{payment_currency}", "KRW");

function CoinTable() {
    const [orderBook, setOrderbook] = useState({});
    // const [firstTime, setFirstTime] = useState<boolean>(true);
    // const [delayTime, setDelayTime] = useLocalStorage<number>("coinApiReqDelay", 500);

    useEffect(() => {
        debounce(async () => {
            const response = await axios.get(reqURL_krw)
                .then(response => response.data.data.BTC)
                .catch(err => err);
            //console.log(response);
            setOrderbook({});
        }, 5000)();
        // if(firstTime){
        //     setFirstTime(false);
        //     setDelayTime(5000);
        // }else if(delayTime !== 5000) {
        //     console.log("rendering");
        //     //setDelayTime(5000);
        // }
    }, [orderBook]);

    return (
        <Wrapper>
            will Coin Table
        </Wrapper>
    );
}

export default React.memo(CoinTable);
