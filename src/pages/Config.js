import React, { Component } from 'react';
import Header from '../components/Header';

class Config extends Component{
    render(){
        return(
            <div>
                <section class="col l10 m12 s12  offset-l2 relative">
                    <Header/>
                    <div class="container-page">
                        <div class="row">
                            <div class="col l12 m12 s12">
                                
                                <div class="row">
                                    <div class="col s12">
                                        <ul class="tabs mb-3" style={{borderBottom: 1+'px solid #ccc'}}>
                                            <li class="tab col l2 m4 s6"><a class="active" href="#general">General</a></li>
                                            <li class="tab col l3 m4 s6"><a  href="#mainConf">Configuración EMAIL</a></li>
                                        </ul>
                                    </div>
                                    <div id="general" class="col s12">
                                        <form style={{padding: 0+'em ' + 1+'em'}}>
                                            <div class="row m0">
                        
                                                <div class="col l6 m6 s12">
                                                    <div class="input-field">
                                                        <div>Máximo numero de registros de trabajos a mostrar</div>
                                                        <input value="2000"  type="number" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l6 m6 s12">
                                                    <div class="input-field">
                                                        <div>Eliminación automática de trabajos despues de (XX) días</div>
                                                        <input value="9"  type="number" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l6 m6 s12">
                                                    <div class="input-field">
                                                        <div>Max tiempo espera carga/conversión de pasos a completar (min)</div>
                                                        <input value="30"  type="number" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l6 m6 s12">
                                                    <div class="input-field">
                                                        <div>Max. Concurrencia en un nodo</div>
                                                        <input  value="10"  type="number" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l6 m6 s12">
                                                    <div class="input-field">
                                                        <div>Job polling Interval (Segundos)</div>
                                                        <input  value="10"  type="number" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l12 m12 s12">
                                                    <a href="#!" class=" modal-action btn waves-effect waves-light t-semibold">Guardar Cambios</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div id="mainConf" class="col s12">
                                    <form style={{padding: 0+'em '+ 1+'em'}}>
                                            <div class="row m0">
                        
                                                <div class="col l4 m6 s12">
                                                    <div class="input-field">
                                                        <div>SMTP Server</div>
                                                        <input placeholder="SMTP Server" value="2000"  type="number" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l4 m6 s12">
                                                    <div class="input-field">
                                                        <div>Puerto</div>
                                                        <input placeholder="Puerto" value="9"  type="number" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l4 m6 s12">
                                                    <div class="input-field">
                                                        <div>Seguridad de EMAIL</div>
                                                        <select>
                                                            <option value="1">SSL</option>
                                                            <option value="2">Editor</option>
                                                            <option value="3">Visualizador</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col l6 m6 s12">
                                                    <div class="input-field">
                                                        <div>Dirección EMAIL</div>
                                                        <input placeholder="Dirección EMAIL" value="cloudverano@sdp.com.co"  type="text" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l6 m6 s12">
                                                    <div class="input-field">
                                                        <div>Email Autorizado </div>
                                                        <input placeholder="EMAIL Autorizado" value="cloudverano@sdp.com.co"  type="text" class="validate"></input>
                                                    </div>
                                                </div>
                                                <div class="col l6 m6 s12">
                                                    <div class="input-field">
                                                        <div class="relative cont-input-pass">
                                                            <input id="input-pass" type="password" class="validate inputBottom" placeholder="Contraseña" value="Ty7/8yRtY(/uT(63"></input>
                                                            <div onclick="changeView()" id="off-eye" class="cont-icon" style={{display:'block'}}>
                                                                <i class="far fa-eye-slash"></i>
                                                            </div>
                                                            <div onclick="changeView()" class="cont-icon" id="on-eye">
                                                                <i class="far fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col l12 m12 s12">
                                                    <a href="#!" class=" modal-action btn waves-effect waves-light t-semibold">Guardar Cambios</a>
                                                </div>
                                            </div>
                                        </form>
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

export default Config;