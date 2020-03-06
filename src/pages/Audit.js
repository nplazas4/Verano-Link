import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Audit extends Component {
  render() {
    return (
      <div>
        <section className="col l10 m12 s12  offset-l2 relative">
          <Header title="Auditoria" urlContext="auditoria" />
          <div className="row container-page">
            <div className="col l12 m12 s12">
              <div className="row">
                <div className="col l7 m6 s12">
                  <div className="t-semibold p15 mt-1 mb-1">
                    Tabla de Registros
                  </div>
                </div>
                <div className="col l5 m6 s12">
                  {/* <!-- Field camp --> */}
                  <div className="field-search">
                    <div className="cont-icon" style={{ opacity: 0.8 }}>
                      <i className=" fas fa-search"></i>
                    </div>
                    <input type="text" placeholder="Buscar en la lista"></input>
                    <div
                      className="cont-icon"
                      style={{ opacity: 0.7, cursor: "pointer" }}
                    >
                      <i className="far fa-times-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12">
              <div className="cont-table">
                <table className="table-compress">
                  <thead>
                    <tr>
                      <th>
                        Fecha
                        <i className="xed fas fa-arrow-up"></i>
                      </th>
                      <th>
                        Nombre Trabajo
                        <i className="xed fas fa-arrow-up"></i>
                      </th>
                      <th>
                        Interfaz
                        <i className="xed fas fa-arrow-up"></i>
                      </th>
                      <th>
                        Flujo Negocio
                        <i className="xed fas fa-arrow-up"></i>
                      </th>
                      <th>
                        Estado
                        <i className="xed fas fa-arrow-up"></i>
                      </th>
                      <th>
                        Fecha Ini
                        <i className="xed fas fa-arrow-up"></i>
                      </th>
                      <th>
                        Fecha Fin
                        <i className="xed fas fa-arrow-up"></i>
                      </th>
                      <th>
                        Detalles
                        <i className="xed fas fa-arrow-up"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>23-08-2019</td>
                      <td>Trabajo FR342D</td>
                      <td>P6 CBBS</td>
                      <td>Get CBS</td>
                      <td>Exitoso</td>
                      <td>09-05-2019</td>
                      <td>10-05-2019</td>
                      <td className="tr t-semibold">
                        <a className="modal-trigger" href="#modalDetailLog">
                          Ver más &nbsp;{" "}
                          <i className="p8 fas fa-external-link-alt"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- Footer table --> */}
                <div className="footer-table">
                  <div className="spacer-table"></div>
                  <div className="cont-contrls">
                    <div className="rows-cant">
                      <div className="label">Filas por pág:</div>
                      <div className="cont-select">
                        <select>
                          <option value="1">10</option>
                          <option value="2">15</option>
                          <option value="3">20</option>
                        </select>
                      </div>
                    </div>
                    <div className="conter-rows">1-8 de 200</div>
                    <div>
                      <a
                        className="btn-floating btn-small waves-effect waves-light blue mr-1"
                        href="#!"
                      >
                        <i
                          className="fas fa-chevron-left"
                          style={{ fontSize: 9 + "pt" }}
                        ></i>
                      </a>
                      <a
                        className="btn-floating btn-small waves-effect waves-light blue"
                        href="#!"
                      >
                        <i
                          className="fas fa-chevron-right"
                          style={{ fontSize: 9 + "pt" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
        {/* LLAMAR MODAL */}
      </div>
    );
  }
}

export default Audit;
