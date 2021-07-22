import React from 'react'
import "./ActivityCard.css"

function ActivityCard({name,difficulty,duration,season,countries}) {
    let key=1
    return (
        <div className="cardActivity">
            <div key={key+1}>
            <h3>Actividad:{name}</h3>
            <p>Dificultad:{difficulty}</p>
            <p>Duracion:{duration}hrs.</p>
            <p>Estación:{season}</p>
            </div> 
            <div>
                {countries?.map(e=><img src={e.flag} alt="No found" width="25px" height="20px" key={e.id}/>)}
            </div>
        </div>
    )
}

export default ActivityCard
