import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css'


class Navbar extends Component{
  render(){
    return(
      <nav>
      <ul>
      <Link to="/"> <li className="logo">M</li></Link>
        <div className="nav-items">
            <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> About </Link></li>
          <li><Link to="/skills"> Skills</Link></li>
          <li><Link to="/portfolio"> Portfolio</Link></li>
          <li><Link to="/contact"> Contact</Link></li>
        </div>
      </ul>
    </nav>
    );
  }
}

export default Navbar;