import { Flight } from "../entities/Flight";
import { proxy, myUrl, finalURL } from "../shared/constants";
import axios from "axios";

class FlightService {
    getFlightData(){
        return axios.get(`${finalURL}`)
        .then(response=>{
            console.log(response);
            
        })
    };
};
export const flightService = new FlightService();