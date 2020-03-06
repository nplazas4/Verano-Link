import React from "react";
import Modal from "./modal";

function UsersModalEdit() {
  return (
    <Modal id="modalFiltersUser" modalTitle="Filtrar Usuarios">
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
    </Modal>
  );
}

export default UsersModalEdit;
