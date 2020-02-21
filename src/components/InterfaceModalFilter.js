import React, { Component } from "react";

class InterfaceModalFilter extends Component {
  render() {
    return (
      <div id="modalFiltersInterfaces" className="modal verano-modal">
        <div className="header-modal">
          <div className="tc title-modal t-semibold">Filtrar Interfaces</div>
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
                    <option>-Selecciona-</option>
                    <option value="mondly">Mensual</option>
                    <option value="weekly">Semanal</option>
                    <option value="diary">Diario</option>
                    <option value="unic">Fecha Única</option>
                  </select>
                  <label>Estado Ejecución</label>
                </div>
              </div>
              <div className="col l6 m6 s12">
                <div className="input-field">
                  <select>
                    <option>-Selecciona-</option>
                    <option value="1">PG EPPM</option>
                    <option value="2">UNIFIER</option>
                    <option value="3">SAP</option>
                    <option value="3">EMS</option>
                  </select>
                  <label>Origen</label>
                </div>
              </div>
              <div className="col l6 m6 s12">
                <div className="input-field">
                  <select>
                    <option>-Selecciona-</option>
                    <option value="1">PG EPPM</option>
                    <option value="2">UNIFIER</option>
                    <option value="3">SAP</option>
                    <option value="3">EMS</option>
                  </select>
                  <label>Destino </label>
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
    );
  }
}

export default InterfaceModalFilter;
