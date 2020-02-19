import React, { Component } from 'react';
import Header from '../components/Header';

class Businessflow extends Component{
    render(){
        return(
            <div>
                <section className="col l10 m12 s12 offset-l2 relative">
                    <Header/>
                    {/* contenedor */}
                    <div className="container-page">
                        <div className="row">
                            <div className="col l12 m12 s12">
                                <div className="row">
                                    <div className="col l9">
                                        Lista de flujos de Negocio
                                    </div>
                                </div>
                            </div>
                            <div className="col l3 m6 s6 item-card">
                                <div className="card-module user-no-sel card-color1">
                                    <div className="cont-icon"></div>
                                    <div className="cont-base-info">
                                        <div className="title2">Get EPS</div>
                                        <div className="relative">
                                            <div className="divisor-line"></div>
                                        </div>
                                        <div className="tc mt-3 p8" style={{color:'rgba(0,0,0,0.6)',letterSpacing: 1+"pt"}}>
                                            HERRAMIENTA
                                        </div>
                                        <div className="tc mb-3">P6 EPPM</div>
                                        <hr></hr>
                                        <div className="tc mt-3 p8" style={{color:'rgba(0,0,0,0.6)',letterSpacing: 1+"pt"}}>
                                            DESCRIPCIÓN
                                        </div>
                                        <div className="tc mb-3">
                                            - - - - - 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Businessflow;