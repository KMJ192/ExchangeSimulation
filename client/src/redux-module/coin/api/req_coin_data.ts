import axios, { AxiosResponse } from "axios";
import { RequestParam } from "../req_coin/types";

async function requestToUpbit(addr: string){
    return await axios.get(addr, {
        withCredentials: false
    }).then((response: AxiosResponse) => response.data)
}

function reqTicker({marketCode}: RequestParam){
    return requestToUpbit(`https://api.upbit.com/v1/ticker?markets=${marketCode}`);
}
function reqTrade({marketCode}: RequestParam){
    return requestToUpbit(`https://api.upbit.com/v1/trades/ticks?market=${marketCode}&count=50`);
}
function reqOrderbook({marketCode}: RequestParam){
    return requestToUpbit(`https://api.upbit.com/v1/orderbook?markets=${marketCode}`);
}
export {
    reqTicker,
    reqTrade,
    reqOrderbook
}