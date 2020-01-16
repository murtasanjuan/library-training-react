import { ADD_BOOK, DELETE_BOOK } from "../actionTypes";
import { Action } from "../../types";

const initialState: {allIds: string[], byIds: {[key: string]: any}} = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_BOOK: {
      const { id, idBook, title, author, preview, date, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            idBook,
            title,
            author,
            preview,
            date,
            content,
          }
        }
      };
    }
    case DELETE_BOOK: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds.filter((valueId) => valueId !== id)]
      };
    }
    default:
      return state;
  }
}
