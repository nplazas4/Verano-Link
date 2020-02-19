import React, { Component } from 'react';
import logo from '../images/verano-isotipo.svg';

const exitOption = {
    borderTop: '1px solid #ddd',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
}

class Menu extends Component {
    render(){
        return(
            <div>
                {/* Inicio menu side movil*/}
                <ul className="sidenav bar-navigation-mobile" id="mobile-demo">
                    <li>
                        <div>
                            <div style={{display: 'inline-block', verticalAlign:'middle', width: 80+'%', textTransform: 'uppercase', padding: 0.4+'em ' +  1.3+'em ' + 0+'em '+ 1.3+'em'}}>
                                Menu <b>Verano Link</b>
                            </div>
                            <div id='closeNav' style={{display: 'inline-block', verticalAlign:'middle', width: 18+'%', textAlign:'center', marginTop: 1+'em', color: 'rgba(0,0,0,0.5)', cursor: 'pointer'}}>
                                <i className="fas fa-times" style={{fontSize: '14pt'}}></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/Proveedores" className="element-nav">
                            <div className="cont-icon">
                                <i className="fas fa-dolly-flatbed"></i>
                            </div>
                            <div className="cont-label">Proveedores</div>
                        </a>
            
                        <a href="/#" className="element-nav">
                            <div className="cont-icon">
                                <i className="fas fa-th-large"></i>
                            </div>
                            <div className="cont-label">Interfaces</div>
                        </a>
                        <a href="/#" className="element-nav">
                            <div className="cont-icon">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <div className="cont-label">Flujos Negocio</div>
                        </a>
                        <a href="/#" className="element-nav">
                            <div className="cont-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="cont-label">Monitoreo</div>
                        </a>
                        <a href="/#" className="element-nav">
                            <div className="cont-icon">
                                <i className="fas fa-user-friends"></i>
                            </div>
                            <div className="cont-label">Usuarios</div>
                        </a>
                        <a href="/#" className="element-nav">
                            <div className="cont-icon">
                                <i className="far fa-file-alt"></i>
                            </div>
                            <div className="cont-label">Auditoria</div>
                        </a>
                        <a href="/#" className="element-nav">
                            <div className="cont-icon">
                                <i className="fas fa-cog"></i>
                            </div>
                            <div className="cont-label">Configuración</div>
                        </a>
                        <div className="space-bar"></div>
                        <a href="/" className="element-nav" style={exitOption} >
                            <div className="cont-icon">
                                <i className="fas fa-power-off"></i>
                            </div>
                            <div className="cont-label">Salir</div>
                        </a>
                    </li>
                </ul>
                {/* Final menu side movil */}
                {/* Inicio menu side  large*/}
                <section id="custom-navigator" className="col l2 m2 s2 tc">
                    <div id="slot-logo">
                        <img src={logo} alt="logo Verano"/>
                    </div>
                    <div className="bar-navegation">
                        <a href="/proveedores" className="element-nav">
                            <div className="cont-icon tooltipped" data-position="right" data-tooltip="Proveedores">
                                <i className="fas fa-dolly-flatbed"></i>
                            </div>
                            <div className="cont-label">Proveedores</div>
                        </a>
                        <a href="/interfaces" className="element-nav">
                            <div className="cont-icon tooltipped" data-position="right" data-tooltip="Interfaces">
                                <i className="fas fa-th-large"></i>
                            </div>
                            <div className="cont-label">Interfaces</div>
                        </a>
                        <a href="/flujos-negocio" className="element-nav">
                            <div className="cont-icon tooltipped" data-position="right" data-tooltip="Flujos Negocio">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <div className="cont-label">Flujos Negocio</div>
                        </a>
                        <a href="/monitoreo" className="element-nav">
                            <div className="cont-icon tooltipped" data-position="right" data-tooltip="Monitoreo">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="cont-label">Monitoreo</div>
                        </a>
                        <a href="/usuarios" className="element-nav">
                            <div className="cont-icon tooltipped" data-position="right" data-tooltip="Usuarios">
                                <i className="fas fa-user-friends"></i>
                            </div>
                            <div className="cont-label">Usuarios</div>
                        </a>
                        <a href="/auditoria" className="element-nav">
                            <div className="cont-icon tooltipped" data-position="right" data-tooltip="Auditoria">
                                <i className="far fa-file-alt"></i>
                            </div>
                            <div className="cont-label">Auditoria</div>
                        </a>
                        <a href="/configuracion" className="element-nav">
                            <div className="cont-icon tooltipped" data-position="right" data-tooltip="Configuración">
                                <i className="fas fa-cog"></i>
                            </div>
                            <div className="cont-label">Configuración</div>
                        </a>
                        <div className="space-bar"></div>
                        <a href="/" className="element-nav" style={exitOption} >
                            <div className="cont-icon tooltipped" data-position="right" data-tooltip="Salir">
                                <i className="fas fa-power-off"></i>
                            </div>
                            <div className="cont-label">Salir</div>
                        </a>
                    </div>
                </section> 
                {/* Fin menu side */}
            </div>  
        );
    }
}

export default Menu;