import axios, { AxiosError, AxiosResponse } from "axios";
import { MarketList } from "../market_list/types";

export async function MarketListApi() {
    const response: MarketList = await axios.get<MarketList>("https://api.upbit.com/v1/market/all", {
        withCredentials: false
    }).then((response: AxiosResponse) => response.data
        .filter((list: MarketList) => list.market.includes("KRW-"))
        .map((list: MarketList) => list.market))
      .catch((err: AxiosError) => err);
      
    return response;
}