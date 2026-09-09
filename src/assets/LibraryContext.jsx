import React, { createContext, useReducer } from "react";

export const LibraryContext = createContext();

const initialState = {
  issuedBooks: []
};

function libraryReducer(state, action) {

  switch (action.type) {

    case "ISSUE_BOOK":
      return {
        ...state,
        issuedBooks: [...state.issuedBooks, action.payload]
      };

    case "RETURN_BOOK":
      return {
        ...state,
        issuedBooks: state.issuedBooks.filter((_, i) => i !== action.payload)
      };

    default:
      return state;
  }
}

export function LibraryProvider({ children }) {

  const [state, dispatch] = useReducer(libraryReducer, initialState);

  return (
    <LibraryContext.Provider value={{ state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
}