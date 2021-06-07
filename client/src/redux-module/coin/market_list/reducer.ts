import { GET_MARKETLIST, GET_MARKETLIST_ERROR, GET_MARKETLIST_SUCCESS } from "./action";
import { GetMarketListAction, GetMarketListState, InitialMarketList } from "./types";

export default function marketListReducer(
    state: GetMarketListState = InitialMarketList, 
    action: GetMarketListAction){
        switch(action.type){
            case GET_MARKETLIST:
                return {
                    ...state,
                    marketList: {
                        loading: true,
                        error: null,
                        data: null
                    }
                }
            case GET_MARKETLIST_SUCCESS:
                return {
                    ...state,
                    marketList: {
                        loading: false,
                        error: null,
                        data: action.payload
                    }
                }
            case GET_MARKETLIST_ERROR:
                return {
                    ...state,
                    marketList: {
                        loading: false,
                        error: action.payload,
                        data: null
                    }
                }
            default:
                return state;
        }
}