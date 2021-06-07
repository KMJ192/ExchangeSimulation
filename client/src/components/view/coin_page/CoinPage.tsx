import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { w3cwebsocket } from 'websocket';
import { getMarketListThunk } from '../../../redux-module/coin/market_list';
import { RootState } from '../../../redux-module/RootReducer';


function CoinPage() {
    const [list, setList] = useState<string>("");
    const dispatch = useDispatch();
    const marketList = useSelector((state: RootState) => state.market_list.marketList);
    
    useEffect(() => {
        //업비트 새벽 2시 20분이후 cors block 내일 다시 확인
        //dispatch(getMarketListThunk());
        if(list !== String(marketList.data?.market)){
            setList(String(marketList.data?.market));
        }
        console.log(list);
        console.log(marketList);
    }, [list, marketList]);

    // const ws: w3cwebsocket = new w3cwebsocket("wss://api.upbit.com/websocket/v1");
    // ws.binaryType = "arraybuffer";
    
    return (
        <div>
            coinPage
        </div>
    )
}

export default React.memo(CoinPage);