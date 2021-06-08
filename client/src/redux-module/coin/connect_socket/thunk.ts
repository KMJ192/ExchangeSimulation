import { Dispatch } from "redux";
import { createSocket } from "../api/socket";
import { connectSocketAsycn } from "./action";

export function connectSocketThunk(addr: string){
    return async (dispatch: Dispatch) => {
        const { request, success, failure } = connectSocketAsycn;
        dispatch(request());
        try{
            const connectSocket = createSocket(addr);
            dispatch(success(connectSocket));
        }catch(e: any){
            dispatch(failure(e));
        }
    }
}