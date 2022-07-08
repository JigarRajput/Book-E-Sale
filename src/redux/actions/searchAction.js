import { SEARCH_TERM } from "./constants"
export const searchAction = (book) => {
    return {
        type: SEARCH_TERM,
        book: book
    }

}
