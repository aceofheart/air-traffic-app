import React, { Fragment } from "react";
import "./Details.css";
import Plain from "../../shared/images/vectorair.png";
import Line from "../../shared/images/linevector.png";
import Icon from "../../shared/images/icon2.png";
import { Logo } from "./Logo";


export const Details = (props) => {
    

    return (
        <Fragment>
            <button onClick={props.modalClose} className="closeBtn">X</button>
            <div className="first-row">
                <div className="code"><span>{props.details.codeNumber}</span></div>
                {
                <Logo name={props.details.getLogoName()} company={props.details.company}/>
                }
            </div>
            <div className="destination-block">
                <div className="destination">
                    {props.details.from ?
                        <Fragment>
                            <h2>{props.details.getShortFrom()}</h2>
                            <p>{props.details.getFrom()}</p>
                        </Fragment>
                        : <img className="unknown" src={Icon} alt="route" />
                    }
                </div>
                <img className="plain" src={Plain} alt="route" />
                <div className="destination2">
                    {props.details.destination ?
                        <Fragment>
                            <h2>{props.details.getShortDestination()}</h2>
                            <p>{props.details.getDestination()}</p>
                        </Fragment>
                        : <img className="unknown" src={Icon} alt="unknown" />
                    }
                </div>
            </div>
            <div className="info">
                <div className="model"><span>Model: {props.details.model}</span></div>
                <div className="model"><span>Manufacturer: {props.details.manufacturer}</span></div>
            </div>
            <img className="line" src={Line} alt="line" />
        </Fragment>
    )
}