import React, { Component } from 'react';

class Users extends Component {
    render()  {
        return(
            <section class="col l10 m12 s12 offset-l2 relative">
                <div className="row container-page">
                    <div className="col l12 m12 s12 head-actions">
                        <div className="row">
                            <div className="col l7 m6 s12 mt-1">
                                <div className="head-new-element">
                                    <div className="btn-trigger-form">
                                        <a className="modal-trigger">
                                            <div className="btn-gradient-small">
                                                <i className="fas fa-plus"></i>
                                            </div>
                                        </a>
                                        <span className="t-semibold">
                                            Nuevo Usuario
                                        </span>
                                    </div>
                                    <div className="cont-btn-filter">
                                        <div className="label-btn">Filtros</div>
                                        <div>
                                            <a className="modal-trigger btn_filter mr-2 waves-effect waves-light">
                                                <i className="fas fa-filter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l5 m6 s12 mt-1">
                                <div className="field-search">
                                    <div className="cont-icon" style={{opacity: 0.8}}>
                                        <i className="fas fa-search"></i>
                                    </div>
                                    <input type="text" placeholder="Buscar en la lista"></input>
                                    <div className="cont-icon" style={{opacity: 0.7, cursor:'pointer'}}>
                                        <i className=" far fa-times-circle"></i>
                                    </div>
                                </div>
                            </div>
                            {/* Filers panel mobile */}
                            <div className="col s12 mt-1">
                                <div className="cont-filters-mobile">
                                    <div className="subtitle-filters">Filtros Aplicados</div>
                                    <div className="cont-chips">
                                        {/* Chip filter */}
                                        <div className="chip-filter">
                                            <div className="inner-chip">
                                                <div className="value-chip">
                                                    Activos
                                                </div>
                                                <div className="delete-chip">
                                                    <i className="fas fa-times-circle"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l12 m12 s12">
                        <div className="row">
                            <div className="col l9 m8 s12">
                                <div className="row">
                                    <div className="col l12 m12 s12 mb-3">
                                        <ul className="tabs tc" style={{borderBottom: 1+'px', solid: '#ccc'}}>
                                            <li className="tab col l3 m3 s3"><a class="active" href="#test1">Administradores</a></li>
                                            <li className="tab col l3 m3 s3"><a href="#test2">Editores</a></li>
                                            <li className="tab col l3 m3 s3"><a href="#test4">Visualizadores</a></li>
                                        </ul>
                                    </div>
                                    <div id="test1" className="col l12 m12 s12">
                                        <div className="row">
                                            <div className="col l4 m6 s6 item-card">
                                                <div className="verano-card">
                                                    <div className="cont-status-indicator">
                                                        <div className="indicator-status active-record"></div>
                                                    </div>
                                                    <div className="head-card">
                                                        <div className="title">
                                                            <div className="main-label t-capitalize t-semibold">Juan Camilo Jiménez</div>
                                                            <div className="second-label">Perfil (ADMIN)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l8 m8 s12">
                        <ul className="pagination tc">
                            <li className="disabled"><a href="#!"><i className="fas fa-chevron-left p9"></i></a></li>
                            <li className="active"><a href="#!">1</a></li>
                            <li className="waves-effect"><a href="#!">2</a></li>
                            <li className="waves-effect"><a href="#!">3</a></li>
                            <li className="waves-effect"><a href="#!">4</a></li>
                            <li className="waves-effect"><a href="#!">5</a></li>
                            <li className="waves-effect"><a href="#!"><i className="fas fa-chevron-right p9"></i></a></li>
                        </ul>
                    </div>
                    <div className="col l4 m4 s12"></div>
                </div>              
            </section>
        );
    }
}

export default Users;