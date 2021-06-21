import { selectCoin } from "./action";

export type SelectedCoinAction = ReturnType<typeof selectCoin>;
export type SelectedCoinState = {
    coinCode: string;
}

export const InitialSelectedCoin: SelectedCoinState = {
    coinCode: ""
}