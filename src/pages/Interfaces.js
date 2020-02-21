import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import FilterPanel from "../components/FilterPanel";
import InterfaceContainer from "../components/InterfaceContainer";
import Pagination from "../components/Pagination";
import InterfaceModalFilter from "../components/InterfaceModalFilter";
import MobileFilter from "../components/MobileFilters";
import InterfaceNewProg from "../components/InterfaceNewProg";

class Interfaces extends Component {
  render() {
    const InterfacesList = [
      {
        name: "Migración P6",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "---"
      },
      {
        name: "Creación EPS",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "Get EPS"
      },
      {
        name: "Creación Actividades",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "Get Activities"
      },
      {
        name: "Creación OBS",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "Get OBS"
      },
      {
        name: "Creación De Calendarios",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "Get Calendars"
      },
      {
        name: "Creación Códigos De Proyecto",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "Get Project Code"
      },
      {
        name: "Obtener Estructura De Costos",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "Get Project Costsheet"
      },
      {
        name: "Obtener Registros De BP",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "Get BP Records"
      },
      {
        name: "Obtener Registros De BP",
        status: "Ejecución Exitosa",
        origin: "P6 EPPM",
        destiny: "SAP",
        ejecTime: "2 Minutos",
        businessFlow: "Get BP Records Documents"
      }
    ];
    const interfacesLoop = InterfacesList.map((interfaces, index) => {
      return (
        <InterfaceContainer
          name={interfaces.name}
          status={interfaces.status}
          origin={interfaces.origin}
          destiny={interfaces.destiny}
          ejecTime={interfaces.ejecTime}
          businessFlow={interfaces.businessFlow}
        />
      );
    });
    return (
      <div>
        <Navbar />
        <section className="col l10 m12 s12  offset-l2 relative">
          <Header title="Interfaces" urlContext="interfaces" />
          <div className="row container-page">
            <div className="col l12 m12 s12 head-actions">
              <div className="row">
                <div className="col l7 m6 s12 mt-1">
                  <div className="head-new-element">
                    <div className="btn-trigger-form">
                      <a className="modal-trigger" href="#modalFormProggraming">
                        <div className="btn-gradient-small">
                          <i className="fas fa-plus"></i>
                        </div>
                      </a>
                      <span className="t-semibold">Nueva Programación</span>
                    </div>
                    <div className="cont-btn-filter">
                      <div className="label-btn">Filtros</div>
                      <div>
                        <a
                          href="#modalFiltersInterfaces"
                          className="btn_filter mr-2 waves-effect waves-light modal-trigger"
                        >
                          <i className="fas fa-filter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Barra de búsqueda */}
                <Search />
                {/* Filers panel mobile */}
                <MobileFilter />
              </div>
            </div>
            <div className="col l12 m12 s12">
              <div className="row">
                <div className="col l9 m8 s12">
                  <div className="row">
                    {/* Contenedor de las interfaces */}
                    {interfacesLoop}
                  </div>
                </div>
                <FilterPanel />
              </div>
            </div>
            {/* Paginator */}
            <Pagination />
            <div className="col l4 m4 s12"></div>
          </div>
          <Footer />
        </section>
        {/* Modal filter - Mobile o low resolution */}
        <InterfaceNewProg />
        <InterfaceModalFilter />
      </div>
    );
  }
}

export default Interfaces;
