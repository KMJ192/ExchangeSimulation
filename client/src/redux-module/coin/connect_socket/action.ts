import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { CandleSocket } from "./types";

export const CONNECT_CANDLE_SOCKET = "coin/CONNECT_CANDLE_SOCKET";
export const CONNECT_CANDLE_SOCKET_SUCCESS = "coin/CONNECT_CANDLE_SOCKET_SUCCESS";
export const CONNECT_CANDLE_SOCKET_ERROR = "coin/CONNECT_CANDLE_SOCKET_ERROR";

export const connectCandleSocket = createAsyncAction(
    CONNECT_CANDLE_SOCKET,
    CONNECT_CANDLE_SOCKET_SUCCESS,
    CONNECT_CANDLE_SOCKET_ERROR
)<string, CandleSocket, AxiosError>();