import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="col l5 m6 s12 mt-1">
        {/* Field camp */}
        <div className="field-search">
          <div className="cont-icon" style={{ opacity: 0.8 }}>
            <i className="fas fa-search"></i>
          </div>
          <input type="text" placeholder="Buscar en la lista"></input>
          <div
            className="cont-icon"
            style={{ opacity: 0.7, cursor: "pointer" }}
          >
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
