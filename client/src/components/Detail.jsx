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
    return (
        <div>
            <div>
                <h3>{detail.name}</h3>
                <h3>{detail.continent}</h3>
                <img src={detail.flag} alt="No encontro la bandera" width="200px" height="150px" />
                <h3>{detail.capital}</h3>
                <h3>{detail.subregion}</h3>
                {/*mostrar las actividades que te viene en detail.tourims */}
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
