import {CLEAR_COUNTRY_FORM, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_FORM, GET_DETAIL} from "../actions/index"
const initialState={
    countries:[],
    detail:[],
    countryForm:[],
    activities:[]
}


const reducer= (state=initialState, action)=> {
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            }
        case GET_COUNTRIES_BY_NAME:
            return{
                ...state,
                countries: action.payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
        case GET_COUNTRIES_FORM:
            return {
                ...state,
                countryForm: action.payload
            }
        case CLEAR_COUNTRY_FORM:
            return {
                ...state,
                countryForm:[]
            }
        default:
            return{
                ...state,
            }
    }
}

export default reducer;


