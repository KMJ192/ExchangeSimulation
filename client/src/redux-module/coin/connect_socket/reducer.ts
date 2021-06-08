import { CONNECT_SOCKET, CONNECT_SOCKET_ERROR, CONNECT_SOCKET_SUCCESS } from "./action";
import { ConnectSocketAction, ConnectSocketState, InitialConnectSocket } from "./types";

export default function connectSocketReducer(
    state: ConnectSocketState = InitialConnectSocket,
    action: ConnectSocketAction){
        switch(action.type){
            case CONNECT_SOCKET:
                return {
                    ...state,
                    connectSocket: {
                        loading: true,
                        error: null,
                        data: null
                    }
                }
            case CONNECT_SOCKET_SUCCESS:
                return {
                    ...state,
                    connectSocket: {
                        loading: false,
                        error: null,
                        data: action.payload
                    }
                }
            case CONNECT_SOCKET_ERROR:
                return {
                    ...state,
                    connecSocket: {
                        loading: false,
                        error: action.payload,
                        data: null
                    }
                }
            default:
                return state;
        }
}