import { FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from "./actionTypes";
import { Book } from "../types";





export function fetchBooksPending() {
    return {
        type: FETCH_BOOKS_PENDING
    }
}

export function fetchBooksSuccess(books: Book[]) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books,
    }
}

export function fetchBooksError(error: any) {
    return {
        type: FETCH_BOOKS_ERROR,
        error: error,
    }
}



