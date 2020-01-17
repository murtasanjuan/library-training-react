import React from 'react';
import './App.scss';
import { MainLayout } from './containers/main-layout/MainLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import { Admin } from './containers/admin/Admin';

const App: React.FC = () => {
  return (
    
    <BrowserRouter >
    <Route exact path="/" component={MainLayout} />
    <Route path="/admin" component={Admin} />
  </BrowserRouter>
  );
}

export default App;
