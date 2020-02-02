import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produtos" component={Products} />
        <Route exact path="/produto/:produto" component={ProductDetail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
