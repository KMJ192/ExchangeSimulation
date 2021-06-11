import { ActionType } from "typesafe-actions";
import { connectSocketAsycn } from "./action";

export interface ConnectedSocket{
    socketClient : WebSocket;
}

export type ConnectSocketAction = ActionType<typeof connectSocketAsycn>
export type ConnectSocketState = {
    connectSocket : {
        loading: boolean;
        error: Error | null;
        data: ConnectedSocket | null
    }
}

export const InitialConnectSocket: ConnectSocketState = {
    connectSocket: {
        loading: false,
        error: null,
        data: null
    }
}