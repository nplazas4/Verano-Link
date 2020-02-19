import React, { Component } from 'react';
import Header from '../components/Header';

class Audit extends Component{
    render(){
        return(
            <div>
                <section class="col l10 m12 s12  offset-l2 relative">
                    <Header/>
                    <div class="row container-page">
                        <div class="col l12 m12 s12">
                            <div class="row">
                                <div class="col l7 m6 s12">
                                    <div class="t-semibold p15 mt-1 mb-1">Tabla de Registros</div>
                                </div>
                                <div class="col l5 m6 s12">
                                    
                                    {/* <!-- Field camp --> */}
                                    <div class="field-search">
                                        <div class="cont-icon" style={{opacity: 0.8}}><i class=" fas fa-search"></i></div>
                                        <input type="text" placeholder="Buscar en la lista"></input>
                                        <div class="cont-icon" style={{opacity: 0.7, cursor:'pointer'}}><i class="far fa-times-circle"></i></div>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                        <div class="col l12 m12 s12">
                            <div class="cont-table">
                                <table class="table-compress">
                                    <thead>
                                        <tr>                   
                                            <th>  
                                                Fecha  
                                                <i class="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Nombre Trabajo  
                                                <i class="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Interfaz  
                                                <i class="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Flujo Negocio  
                                                <i class="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Estado  
                                                <i class="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Fecha Ini 
                                                <i class="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Fecha Fin 
                                                <i class="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Detalles  
                                                <i class="xed fas fa-arrow-up"></i>    
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>    
                                            <td>23-08-2019</td>
                                            <td>Trabajo FR342D</td>
                                            <td>P6 CBBS</td>
                                            <td>Get CBS</td>
                                            <td>Exitoso</td>
                                            <td>09-05-2019</td>
                                            <td>10-05-2019</td>
                                            <td class="tr t-semibold">
                                                <a class="modal-trigger" href="#modalDetailLog">
                                                    Ver más &nbsp; <i class="p8 fas fa-external-link-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                   
                                    </tbody>
                                </table>
                                {/* <!-- Footer table --> */}
                                <div class="footer-table">
                                    <div class="spacer-table"></div>
                                    <div class="cont-contrls">
                                        <div class="rows-cant">
                                            <div class="label">Filas por pág:</div>
                                            <div class="cont-select">
                                                <select>
                                                    <option value="1">10</option>
                                                    <option value="2">15</option>
                                                    <option value="3">20</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                        <div class="conter-rows">1-8 de 200</div>
                                        <div>
                                            <a class="btn-floating btn-small waves-effect waves-light blue mr-1"><i class="fas fa-chevron-left" style={{fontSize: 9+'pt'}}></i></a>
                                            <a class="btn-floating btn-small waves-effect waves-light blue"><i class="fas fa-chevron-right" style={{fontSize: 9+'pt'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="tc">Creado por <b>Verano 2020</b></footer>
                </section>
                {/* MODAL CAMBIAR */}
                <div id="modalDetailLog" class="modal verano-modal">
                    <div class="header-modal">
                        <div class="tc title-modal t-semibold">Detalle Log</div>
                        <div class="btn-close">
                            <a href="#!" class="close-window modal-close"><i class="fas fa-times"></i></a>
                        </div>
                    </div>
                    
                    <div class="body-modal">
                        <form>
                            <div class="row m0">
                                <div class="col l6 m6 s12">
                                    <div class="input-field">
                                        <input placeholder="Fecha Generación" id="date" disabled type="text" class="validate" value="23-08-2019"></input>
                                        <label for="date">Fecha</label>
                                    </div>
                                </div>
                                <div class="col l6 m6 s12">
                                    <div class="input-field">
                                        <input placeholder="Nombre de trabajo" id="caseUse" disabled type="text" class="validate" value="Caso de Uso 1"></input>
                                        <label for="caseUse">Nombre Trabajo</label>
                                    </div>
                                </div>
                                <div class="col l6 m6 s12">
                                    <div class="input-field">
                                        <input placeholder="Nombre Interfaz" id="caseUse" disabled type="text" class="validate" value="Caso de Uso 1"></input>
                                        <label for="caseUse">Nombre Interfaz</label>
                                    </div>
                                </div>
                                <div class="col l6 m6 s12">
                                    <div class="input-field">
                                        <input placeholder="Nombre proyecto" id="project" disabled type="text" class="validate" value="Project_ER45DF"></input>
                                        <label for="project">Flujo de Negocio</label>
                                    </div>
                                </div>
                                <div class="col l6 m6 s12">
                                    <div class="input-field">
                                        <input placeholder="Fecha Inicial" id="date" disabled type="text" class="validate" value="20-08-2019"></input>
                                        <label for="date">Fecha Inicial</label>
                                    </div>
                                </div>
                                <div class="col l6 m6 s12">
                                    <div class="input-field">
                                        <input placeholder="Fecha Final" id="date" disabled type="text" class="validate" value="21-08-2019"></input>
                                        <label for="date">Fecha Final</label>
                                    </div>
                                </div>
                                <div class="col l12 m12 s12">
                                    <div class="input-field">
                                        <div class="head-textarea">
                                            <div class="label-main t-semibold p13">Respuesta</div>
                                            <div class="second-info t-semibold">Estado: &nbsp;
                                                <span class="t-success t-semibold">Ejecución Exitosa</span>
                                                {/* <!-- <span class="t-error t-semibold">Ejecución Fallida</span> --> */}
                                            </div>
                                        </div>
                                        <div class="textarea-div">
                                            <code>
                                                { '"glossary": { "title": "example glossary", "GlossDiv": { "title": "S", "GlossList": { "GlossEntry": { "ID": "SGML", "SortAs": "SGML", "GlossTerm": "Standard Generalized Markup Language", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": ["GML", "XML"] }, "GlossSee": "markup" } }' }
                                            </code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* <div class="p9 t-semibold">Los campos con (*) son obligatorios.</div> */}

                    </div>
                    <div class="modal-footer tc">
                        <a href="#!" class=" modal-action modal-close btn waves-effect waves-light t-semibold">Cerrar</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Audit;