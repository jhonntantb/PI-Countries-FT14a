import React from 'react';
import {Link} from "react-router-dom"
import "./Welcome.css"

function Welcome() {
    return (
        <div>
            <h1>Bienvenidos a Countries</h1>
            <Link to="/home">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default Welcome
