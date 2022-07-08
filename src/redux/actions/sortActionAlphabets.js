import { SORT_BY_ALPHA, SORT_BY_PRICE } from "./constants"

export const sortActionAlphabets = (data) => {
    return {
        type: SORT_BY_ALPHA,
        data: data
    }

}

