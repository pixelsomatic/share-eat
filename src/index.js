import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Restaurantes from './Restaurants';
import Silva from './page/silvaLanches';
import Palatus from './page/palatusPucRs';
import Canal from './page/canalCafePuc';
import zCafe from './page/zCafe';
import SilvaForm from './form/SilvaForm';
import zcafeForm from './form/ZcafeForm';
import CanalForm from './form/CanalForm';
import PalatusForm from './form/PalatusForm';


ReactDOM.render(
<BrowserRouter>
   <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/restaurantes" component={Restaurantes} />
      <Route path="/page/silva-lanches" component={Silva} />
      <Route path="/page/palatus-puc-rs" component={Palatus} />
      <Route path="/page/canal-cafe-puc-rs" component={Canal} />
      <Route path="/page/z-cafe" component={zCafe} />
      <Route path="/form/silva-lanches" component={SilvaForm} />
      <Route path="/form/z-cafe" component={zcafeForm} />
      <Route path="/form/canal-cafe-puc-rs" component={CanalForm} />
      <Route path="/form/palatus-puc-rs" component={PalatusForm} />
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
