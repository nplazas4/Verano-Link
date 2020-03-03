import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Providers from "./pages/Providers";
import Interfaces from "./pages/Interfaces";
import Businessflow from "./pages/Businessflow";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Audit from "./pages/Audit";
import Config from "./pages/Config";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Layout2 from "./components/Layout2";

const Routes = () => {
  return (
    // <Router>
    <Switch>
      <Route exact path="/veranolink" component={Login} />
      {/* <Layout> */}
      {/* <section className="col l10 m12 s12  offset-l2 relative">
          // <Layout2> */}
      <Route exact path="/veranolink/proveedores" component={Providers} />
      <Route exact path="/veranolink/interfaces" component={Interfaces} />
      <Route exact path="/veranolink/flujos-negocio" component={Businessflow} />
      <Route exact path="/veranolink/monitoreo" component={Dashboard} />
      <Route exact path="/veranolink/usuarios" component={Users} />
      <Route exact path="/veranolink/auditoria" component={Audit} />
      <Route exact path="/veranolink/configuracion" component={Config} />
      <Route component={NotFound} />
      {/* </Layout2>
        </section> */}
      {/* </Layout> */}
    </Switch>
    // </Router>
  );
};

export default Routes;
