import { buffers, END, eventChannel } from "redux-saga";
import { Ticker, Trade, Orderbook } from "../get_coin/types";
import { ReqUpbitSocketParam } from '../get_coin/types';

function upbitWebSocketChannel({ws, marketList, reqType} : ReqUpbitSocketParam){
    return eventChannel<Ticker | Trade | Orderbook>(emit => {
        ws.onopen = () => {
            const sendData = JSON.stringify([
                { ticket:"test" },
                { type: reqType, codes:marketList }
            ]);
            ws.send(sendData);
        }
        ws.onmessage = (e: any) => {
            const encode =  new TextDecoder("utf-8");
            const data: Ticker | Trade | Orderbook = JSON.parse(encode.decode(e.data));
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
    }, buffers.expanding(200) || buffers.none());
}
async function getInitCandles(){

}

export {
    upbitWebSocketChannel,
    getInitCandles
}