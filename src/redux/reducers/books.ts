import { FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from "../actionTypes";
import { Action, StateBooks } from "../../types";


const initialState: StateBooks = {
  error: null,
  pending: false,
  products: [],
};

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_BOOKS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
    
    default:
      return state;
  }
}

export const getBooks = (state: StateBooks) => state.products;
export const getBooksPending = (state: StateBooks) => state.pending;
export const getBooksError = (state: StateBooks) => state.error;
