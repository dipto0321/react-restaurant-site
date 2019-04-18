import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

export default () => (
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
