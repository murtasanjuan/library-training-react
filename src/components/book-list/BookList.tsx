import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getBooks, getPending, getError } from "../../redux/selectors";
import { fetchBooks } from "../../services/book.service";
import {
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError
} from "../../redux/actions";
import { BookItem } from "./BookItem";
import "./BookList.scss";
import { Box, CircularProgress } from "@material-ui/core";


interface Props {
  books: any[];
  pending: boolean;
  error: any;
  fetchBooksPending: typeof fetchBooksPending;
  fetchBooksSuccess: typeof fetchBooksSuccess;
  fetchBooksError: typeof fetchBooksError;
}

function BookList(props: Props): JSX.Element {
  useEffect(() => {
    props.fetchBooksPending();
    fetchBooks()
      .then((res: any) => props.fetchBooksSuccess(res.data))
      .catch((error: any) => props.fetchBooksError(error));
  });

  return (
    <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper"  alignContent="flex-start">
      {props.pending && <CircularProgress /> }
      {props.error && <p>Error retreiving list of books</p> }
      {props.books.map((book: any) => (
        <BookItem book={book} />
      ))}
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  const books: any[] = getBooks(state);
  const pending: boolean = getPending(state);
  const error: any = getError(state);

  return { books, pending, error };
};

export default connect(mapStateToProps, {
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError
})(BookList);
