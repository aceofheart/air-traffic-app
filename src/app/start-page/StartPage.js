import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';
import Logo from "./logo1.png";


export class StartPage extends Component {
    state={
        error: null
    }
    onDeclineHandler = ()=>{
        this.setState({
            error: "Current Location Nedded To Use The App"
        })
    }
   

    render(){
        return(
            <div className="Cover">
                <img className="Logo" src={Logo} alt="logo"/>
                <h1>Air Traffic needs to Use Your</h1>
                <h1> Current Location</h1>
                <Link to="/flights"><button type="button" className="btn">Accept</button></Link>
                <button onClick={this.onDeclineHandler} type="button" className="btn decline">Decline</button>
                <p className="decline-error">{this.state.error}</p>
            </div>
        );
    };
};