import { ADD_BOOK, DELETE_BOOK } from "./actionTypes";
import { Book } from "../types";

let nextBookId = 0;

export const addBook = (book: Book) => ({
  type: ADD_BOOK,
  payload: {
    id: ++nextBookId,
    idBook: book.idBook,
    title: book.title,
    author: book.author,
    preview: book.preview,
    date: book.date ? book.date : new Date(),
    content: book.content ? book.content : 'Content not found',
  }
});

export const deleteBook = (id: string) => ({
  type: DELETE_BOOK,
  payload: {id}
});


