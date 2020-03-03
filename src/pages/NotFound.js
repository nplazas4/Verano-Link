import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/styles/NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div id="notfound">
        <div class="notfound-bg"></div>
        <div class="notfound">
          <div class="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Lo sentimos, pero la página solicitada no ha sido encontrada.</h2>
          <Link to="/veranolink/proveedores" class="home-btn">
            Inicio
          </Link>
          {/* <Link to="#" class="contact-btn">
            Contáctenos
          </Link> */}
          <div class="notfound-social">
            {/* <Footer /> */}
            {/* <footer class="tc white-text">
              Creado por <b>Verano 2020</b>
            </footer> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
