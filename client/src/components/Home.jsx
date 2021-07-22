
import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="introduction">
            <div>
            <p>Bienvenido esta es una aplicación donde te muestra información
                de los países, actividades que puedes realizar en ellas, y 
                agregar actividades de acuerdo a tu conveniencia y contribuir
                con esa información como guia a los futuros visitantes, puedes ver 
                la lista de los Países haciendo click en <span style={{color:'blue'}}>Paises </span> 
                en la barra del navegador, o <span style={{color:'blue'}}>Actividades</span> si quieres
                ver las actividades.
            </p>
            </div>
        </div>
    )
}

export default Home
