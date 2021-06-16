import { buffers, END, EventChannel, eventChannel } from "redux-saga";
import { ReqUpbitSocketParam } from '../get_coin/types';

export function upbitWebSocketChannel(ws: WebSocket, {marketList, reqType} : ReqUpbitSocketParam): EventChannel<TextEncoder>{
    return eventChannel<TextEncoder>(emit => {
        ws.onopen = () => {
            const sendData = JSON.stringify([
                { ticket:"test" },
                { type: reqType, codes:marketList }
            ]);
            ws.send(sendData);
        }
        ws.onmessage = (e: any) => {
            const encode =  new TextDecoder("utf-8");
            const data: TextEncoder = JSON.parse(encode.decode(e.data));
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