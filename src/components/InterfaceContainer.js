import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class InterfaceContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <SkeletonTheme color="#d6d6d6" highlightColor="#ffff">
          {this.props.interfaces.map(interfaz => {
            return (
              <div key={interfaz.id} className="col l4 m6 s6 item-card">
                <div className="verano-card">
                  <div className="head-card">
                    <div className="title">
                      <div className="main-label t-capitalize mt-1 t-semibold">
                        {this.props.skeleton ? (
                          <Skeleton width={50 + "%"} />
                        ) : (
                          interfaz.name
                        )}
                      </div>
                    </div>
                    <div>
                      {!this.props.skeleton ? (
                        // {/* REVISAR */}
                        <a
                          className="dropdown-trigger"
                          href="#!"
                          data-target="Array"
                        >
                          <div className="btn-options">
                            <i className="p13 fas fa-ellipsis-v"></i>
                          </div>
                        </a>
                      ) : null}
                      {/* REVISAR - CONTENIDO OPERCIONES */}
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
                            <div className="label t-semibold t-error">
                              Eliminar
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="segment-info-v mb-1">
                    <div className="title">
                      {this.props.skeleton ? (
                        <Skeleton width={50 + "%"} />
                      ) : (
                        "ESTADO ÚLTIMA EJEC."
                      )}
                    </div>
                    <div className="value">
                      <span className="green-text">
                        <i className="fas fa-check-circle"></i>{" "}
                        {this.props.skeleton ? (
                          <Skeleton width={50 + "%"} />
                        ) : (
                          interfaz.status
                        )}
                      </span>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="segment-info-v segment-partition my-1">
                    <div className="left-section">
                      <div className="title">
                        {this.props.skeleton ? (
                          <Skeleton width={50 + "%"} />
                        ) : (
                          "ORIGEN"
                        )}
                      </div>
                      <div className="value">
                        {this.props.skeleton ? (
                          <Skeleton width={50 + "%"} />
                        ) : (
                          interfaz.origin
                        )}
                      </div>
                    </div>
                    <div className="right-section">
                      <div className="title">
                        {this.props.skeleton ? (
                          <Skeleton width={50 + "%"} />
                        ) : (
                          "DESTINO"
                        )}
                      </div>
                      <div className="value t-semibold">
                        {this.props.skeleton ? (
                          <Skeleton width={50 + "%"} />
                        ) : (
                          interfaz.destiny
                        )}
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="segment-info-v mt-1">
                    <div className="title">
                      {this.props.skeleton ? (
                        <Skeleton width={50 + "%"} />
                      ) : (
                        "TIEMPO DE EJECUCIÓN"
                      )}
                    </div>
                    <div className="value">
                      {this.props.skeleton ? (
                        <Skeleton width={50 + "%"} />
                      ) : (
                        interfaz.ejecTime
                      )}
                    </div>
                  </div>
                  <div className="segment-info-v ">
                    <div className="title">
                      {this.props.skeleton ? (
                        <Skeleton width={50 + "%"} />
                      ) : (
                        "FLUJO DE NEGOCIO"
                      )}
                    </div>
                    <div className="value t-capitalize">
                      {this.props.skeleton ? (
                        <Skeleton width={50 + "%"} />
                      ) : (
                        interfaz.businessFlow
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </SkeletonTheme>
      </React.Fragment>
    );
  }
}

export default InterfaceContainer;
