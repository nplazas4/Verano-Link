import React from "react";
import Modal from "./modal";

function UsersModalEdit() {
  return (
    <Modal id="modalFormUser" modalTitle="Nuevo / Editar Usuario">
      <form>
        <div className="row m0">
          <div className="col l12 m12 s12">
            <div className="my-2">
              <label>
                <input type="checkbox" className="filled-in" defaultChecked />
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
              <label>Nombre *</label>
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
              <label>Correo Electrónico *</label>
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
                <label>Contraseña *</label>
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
    </Modal>
  );
}

export default UsersModalEdit;
