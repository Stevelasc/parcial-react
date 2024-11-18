import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Studio Ghibli
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink 
                                className={({isActive}) => 
                                    `nav-link ${isActive ? 'active' : ''}`
                                } 
                                to="/"
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({isActive}) => 
                                    `nav-link ${isActive ? 'active' : ''}`
                                } 
                                to="/peliculas"
                            >
                                Películas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({isActive}) => 
                                    `nav-link ${isActive ? 'active' : ''}`
                                } 
                                to="/about"
                            >
                                Acerca de
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Buscar película..." 
                        />
                        <button className="btn btn-outline-light" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;