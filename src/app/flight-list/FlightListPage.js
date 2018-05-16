import React, { Component } from "react";
import { FlightListItem } from "./FlightListItem";
import "./FlightListPage.css";
import { flightService } from "../../services/FlightService";

export class FlightListPage extends Component{
    componentDidMount(){
        flightService.getFlightData()
    }
    render(){
        return(
            <ul className="list-group">
                <FlightListItem/>
                <FlightListItem/>
                <FlightListItem/>
                <FlightListItem/>
            </ul>
        );
    };
};