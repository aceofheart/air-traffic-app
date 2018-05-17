import React from "react";
export const Backdrop =(props)=>{
    return props.show ? <div className="backdrop"></div> : null;
};