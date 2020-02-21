import React from "react";

const exitOption = {
  borderTop: "1px solid #ddd",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px"
};

class menuContent extends React.Component {
  render() {
    return (
      <div style={{ margin: 0 }}>
        <a href="/veranolink/proveedores" className="element-nav">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Proveedores"
          >
            <i className="fas fa-dolly-flatbed"></i>
          </div>
          <div className="cont-label">Proveedores</div>
        </a>
        <a href="/veranolink/interfaces" className="element-nav">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Interfaces"
          >
            <i className="fas fa-th-large"></i>
          </div>
          <div className="cont-label">Interfaces</div>
        </a>
        <a href="/veranolink/flujos-negocio" className="element-nav">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Flujos Negocio"
          >
            <i className="fas fa-landmark"></i>
          </div>
          <div className="cont-label">Flujos Negocio</div>
        </a>
        <a href="/veranolink/monitoreo" className="element-nav">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Monitoreo"
          >
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="cont-label">Monitoreo</div>
        </a>
        <a href="/veranolink/usuarios" className="element-nav">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Usuarios"
          >
            <i className="fas fa-user-friends"></i>
          </div>
          <div className="cont-label">Usuarios</div>
        </a>
        <a href="/veranolink/auditoria" className="element-nav">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Auditoria"
          >
            <i className="far fa-file-alt"></i>
          </div>
          <div className="cont-label">Auditoria</div>
        </a>
        <a href="/veranolink/configuracion" className="element-nav">
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Configuración"
          >
            <i className="fas fa-cog"></i>
          </div>
          <div className="cont-label">Configuración</div>
        </a>
        <div className="space-bar"></div>
        <a href="/veranolink" className="element-nav" style={exitOption}>
          <div
            className="cont-icon tooltipped"
            data-position="right"
            data-tooltip="Salir"
          >
            <i className="fas fa-power-off"></i>
          </div>
          <div className="cont-label">Salir</div>
        </a>
      </div>
    );
  }
}

export default menuContent;
