import React from 'react';
import {Link} from "react-router-dom"
import viajetra from "../img/viaje-unscreen.gif"
import "./Welcome.css"

function Welcome() {
    return (
        <div className="welcome">
            <div>
            <h1>Bienvenidos a Countries</h1>
            <Link to="/home">
                <button className="ingresarbtn">Ingresar</button>
            </Link>
            </div>
            <img src={viajetra} alt="no found" />

        </div>
    )
}

export default Welcome
