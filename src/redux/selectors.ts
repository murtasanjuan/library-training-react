
export const getBooksState = (store: any) => store.books;

export const getBooksList = (store: any) =>
  getBooksState(store) ? getBooksState(store).allIds : [];

export const getBookById = (store: any, id: string) =>
  getBooksState(store) ? { ...getBooksState(store).byIds[id], id } : {};

export const getBooks = (store: any) =>
  getBooksList(store).map((id: string) => getBookById(store, id));

