import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { getBooks } from '../../redux/selectors';
import { Book } from '../../types';

const BookList = (books: Book[]) => {
  return (
    <List>
      {books.map(book => (
        <ListItem button key={book.idBook}>
          <Typography variant='h6'>
            <ListItemText primary={book.idBook} />
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state: any) => {
  const books: Book[] = getBooks(state);

  return { books };
};

export default connect(mapStateToProps)(BookList);
