import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './App.css';

//componente login
import Login from './components/login/Login';

//componentes fijos
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

//componentes dinamicos
import Administradores from './components/contents/administradores/Administradores';
import Articulos from './components/contents/gestorArticulos/Articulos';
import Clientes from './components/contents/gestorClientes/Clientes';
import CustomerInsights from './components/contents/gestorCustomerInsights/CustomerInsights';
import Intro from './components/contents/gestorIntro/Intro';
import Servicios from './components/contents/gestorServicios/Servicios';
import Soluciones from './components/contents/gestorSoluciones/Soluciones';
import Usuarios from './components/contents/usuarios/Usuarios';
import Error404 from './components/contents/error404/Error404';
import Galeria from './components/contents/galeria/Galeria';
import Slide from './components/contents/slide/Slide';

export default function App() {
  const auth = getAccessToken();

  if(!auth){
    return(
      <Login/>
    ) 
  }

  return (

    
    <div className="sidebar-mini">

      <div className="wrapper">
        
        <Header/>
        <Sidebar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Administradores} />
            <Route exact path="/articulos" component={Articulos} />
            <Route exact path="/clientes" component={Clientes} />
            <Route exact path="/customerinsights" component={CustomerInsights} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/soluciones" component={Soluciones} />
            <Route exact path="/usuarios" component={Usuarios} />
            <Route exact path="/galeria" component={Galeria} />
            <Route exact path="/slide" component={Slide} />
            <Route  component={Error404} />
            <Administradores/>
          </Switch>
        </BrowserRouter>
        
        <Footer/>

      </div>
    </div>
  );
}

//export default App;
//funcion para tener acceso al token
const getAccessToken = ()=>{
  
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const id = localStorage.getItem("ID");
  const usuario = localStorage.getItem("USUARIO");

  if(!accessToken || accessToken === null ||  !id || id === null || !usuario || usuario === null){
    return false;
  }

  const metaToken = jwtDecode(accessToken);
  
  if(!metaToken.data){
    return false;
  }

  if(tokenExpira(accessToken, metaToken) || metaToken.data._id !== id || metaToken.data.usuario !== usuario){
    return false;
  }else{
    return true;
  }

}

//funcion para verificar fecha de expiracion del token

const tokenExpira = (accessToken, metaToken)=>{
  const seconds = 60;

  const {exp} = metaToken;
  
  const now = (Date.now()+seconds)/1000;
  return exp < now;
}