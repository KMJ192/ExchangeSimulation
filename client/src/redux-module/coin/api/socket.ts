import { ConnectedSocket } from "../connect_socket/types";

//param socket address
export const createSocket = (addr: string): ConnectedSocket => {
    const ws = new WebSocket(addr);
    ws.binaryType = "arraybuffer";
    return {
        socketClient: ws
    };
}