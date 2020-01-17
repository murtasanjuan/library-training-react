import React from 'react';
import './App.scss';
import Portal from './containers/portal/Portal';
import { Admin } from './containers/admin/Admin';
import { Route, BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/' component={Portal} />
        <Route path='/admin' component={Admin} />
      </BrowserRouter>
    </div>
  );
};

export default App;
