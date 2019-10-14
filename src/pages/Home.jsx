import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import {Link} from 'react-router-dom';

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <div className="inner">
            <div className="sub">Hello !</div>
            <div className="name">I am Mahesh</div>
            <div className="skill">A designer &amp; UI Developer</div>
            <div className="contact">
              <Link to="/contact"> contact me</Link>
            </div>
           
          </div>
        </main>

        <MobileNav />
      </div>
    );
  }
}

export default Home;
