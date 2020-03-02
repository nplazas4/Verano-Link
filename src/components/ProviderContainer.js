import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class ProviderContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <SkeletonTheme color="#d6d6d6" highlightColor="#ffff">
          {this.props.providers.map(provider => {
            return (
              <div
                key={provider.id}
                className="col l3 m4 s6 item-card"
                style={{ marginTop: 2 + "em" }}
              >
                <div className="card-module user-no-sel">
                  <div className="cont-icon-card">
                    <div
                      className="circle-frame"
                      style={{ background: "#eee" }}
                    >
                      {/* Validar si una pantalla de carga */}
                      {!this.props.skeleton ? (
                        <div
                          className="summer_head_login tc mb-3"
                          style={{ background: "#eee" }}
                        >
                          {/* Verificar si el logo no está undefined */}
                          {provider.logo ? (
                            <img src={provider.logo} alt="Logo" />
                          ) : null}
                        </div>
                      ) : (
                        <Skeleton width={100 + "%"} height={100 + "%"} />
                      )}
                    </div>
                  </div>
                  <div className="cont-base-info">
                    <div className="title">
                      {this.props.skeleton ? (
                        <Skeleton width={40 + "%"} />
                      ) : (
                        provider.name
                      )}
                    </div>
                    <div className="relative">
                      <div className="divisor-line"></div>
                    </div>
                    <div className="tc my-2">
                      <b>
                        {this.props.skeleton ? (
                          <Skeleton width={40 + "%"} />
                        ) : (
                          provider.interface + " Interfaces"
                        )}
                      </b>
                    </div>
                    <div className="tc cont-btn">
                      {this.props.skeleton ? (
                        <Skeleton width={60 + "%"} />
                      ) : (
                        <Link
                          to="/proveedores/P6_EPPM"
                          className="waves-effect waves-light btn-small btn-white t-bold"
                        >
                          Configurar Conexión
                        </Link>
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

export default ProviderContainer;
