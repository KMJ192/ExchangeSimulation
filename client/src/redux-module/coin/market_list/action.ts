import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { MarketList } from "./types";

export const GET_MARKETLIST = 'coin/GET_MARKETLIST';
export const GET_MARKETLIST_SUCCESS = 'coin/GET_MARKETLIST_SUCCESS';
export const GET_MARKETLIST_ERROR = 'coin/GET_MARKETLIST_ERROR';

export const getMarketListAsync = createAsyncAction(
    GET_MARKETLIST,
    GET_MARKETLIST_SUCCESS,
    GET_MARKETLIST_ERROR
)<undefined, MarketList, AxiosError>();