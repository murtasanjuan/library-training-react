import React from 'react';
import { HeaderPortal } from '../../components/header-portal/HeaderPortal';
import { Portal } from '../portal/Portal';
import './MainLayout.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Catalog } from '../catalog/Catalog';

export function MainLayout() {
  return (
    <div className='App'>
      <BrowserRouter >
        <HeaderPortal />
        <Route exact path="/" component={Portal} />
        <Route path="/catalog" component={Catalog} />
      </BrowserRouter>
    </div>
  );
}
