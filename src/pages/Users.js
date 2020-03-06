import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UsersModalEdit from "../components/UsersModalEdit";
import UsersModalFilter from "../components/UsersModalFilter";
import UsersFilterPanel from "../components/UsersFilterPanel";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import UsersContent from "../components/UsersContent";
import AppliedFilters from "../components/AppliedFilters";

class Users extends Component {
  render() {
    return (
      <div>
        <section className="col l10 m12 s12 offset-l2 relative">
          <Header title="Usuarios" urlContext="usuarios" />
          <div className="row container-page">
            <div className="col l12 m12 s12 head-actions">
              <div className="row">
                <div className="col l7 m6 s12 mt-1">
                  <div className="head-new-element">
                    <div className="btn-trigger-form">
                      <a className="modal-trigger" href="#modalFormUser">
                        <div className="btn-gradient-small">
                          <i className="fas fa-plus"></i>
                        </div>
                      </a>
                      <span className="t-semibold">Nuevo Usuario</span>
                    </div>
                    <div className="cont-btn-filter">
                      <div className="label-btn">Filtros</div>
                      <div>
                        <a
                          href="#modalFiltersUser"
                          className="modal-trigger btn_filter mr-2 waves-effect waves-light"
                        >
                          <i className="fas fa-filter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search */}
                <Search />
                {/* Filtros aplicados */}
                <AppliedFilters />
              </div>
            </div>

            <div className="col l12 m12 s12">
              <div className="row">
                <UsersContent />
                <UsersFilterPanel />
              </div>
            </div>

            {/* <!-- Paginator --> */}
            <Pagination />
            <div className="col l4 m4 s12"></div>
          </div>
          <Footer />
        </section>
        <UsersModalEdit />
        <UsersModalFilter />
      </div>
    );
  }
}

export default Users;
