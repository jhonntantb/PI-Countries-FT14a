import React from 'react'
import {Link} from "react-router-dom";
import {useState,useEffect}from "react";
import {useDispatch,useSelector} from "react-redux";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar"
import {getCountries} from "../actions/index" 

function Home() {
    const dispach=useDispatch();
    const [page,setPage]=useState(0)
    const [order,setOrder]=useState("ASC");
    useEffect(() => {
        dispach(getCountries(page,order))
    }, [dispach,page,order])
    const allCountries = useSelector(state => state.countries)
    const handleClick=(e)=>{
        e.preventDefault();
        setPage(0)
        setOrder("ASC")
        dispach(getCountries(page,order))
    }

    const prev=(e)=>{
        e.preventDefault();
        setPage(page-10)
    }
    const next=(e)=>{
        e.preventDefault();
        setPage(page+10)
    }
    const changeOrder=(e)=>{
        setOrder(e.target.value)
    }
    return (
        <div>
            <h1>Paises del Mundo</h1>
            <SearchBar/>
            <button onClick={(e)=>handleClick(e)}>Mostrar Todos los paises</button>
            <div>
                <h3>Ordenar de forma</h3>
                <select onChange={e=>changeOrder(e)}>
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>
            </div>
            <div>
                { allCountries.map(e=>{return (
                <Link to={"/home/"+e.id} key ={e.id}>
                    <CountryCard name={e.name} flag={e.flag} continent={e.continent} key={e.id}/>
                </Link>)})}
            </div>
            <button onClick={e=>prev(e)} disabled={page<=0}>prev</button>
            <button onClick={e=>next(e)} disabled={allCountries.length<10}>next</button>
        </div>
    )
}

export default Home
