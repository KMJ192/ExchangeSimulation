import { w3cwebsocket } from "websocket";
import { MarketList } from "../market_list";
import { CoinData } from "../get_coin/types";

export default function GetCoinDataApi(ws: w3cwebsocket, marketList: MarketList) /*: CoinData | null*/{
    ws.onopen = () => {
        const sendData = JSON.stringify([
            { ticket:"test" },
            { type:"ticker", codes:marketList }
        ]);
        ws.send(sendData);
    }
    ws.onmessage = (e: any) => {
        const enc =  new TextDecoder("utf-8");
        const data: CoinData = JSON.parse(enc.decode(e.data));
        //return data;
        console.log(data);
    }
    ws.onerror = (e: any) => {
        ws.close();
        console.log(e);
    }
    //return null;
}