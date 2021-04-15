import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Item from '../components/Item';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Portfolio from '../components/Portfolio';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/item/:id" component={Item} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
