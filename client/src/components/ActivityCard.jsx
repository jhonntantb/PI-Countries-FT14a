import React from 'react'
import "./ActivityCard.css"

function ActivityCard({name,difficulty,duration,season}) {
    return (
        <div className="card">
            <h3>Actividad:{name}</h3>
            <p>Dificultad:{difficulty}</p>
            <p>Duracion:{duration}hrs.</p>
            <p>Estación:{season}</p> 
        </div>
    )
}

export default ActivityCard
