import React from "react";
import { commonUrls } from "../../shared/constants";


export const Logo = (props) => {
    let url = `//logo.clearbit.com/${props.name}.com`
    switch (props.name) {
        case "wizz-air":
            url = commonUrls.wizzair;
            break;
        case "condor-flugdienst":
            url = commonUrls.condor;
            break;

        case "asl-airlines-belgium":
            url = commonUrls.aslBelgium;
            break;

        case "eurowings-europe":
            url = commonUrls.eurowings;
            break;

        case "blue-air":
            url = commonUrls.blueair;
            break;

        case "aegean-airlines":
            url = commonUrls.aegean;
            break;

        case "austrian":
            url = commonUrls.austrian;
            break;

        case "easyjet-europe":
            url = commonUrls.easyJet;
            break;

        case "thomas-cook-airlines":
            url = commonUrls.thomas;
            break;

        case "qatar-airways":
            url = commonUrls.qatar;
            break;

        case "pegasus-airlines":
            url = commonUrls.pegasus;
            break;

        case "tarom":
            url = commonUrls.tarom;
            break;

        case "emirates-airline":
            url = commonUrls.emirates;
            break;

        case "british-airways":
            url = commonUrls.british;
            break;

        case "bulgaria-air":
            url = commonUrls.bulgaria;
            break;

        case "germania":
            url = commonUrls.germania;
            break;

        case "tuifly-nordic":
        case "tuifly-poland":
            url = commonUrls.tui;
            break;

        default: url = `//logo.clearbit.com/${props.name}.com`
    }

  return <img className="logo" src={url} alt={props.company} />
}