import React from 'react';
import { HeaderAdmin } from '../../components/header-admin/HeaderAdmin';
import { SidenavAdmin } from '../../components/sidenav-admin/SidenavAdmin';

// {/* <AdminContent /> */}
export function Admin() {
  return (
    <div>
      <HeaderAdmin />
      <SidenavAdmin />
    </div>
  );
}
