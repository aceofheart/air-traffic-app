import React, { Component } from "react";
import "./FlightListPage.css";
import { flightService } from "../../services/FlightService";
import { Loader } from "./Loader";
import { FlightList } from "./FlightList";


export class FlightListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            flights: [],
            loading: true
        }
    }
    onError = () => {
        this.setState({
            error: "Unable to retrieve your location"
        })
    }

    onSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;


        flightService.getFlightData(longitude, latitude)
            .then(flights => {
                let sortedList = [...flights];
                sortedList.sort((a, b) => {
                    return b.altitude - a.altitude;
                })
                this.setState({
                    flights: sortedList,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err.message);
            });

    }
    onInit = () => {
        if (!navigator.geolocation) {
            this.setState({
                error: `Geolocation is not supported by your browser`
            })
        }
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
    }
    componentDidMount() {
        this.onInit();
        this.interval = setInterval(this.onInit, 60000)
    }
  

    render() {
        
        if (this.state.error) {
            return <p className="error">{this.state.error}</p>
        }
        return (
            <div className="flights">
                <h3>Current airplanes</h3>
                <ul className="list-group">
                  {this.state.loading ? <Loader/> : <FlightList list={this.state.flights}/>} 
                </ul>
            </div>
        );
    };
};