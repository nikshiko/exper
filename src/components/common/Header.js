import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import SiteDirectory from '../SiteDirectory';
import Home from '../Home';
import Login from '../Login';
const Header = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/site-directory">Site Directory</Link></li>
        <li><Link to="/login">Sign In</Link></li>

        <Route exact path="/" component={Home}/>
        <Route path="/site-directory" component={SiteDirectory}/>
        <Route path="/login" component={Login}/> 
      </ul>
    </div>
  </Router>
);

export default Header;