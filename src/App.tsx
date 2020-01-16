import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portal from './containers/portal/Portal';
import { Admin } from './containers/admin/Admin';
import { Route, BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <BrowserRouter >
            <Route exact path="/" component={Portal} />
            <Route path="/admin" component={Admin} />
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
