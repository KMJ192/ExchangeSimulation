import { buffers, eventChannel } from "redux-saga";
import { CoinData } from "../get_coin/types";
import { ReqUpbitSocketParam } from '../get_coin/types';

export default function coinSocketNetworking({ws, marketList} : ReqUpbitSocketParam){
    // const bufferSetting = eventChannel(() => {
    //     ws.onopen = () => {
    //         const sendData = JSON.stringify([
    //             { ticket:"test" },
    //             { type:"ticker", codes:marketList }
    //         ]);
    //         ws.send(sendData);
    //     }
    //     ws.onmessage = (e: any) => {
    //         const enc =  new TextDecoder("utf-8");
    //         const data: CoinData = JSON.parse(enc.decode(e.data));
    //         console.log(data);
    //     }
    //     ws.onerror = (e: any) => {
    //         ws.close();
    //         console.log(e);
    //     }
    // }, buffers.expanding(500) || buffers.none());

    // return bufferSetting;
    // const bufferSetting = eventChannel(() => {
    //     ws.onopen = () => {
    //         const sendData = JSON.stringify([
    //             { ticket:"test" },
    //             { type:"ticker", codes:marketList }
    //         ]);
    //         ws.send(sendData);
    //     }
    //     ws.onmessage = (e: any) => {
    //         const enc =  new TextDecoder("utf-8");
    //         const data: CoinData = JSON.parse(enc.decode(e.data));
    //         console.log(data);
    //     }
    //     ws.onerror = (e: any) => {
    //         ws.close();
    //         console.log(e);
    //     }
    // }, buffers.expanding(500) || buffers.none());
    let bufferSetting;
    //console.log(ws);
    ws.onopen = () => {
        const sendData = JSON.stringify([
            { ticket:"test" },
            { type:"ticker", codes:marketList }
        ]);
        console.log(marketList);
        ws.send(sendData);
    }
    ws.onmessage = (e: any) => {
        const enc =  new TextDecoder("utf-8");
        const data: CoinData = JSON.parse(enc.decode(e.data));
        bufferSetting = data
        console.log(bufferSetting);
    }
    ws.onerror = (e: any) => {
        //ws.close();
        console.log(e);
    }

    return bufferSetting;
}