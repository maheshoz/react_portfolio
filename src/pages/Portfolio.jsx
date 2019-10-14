import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <div className="full-width">
        <iframe
              height="100%"
               width="100%"
                scrolling="yes"
                title="web page"
                src="https://maheshoz.github.io/portfolio_react.html"
                frameborder="no"
                allowtransparency="true"
                allowfullscreen="true"
              >
               
              </iframe>

      </div>
      <MobileNav />
      </div>
    );
  }
}

export default Portfolio;
