import React from 'react'
import {Link} from "react-router-dom";
import{useDispatch,useSelector} from "react-redux";
import {useEffect} from 'react';
import {getDetail} from "../actions/index"
import ActivityCard from './ActivityCard';
import "./Detail.css"

function Detail(props) {
    const id=props.match.params.id
    const dispatch = useDispatch();
    const detail=useSelector(state=>state.detail)
    useEffect(() => {
        dispatch(getDetail(id))
    }, [])
    useEffect(()=>{

    },[detail])
    return (
        <div>
            <h3>País y sus actividades</h3>
            <div className="detail">
                <div className="detailCountry" >
                    <div>
                        <h3>Nombre: {detail.name}</h3>
                        <p>NumericCode(Id):{detail.id}</p>
                        <img src={detail.flag} alt="No encontro la bandera" width="200px" height="150px" /> 
                        <p>Continente: {detail.continent}</p>
                        <p>Subregión: {detail.subregion}</p>
                        <p>Capital: {detail.capital}</p>
                        <p>Área:{detail.area}</p>
                        <p>Poplación: {detail.population}M</p>
                    </div>
                </div>
                <div className="lolo">
                {detail.hasOwnProperty("tourisms")?detail.tourisms.map(e=><ActivityCard 
                name={e.name} 
                difficulty={e.difficulty} 
                duration={e.duration} 
                season={e.season}
                 />)
                :<p>Aun no se agregaron actividades puedes agregarlo </p>}
                </div>
            </div>
            <div>
                <Link to="/home/countries">
                <button>Volver</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Detail
