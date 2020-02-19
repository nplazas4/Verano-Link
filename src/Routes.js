import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Providers from './pages/Providers';
import Interfaces from './pages/Interfaces';
import Businessflow from './pages/Businessflow';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Audit from './pages/Audit';
import Config from './pages/Config';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/veranolink' component={Login}/>
            <Route exact path='/veranolink/proveedores' component={Providers}/>
            <Route path='/veranolink/interfaces' component={Interfaces}/>
            <Route path='/veranolink/flujos-negocio' component={Businessflow}/>
            <Route path='/veranolink/monitoreo' component={Dashboard}/>
            <Route path='/veranolink/usuarios' component={Users}/>
            <Route path='/veranolink/auditoria' component={Audit}/>
            <Route path='/veranolink/configuracion' component={Config}/>
        </Switch>
    );
}

export default Routes;