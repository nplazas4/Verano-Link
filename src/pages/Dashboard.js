import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ExitososFallidos from "../components/charts/ExitososFallidos";
import TransInterfaz from "../components/charts/TransInterfaz";
import M from "materialize-css";

class Dashboard extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null
    };
  }
  componentDidMount() {
    M.AutoInit();
    this.fetchDashboards();
  }

  fetchDashboards = async () => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const response = await fetch(
        "https://www.breakingbadapi.com/api/characters"
      );
      const data = await response.json();
      console.log(data);
      this.setState({
        loading: false
      });
      this.fetchDashboards();
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <SkeletonTheme color="#d6d6d6" highlightColor="#ffff">
          <section className="col l10 m12 s12 offset-l2 relative">
            <Header title="Monitoreo" urlContext="monitoreo" />
            <div className="row container-page">
              <div className="col l12 m12 s12 mt-1">
                <div className="row">
                  <div className="col l3 m4 s6 item-card">
                    <a className="not-link-style" href="#!">
                      <div className="kpi-card">
                        <div className="value-kpi t-light">
                          {/* {this.state.loading === true ? (
                            <Skeleton width={35 + "%"} />
                          ) : ( */}
                          34
                          {/* )} */}
                        </div>
                        <div className="cont-title-kpi">
                          <div className="title-kpi t-semibold">
                            Proveedores Activos
                          </div>
                          <div>
                            <i className="p9 fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col l3 m4 s6 item-card">
                    <a href="#!" className="not-link-style">
                      <div className="kpi-card">
                        <div className="value-kpi t-light">
                          {/* {this.state.loading === true ? (
                            <Skeleton width={35 + "%"} />
                          ) : (
                            "102"
                          )} */}
                          102
                        </div>
                        <div className="cont-title-kpi">
                          <div className="title-kpi t-semibold">
                            Proyectos Publicados
                          </div>
                          <div>
                            <i className="p9 fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col l3 m4 s6 item-card">
                    <a href="#!" className="not-link-style">
                      <div className="kpi-card">
                        <div className="value-kpi t-light">
                          {/* {this.state.loading === true ? (
                            <Skeleton width={35 + "%"} />
                          ) : ( */}
                          54
                          {/* )} */}
                        </div>
                        <div className="cont-title-kpi">
                          <div className="title-kpi t-semibold">
                            Trabajo Programados
                          </div>
                          <div>
                            <i className="p9 fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col l3 m4 s6 item-card">
                    <a href="#!" className="not-link-style">
                      <div className="kpi-card">
                        <div className="value-kpi t-light">
                          9{/* <Skeleton width={35 + "%"} /> */}
                        </div>
                        <div className="cont-title-kpi">
                          <div className="title-kpi t-semibold">Interfaces</div>
                          <div>
                            <i className="p9 fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col xl9 l6 m12 s12">
                    <div
                      className="graph-card"
                      style={{ minHeight: 400 + "px" }}
                    >
                      <div className="head-dropdown-filter">
                        <div className="cont-title">
                          <div className="title-graph t-semibold p15">
                            Transacciones x Interfaz
                          </div>
                        </div>
                        <div className="cont-filterdrop">
                          <select style={{ zIndex: 0 }}>
                            <option>Migración P6</option>
                            <option>Creación EPS</option>
                            <option>Creación Actividades</option>
                          </select>
                        </div>
                      </div>
                      {/* {this.state.loading === true ? (
                        <Skeleton width={100 + "%"} height={270 + "px"} />
                      ) : ( */}
                      <TransInterfaz id="1" />
                      {/* )} */}
                    </div>
                  </div>
                  <div className="col xl3 l6 m6 s12">
                    <div
                      className="graph-card"
                      style={{ minHeight: 400 + "px" }}
                    >
                      <div className="title-graph t-semibold p12 tc">
                        Casos Exitosos / Fallidos
                      </div>
                      {this.state.loading === true ? (
                        <Skeleton width={100 + "%"} height={370 + "px"} />
                      ) : (
                        <ExitososFallidos />
                      )}
                    </div>
                  </div>
                  <div className="col l6 m6 s12">
                    <div className="graph-card">
                      <div className="head-dropdown-filter">
                        <div className="cont-title">
                          <div className="title-graph t-semibold p13">
                            Transacciones x Proveedor
                          </div>
                        </div>
                        <div className="cont-filterdrop">
                          <select style={{ zIndex: 0 }}>
                            <option>P6 EPPM</option>
                            <option>UNIFIER</option>
                            <option>SAP</option>
                            <option>EBS</option>
                          </select>
                        </div>
                      </div>
                      {/* {this.state.loading === true ? (
                        <Skeleton width={100 + "%"} height={270 + "px"} />
                      ) : ( */}
                      <TransInterfaz id="2" />
                      {/* )} */}
                    </div>
                  </div>
                  <div className="col l6 m12 s12">
                    <div className="graph-card">
                      <div className="head-dropdown-filter">
                        <div className="cont-title">
                          <div className="title-graph t-semibold p13">
                            Transacciones x Flujo de Negocio
                          </div>
                        </div>
                        <div className="cont-filterdrop">
                          <select style={{ zIndex: 0 }}>
                            <option>Get EPS</option>
                            <option>Get Activity</option>
                            <option>Get Project</option>
                            <option>Get CBS</option>
                          </select>
                        </div>
                      </div>
                      {/* {this.state.loading === true ? (
                        <Skeleton width={100 + "%"} height={270 + "px"} />
                      ) : ( */}
                      <TransInterfaz id="3" />
                      {/* )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </section>
        </SkeletonTheme>
      </React.Fragment>
    );
  }
}

export default Dashboard;
