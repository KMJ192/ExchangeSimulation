//param socket address
export const createUpibtSocket = (): WebSocket => {
    try{
        const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
        ws.binaryType = "arraybuffer";
        return ws;
    }catch(e: any){
        return e;
    }
}