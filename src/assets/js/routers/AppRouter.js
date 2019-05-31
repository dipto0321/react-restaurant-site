import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import contents from '../data/content';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import withContent from '../components/withContent';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          component={withContent('', Home)}
          exact
        />
        <Route
          path="/about"
          component={withContent('about', About)}
        />

        <Route
          path="/contact"
          component={withContent('contact', Contact)}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
