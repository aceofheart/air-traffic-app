import React, { Component } from "react";
import { FlightDetails } from "../flight-details/FlightDetails";
import { Details } from "../flight-details/Details";

class FlightListItem extends Component {

    state = {
        modalOpened: false
    }
    
    renderModal = () => {
        if(this.state.modalOpened) {
            return (
                <FlightDetails>
                    <Details modalClose={this.onModalClose} details={this.props.flight}/>
                </FlightDetails>
            )
        }
    }

    onModalOpen = () => {
        this.setState({
            modalOpened: true
        })
    }

    onModalClose = (e) => {
        e.stopPropagation();

        this.setState({
            modalOpened: false
        })
    }
    
    render () {
        return (
          
            <li className="list-item" onClick={this.onModalOpen}>
               <img className="icon" src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Transport-Airplane-Mode-On-icon.png" alt="plane"/>
               <div className="details altitude"><span>Altitude: {this.props.flight.altitude}</span></div>
               <div className="details"><span>Flight Code: {this.props.flight.codeNumber}</span></div>
                
               {this.renderModal()}
            </li>
          
       );
    }
}


export {FlightListItem};

