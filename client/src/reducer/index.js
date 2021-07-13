import {GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_DETAIL} from "../actions/index"
const initialState={
    countries:[],
    detail:[]
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
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
        default:
            return{
                ...state,
            }
    }
}

export default reducer;


