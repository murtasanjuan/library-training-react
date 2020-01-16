import React from "react";
import { connect } from "react-redux";
import { Book } from "../../types";
import { getBooksList } from "../../redux/selectors";

export function Admin(books: Book[]) {
    return (<div>Admin</div>);
}

const mapStateToProps = (state: any) => {
    const books: Book[] = getBooksList(state);
    return { books };
  };

export default connect(
    mapStateToProps,
)(Admin);