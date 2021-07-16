import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
            <h1>Paises del mundo</h1>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/home" >Home</NavLink>
                        <NavLink to="/activities" >Actividades</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}