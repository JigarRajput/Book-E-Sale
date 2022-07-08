import { SET_PRODUCTS } from "./constants"
export const setProductsAction = (data) => {
    return {
        type: SET_PRODUCTS,
        data: data
    }

}
