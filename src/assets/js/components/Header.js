import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <h1 className="mainHeader">Restaurant Page</h1>
    <div className="tabNav">
      <NavLink to="/" className="tabLi" exact>
        Home
      </NavLink>
      <NavLink className="tabLi" to="/about">
        About
      </NavLink>
      <NavLink className="tabLi" to="/contact">
        Contact
      </NavLink>
    </div>
  </header>
);
