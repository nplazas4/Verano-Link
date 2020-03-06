import React from "react";

function AuditReadMore() {
  return (
    <div id="modalDetailLog" className="modal verano-modal">
      <div className="header-modal">
        <div className="tc title-modal t-semibold">Detalle Log</div>
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
                <input
                  placeholder="Fecha Generación"
                  id="date"
                  disabled
                  type="text"
                  className="validate"
                  value="23-08-2019"
                ></input>
                <label>Fecha</label>
              </div>
            </div>
            <div className="col l6 m6 s12">
              <div className="input-field">
                <input
                  placeholder="Nombre de trabajo"
                  id="caseUse"
                  disabled
                  type="text"
                  className="validate"
                  value="Caso de Uso 1"
                ></input>
                <label>Nombre Trabajo</label>
              </div>
            </div>
            <div className="col l6 m6 s12">
              <div className="input-field">
                <input
                  placeholder="Nombre Interfaz"
                  id="caseUse"
                  disabled
                  type="text"
                  className="validate"
                  value="Caso de Uso 1"
                ></input>
                <label>Nombre Interfaz</label>
              </div>
            </div>
            <div className="col l6 m6 s12">
              <div className="input-field">
                <input
                  placeholder="Nombre proyecto"
                  id="project"
                  disabled
                  type="text"
                  className="validate"
                  value="Project_ER45DF"
                ></input>
                <label>Flujo de Negocio</label>
              </div>
            </div>
            <div className="col l6 m6 s12">
              <div className="input-field">
                <input
                  placeholder="Fecha Inicial"
                  id="date"
                  disabled
                  type="text"
                  className="validate"
                  value="20-08-2019"
                ></input>
                <label>Fecha Inicial</label>
              </div>
            </div>
            <div className="col l6 m6 s12">
              <div className="input-field">
                <input
                  placeholder="Fecha Final"
                  id="date"
                  disabled
                  type="text"
                  className="validate"
                  value="21-08-2019"
                ></input>
                <label>Fecha Final</label>
              </div>
            </div>
            <div className="col l12 m12 s12">
              <div className="input-field">
                <div className="head-textarea">
                  <div className="label-main t-semibold p13">Respuesta</div>
                  <div className="second-info t-semibold">
                    Estado: &nbsp;
                    <span className="t-success t-semibold">
                      Ejecución Exitosa
                    </span>
                    {/* <!-- <span className="t-error t-semibold">Ejecución Fallida</span> --> */}
                  </div>
                </div>
                <div className="textarea-div">
                  <code>
                    {
                      '"glossary": { "title": "example glossary", "GlossDiv": { "title": "S", "GlossList": { "GlossEntry": { "ID": "SGML", "SortAs": "SGML", "GlossTerm": "Standard Generalized Markup Language", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": ["GML", "XML"] }, "GlossSee": "markup" } }'
                    }
                  </code>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* <div className="p9 t-semibold">Los campos con (*) son obligatorios.</div> */}
      </div>
      <div className="modal-footer tc">
        <a
          href="#!"
          className=" modal-action modal-close btn waves-effect waves-light t-semibold"
        >
          Cerrar
        </a>
      </div>
    </div>
  );
}

export default AuditReadMore;
