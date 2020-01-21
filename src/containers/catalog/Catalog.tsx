import React from "react";
import BookList from "../../components/book-list/BookList";
import { ChipsFilter } from "../../components/chips-filters/ChipsFilter";

export function Catalog() {
    return (
        <div>
            <ChipsFilter />
        <BookList  />

      </div>
    );
}
