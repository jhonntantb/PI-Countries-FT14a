import React from 'react'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getCountriesByName} from "../actions/index"

function SearchBar() {
    const dispatch = useDispatch();
    const [name,setName]=useState("");
    const handleInputChange=(e)=>{
        e.preventDefault();
        setName(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault();
        dispatch(getCountriesByName(name))
        setName("")
    }
    return (
        <div>
            <input type="text" placeholder="Ingrese país"  value={name} onChange={(e)=>handleInputChange(e)}/>
            <button onClick={(e)=>handleClick(e)} >Buscar</button>
            
        </div>
    )
}

export default SearchBar
