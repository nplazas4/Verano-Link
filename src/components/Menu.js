import React, { Component } from "react";
import logo from "../images/verano-isotipo.svg";
import MenuContent from "./menuContent";

class Menu extends Component {
  render() {
    return (
      <div>
        {/* Inicio menu side movil*/}
        <ul className="sidenav bar-navigation-mobile" id="mobile-demo">
          <li>
            <div>
              <div
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  width: 80 + "%",
                  textTransform: "uppercase",
                  padding: 0.4 + "em " + 1.3 + "em " + 0 + "em " + 1.3 + "em"
                }}
              >
                Menu <b>Verano Link</b>
              </div>
              <div
                id="closeNav"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  width: 18 + "%",
                  textAlign: "center",
                  marginTop: 1 + "em",
                  color: "rgba(0,0,0,0.5)",
                  cursor: "pointer"
                }}
              >
                <i className="fas fa-times" style={{ fontSize: "14pt" }}></i>
              </div>
            </div>
          </li>
          <li>
            <MenuContent />
          </li>
        </ul>
        {/* Final menu side movil */}
        {/* Inicio menu side  large*/}
        <section id="custom-navigator" className="col l2 m2 s2 tc">
          <div id="slot-logo">
            <img src={logo} alt="logo Verano" />
          </div>
          <div className="bar-navegation">
            <MenuContent />
          </div>
        </section>
        {/* Fin menu side */}
      </div>
    );
  }
}

export default Menu;
