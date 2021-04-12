import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from "./type";



export const fetchrequest = name => {
    return{
        type : name + FETCH_REQUEST
    }
}


export const fetchsuccess = (data, name) => {
    return{
        type : name + FETCH_SUCCESS,
        payload : data,
        error : ''
    }
}


export const fetchfailue = (error, name) => {
    return{
        type : name +FETCH_FAILURE,
        payload : [],
        error : error.message
    }
}
