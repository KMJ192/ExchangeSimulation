import { buffers, END, eventChannel } from "redux-saga";
import { Ticker, Trade, Orderbook } from "../get_coin/types";
import { ReqUpbitSocketParam } from '../get_coin/types';

export default function upbitWebSocketNetworking({ws, marketList, reqType} : ReqUpbitSocketParam){
    return eventChannel(emit => {
        ws.onopen = () => {
            const sendData = JSON.stringify([
                { ticket:"test" },
                { type: reqType, codes:marketList }
            ]);
            ws.send(sendData);
        }
        ws.onmessage = (e: any) => {
            const enc =  new TextDecoder("utf-8");
            const data: Ticker | Trade | Orderbook = JSON.parse(enc.decode(e.data));
            emit(data);
        }
        ws.onerror = (e: any) => {
            ws.close();
            emit(e);
            emit(END);
        }

        const unsubscribe = () => {
            ws.close();
        }
        return unsubscribe;
    }, buffers.expanding(1000) || buffers.none());
}