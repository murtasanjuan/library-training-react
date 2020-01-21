
export const getBooksState = (store: any) => store.books;

export const getBooks = (store: any) =>
  getBooksState(store) ? getBooksState(store).products : [];

export const getPending = (store: any) =>
  getBooksState(store) ? getBooksState(store).pending : false;

  export const getError = (store: any) =>
  getBooksState(store) ? getBooksState(store).error : false;

