import React from "react";
import { Link } from "react-router-dom";

const exitOption = {
  borderTop: "1px solid #ddd",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px"
};

class menuContent extends React.Component {
  render() {
    return (
      <div style={{ margin: 0 }}>
        <Link className="element-nav" to="/veranolink/proveedores">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Proveedores"
          >
            <i className="fas fa-dolly-flatbed"></i>
          </div>
          <div className="cont-label">Proveedores</div>
        </Link>
        <Link className="element-nav" to="/veranolink/interfaces">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Interfaces"
          >
            <i className="fas fa-th-large"></i>
          </div>
          <div className="cont-label">Interfaces</div>
        </Link>
        <Link className="element-nav" to="/veranolink/flujos-negocio">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Flujos Negocio"
          >
            <i className="fas fa-landmark"></i>
          </div>
          <div className="cont-label">Flujos Negocio</div>
        </Link>
        <Link className="element-nav" to="/veranolink/monitoreo">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Monitoreo"
          >
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="cont-label">Monitoreo</div>
        </Link>
        <Link className="element-nav" to="/veranolink/usuarios">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Usuarios"
          >
            <i className="fas fa-user-friends"></i>
          </div>
          <div className="cont-label">Usuarios</div>
        </Link>
        <Link className="element-nav" to="/veranolink/auditoria">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Auditoria"
          >
            <i className="far fa-file-alt"></i>
          </div>
          <div className="cont-label">Auditoria</div>
        </Link>
        <Link className="element-nav" to="/veranolink/configuracion">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Configuración"
          >
            <i className="fas fa-cog"></i>
          </div>
          <div className="cont-label">Configuración</div>
        </Link>
        <div className="space-bar"></div>
        <Link className="element-nav" style={exitOption} to="/veranolink">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Salir"
          >
            <i className="fas fa-power-off"></i>
          </div>
          <div className="cont-label">Salir</div>
        </Link>
      </div>
    );
  }
}

export default menuContent;
