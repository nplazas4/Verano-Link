import React from 'react';
import './materialize-core.css';
import './theme-verano.css';
import './all.min.css';
import Routes from './Routes';
import Menu from './components/Menu';
import Login from './pages/Login';
import Providers from './pages/Providers';
import Interfaces from './pages/Interfaces';
import Businessflow from './pages/Businessflow';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

const exitOption = {
  borderTop: '1px solid #ddd',
  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px'
}

function App() {
  console.log(exitOption);
  return (
    <div className="App">
      {/* Global Messages --> */}
      <div className="global-msj-feedback msj-good" style={{display:'none'}}>
        <i className="fas fa-check-circle"></i> Cambios Guardados
      </div>
      <div className="global-msj-feedback msj-bad" style={{display:'none'}}>
        <i className="fas fa-exclamation-circle"></i> Hubo un error
      </div>
      
      <section id='master-container'>
        {/* Component navitator-bar */}
        <section className="row" style={{marginBottom:'0'}}>
          <Menu/>
          {/* <Login/> */}
          <Routes/>
        </section>
      </section>
    </div>
  );
}

export default App;
