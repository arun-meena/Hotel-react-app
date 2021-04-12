import { fetchrequest, fetchsuccess, fetchfailue } from "./action";
import { BRAND_NAME } from "./type";


import  axios from "axios";




export const fetchBrand = () => {
    return function ( dispatch ) {

        dispatch(fetchrequest(BRAND_NAME))
        axios.get('https://brands.free.beeceptor.com')
        .then( response => {
            const brand = response
            console.log("brand res", brand);
            dispatch(fetchsuccess(brand, BRAND_NAME))
        })
        .catch( error => {
            dispatch(fetchfailue(error, BRAND_NAME));
        } )

    }
}