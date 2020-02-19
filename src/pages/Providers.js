import React, { Component } from 'react';
import logoP6 from '../images/oracleP6.png';
import logoUnifier from '../images/oracle1.png';
import logoVerano from '../images/verano-logo-white.svg';
import Header from '../components/Header';

class Providers extends Component {
    render(){
        const providerList = [
            {
                'name':'P6 EPPM',
                'logo': logoP6,
                'interface':'10'
            },
            {
                'name':'UNIFIER',
                'logo': logoUnifier,
                'interface':'11'
            },
            {
                'name':'SAP',
                'logo':'',
                'interface':'12'
            },
            {
                'name':'EBS',
                'logo':'',
                'interface':'13'
            }
        ];
        const providerLoop = providerList.map((provider, index) => {
            return(                
                <div key={provider.name} className="col l3 m4 s6 item-card" style={{marginTop: 2 + 'em'}}>
                    <div className="card-module user-no-sel">
                        <div className="cont-icon-card">
                            <div className="circle-frame">
                                <div className="summer_head_login tc mb-3">
                                    <img src={provider.logo} alt="Oracle"/>
                                </div>  
                            </div>
                        </div>
                        <div className="cont-base-info">
                            <div className="title">
                                {provider.name}
                            </div>
                            <div className="relative">
                                <div className="divisor-line"></div>
                            </div>
                            <div className="tc my-2">
                                <b>
                                    {provider.interface}
                                </b> 
                                {' '}
                                Interfaces
                            </div>
                            <div className="tc cont-btn">
                                <a href="/proveedores/P6_EPPM" className="waves-effect waves-light btn-small btn-white t-bold">
                                    Configurar Conexión
                                </a>
                            </div>
                        </div>
                    </div>
                </div>    
            );
        })

        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a  href="#!" className="brand-logo">
                            <img src={logoVerano} alt="logo Verano" width="90px"/>
                        </a>
                        <a href="/#" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>

                        <ul className="right">
                            <li>
                                <a href="/#">
                                    <i className="material-icons">
                                        account_circle
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="col l10 m12 s12  offset-l2 relative">
                    <Header/>
                    <div className="container-page">
                        <div className="row">
                            <div className="col l12 m12 s12">
                                <div className="row">
                                    <div className="col l9">
                                        Selecciona alguna de los siguientes proveedores para configurar una nueva conexión.
                                    </div>
                                </div>
                            </div>
                            {providerLoop}
                        </div>
                    </div>
                    <footer className="tc">
                        Creado por 
                        {' '}
                        <b>Verano 2020</b>
                    </footer>
                </section>
            </div>    
        )
    }
}

export default Providers;