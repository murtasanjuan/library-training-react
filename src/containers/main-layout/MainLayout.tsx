import React from "react";
import { connect } from "react-redux";
import { Book } from "../../types";
import { getBooksList } from "../../redux/selectors";
import { HeaderPortal } from "../../components/header-portal/HeaderPortal";
import { Portal } from "../portal/Portal";
import "./MainLayout.css";

export function MainLayout(books: Book[]) {
    return (
        <div className="App">
            <HeaderPortal />
        <Portal />
        
      </div>
    );
}

const mapStateToProps = (state: any) => {
    const books: Book[] = getBooksList(state);
    return { books };
  };

export default connect(
    mapStateToProps,
)(MainLayout);
