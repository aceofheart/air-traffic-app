import React from "react";

export const FlightListItem = () => {
 return (
        <li className="list-item">
            <img className="icon" src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Transport-Airplane-Mode-On-icon.png" alt="plane"/>
            <div className="details altitude">Altitude:</div>
            <div className="details">Flight Code Number:</div>
        </li>
    );
};

