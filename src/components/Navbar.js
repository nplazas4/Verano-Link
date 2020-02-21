import React, { Component } from "react";
import logoVerano from "../images/verano-logo-white.svg";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <img src={logoVerano} alt="logo Verano" width="90px" />
          </a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right">
            <li>
              <a href="#!">
                <i className="material-icons">account_circle</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
