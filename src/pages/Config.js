import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import M from "materialize-css";

let toggle = true;

// Función que se encarga de cambiar el ícono de ver contraseña junto a su respectivo input.
function changeView() {
  // Obtención de objetos mediante id.
  let btnOn = document.getElementById("on-eye");
  let btnOff = document.getElementById("off-eye");
  let inputPass = document.getElementById("input-pass");
  toggle = toggle = !toggle;
  /*
        Condicional que verifica si la variable toggle (ícono ver contraseña) es igual a falso,
        de ser el caso cambia el estilo del ícono de ver y el tipo de dato del input de contraseña (text o password).
    */

  if (toggle === false) {
    btnOn.style.display = "block";
    btnOff.style.display = "none";
    inputPass.type = "text";
  } else {
    btnOn.style.display = "none";
    btnOff.style.display = "block";
    inputPass.type = "password";
  }
}

class Config extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <section className="col l10 m12 s12  offset-l2 relative">
          <Header title="Configuración" urlContext="configuracion" />
          <div className="container-page">
            <div className="row">
              <div className="col l12 m12 s12">
                <div className="row">
                  <div className="col s12">
                    <ul
                      className="tabs mb-3"
                      style={{ borderBottom: 1 + "px solid #ccc" }}
                    >
                      <li className="tab col l2 m4 s6">
                        <a className="active" href="#general">
                          General
                        </a>
                      </li>
                      <li className="tab col l3 m4 s6">
                        <a href="#mainConf">Configuración EMAIL</a>
                      </li>
                    </ul>
                  </div>
                  <div id="general" className="col s12">
                    <form style={{ padding: 0 + "em " + 1 + "em" }}>
                      <div className="row m0">
                        <div className="col l6 m6 s12">
                          <div className="input-field">
                            <div>
                              Máximo numero de registros de trabajos a mostrar
                            </div>
                            <input
                              value="2000"
                              type="number"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l6 m6 s12">
                          <div className="input-field">
                            <div>
                              Eliminación automática de trabajos despues de (XX)
                              días
                            </div>
                            <input
                              value="9"
                              type="number"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l6 m6 s12">
                          <div className="input-field">
                            <div>
                              Max tiempo espera carga/conversión de pasos a
                              completar (min)
                            </div>
                            <input
                              value="30"
                              type="number"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l6 m6 s12">
                          <div className="input-field">
                            <div>Max. Concurrencia en un nodo</div>
                            <input
                              value="10"
                              type="number"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l6 m6 s12">
                          <div className="input-field">
                            <div>Job polling Interval (Segundos)</div>
                            <input
                              value="10"
                              type="number"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l12 m12 s12">
                          <a
                            href="#!"
                            className=" modal-action btn waves-effect waves-light t-semibold"
                          >
                            Guardar Cambios
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div id="mainConf" className="col s12">
                    <form style={{ padding: 0 + "em " + 1 + "em" }}>
                      <div className="row m0">
                        <div className="col l4 m6 s12">
                          <div className="input-field">
                            <div>SMTP Server</div>
                            <input
                              placeholder="SMTP Server"
                              value="2000"
                              type="number"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l4 m6 s12">
                          <div className="input-field">
                            <div>Puerto</div>
                            <input
                              placeholder="Puerto"
                              value="9"
                              type="number"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l4 m6 s12">
                          <div className="input-field">
                            <div>Seguridad de EMAIL</div>
                            <select>
                              <option value="1">SSL</option>
                              <option value="2">Editor</option>
                              <option value="3">Visualizador</option>
                            </select>
                          </div>
                        </div>
                        <div className="col l6 m6 s12">
                          <div className="input-field">
                            <div>Dirección EMAIL</div>
                            <input
                              placeholder="Dirección EMAIL"
                              value="cloudverano@sdp.com.co"
                              type="text"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l6 m6 s12">
                          <div className="input-field">
                            <div>Email Autorizado </div>
                            <input
                              placeholder="EMAIL Autorizado"
                              value="cloudverano@sdp.com.co"
                              type="text"
                              className="validate"
                            ></input>
                          </div>
                        </div>
                        <div className="col l6 m6 s12">
                          <div className="input-field">
                            <div className="relative cont-input-pass">
                              <input
                                id="input-pass"
                                type="password"
                                className="validate inputBottom"
                                placeholder="Contraseña"
                                value="Ty7/8yRtY(/uT(63"
                              ></input>
                              <div
                                onClick={changeView}
                                id="off-eye"
                                className="cont-icon"
                                style={{ display: "block" }}
                              >
                                <i className="far fa-eye-slash"></i>
                              </div>
                              <div
                                onClick={changeView}
                                className="cont-icon"
                                id="on-eye"
                              >
                                <i className="far fa-eye"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col l12 m12 s12">
                          <a
                            href="#!"
                            className=" modal-action btn waves-effect waves-light t-semibold"
                          >
                            Guardar Cambios
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Config;
