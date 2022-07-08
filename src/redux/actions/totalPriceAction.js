import { TOTAL_PRICE_INCREASE, TOTAL_PRICE_DECREASE } from "./constants"
export const priceIncreaseAction = (price) => {
    return {
        type: TOTAL_PRICE_INCREASE,
        price: price
    }

}
export const priceDecreaseAction = (price) => {
    return {
        type: TOTAL_PRICE_DECREASE,
        price: price
    }

}   