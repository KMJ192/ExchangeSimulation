import { ConnectedSocket } from "../connect_socket/types";

//param socket address
export const createSocket = (addr: string): ConnectedSocket => {
    //const ws: w3cwebsocket = new w3cwebsocket(addr);
    const ws = new WebSocket(addr);
    ws.binaryType = "arraybuffer";
    return {
        socketClient: ws
    };
}