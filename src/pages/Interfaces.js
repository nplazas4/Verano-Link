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
import M from "materialize-css";

class Interfaces extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      list: {
        results: [
          {
            id: "1",
            name: "Migración P6",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "---"
          },
          {
            id: "2",
            name: "Creación EPS",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "Get EPS"
          },
          {
            id: "3",
            name: "Creación Actividades",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "Get Activities"
          },
          {
            id: "4",
            name: "Creación OBS",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "Get OBS"
          },
          {
            id: "5",
            name: "Creación De Calendarios",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "Get Calendars"
          },
          {
            id: "6",
            name: "Creación Códigos De Proyecto",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "Get Project Code"
          },
          {
            id: "7",
            name: "Obtener Estructura De Costos",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "Get Project Costsheet"
          },
          {
            id: "8",
            name: "Obtener Registros De BP",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "Get BP Records"
          },
          {
            id: "9",
            name: "Obtener Registros De BP",
            status: "Ejecución Exitosa",
            origin: "P6 EPPM",
            destiny: "SAP",
            ejecTime: "2 Minutos",
            businessFlow: "Get BP Records Documents"
          }
        ]
      }
    };
  }
  componentDidMount() {
    M.AutoInit();
    this.fetchCharacters();
  }
  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await fetch("https://www.breakingbadapi.com/api/characters");
      const response = await data.json();
      console.log(response);
      this.setState({
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };
  render() {
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
                    {this.state.loading === true ? (
                      <InterfaceContainer
                        interfaces={this.state.list.results}
                        skeleton="true"
                      />
                    ) : (
                      <InterfaceContainer
                        interfaces={this.state.list.results}
                      />
                    )}
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
