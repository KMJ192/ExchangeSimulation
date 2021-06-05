import axios from "axios";
import WebSocket from "ws";
import { MarketType } from "../types/coin.response.type";


export async function GetRealTimeData(){
    const tmpUrl = "https://api.upbit.com/v1/candles/minutes/1?market={_currency_}-{_code_}&count={_unit_}";
    const marketCode = "https://api.upbit.com/v1/market/all?isDetails=false";
    const upbitWsUrl = "wss://api.upbit.com/websocket/v1";
  
    let unit : string = "1";
    //let currency: string = "KRW";
    //let code: string = "BTC";
    let reqUrl: string = tmpUrl;
    //reqUrl = reqUrl.replace("{_currency_}", currency);
    //reqUrl = reqUrl.replace("{_code_}", code);
    reqUrl = reqUrl.replace("{_unit_}", unit);

    let getMarketCode: MarketType[] = await axios.get(marketCode).then(response => response.data);
    const marketList : string[] = getMarketCode
        .filter((list: MarketType) => list.market.includes('KRW-'))
        .map((list: MarketType) => list.market);
    console.log(marketList);
    const ws = new WebSocket(upbitWsUrl);
    ws.onopen = () => {
        ws.send(
            `[{"ticket":"test"},{"type":"ticker","codes": ${JSON.stringify(
                marketList,
            )}}]`,
        );
    }
    // ws.onmessage = async e => {
    //     const { data } = e;
    //     const t = await new Response(data).text();
    //}
    
    // for(let i:number = 0; i < code.length; i++){
    //     console.log(code[i]);
    // }

    // let i: number = 3;
    // while(i){
    //     const data: ResponseCType = await axios.get(reqUrl)
    //         .then((response: AxiosResponse) => response.data)
    //         .catch((err: AxiosError) => err);
    //     console.log(data);
    //     sleep(3000);
    //     i--;
    // }
    
  }