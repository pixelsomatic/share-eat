import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Restaurantes from './Restaurants';
import Details from './Details';

ReactDOM.render(
<BrowserRouter>
   <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/restaurantes" component={Restaurantes} />
      <Route path="/silva-lanches" component={Details} />
   </Switch>
</BrowserRouter>
, document.getElementById('root'));

if (module.hot) {
   module.hot.accept()
 }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
