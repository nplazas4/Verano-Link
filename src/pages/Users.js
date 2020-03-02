import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import M from "materialize-css";

class Users extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <section className="col l10 m12 s12 offset-l2 relative">
          <Header title="Usuarios" urlContext="usuarios" />
          <div className="row container-page">
            <div className="col l12 m12 s12 head-actions">
              <div className="row">
                <div className="col l7 m6 s12 mt-1">
                  <div className="head-new-element">
                    <div className="btn-trigger-form">
                      <a className="modal-trigger" href="#modalFormUser">
                        <div className="btn-gradient-small">
                          <i className="fas fa-plus"></i>
                        </div>
                      </a>
                      <span className="t-semibold">Nuevo Usuario</span>
                    </div>
                    <div className="cont-btn-filter">
                      <div className="label-btn">Filtros</div>
                      <div>
                        <a
                          href="#modalFiltersUser"
                          className="modal-trigger btn_filter mr-2 waves-effect waves-light"
                        >
                          <i className="fas fa-filter"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- <div className="t-semibold p13">Lista de usuarios</div> --> */}
                  </div>
                </div>
                <div className="col l5 m6 s12 mt-1">
                  {/* <!-- Field camp --> */}
                  <div className="field-search">
                    <div className="cont-icon" style={{ opacity: 0.8 }}>
                      <i className=" fas fa-search"></i>
                    </div>
                    <input type="text" placeholder="Buscar en la lista" />
                    <div
                      className="cont-icon"
                      style={{ opacity: 0.7, cursor: "pointer" }}
                    >
                      <i className="far fa-times-circle"></i>
                    </div>
                  </div>
                </div>

                {/* <!-- Filers panel mobile --> */}
                <div className="col s12 mt-1">
                  <div className="cont-filters-mobile">
                    <div className="subtitle-filters">Filtros Aplicados</div>
                    <div className="cont-chips">
                      {/* <!-- Chip filter--> */}
                      <div className="chip-filter">
                        <div className="inner-chip">
                          <div className="value-chip">Activos</div>
                          <div className="delete-chip">
                            <i className="fas fa-times-circle"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col l12 m12 s12">
              <div className="row">
                <div className="col l9 m8 s12">
                  <div className="row">
                    <div className="col l12 m12 s12 mb-3">
                      <ul
                        className="tabs tc"
                        style={{ borderBottom: 1 + "px solid #ccc" }}
                      >
                        <li className="tab col l3 m3 s3">
                          <a className="active" href="#test1">
                            Administradores
                          </a>
                        </li>
                        <li className="tab col l3 m3 s3">
                          <a href="#test2">Editores</a>
                        </li>
                        <li className="tab col l3 m3 s3">
                          <a href="#test4">Visualizadores</a>
                        </li>
                      </ul>
                    </div>

                    <div id="test1" className="col l12 m12 s12">
                      <div className="row">
                        {/* <?php  foreach ($array as &$valor) {?> */}
                        <div className="col l4 m6 s6 item-card">
                          <div className="verano-card">
                            <div className="cont-status-indicator">
                              <div className="indicator-status active-record"></div>
                            </div>
                            <div className="head-card">
                              <div className="title">
                                <div className="main-label t-capitalize t-semibold">
                                  Juan Camilo Jiménez
                                </div>
                                <div className="second-label">
                                  Perfil (ADMIN)
                                </div>
                              </div>
                              <div>
                                <a
                                  className="dropdown-trigger"
                                  href="#!"
                                  data-target="<?= $valor ?>"
                                >
                                  <div className="btn-options">
                                    <i className="p13 fas fa-ellipsis-v"></i>
                                  </div>
                                </a>
                                <ul
                                  id="<?= $valor ?>"
                                  className="dropdown-content"
                                >
                                  <li>
                                    <a
                                      href="#modalFormUser"
                                      className="list-item modal-trigger"
                                    >
                                      <div className="icono-i">
                                        <i className="p10 fas fa-pen"></i>
                                      </div>
                                      <div className="label t-semibold">
                                        Editar
                                      </div>
                                    </a>
                                  </li>
                                  <hr />
                                  <li>
                                    <a href="#!" className="list-item">
                                      <div className="icono-i">
                                        <i className="p10 fas fa-minus-circle t-error"></i>
                                      </div>
                                      <div className="label t-semibold t-error">
                                        Eliminar
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="segment-info-v">
                              <div className="title">CORREO</div>
                              <div className="value">juan.leon5@gmail.com</div>
                            </div>
                            <hr className="my-1" />
                            <div className="segment-info-v">
                              <div className="title">CONTRASEÑA</div>
                              <div className="value">* * * * * * * * * * </div>
                            </div>
                          </div>
                        </div>
                        {/* <?php } ?> */}
                      </div>
                    </div>
                    <div id="test2" className="col l12 m12 s12">
                      <div className="row">
                        {/* <?php  foreach ($array as &$valor) {?> */}
                        <div className="col l4 m6 s6 item-card">
                          <div className="verano-card">
                            <div className="cont-status-indicator">
                              <div className="indicator-status active-record"></div>
                            </div>
                            <div className="head-card">
                              <div className="title">
                                <div className="main-label t-capitalize t-semibold">
                                  maria fernanda vera
                                </div>
                                <div className="second-label">
                                  Perfil Editor
                                </div>
                              </div>
                              <div>
                                <a
                                  className="dropdown-trigger"
                                  href="#!"
                                  data-target="Array"
                                >
                                  <div className="btn-options">
                                    <i className="p13 fas fa-ellipsis-v"></i>
                                  </div>
                                </a>
                                <ul id="Array" className="dropdown-content">
                                  <li>
                                    <a
                                      href="#modalFormUser"
                                      className="list-item modal-trigger"
                                    >
                                      <div className="icono-i">
                                        <i className="p10 fas fa-pen"></i>
                                      </div>
                                      <div className="label t-semibold">
                                        Editar
                                      </div>
                                    </a>
                                  </li>
                                  <hr />
                                  <li>
                                    <a href="#!" className="list-item">
                                      <div className="icono-i">
                                        <i className="p10 fas fa-minus-circle t-error"></i>
                                      </div>
                                      <div className="label t-semibold t-error">
                                        Eliminar
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="segment-info-v">
                              <div className="title">CORREO</div>
                              <div className="value">mvvera5768@gmail.com</div>
                            </div>
                            <hr className="my-1" />
                            <div className="segment-info-v">
                              <div className="title">CONTRASEÑA</div>
                              <div className="value">* * * * * * * * * * </div>
                            </div>
                          </div>
                        </div>
                        {/* <?php } ?> */}
                      </div>
                    </div>
                    <div id="test4" className="col l12 m12 s12">
                      <div className="row">
                        <div className="tc my-3 t-bold">- Sin resultados -</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l3 m4 s12">
                  <div className="cont-filters">
                    <div className="panel-filters">
                      <div className="head-filters t-semibold">
                        <div style={{ display: "inline-block" }}>
                          <i
                            className="p10 fas fa-filter"
                            style={{ marginRight: 8 + "px" }}
                          ></i>
                          Panel Filtros
                        </div>
                        <div style={{ float: "right" }} className="p9"></div>
                      </div>
                      <div className="cont-filters">
                        <div className="input-field ">
                          <select>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                          </select>
                          <label>Estado </label>
                        </div>
                        <div className="input-field ">
                          <select>
                            <option value="1">A - z</option>
                            <option value="2">Z - a</option>
                          </select>
                          <label>Ordenar por: </label>
                        </div>

                        <div className="input-field tc">
                          <a
                            href="#!"
                            className="waves-effect waves-light btn-small t-semibold grey"
                          >
                            Limpiar Filtros
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Paginator --> */}
            <div className="col l8 m8 s12">
              <ul className="pagination tc">
                <li className="disabled">
                  <a href="#!">
                    <i className="fas fa-chevron-left p9"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#!">1</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">2</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">3</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">4</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">5</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">
                    <i className="fas fa-chevron-right p9"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l4 m4 s12"></div>
          </div>
          <Footer />
        </section>
        <div id="modalFormUser" className="modal verano-modal">
          <div className="header-modal">
            <div className="tc title-modal t-semibold">
              Nuevo / Editar Usuario
            </div>
            <div className="btn-close">
              <a href="#!" className="close-window modal-close">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>

          <div className="body-modal">
            <form>
              <div className="row m0">
                <div className="col l12 m12 s12">
                  <div className="my-2">
                    <label>
                      <input
                        type="checkbox"
                        className="filled-in"
                        defaultChecked
                      />
                      <span>Estado: Activo</span>
                    </label>
                  </div>
                </div>
                <div className="col l6 m6 s12">
                  <div className="input-field">
                    <input
                      placeholder="Nombre Completo"
                      id="caseUse"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="caseUse">Nombre *</label>
                  </div>
                </div>
                <div className="col l6 m6 s12">
                  <div className="input-field">
                    <input
                      placeholder="eg. nombre@dominio.com"
                      id="user"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="user">Correo Electrónico *</label>
                  </div>
                </div>
                <div className="col l6 m6 s12">
                  <div className="input-field">
                    <div className="relative cont-input-pass">
                      <input
                        id="input-pass"
                        type="password"
                        className="validate inputBottom"
                        placeholder="6 - 20 Caracteres"
                      />
                      <label htmlFor="date">Contraseña *</label>
                      <div
                        // onclick="changeView()"
                        id="off-eye"
                        className="cont-icon"
                        style={{ display: "block" }}
                      >
                        <i className="far fa-eye-slash"></i>
                      </div>
                      <div
                        // onclick="changeView()"
                        className="cont-icon"
                        id="on-eye"
                      >
                        <i className="far fa-eye"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l6 m6 s12">
                  <div className="input-field ">
                    <select>
                      <option value="1">Administrador</option>
                      <option value="2">Editor</option>
                      <option value="3">Visualizador</option>
                    </select>
                    <label>Permisos *</label>
                  </div>
                </div>
                <div className="col l12 m12 s12">
                  <div className="p9 t-semibold">
                    Los campos con (*) son obligatorios.
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer tl">
            <a
              href="#!"
              className=" modal-action modal-close btn waves-effect waves-light t-semibold"
            >
              Guardar
            </a>
            <a
              href="#!"
              className=" modal-action modal-close btn waves-effect waves-light t-semibold btn-white m-btn"
            >
              Cancelar
            </a>
          </div>
        </div>
        <div id="modalFiltersUser" className="modal verano-modal">
          <div className="header-modal">
            <div className="tc title-modal t-semibold">Filtrar Usuarios</div>
            <div className="btn-close">
              <a href="#!" className="close-window modal-close">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>

          <div className="body-modal">
            <form>
              <div className="row m0">
                <div className="col l6 m6 s12">
                  <div className="input-field">
                    <select>
                      <option value="1">Activo</option>
                      <option value="2">Inactivo</option>
                    </select>
                    <label>Estado </label>
                  </div>
                </div>
                <div className="col l6 m6 s12">
                  <div className="input-field">
                    <select>
                      <option value="1">A - z</option>
                      <option value="2">Z - a</option>
                    </select>
                    <label>Ordenar por: </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer tl">
            <a
              href="#!"
              className=" modal-action modal-close btn waves-effect waves-light t-semibold"
            >
              Aplicar
            </a>
            <a
              href="#!"
              className=" modal-action modal-close btn waves-effect waves-light t-semibold btn-white m-btn"
            >
              Cancelar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
