import React from "react";

function UsersContent(props) {
  return (
    <div className="col l9 m8 s12">
      <div className="row">
        <div className="col l12 m12 s12 mb-3">
          <ul className="tabs tc" style={{ borderBottom: 1 + "px solid #ccc" }}>
            <li className="tab col l3 m3 s3">
              <a className="active" href="#test1">
                Administradores
              </a>
            </li>
            <li className="tab col l3 m3 s3">
              <a href="#test2">Editores</a>
            </li>
            <li className="tab col l3 m3 s3">
              <a href="#test3">Visualizadores</a>
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
                    <div className="second-label">Perfil (ADMIN)</div>
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
                    <ul id="<?= $valor ?>" className="dropdown-content">
                      <li>
                        <a
                          href="#modalFormUser"
                          className="list-item modal-trigger"
                        >
                          <div className="icono-i">
                            <i className="p10 fas fa-pen"></i>
                          </div>
                          <div className="label t-semibold">Editar</div>
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
          <div className="row"></div>
        </div>
        <div id="test3" className="col l12 m12 s12">
          <div className="row">
            <div className="tc my-3 t-bold">- Sin resultados -</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersContent;
