import React from 'react'
import {Link} from "react-router-dom";
import{useDispatch,useSelector} from "react-redux";
import {useEffect} from 'react';
import {getDetail} from "../actions/index"


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
                    <div>
                        <img src={detail.flag} alt="No encontro la bandera" width="200px" height="150px" />
                    </div>
                    <div>
                        <h3>{detail.name}</h3>
                        <p>{detail.continent}</p>
                        <p>{detail.capital}</p>
                        <p>{detail.subregion}</p>
                        <p>{detail.area}</p>
                        <p>{detail.population}</p>
                    </div>
                </div>
                {/*mostrar las actividades que te viene en detail.tourims
                crear un nuevo div y mapear lo que nos viene en el array 
                creando un nuevas cards con todas esas informaciones
                 */}
            </div>
            <div>
                <Link to="/home">
                <button>Volver</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Detail
