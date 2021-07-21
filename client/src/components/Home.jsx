import { buildQueries } from '@testing-library/react'
import React from 'react'

function Home() {
    return (
        <div className="introduction">
            <p>Bienvenido esta es una aplicación donde te muestra información
                de los países, actividades que puedes realizaren ellas, y si 
                agregar actividades de acuerdo a tu conveniencia y contribuir
                con esa información y guia a los futuros visitantes, puedes ver 
                la lista de los Países haciendo click en <span style={{color:'blue'}}>Paises </span> 
                en la barra del navegador o <span style={{color:'blue'}}>Actividades</span> si quieres
                ver las actividades
            </p>
        </div>
    )
}

export default Home
