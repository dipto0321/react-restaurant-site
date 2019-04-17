import React from 'react';
import {
  BrowserRouter, Link, NavLink, Route, Switch,
} from 'react-router-dom';

import Home from '../components/Home';

const About = () => (
  <div>
    <h1>About Page</h1>
  </div>
);

const Contact = () => (
  <div className="contact">
    <h1> This is contact!</h1>
  </div>
);

const Header = () => (
  <header>
    <h1>Restaurant Page</h1>
    <NavLink to="/" activeClassName="active-link" exact>
      Home
    </NavLink>
    <NavLink activeClassName="active-link" to="/about">
      About
    </NavLink>
    <NavLink activeClassName="active-link" to="/contact">
      Contact
    </NavLink>
  </header>
);

const NotFound = () => (
  <div>
    <h1>404 Error</h1>
    <h3>
      <Link to="/">Home</Link>
    </h3>
  </div>
);

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
