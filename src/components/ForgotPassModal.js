import React from "react";
import { Link } from "react-router-dom";

const inputEmailModal = {
  marginTop: "2em"
};

function LoginForgotPass(props) {
  return (
    <div id="modalForgotPassword" className="modal s12">
      <div className="modal-content">
        <div className="tc title-1">Olvidaste la Contraseña</div>
        <Link to="#!" className="close-window modal-close">
          <i class="fas fa-times"></i>
        </Link>
        <div className="mb-3 tc">Confirma tu dirección de email.</div>
        <form>
          <div className="input-field" style={inputEmailModal}>
            <input
              id="email"
              type="text"
              className="validate"
              placeholder="eg. nombre@dominio.com"
            />
            <label htmlFor="email">Correo Electrónico *</label>
          </div>
        </form>
        <div className="p9 t-semibold">
          Los campos con (*) son obligatorios.
        </div>
      </div>
      <div className="modal-footer tc">
        <Link
          to="#!"
          className=" modal-action modal-close btn waves-effect waves-light t-semibold"
        >
          Recuperar contraseña
        </Link>
      </div>
    </div>
  );
}

export default LoginForgotPass;
