import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to='/'><h2>Logo</h2></Link>
      <ul className="nav-links">
      	<Link to='/about'><li>About</li></Link>
      	<Link to='/product'><li>Product</li></Link>
      	<li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
