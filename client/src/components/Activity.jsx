import React from 'react'
import ActivityCard from "./ActivityCard"
import {useState,useEffect}from "react";
import {useDispatch,useSelector} from "react-redux";
import {getActivity} from "../actions/index"
import {Link} from "react-router-dom"
import "./Activity.css"

function Activity() {

    const dispach=useDispatch();
    let allActivities = useSelector(state => state.activities)//esto es  lo que vamos ordenar
    
    console.log(allActivities)
    const [currentPage,setCurrentPage]=useState(1);
    const [cardPerPage,setCardPerPage]=useState(10);
    const [order,setOrder]=useState("ASC")
    const [season,setSeason]=useState("")
    if(order==="ASC"){
        allActivities=allActivities.sort((a,b)=>{
            if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase()>b.name.toLowerCase()) return 1;
            return 0;
        })
    }
    if(order==="DESC"){
        allActivities=allActivities.sort((a,b)=>{
            if(a.name.toLowerCase()>b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase()<b.name.toLowerCase()) return 1;
            return 0;
        })
    }
    if(season){
        allActivities=allActivities.filter(e=>e.season===season)
    }

    const [pageNumberLimit,setPageNumberLimit]=useState(5);
    const [maxPageNumberLimit,setMaxPageNumberLimit]=useState(5);
    const [minPageNumberLmit,setMinPageNumberLmit]=useState(0);


    useEffect(() => {
        dispach(getActivity())
    }, [dispach])
    const handleClick=(event)=>{
        setCurrentPage(Number(event.target.id))
    }
    const handleNextbtn=()=>{
        setCurrentPage(currentPage+1)
        if(currentPage+1>maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
            setMinPageNumberLmit(minPageNumberLmit+pageNumberLimit)
        }
    }
    const handlePrevbtn=()=>{
        setCurrentPage(currentPage-1)
        if((currentPage-1)%pageNumberLimit===0){
            setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit);
            setMinPageNumberLmit(minPageNumberLmit-pageNumberLimit)
        }
    }
    const changeOrder=(e)=>{
        setOrder(e.target.value)
    }
    const changeSeason=(e)=>{
        setSeason(e.target.value)
    }
    const handleAllActivities=(e)=>{
        e.preventDefault();
        dispach(getActivity())
        setCurrentPage(1);
        setOrder("ASC")
        setSeason("")
        setMaxPageNumberLimit(5)
        setMinPageNumberLmit(0)
    }
    
    const pages=[];
    for(let i=1; i<=Math.ceil(allActivities.length/cardPerPage);i++){
        pages.push(i)
    }
    const indexOfLastItem=currentPage*cardPerPage;
    const indexOfFirstItem=indexOfLastItem-cardPerPage;
    const currentItems= allActivities.slice(indexOfFirstItem,indexOfLastItem);
    const renderPageNumbers=pages.map(number=>{
        if(number<maxPageNumberLimit+1&&number
            >minPageNumberLmit){
        return (
            <li key={number} id={number} 
            onClick={handleClick} 
            className={currentPage===number?"activo":null}>
            {number}
            </li>
        )}else{
            return null;
        }
    })
    return (
        <div>
            <h1>Actividades</h1>
            {/* //<SearchBar/>  */}
            <button className="mostrarAll" onClick={e=>handleAllActivities(e)}>Mostrar Todas las Actividades</button>
            <Link to="/home/activities/addActivity" >
                <button className="mostrarAll">Crear una Actividad Turistica</button>
            </Link>
            <br />
            <br />
            <div className="filter">
                <div>
                <label htmlFor="order">Ordenar de forma</label>
                <select name="order" onChange={e=>changeOrder(e)}>
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>
                </div>
                <div>
                <label htmlFor="season">Filtrar por Temporada</label>
                <select name="season" onChange={changeSeason}>
                    <option value=""></option>
                    <option value="summer">Summer</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="autumn">Autumn</option>
                </select>
                </div>
            </div>
            <div>
                <div className="activities">
                {currentItems?currentItems.map(e=>{return (
                    <ActivityCard 
                    name={e.name} 
                    difficulty={e.difficulty} 
                    duration={e.duration} 
                    season={e.season}
                    countries={e.countries}
                    key={e.id}/>
                )}):<p>Loading</p>}
                </div>
                <ul className="pageNumbers">
                    <li>
                        <button onClick={handlePrevbtn}
                        disabled={currentPage===pages[0]?true:false}
                        >prev</button>
                    </li>
                {renderPageNumbers}
                    <li>
                        <button onClick={handleNextbtn}
                        disabled={currentPage===pages[pages.length-1]?true:false}
                        >next</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Activity
