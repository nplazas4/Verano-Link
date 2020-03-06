import React from "react";
import FilterPanel from "./FilterPanel";

function UsersFilterPanel(props) {
  return (
    <FilterPanel>
      <div className="input-field ">
        <select>
          <option value="1">Activo</option>
          <option value="2">Inactivo</option>
        </select>
        <label>Estado </label>
      </div>
      <div className="input-field ">
        <select>
          <option value="1">A - z</option>
          <option value="2">Z - a</option>
        </select>
        <label>Ordenar por: </label>
      </div>
    </FilterPanel>
  );
}

export default UsersFilterPanel;
