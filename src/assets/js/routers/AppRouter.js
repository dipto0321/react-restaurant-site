import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import contents from '../data/content';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" render={props => <Home {...props} content={contents.home} />} exact />
        <Route path="/about" render={props => <About {...props} content={contents.about.text} />} />
        <Route path="/contact" render={props => <Contact {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
