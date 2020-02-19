import React, { Component } from 'react';
import Header from '../components/Header';

class Audit extends Component{
    render(){
        return(
            <div>
                <section className="col l10 m12 s12  offset-l2 relative">
                    <Header/>
                    <div className="row container-page">
                        <div className="col l12 m12 s12">
                            <div className="row">
                                <div className="col l7 m6 s12">
                                    <div className="t-semibold p15 mt-1 mb-1">Tabla de Registros</div>
                                </div>
                                <div className="col l5 m6 s12">
                                    
                                    {/* <!-- Field camp --> */}
                                    <div className="field-search">
                                        <div className="cont-icon" style={{opacity: 0.8}}><i className=" fas fa-search"></i></div>
                                        <input type="text" placeholder="Buscar en la lista"></input>
                                        <div className="cont-icon" style={{opacity: 0.7, cursor:'pointer'}}><i className="far fa-times-circle"></i></div>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                        <div className="col l12 m12 s12">
                            <div className="cont-table">
                                <table className="table-compress">
                                    <thead>
                                        <tr>                   
                                            <th>  
                                                Fecha  
                                                <i className="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Nombre Trabajo  
                                                <i className="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Interfaz  
                                                <i className="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Flujo Negocio  
                                                <i className="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Estado  
                                                <i className="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Fecha Ini 
                                                <i className="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Fecha Fin 
                                                <i className="xed fas fa-arrow-up"></i>    
                                            </th>
                                            <th>  
                                                Detalles  
                                                <i className="xed fas fa-arrow-up"></i>    
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
                                            <td className="tr t-semibold">
                                                <a className="modal-trigger" href="#modalDetailLog">
                                                    Ver más &nbsp; <i className="p8 fas fa-external-link-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                   
                                    </tbody>
                                </table>
                                {/* <!-- Footer table --> */}
                                <div className="footer-table">
                                    <div className="spacer-table"></div>
                                    <div className="cont-contrls">
                                        <div className="rows-cant">
                                            <div className="label">Filas por pág:</div>
                                            <div className="cont-select">
                                                <select>
                                                    <option value="1">10</option>
                                                    <option value="2">15</option>
                                                    <option value="3">20</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                        <div className="conter-rows">1-8 de 200</div>
                                        <div>
                                            <a className="btn-floating btn-small waves-effect waves-light blue mr-1"><i className="fas fa-chevron-left" style={{fontSize: 9+'pt'}}></i></a>
                                            <a className="btn-floating btn-small waves-effect waves-light blue"><i className="fas fa-chevron-right" style={{fontSize: 9+'pt'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="tc">Creado por <b>Verano 2020</b></footer>
                </section>
                {/* MODAL CAMBIAR */}
                <div id="modalDetailLog" className="modal verano-modal">
                    <div className="header-modal">
                        <div className="tc title-modal t-semibold">Detalle Log</div>
                        <div className="btn-close">
                            <a href="#!" className="close-window modal-close"><i className="fas fa-times"></i></a>
                        </div>
                    </div>
                    
                    <div className="body-modal">
                        <form>
                            <div className="row m0">
                                <div className="col l6 m6 s12">
                                    <div className="input-field">
                                        <input placeholder="Fecha Generación" id="date" disabled type="text" className="validate" value="23-08-2019"></input>
                                        <label for="date">Fecha</label>
                                    </div>
                                </div>
                                <div className="col l6 m6 s12">
                                    <div className="input-field">
                                        <input placeholder="Nombre de trabajo" id="caseUse" disabled type="text" className="validate" value="Caso de Uso 1"></input>
                                        <label for="caseUse">Nombre Trabajo</label>
                                    </div>
                                </div>
                                <div className="col l6 m6 s12">
                                    <div className="input-field">
                                        <input placeholder="Nombre Interfaz" id="caseUse" disabled type="text" className="validate" value="Caso de Uso 1"></input>
                                        <label for="caseUse">Nombre Interfaz</label>
                                    </div>
                                </div>
                                <div className="col l6 m6 s12">
                                    <div className="input-field">
                                        <input placeholder="Nombre proyecto" id="project" disabled type="text" className="validate" value="Project_ER45DF"></input>
                                        <label for="project">Flujo de Negocio</label>
                                    </div>
                                </div>
                                <div className="col l6 m6 s12">
                                    <div className="input-field">
                                        <input placeholder="Fecha Inicial" id="date" disabled type="text" className="validate" value="20-08-2019"></input>
                                        <label for="date">Fecha Inicial</label>
                                    </div>
                                </div>
                                <div className="col l6 m6 s12">
                                    <div className="input-field">
                                        <input placeholder="Fecha Final" id="date" disabled type="text" className="validate" value="21-08-2019"></input>
                                        <label for="date">Fecha Final</label>
                                    </div>
                                </div>
                                <div className="col l12 m12 s12">
                                    <div className="input-field">
                                        <div className="head-textarea">
                                            <div className="label-main t-semibold p13">Respuesta</div>
                                            <div className="second-info t-semibold">Estado: &nbsp;
                                                <span className="t-success t-semibold">Ejecución Exitosa</span>
                                                {/* <!-- <span className="t-error t-semibold">Ejecución Fallida</span> --> */}
                                            </div>
                                        </div>
                                        <div className="textarea-div">
                                            <code>
                                                { '"glossary": { "title": "example glossary", "GlossDiv": { "title": "S", "GlossList": { "GlossEntry": { "ID": "SGML", "SortAs": "SGML", "GlossTerm": "Standard Generalized Markup Language", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": ["GML", "XML"] }, "GlossSee": "markup" } }' }
                                            </code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* <div className="p9 t-semibold">Los campos con (*) son obligatorios.</div> */}

                    </div>
                    <div className="modal-footer tc">
                        <a href="#!" className=" modal-action modal-close btn waves-effect waves-light t-semibold">Cerrar</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Audit;