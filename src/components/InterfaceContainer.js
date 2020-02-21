import React, { Component } from "react";

class InterfaceContainer extends Component {
  render() {
    return (
      <div className="col l4 m6 s6 item-card">
        <div className="verano-card">
          <div className="head-card">
            <div className="title">
              <div className="main-label t-capitalize mt-1 t-semibold">
                {this.props.name}
              </div>
            </div>
            <div>
              {/* REVISAR */}
              <a className="dropdown-trigger" href="#!" data-target="Array">
                <div className="btn-options">
                  <i className="p13 fas fa-ellipsis-v"></i>
                </div>
              </a>
              {/* REVISAR - CONTENIDO OPRCIONES */}
              <ul id="Array" className="dropdown-content">
                <li>
                  <a href="#!" className="list-item">
                    <div className="icono-i">
                      <i className="p10 fas fa-info-circle"></i>
                    </div>
                    <div className="label t-semibold">Detalles</div>
                  </a>
                </li>
                <li>
                  <a
                    href="#modalFormProggraming"
                    className="list-item modal-trigger"
                  >
                    <div className="icono-i">
                      <i className="p10 fas fa-pen"></i>
                    </div>
                    <div className="label t-semibold">Editar</div>
                  </a>
                </li>
                <hr />
                <li>
                  <a href="#!" className="list-item">
                    <div className="icono-i t-error">
                      <i className="p10 fas fa-minus-circle"></i>
                    </div>
                    <div className="label t-semibold t-error">Eliminar</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="segment-info-v mb-1">
            <div className="title">ESTADO ÚLTIMA EJEC.</div>
            <div className="value">
              <span className="green-text">
                <i className="fas fa-check-circle"></i> {this.props.status}
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="segment-info-v segment-partition my-1">
            <div className="left-section">
              <div className="title">ORIGEN</div>
              <div className="value">{this.props.origin}</div>
            </div>
            <div className="right-section">
              <div className="title">DESTINO</div>
              <div className="value t-semibold">{this.props.destiny}</div>
            </div>
          </div>
          <hr></hr>
          <div className="segment-info-v mt-1">
            <div className="title">TIEMPO DE EJECUCIÓN</div>
            <div className="value">{this.props.ejecTime}</div>
          </div>
          <div className="segment-info-v ">
            <div className="title">FLUJO DE NEGOCIO</div>
            <div className="value t-capitalize">{this.props.businessFlow}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default InterfaceContainer;
