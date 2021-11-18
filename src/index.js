import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


import './index.css';

//Pages
import Start from './pages/Start';

import Login from './pages/Login';
import Register from './pages/Register';
import Recovery from './pages/Recovery';
import App from './pages/app/App';
import NotFound from './pages/NotFound';
//Components

ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Start} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/recovery" component={Recovery} />
      <Route path="/user" component={App} />
      <Route path='*' exact={true} component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
