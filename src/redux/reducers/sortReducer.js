import { useSelector } from "react-redux";
import { SORT_BY_ALPHA, SORT_BY_PRICE } from "../actions/constants";

const initialState = {
    sorted_books: []
}

const sortReducer = (state = initialState, action) => {

    switch (action.type) {

        case SORT_BY_PRICE: return {
            ...state,
            sorted_books: [...action.data.sort(function (a, b) {
                return (a.price - 0.01 * a.discount) - (b.price - 0.01 * b.discount);
            })]
        }

        case SORT_BY_ALPHA: return {
            ...state,
            sorted_books: [...action.data.sort(function (a, b) {
                return a.title.toUpperCase().localeCompare(b.title.toUpperCase());
            })]
        }

        default: return state
    }
}

export default sortReducer;