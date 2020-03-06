import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div id={props.id} className="modal verano-modal">
      <div className="header-modal">
        <div className="tc title-modal t-semibold">{props.modalTitle}</div>
        <div className="btn-close">
          <a href="#!" className="close-window modal-close">
            <i className="fas fa-times"></i>
          </a>
        </div>
      </div>

      <div className="body-modal">{props.children}</div>
      <div className="modal-footer tl">
        <button className=" modal-action modal-close btn waves-effect waves-light t-semibold">
          Aplicar
        </button>
        <button className=" modal-action modal-close btn waves-effect waves-light t-semibold btn-white m-btn">
          Cancelar
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
