import React, { Component } from "react";
import Modal from "./modal";

class InterfaceNewProg extends Component {
  render() {
    return (
      <Modal id="modalFormProggraming" modalTitle="Nuevo / Editar Programación">
        <form>
          <div className="row m0">
            <div className="col l12 m12 s12">
              <div className="input-field">
                <select defaultValue={"default"}>
                  <option value="default">-Selecciona-</option>
                  <option value="test">test</option>
                </select>
                <label>Nombre Interface *</label>
              </div>
            </div>

            <div className="col l12 m12 s12">
              <div className="input-field">
                <select>
                  <option value="default">-Selecciona-</option>
                  <option value="mondly">Get EPS</option>
                  <option value="weekly">Get Activity</option>
                  <option value="diary">Get Project</option>
                  <option value="unic">Get CBS</option>
                </select>
                <label>Flujo de Negocio *</label>
              </div>
            </div>

            <div className="col l12 m12 s12">
              <div className="input-field">
                <textarea
                  style={{ height: 100 + "px" }}
                  defaultValue="Obtener una EPS de un ambiente y enviarla a otro ambiente con los proveedores previamente configurados"
                ></textarea>
                <label>Descripción</label>
              </div>
            </div>

            <div className="col l12 m12 s12">
              <div className="mb-2">
                <label>
                  <input type="checkbox" className="filled-in" />
                  <span>Pausar Ciclo Ejecución</span>
                </label>
              </div>
            </div>

            <div className="col l6 m6 s12">
              <div className="input-field ">
                <select defaultValue={"default"}>
                  <option value="default">-Selecciona-</option>
                  <option value="mondly">Mensual</option>
                  <option value="weekly">Semanal</option>
                  <option value="diary">Diario</option>
                  <option value="unic">Fecha Única</option>
                </select>
                <label>Ciclo Ejecución *</label>
              </div>
            </div>

            <div className="col l3 m3 s12">
              <div className="input-field ">
                <select>
                  <option value="0">-Selecciona-</option>

                  <option value="<?= $valor?>">test 2</option>
                </select>
                <label>Todos los días *</label>
              </div>
            </div>

            <div className="col l3 m3 s12">
              <div className="input-field">
                <input
                  placeholder="HH:MM"
                  id="user"
                  type="text"
                  className="validate"
                  defaultValue="6:56"
                />
                <label>Hora (24hrs) *</label>
              </div>
            </div>

            <div className="col l6 m6 s12">
              <div className="input-field ">
                <select>
                  <option value="0">-Selecciona-</option>
                  <option value="1">PG EPPM</option>
                  <option value="2">UNIFIER</option>
                  <option value="3">SAP</option>
                  <option value="3">EMS</option>
                </select>
                <label>Origen *</label>
              </div>
            </div>
            <div className="col l6 m6 s12">
              <div className="input-field ">
                <select>
                  <option value="0">-Selecciona-</option>
                  <option value="1">PG EPPM</option>
                  <option value="2">UNIFIER</option>
                  <option value="3">SAP</option>
                  <option value="3">EMS</option>
                </select>
                <label>Destino *</label>
              </div>
            </div>
            <div className="col l12 m12 s12">
              <div className="p9 t-semibold">
                Los campos con (*) son obligatorios.
              </div>
            </div>
          </div>
        </form>
      </Modal>
    );
  }
}

export default InterfaceNewProg;
