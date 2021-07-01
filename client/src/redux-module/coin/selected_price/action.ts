export const SELECTED_PRICE = 'coin/SELECTED_PRICE';

export const selectedPrice = (price: string) => ({
    type: SELECTED_PRICE,
    payload: price
})