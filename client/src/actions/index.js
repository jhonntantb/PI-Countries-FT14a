import axios from "axios";
export const GET_COUNTRIES="GET_COUNTRIES"
export const GET_COUNTRIES_BY_NAME="GET_CUENTRIES_FOR_NAME"
export const GET_DETAIL="GET_DETAIL"

export function getCountries(page,order){
    return async function(dispatch){
        try {
            const res=await axios("http://localhost:3001/countries?page="+page+"&order="+order);
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
