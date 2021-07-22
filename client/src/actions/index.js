import axios from "axios";
export const GET_COUNTRIES="GET_COUNTRIES"
export const GET_COUNTRIES_BY_NAME="GET_CUENTRIES_FOR_NAME"
export const GET_DETAIL="GET_DETAIL"
export const CLEAR_COUNTRY_FORM="CLEAR_COUNTRY_FORM"
export const GET_COUNTRIES_FORM="GET_COUNTRIES_FORM"
export const GET_ACTIVITIES="GET_ACTIVITIES"

export function getCountries(){
    return async function(dispatch){
        try {
            const res=await axios("http://localhost:3001/countries");
            return dispatch({
                type: GET_COUNTRIES,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getCountriesByName(name){
    return async function(dispatch){
        try {
            const res= await axios("http://localhost:3001/countries?name="+name);
            return dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: res.data

            })
        } catch (error) {
            
        }
    }
}
export function getDetail(id){
    return async function(dispatch){
        try {
            const res=await axios("http://localhost:3001/countries/"+id)
            return dispatch({
                type:GET_DETAIL,
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}
export function postActivity(activity,countryId){
    return async function(dispatch){
        try {
            const sen=await axios.post("http://localhost:3001/activity",{
                activity,
                countryId
            })
            console.log(sen)
        } catch (error) {
            console.log(error)
        }
    }
}
export function getCountriesForm(name){
    return async function(dispatch){
        try {
            const res=await axios("http://localhost:3001/countries?name="+name)
            return dispatch({
                type: GET_COUNTRIES_FORM,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function clearActivityForm(){
    return function(dispatch){
        return dispatch({
            type: CLEAR_COUNTRY_FORM
        })
    }
}
export function getActivity(){
    return async function(dispatch){
        try {
            const res=await axios("http://localhost:3001/activity")
            return dispatch({
                type: GET_ACTIVITIES,
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}