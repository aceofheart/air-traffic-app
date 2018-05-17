import React, { Fragment } from "react";
import "./FlightDetails.css";
import { Backdrop } from "./Backdrop";

export const FlightDetails = (props) =>{
    return(
        <Fragment>
            <Backdrop show={props.show}/>
            <div className="modal-wrapper">
                <div className="modal">
                {props.children} 
                </div> 
            </div>
        </Fragment>
    )
}