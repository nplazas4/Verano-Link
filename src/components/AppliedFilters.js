import React from "react";

function AppliedFilters(props) {
  return (
    // Filers panel mobile
    <div className="col s12 mt-2">
      <div className="cont-filters-mobile">
        <div className="subtitle-filters">Filtros Aplicados</div>
        <div className="cont-chips">
          {/* <!-- Chip filter--> */}
          <div className="chip-filter">
            <div className="inner-chip">
              <div className="value-chip">Activos</div>
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

export default AppliedFilters;
