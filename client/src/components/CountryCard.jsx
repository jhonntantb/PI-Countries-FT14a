import React from 'react'


function CountryCard({name,flag,continent}) {
    
    return (
        <div>
            <h3>{name}</h3>
            <h3>{continent}</h3>
            <img src={flag} 
            alt="https://www.educima.com/imagen-bandera-de-la-paz-dl30109.jpg"
            width="200px" height="150px" />
        </div>
    )
}

export default CountryCard
