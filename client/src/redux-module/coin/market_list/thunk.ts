import { Dispatch } from "redux";
import { MarketListApi } from "../api/get_market_list";
import { getMarketListAsync } from "./action";

export function getMarketListThunk(){
    return async (dispatch: Dispatch) => {
        const { request, success, failure } = getMarketListAsync;
        dispatch(request());
        try{
            const marketList = await MarketListApi();
            dispatch(success(marketList));
        }catch(e: any){
            dispatch(failure(e));
        }
    }
}