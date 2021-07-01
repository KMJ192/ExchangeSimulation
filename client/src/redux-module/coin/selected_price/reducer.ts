import { SELECTED_PRICE } from "./action";
import { InitialSelectedPrice, SelectedPriceAction, SelectedPriceState } from "./types";

export default function selectedPriceReducer(
    state: SelectedPriceState = InitialSelectedPrice,
    action: SelectedPriceAction
){
    switch(action.type){
        case SELECTED_PRICE:{
            return {
                ...state,
                price: action.payload
            }
        }
        default:
            return state
    }
}