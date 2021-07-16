import React from 'react'
import ActivityCard from "./ActivityCard"
import {useState,useEffect}from "react";
import {useDispatch,useSelector} from "react-redux";
import {getActivity} from "../actions/index"
import {Link} from "react-router-dom"
import "./Activity.css"

function Activity() {
    const dispach=useDispatch();
   
    const [data,setData]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [cardPerPage,setCardPerPage]=useState(10);

    const pages=[];
    for(let i=1; i<=Math.ceil(data.length/cardPerPage);i++){
        pages.push(i)
    }
    const indexOfLastItem=currentPage*cardPerPage;
    const indexOfFirstItem=indexOfLastItem-cardPerPage;
    const currentItems= data.slice(indexOfFirstItem,indexOfLastItem);//esto tienes que pasear a setdata(currentItems)
    const renderPageNumbers=pages.map(number=>{
        return (
            <li key={number} id={number} >{number}</li>
        )
    })

    useEffect(() => {
        dispach(getActivity())
        setData(allActivities)
    }, [dispach,setData])

    const allActivities = useSelector(state => state.activities)


    return (
        <div>
            <h1>Actividades</h1>
            {/* //<SearchBar/> */}
            <button>Mostrar Todas las Actividades</button>
            <Link to="/addActivity" >
                <button>Crear una Actividad Turistica</button>
            </Link>
            <div>
                <h3>Ordenar de forma</h3>
                <select >
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>
            </div>
            <div>
                <ul className="pageNumbers">
                    {renderPageNumbers}
                </ul>
                { data.map(e=>{return (
                    <ActivityCard 
                    name={e.name} 
                    difficulty={e.difficulty} 
                    duration={e.duration} 
                    season={e.season} 
                    key={e.id}/>
                )})}
            </div>
            <button >prev</button>
            <button >next</button>
        </div>
    )
}

export default Activity
