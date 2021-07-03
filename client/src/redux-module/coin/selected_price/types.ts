import { selectedPrice } from "./action";

export type SelectedPriceAction = ReturnType<typeof selectedPrice>
export type SelectedPriceState = {
    price: string;
}

export const InitialSelectedPrice: SelectedPriceState ={
    price: ""
}