import React,{ Fragment } from "react";
import "./Details.css";
import Plain from "../../shared/images/vectorair.png";
import Line from "../../shared/images/linevector.png";
import { commonUrls } from "../../shared/constants";


export const Details =(props)=>{
    let url = `//logo.clearbit.com/${props.details.logo}.com`
        if(props.details.logo === "wizz-air"){
            url = commonUrls.wizzair;
            
        }else if(props.details.logo === "condor-flugdienst"){
            url = commonUrls.condor;

        }else if(props.details.logo === "asl-airlines-belgium"){
            url = commonUrls.aslBelgium;

        }else if(props.details.logo === "eurowings-europe"){
            url = commonUrls.eurowings;
        
        }else if(props.details.logo === "blue-air"){
            url = commonUrls.blueair;
        
        }else if(props.details.logo === "aegean-airlines"){
            url = commonUrls.aegean;
        
        }else if(props.details.logo === "austrian"){
            url = commonUrls.austrian;
        }

    return(
        <Fragment>
            <button onClick={props.modalClose} className="closeBtn">X</button>
            <div className="first-row">
                <div className="code"><span>{props.details.codeNumber}</span></div>
                <img className="logo" src={url} alt={props.details.company}/>
            </div>
            <div className="destination-block">
                <div className="destination"><span>{props.details.from}</span></div>
                <img className="plain" src={Plain} alt="route"/>
                <div className="destination"><span>{props.details.destination}</span></div>
            </div>
            <div className="info">
                <div className="model"><span>Model: {props.details.model}</span></div>
                <div className="model"><span>Manufacturer: {props.details.manufacturer}</span></div>
            </div>
                <img className="line" src={Line} alt="line"/>
        </Fragment>
    )
}