import React from 'react'
import {Link} from "react-router-dom";
import {useState,useEffect}from "react";
import {useDispatch,useSelector} from "react-redux";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar"
import {getCountries} from "../actions/index"
import "./Countries.css"

function Countries() {
    const dispach=useDispatch();
    const [order,setOrder]=useState("ASC");
    const [currentPage,setCurrentPage]=useState(1);
    const [cardPerPage,setCardPerPage]=useState(10);
    const [season,setSeason]=useState("")
    const [filterPopulation,setFilterPopulation]=useState("")
    const [filterByContinent,setFilterByContinent]=useState("")
    useEffect(() => {
        dispach(getCountries(order))
    }, [dispach,order])
    
    let allCountries = useSelector(state => state.countries)//trabajamos sobre este arrray

    if(filterPopulation==="ASC"){
        allCountries=allCountries.sort((a,b)=>{
            return a.population-b.population;
        })
    }
    if(filterPopulation==="DESC"){
        allCountries=allCountries.sort((a,b)=>{
            return b.population-a.population;
        })
    }

    if(filterByContinent){
        allCountries=allCountries.filter(e=>e.continent===filterByContinent)
    }
    
    const [pageNumberLimit,setPageNumberLimit]=useState(5);
    const [maxPageNumberLimit,setMaxPageNumberLimit]=useState(5);
    const [minPageNumberLmit,setMinPageNumberLmit]=useState(0);
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
    const pages=[];
    for(let i=1; i<=Math.ceil(allCountries.length/cardPerPage);i++){
        pages.push(i)
    }
    const indexOfLastItem=currentPage*cardPerPage;
    const indexOfFirstItem=indexOfLastItem-cardPerPage;
    const currentItems= allCountries.slice(indexOfFirstItem,indexOfLastItem);
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

    const handleClickPaises=(e)=>{
        e.preventDefault();
        dispach(getCountries(order))
        setCurrentPage(1);
        setOrder("ASC")
        setSeason("")
        setMaxPageNumberLimit(5)
        setMinPageNumberLmit(0)
    }
    const handlePopulation=(e)=>{
        e.preventDefault()
        setFilterPopulation(e.target.value)
    }
    const handleContinent=(e)=>{
        e.preventDefault();
        setFilterByContinent(e.target.value)
    }
    const changeOrder=(e)=>{
        setOrder(e.target.value)
    }
    return (
        <div>
            <br/>
            <div>
                <button className="mostrarAll" onClick={(e)=>handleClickPaises(e)}>Mostrar Todos los paises</button>
                <Link to="/home/activities/addActivity" >
                    <button className="addActivity">Crear una Actividad Turistica</button>
                </Link>
            </div>
            <div className="searchCountry">
                <SearchBar/>
            </div>
            <div className="filter">
                <div>
                <label htmlFor="order">Ordenar por Nombre de forma </label>
                <select name="order" onChange={e=>changeOrder(e)}>
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>
                </div>
                <div>
                <label htmlFor="poblacion">Mostrar Paises por Población </label>
                <select name="poblacion" onChange={e=>handlePopulation(e)} >
                    <option value=""></option>
                    <option value="ASC">De menor a mayor Población</option>
                    <option value="DESC">De mayor a menor Población</option>
                </select>
                </div>
                <div>
                <label htmlFor="continent">Filtrar por Continentes </label>
                <select name="continent" onChange={e=>handleContinent(e)}>
                    <option value=""></option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div>
                <div className="countries">
                { currentItems.map(e=>{return (
                <Link to={"/home/countries/"+e.id} key ={e.id}>
                    <CountryCard name={e.name} flag={e.flag} continent={e.continent} key={e.id}/>
                </Link>)})}
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

export default Countries
