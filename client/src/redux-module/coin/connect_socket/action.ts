import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { ConnectedSocket } from "./types";

export const CONNECT_SOCKET = "coin/CONNECT_CANDLE_SOCKET";
export const CONNECT_SOCKET_SUCCESS = "coin/CONNECT_CANDLE_SOCKET_SUCCESS";
export const CONNECT_SOCKET_ERROR = "coin/CONNECT_CANDLE_SOCKET_ERROR";

export const connectSocketAsycn = createAsyncAction(
    CONNECT_SOCKET,
    CONNECT_SOCKET_SUCCESS,
    CONNECT_SOCKET_ERROR
)<undefined, ConnectedSocket, AxiosError>();