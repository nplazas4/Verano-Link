import React, { Component } from "react";
import M from "materialize-css";

class FilterPanel extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="col l3 m4 s12">
        <div className="cont-filters">
          <div className="panel-filters">
            <div className="head-filters t-semibold">
              <div style={{ display: "inlineBlock" }}>
                <i
                  className="p10 fas fa-filter"
                  style={{ marginRight: "8px" }}
                ></i>
                {""}
                Panel Filtros
              </div>
              <div style={{ float: "right" }} className="p9"></div>
            </div>
            <div className="cont-filters">
              <div className="input-field">
                <select>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                </select>
                <label>Estado Ejecución</label>
              </div>
              <div className="input-field">
                <select>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                </select>
                <label>Estado Ejecución</label>
              </div>
              <div className="input-field">
                <select>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                </select>
                <label>Estado Ejecución</label>
              </div>
              <div className="input-field">
                <select>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                  <option>-Selecciona-</option>
                </select>
                <label>Estado Ejecución</label>
              </div>
              <div className="input-field tc">
                <a
                  className="waves-effect waves-light btn-small t-semibold grey"
                  href="#!"
                >
                  Limpiar Filtros
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterPanel;
