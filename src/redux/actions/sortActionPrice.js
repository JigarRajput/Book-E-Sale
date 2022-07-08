import { SORT_BY_PRICE } from "./constants"
export const sortActionPrice = (data) => {
    return {
        type: SORT_BY_PRICE,
        data: data
    }

}