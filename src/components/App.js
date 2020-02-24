import React from "react";
import Routes from "../Routes";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      {/* Global Messages --> */}
      <div className="global-msj-feedback msj-good" style={{ display: "none" }}>
        <i className="fas fa-check-circle"></i> Cambios Guardados
      </div>
      <div className="global-msj-feedback msj-bad" style={{ display: "none" }}>
        <i className="fas fa-exclamation-circle"></i> Hubo un error
      </div>

      <section id="master-container">
        <section className="row" style={{ marginBottom: "0" }}>
          <Menu />
          <Routes />
        </section>
      </section>
    </div>
  );
}

export default App;
