import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="row header-page-mod">
          <div className="col l9 m9 s9">
            <div className="element-big-title">
              <div className="cont-btn-return">
                {" "}
                <Link to="/veranolink/proveedores">
                  <div className="btn-return">
                    <i className="p10 fas fa-chevron-left"></i>
                  </div>
                </Link>
              </div>
              <div className="big-title">
                <div className="subtitle-header">Módulo</div>
                <div className="title-header">
                  <Link to="/veranolink/proveedores">Verano-Link</Link>
                  <Link
                    to={"/veranolink/" + this.props.urlContext.toLowerCase()}
                    className="p14 inner-level"
                  >
                    / {this.props.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tr col l3 m3 s3">
            <div className="mr-2">
              <div className="inline label-profile">ADMIN</div>
              <div className="inline access-profile">
                <a
                  className="user-global-access dropdown-trigger"
                  href="/#"
                  data-target="globalOption"
                >
                  MB
                </a>
                <ul
                  id="globalOption"
                  className="dropdown-content"
                  style={{ width: 200 + "px" }}
                >
                  <li>
                    <a href="#!">Mi Cuenta</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
