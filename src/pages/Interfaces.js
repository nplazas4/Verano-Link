import React, { Component } from 'react';
import Header from '../components/Header';
class Interfaces extends Component{
    render(){
        return(
            <div>
                <section className="col l10 m12 s12  offset-l2 relative">
                    <Header/>
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
                                            <span className="t-semibold">
                                                Nueva Programación
                                            </span>
                                        </div>
                                        <div className="cont-btn-filter">
                                            <div className="label-btn">Filtros</div>
                                            <div>
                                                <a href="#modalFiltersInterfaces" className="btn_filter mr-2 waves-effect waves-light modal-trigger">
                                                    <i className="fas fa-filter"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l5 m6 s12 mt-1">
                                    {/* Field camp */}
                                    <div className="field-search">
                                        <div className="cont-icon" style={{opacity:0.8}}>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <input type="text" placeholder="Buscar en la lista"></input>
                                        <div className="cont-icon" style={{opacity: 0.7, cursor:'pointer'}}>
                                            <i className="far fa-times-circle"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* Filers panel mobile */}
                                <div className="col s12 mt-1">
                                    <div className="cont-filters-mobile">
                                        <div className="subtitle-filters">
                                            Filtros Aplicados
                                        </div>
                                        <div className="cont-chips">
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
                                            <div className="chip-filter">
                                                <div className="inner-chip">
                                                    <div className="value-chip">
                                                        Unifier
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
                                        <div className="col l4 m6 s6 item-card">
                                            <div className="verano-card">
                                                <div className="head-card">
                                                    <div className="title">
                                                        <div className="main-label t-capitalize mt-1 t-semibold">Migración P6</div>
                                                    </div>
                                                    <div>
                                                        {/* REVISAR */}
                                                        <a href="#">
                                                            <div className="btn-options">
                                                                <i className="p13 fas fa-ellipsis-v"></i>
                                                            </div>
                                                        </a>
                                                        {/* REVISAR - CONTENIDO OPRCIONES */}
                                                    </div>
                                                </div>
                                                <div className="segment-info-v mb-1">
                                                    <div className="title">ESTADO ÚLTIMA EJEC.</div>
                                                    <div className="value">
                                                        <span className="green-text">
                                                            <i className="fas fa-check-circle"></i> Ejecución Exitosa
                                                        </span>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="segment-info-v segment-partition my-1">
                                                    <div className="left-section">
                                                        <div className="title">ORIGEN</div>
                                                        <div className="value">P6 EPPM</div>
                                                    </div>
                                                    <div className="right-section">
                                                        <div className="title">DESTINO</div>
                                                        <div className="value t-semibold">SAP</div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="segment-info-v mt-1">
                                                    <div className="title">TIEMPO DE EJECUCIÓN</div>
                                                    <div className="value">2 Minutos</div>
                                                </div>
                                                <div className="segment-info-v ">
                                                    <div className="title">FLUJO DE NEGOCIO</div>
                                                    <div className="value t-capitalize">---</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l3 m4 s12">
                                    <div className="cont-filters">
                                        <div className="panel-filters">
                                            <div className="head-filters t-semibold">
                                                <div style={{display: 'inlineBlock'}}>
                                                    <i className="p10 fas fa-filter" style={{marginRight: '8px'}}></i>
                                                    {''}
                                                    Panel Filtros
                                                </div>
                                                <div style={{float:"right"}} className="p9"></div>
                                            </div>
                                            <div className="cont-filters">
                                            <div className="input-field">
                                                <select>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                </select>
                                                <label>Estado Ejecución</label>
                                            </div>
                                            <div className="input-field">
                                                <select>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                </select>
                                                <label>Estado Ejecución</label>
                                            </div>
                                            <div className="input-field">
                                                <select>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                </select>
                                                <label>Estado Ejecución</label>
                                            </div>
                                            <div className="input-field">
                                                <select>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                    <option>-Selecciona-</option>
                                                </select>
                                                <label>Estado Ejecución</label>
                                            </div>
                                            <div className="input-field tc">
                                                <a className="waves-effect waves-light btn-small t-semibold grey">Limpiar Filtros</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Paginator */}
                    <div className="col l8 m8 s12">
                        <ul className="pagination tc">
                            <li className="disabled">
                                <a href="#!">
                                    <i className="fas fa-chevron-left p9"></i>
                                </a>
                            </li>
                            <li className="active"><a href="#!">1</a></li>
                            <li className="waves-effect"><a href="#!">2</a></li>
                            <li className="waves-effect"><a href="#!">3</a></li>
                            <li className="waves-effect"><a href="#!">4</a></li>
                            <li className="waves-effect"><a href="#!">5</a></li>
                            <li className="waves-effect"><a href="#!">
                                <i className="fas fa-chevron-right p9"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l4 m4 s12"></div>
                </div>
                    <footer class="tc">Creado por <b>Verano 2020</b></footer>
                </section>
                <div id="modalFiltersInterfaces" className="modal verano-modal">
                <div className="header-modal">
                    <div className="tc title-modal t-semibold">Filtrar Interfaces</div>
                    <div className="btn-close">
                        <a href="#!" className="close-window modal-close"><i className="fas fa-times"></i></a>
                    </div>
                </div>
                
                <div className="body-modal">
                    <form>
                        <div className="row m0">
                        
                            <div className="col l6 m6 s12">
                                <div className="input-field">
                                    <select>
                                        <option>-Selecciona-</option>
                                        <option value="mondly" selected>Mensual</option>
                                        <option value="weekly">Semanal</option>
                                        <option value="diary">Diario</option>
                                        <option value="unic">Fecha Única</option>
                                    </select>
                                    <label>Estado Ejecución</label>
                                </div>
                            </div>
                            <div className="col l6 m6 s12">
                                <div className="input-field">
                                    <select>
                                        <option selected>-Selecciona-</option>
                                        <option value="1">PG EPPM</option>
                                        <option value="2">UNIFIER</option>
                                        <option value="3">SAP</option>
                                        <option value="3">EMS</option>
                                    </select>
                                    <label>Origen</label>
                                </div>
                            </div>
                            <div className="col l6 m6 s12">
                                <div className="input-field">
                                    <select>
                                        <option selected>-Selecciona-</option>
                                        <option value="1">PG EPPM</option>
                                        <option value="2">UNIFIER</option>
                                        <option value="3">SAP</option>
                                        <option value="3">EMS</option>
                                    </select>
                                    <label>Destino </label>
                                </div>
                            </div>
                            <div className="col l6 m6 s12">
                                <div className="input-field">
                                    <select>
                                        <option value="1">A - z</option>
                                        <option value="2">Z - a</option>
                                    </select>
                                    <label>Ordenar por: </label>
                                </div>
                            </div>
        
                        </div>
                    </form>
                </div>
                <div className="modal-footer tl">
                    <a href="#!" className=" modal-action modal-close btn waves-effect waves-light t-semibold">Aplicar</a>
                    <a href="#!" className=" modal-action modal-close btn waves-effect waves-light t-semibold btn-white m-btn">Cancelar</a>
                </div>
                </div>
            </div>
        );
    }
}

export default Interfaces;