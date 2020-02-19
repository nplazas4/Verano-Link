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
            <Route exact path='/' component={Login}/>
            <Route path='/proveedores' component={Providers}/>
            <Route path='/interfaces' component={Interfaces}/>
            <Route path='/flujos-negocio' component={Businessflow}/>
            <Route path='/monitoreo' component={Dashboard}/>
            <Route path='/usuarios' component={Users}/>
            <Route path='/auditoria' component={Audit}/>
            <Route path='/configuracion' component={Config}/>
        </Switch>
    );
}

export default Routes;