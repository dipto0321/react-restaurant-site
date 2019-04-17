import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import 'normalize.css/normalize.css';

import '../scss/main.scss';

require.context('../images', true, /\.(png|svg|jpg|gif)$/);

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

const About = () => (
  <div>
    <h1>About Page</h1>
  </div>
);

const Header = () => (
  <header>
    <h1>Restaurant Page</h1>
    <NavLink
      to="/"
      activeClassName="active-link"
      exact
    >
        Home
    </NavLink>
    <NavLink
      activeClassName="active-link"
      to="/about"
    >
        About
    </NavLink>
  </header>
);

const NotFound = () => (
  <div>
    <h1>404 Error</h1>
    <h3>
      <Link to="/">
        Home
      </Link>
    </h3>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<AppRouter />, document.getElementById('content'));
