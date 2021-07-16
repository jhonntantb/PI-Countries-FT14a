import React from 'react';
import { useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearActivityForm, getCountriesForm, postActivity } from "../actions";

function Tourist_Activity() {
    const dispatch = useDispatch()
    // para el formulario a rellenar 
    const [newActivity,setNewActivity]=useState({
        name: "",
        difficulty:1,
        duration:1,
        season:"",

    })
    const { push } = useHistory()
    // para obtener el id del pais con el cual relacionar
    const [countryName,setCountryName]=useState("")// nombre del pais a buscar
    const [countryId,setCountyId]=useState([])// guardar id de paises a relacionar
    const [countryMo,setCountryMo]=useState([])// guardar los paises de mi estado de "redux"
    
    const countryForm= useSelector(state => state.countryForm);

    useEffect(() => {
       setCountryMo([...countryMo,...countryForm])
       setCountyId(countryMo.map(e=>e.id)/*.filter((e,i)=>{return countryMo.indexOf(e)===i})*/)
    }, [dispatch,countryForm])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postActivity(newActivity,countryId))
        alert("Se creo la actividad")
        dispatch(clearActivityForm())
        push("/activities")
    }
    function handleChange(e) {
        setNewActivity(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
    }
    function handleInputSearch(e){
        e.preventDefault()
        setCountryName(e.target.value)
    }
    function handleClickSearch(e){
        e.preventDefault();
        dispatch(getCountriesForm(countryName))
        setCountryName("")
        }
    function handleClearCountry(event,idp){
        event.preventDefault()
        setCountryMo(countryMo.filter(el=>el.id!==idp))
        setCountyId(countryMo.map(e=>e.id))
    }
    useEffect(() => {
        setCountyId(countryMo.map(e=>e.id))
    }, [countryMo])
    return (
        <>
            <h1>Crear Actividad Turistica</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" onChange={handleChange} value={newActivity.name} name="name" placeholder="Nombre de la actividad"/>
                </div>
                <div>
                    <label for="dificultad">Dificultad: </label>
                    <input type="text" onChange={handleChange}  name="difficulty" list="dificultad" />
                    <datalist id="dificultad">
                        <option value="1"/>
                        <option value="2"/>
                        <option value="3"/>
                        <option value="4"/>
                        <option value="5"/>
                    </datalist>
                </div>
                <div>
                    <label>Duración de la Actividad: </label>
                    <input onChange={handleChange}  name="duration" type="number" min="1" max="72" placeholder="   hrs."/>
                </div>
                <div>
                    <label >Temporada: </label>
                    <input type="text" list="temporada" onChange={handleChange}  name="season"/>
                    <datalist id="temporada">
                        <option value="summer"/>
                        <option value="spring"/>
                        <option value="winter"/>
                        <option value="autumn"/>
                    </datalist>
                </div>
                <label>Agregar Paises </label>
                <input type="text" placeholder="Ingrese país"  value={countryName} onChange={(e)=>handleInputSearch(e)} />
                <button onClick={(e)=>handleClickSearch(e)}>Buscar</button>
                <div>
                    {countryMo.map(e=>(
                    <div>
                        <h4>{e.name}</h4>
                        <img src={e.flag} width="100px" height="75px" alt="No encontrado"/>
                        <button onClick={event=>handleClearCountry(event,e.id)}>X</button>

                    </div>
                    ))}
                </div>
                <div>
                    <button type="submit">Crear</button>
                </div>               
            </form>   
        </>
    )
}

export default Tourist_Activity
