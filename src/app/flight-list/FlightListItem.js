import React, { Component } from "react";
import { FlightDetails } from "../flight-details/FlightDetails";
import { Details } from "../flight-details/Details";
import  Icon  from "../../shared/images/plane.png";

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
        let iconDirection = ["icon"];
        if(this.props.flight.getDirection() === "west"){
            iconDirection.push("west")
        }
        return (
          
            <li className="list-item" onClick={this.onModalOpen}>
               <img className={iconDirection.join(" ")} src={ Icon }  alt="plane"/>
               <div className="details altitude"><span>Altitude: {this.props.flight.altitude}</span></div>
               <div className="details"><span>Flight Code: {this.props.flight.codeNumber}</span></div>
                
               {this.renderModal()}
            </li>
          
       );
    }
}


export {FlightListItem};

