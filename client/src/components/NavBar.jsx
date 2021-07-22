import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="title">
            <h1 >Países del mundo</h1>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink style={{textDecoration:"none",fontSize: "30px"}} exact to="/home/countries" >Países</NavLink>
                        <NavLink to="/home/activities"  style={{textDecoration:"none",fontSize: "30px"}} >Actividades</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}