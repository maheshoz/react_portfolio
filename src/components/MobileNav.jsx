import React, { Component } from "react";

import MaterialIcon from "material-icons-react";

import { Link } from "react-router-dom";

import "./MobileNav.css";

class MobileNav extends Component {
  render() {
    return (
      <footer>
        <div className="foot_nav">
          <Link to="/" tabIndex="0">
            <div className="foot_nav_item">
              <MaterialIcon icon="museum" color="black" />

              <span>Home</span>
            </div>
          </Link>

          <Link to="/about" tabIndex="0">
            <div className="foot_nav_item">
              <MaterialIcon icon="perm_identity" color="black" />

              <span>about</span>
            </div>
          </Link>
          <Link to="/skills" tabIndex="0">
            <div className="foot_nav_item">
              <MaterialIcon icon="keyboard" color="black" />

              <span>skills</span>
            </div>
          </Link>

          <Link to="/portfolio" tabIndex="0">
            <div className="foot_nav_item">
              <MaterialIcon icon="dashboard" color="black" />

              <span>portfolio</span>
            </div>
          </Link>
        </div>
      </footer>
    );
  }
}

export default MobileNav;
