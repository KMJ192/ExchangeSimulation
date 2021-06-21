export const SELECTED_COIN = 'coin/SELECT_COIN';

export const selectCoin = (coinCode: string) => ({
    type: SELECTED_COIN,
    payload: coinCode
});