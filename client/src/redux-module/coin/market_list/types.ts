import * as actions from './action';
import { ActionType } from "typesafe-actions";

export interface MarketList {
    market: string;
    korean_name: string;
    english_name : string;
}

export type GetMarketListAction = ActionType<typeof actions>
export type GetMarketListState = {
    marketList: {
        loading: boolean;
        data: MarketList | null,
        error: Error | null
    }
}

export const InitialMarketList: GetMarketListState = {
    marketList: {
        loading: false,
        error: null,
        data: null
    }
}