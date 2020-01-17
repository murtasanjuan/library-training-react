import React from 'react';
import { connect } from 'react-redux';
import { Book } from '../../types';
import { getBooksList } from '../../redux/selectors';
import { HeaderAdmin } from '../../components/header-admin/HeaderAdmin';
import { SidenavAdmin } from '../../components/sidenav-admin/SidenavAdmin';
import { AdminContent } from '../admin-content/AdminContent';

// {/* <AdminContent /> */}
export function Admin(books: Book[]) {
  return (
    <div>
      <HeaderAdmin />
      <SidenavAdmin />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const books: Book[] = getBooksList(state);
  return { books };
};

export default connect(mapStateToProps)(Admin);
