import React from 'react';
import {
  BrowserRouter, Link, NavLink, Route, Switch,
} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import contents from '../data/content';

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
        <Route
          path="/"
          render={props => (
            <Home
              {...props}
              content={contents.home.content}
            />
          )}
          exact
        />
        <Route
          path="/about"
          render={
            props => (
              <About
                {...props}
                content={contents.about.content}
              />
            )
          }
        />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
