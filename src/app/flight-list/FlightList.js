import React from "react";
import { FlightListItem } from "./FlightListItem";


export  const FlightList = (props) => {
    return (
        props.list.map(flight => {
            return <FlightListItem flight={flight} key={flight.id} />
        })
    )
}