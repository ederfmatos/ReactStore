import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/produtos/:category?" component={Products} />
        <Route exact path="/produto/:produto" component={ProductDetail} />
        <Route exact path="/contato" component={Contact} />
        <Route exact path="/cadastrar" component={Register} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
