import React from 'react';
import Logo from './AdminLTELogo.png';
import Photo from './user.jpg'
export default function Sidebar(){

    const usuario = localStorage.getItem("USUARIO");
    
    return(
        
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/" className="brand-link">
                <img alt="logo" 
                    className="brand-image img-circle elevation-3"
                    style={{opacity:0.8}}
                    src={Logo}
                />
                <span className="brand-text font-weight-light">Panel Administrativo</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img 
                            className="img-circle elevation-2" 
                            alt="user"
                            src={Photo}
                        />
                    </div>
                    <div className="info">
                        <a href="/" className="d-block">
                            {usuario}
                        </a>
                    </div>
                </div>
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
						    data-widget="treeview"
						    role="menu"
						    data-accordion="false"
                        >
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                <i className="nav-icon fas fa-user-lock"></i>
                                <p>
                                    Administradores
                                </p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="/intro" className="nav-link">
                                <i className="nav-icon fas fa-sliders-h"></i>
                                <p>
                                    Gestor Intro
                                </p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="/soluciones" className="nav-link">			          
                                <i className="nav-icon far fa-file"></i>
                                <p>
                                    Gestor Soluciones
                                </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/servicios" className="nav-link">			          
                                <i className="nav-icon far fa-file"></i>
                                <p>
                                    Gestor Servicios
                                </p>
                                </a>
                            </li>

                            

                            <li className="nav-item">
                                <a href="/customerinsights" className="nav-link">			           
                                <i className="nav-icon far fa-file"></i>
                                <p>
                                    Gestor Customer Insights
                                </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/clientes" className="nav-link">			           
                                <i className="nav-icon far fa-file"></i>
                                <p>
                                    Gestor Clientes
                                </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/articulos" className="nav-link">			           
                                <i className="nav-icon far fa-file"></i>
                                <p>
                                    Gestor Artículos
                                </p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="/usuarios" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>
                                    Usuarios
                                </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/slide" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>
                                    Slide
                                </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/galeria" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>
                                    Galeria
                                </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                
            </div>
        </aside>
    )
}