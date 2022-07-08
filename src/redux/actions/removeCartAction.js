import { REMOVE_FROM_CART } from "./constants"
export const removeFromCartAction = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data: data
    }

}
