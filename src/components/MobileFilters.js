import React, { Component } from "react";

class MobileFilter extends Component {
  render() {
    return (
      <div className="col s12 mt-1">
        <div className="cont-filters-mobile">
          <div className="subtitle-filters">Filtros Aplicados</div>
          <div className="cont-chips">
            <div className="chip-filter mr-1">
              <div className="inner-chip">
                <div className="value-chip">Activos</div>
                <div className="delete-chip">
                  <i className="fas fa-times-circle"></i>
                </div>
              </div>
            </div>
            <div className="chip-filter">
              <div className="inner-chip">
                <div className="value-chip">Unifier</div>
                <div className="delete-chip">
                  <i className="fas fa-times-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileFilter;
