import React from 'react'
import {Link} from "react-router-dom";
import{useDispatch,useSelector} from "react-redux";
import {useEffect} from 'react';
import {getDetail} from "../actions/index"
import ActivityCard from './ActivityCard';


function Detail(props) {
    const id=props.match.params.id
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch,id])
    const detail=useSelector(state=>state.detail)
    console.log(detail)
    return (
        <div>
            <div>
                <div>
                    <h3>País y sus actividades</h3>
                    <div>
                        <h3>Nombre: {detail.name}</h3>
                        <p>Id:{detail.id}</p>
                        <img src={detail.flag} alt="No encontro la bandera" width="200px" height="150px" /> 
                        <p>Continente: {detail.continent}</p>
                        <p>Subregión: {detail.subregion}</p>
                        <p>Capital: {detail.capital}</p>
                        <p>Área:{detail.area}</p>
                        <p>Poplación: {detail.population}</p>
                    </div>
                </div>
                <div>
                {detail.tourisms?detail.tourisms.map(e=><ActivityCard 
                name={e.name} 
                difficulty={e.difficulty} 
                duration={e.duration} 
                season={e.season} />)
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
