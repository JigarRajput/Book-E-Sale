import { REDUCE_ITEM_COUNT } from "./constants";

export const reduceItemCount = (data) => {
    return {
        type: REDUCE_ITEM_COUNT,
        data: data
    }
}