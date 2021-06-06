import axios from "axios";
import * as WebSocket from "ws";
import { MarketType } from "../types/coin.response.type";

export async function GetRealTimeData(){
    const marketCode: string = "https://api.upbit.com/v1/market/all?isDetails=false";
    const upbitWsUrl: string = "wss://api.upbit.com/websocket/v1";

    let getMarketCode: MarketType[] = await axios.get(marketCode).then(response => response.data);
    const marketList : string[] = getMarketCode
        .filter((list: MarketType) => list.market.includes('KRW-'))
        .map((list: MarketType) => list.market);
    //console.log(marketList);

    const socket: WebSocket = new WebSocket(upbitWsUrl);
    const reqData = `[{"ticket":"test"},{"type":"ticker","codes": ${JSON.stringify(marketList)}}]`;
    try{
        socket.onopen = function(e: WebSocket.OpenEvent) {
            //socket.send(reqData);
        }
    
        socket.onmessage = async function(message: WebSocket.MessageEvent){
            console.log(message.data);
        }
    
        socket.onerror = (e: WebSocket.ErrorEvent) => {
            console.log(e);
            //socket.close();
        }

    }catch(e){
        console.log(e);
        socket.close();
    }
}
  