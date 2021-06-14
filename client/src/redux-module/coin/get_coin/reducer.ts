import { GET_COINDATA, GET_COINDATA_ERROR, GET_COINDATA_SUCCESS } from "./action";
import { GetCoinDataAction, GetCoinDataState, InitialCoinData } from "./types";

export default function coinDataReducer(
    state: GetCoinDataState = InitialCoinData, 
    action: GetCoinDataAction
){
    switch(action.type){
        case GET_COINDATA: 
            return {
                ...state,
                coinData: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_COINDATA_SUCCESS:
            return {
                ...state,
                coinData: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_COINDATA_ERROR:
            return {
                ...state,
                coinData: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}