import React from "react";
import Modal from "./modal";

function InterfaceModalFilter(props) {
  return (
    <Modal id="modalFiltersInterfaces" modalTitle="Filtrar Interfaces">
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
    </Modal>
  );
}

export default InterfaceModalFilter;
