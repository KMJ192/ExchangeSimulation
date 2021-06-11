import { w3cwebsocket } from "websocket";
import { CoinData } from "../get_coin/types";
import { buffers, eventChannel } from "redux-saga";

export default function GetCoinDataApi(ws: w3cwebsocket, reqObject: string) /*: CoinData | null*/{
    // ws.onopen = () => {
    //     const sendData = JSON.stringify([
    //         { ticket:"test" },
    //         { type:"ticker", codes:marketList }
    //     ]);
    //     ws.send(sendData);
    // }
    // ws.onmessage = (e: any) => {
    //     const enc =  new TextDecoder("utf-8");
    //     const data: CoinData = JSON.parse(enc.decode(e.data));
    //     //return data;
    //     console.log(data);
    // }
    // ws.onerror = (e: any) => {
    //     ws.close();
    //     console.log(e);
    // }
    // //return null;

    // return eventChannel((emit) => {
    //     ws.onopen = () => {
    //         ws.send(reqObject);
    //     }
    //     ws.onmessage = (e: any) => {
    //         const enc =  new TextDecoder("utf-8");
    //         const data: CoinData = JSON.parse(enc.decode(e.data));
    //         emit(data);
    //         console.log(data);
    //     }
    //     ws.onerror = (e: any) => {
    //         ws.close();
    //         console.log(e);
    //     }
    // }, buffers.expanding(500) || buffers.none());
}

// const connectSocekt = (socket, connectType, action, buffer) => {
//     return eventChannel((emit) => {
//       socket.onopen = () => {
//         socket.send(
//           JSON.stringify([
//             { ticket: "downbit-clone" },
//             { type: connectType, codes: action.payload },
//           ])
//         );
//       };
  
//       socket.onmessage = (evt) => {
//         const enc = new TextDecoder("utf-8");
//         const arr = new Uint8Array(evt.data);
//         const data = JSON.parse(enc.decode(arr));
  
//         emit(data);
//       };
  
//       socket.onerror = (evt) => {
//         emit(evt);
//       };
  
//       const unsubscribe = () => {
//         socket.close();
//       };
  
//       return unsubscribe;
//     }, buffer || buffers.none());
//   };