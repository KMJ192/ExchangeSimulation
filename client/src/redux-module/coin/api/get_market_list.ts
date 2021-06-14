import axios, { AxiosResponse } from "axios";
import { MarketList } from "../market_list/types";

export async function MarketListApi() {
    const response: MarketList = await axios.get<MarketList>("https://api.upbit.com/v1/market/all", {
        withCredentials: false
    }).then((response: AxiosResponse) => response.data);
    
    return response;
}