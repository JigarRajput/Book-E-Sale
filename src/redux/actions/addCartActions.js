import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants"

export const addToCartAction = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }

}
