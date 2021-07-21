import React from 'react'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getCountriesByName} from "../actions/index"

function SearchBar(props) {
    const dispatch = useDispatch();

    const [name,setName]=useState("");
    const handleInputChange=(e)=>{
        e.preventDefault();
        setName(e.target.value)
    }
    const handleClick=async(e)=>{
        e.preventDefault();
        await props.handleClickPaises(e,props.order);
        await dispatch(getCountriesByName(name))
        setName("")
    }
    return (
        <div className="searchCountry">
            <label htmlFor="search">Buscar Pais </label>
            <input style={{padding:"0.5rem",width:"15rem"}} 
            type="text" name="search" placeholder="Ingrese país"  value={name} onChange={(e)=>handleInputChange(e)}/>
            <button style={{padding:"0.5rem"}}
            onClick={(e)=>handleClick(e)} >Buscar</button>
            
        </div>
    )
}

export default SearchBar
