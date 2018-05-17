import { Flight } from "../entities/Flight";
import { finalURL } from "../shared/constants";
import axios from "axios";

class FlightService {
    getFlightData(longitude,latitude){
        return axios.get(`${finalURL}lat=${latitude}&lng=${longitude}&fDstL=0&fDstU=200`)
        .then(response=>{
           
           const flightList= response.data.acList;

            return flightList;
        })
        .then(list=>{
            return list.map(flight=>{
                return new Flight(flight)
            })
        })
    };
};
export const flightService = new FlightService();