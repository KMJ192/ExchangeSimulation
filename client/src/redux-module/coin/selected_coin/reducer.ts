import { SELECTED_COIN } from "./action";
import { InitialSelectedCoin, SelectedCoinAction, SelectedCoinState } from "./types";

export default function selectedCoinReducer(
    state: SelectedCoinState = InitialSelectedCoin,
    action: SelectedCoinAction
){
    switch(action.type){
        case SELECTED_COIN:
            return {
                ...state,
                coinCode: action.payload
            }
        default:
            return state;
    }
}