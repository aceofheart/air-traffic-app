const proxy = 'https://cors-anywhere.herokuapp.com/';
const myUrl = 'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?';
const finalURL = proxy + myUrl;
const commonUrls = {
    wizzair:"//logo.clearbit.com/wizzair.com",
    bulgaria:"//logo.clearbit.com/air.bg",
    condor: "//logo.clearbit.com/condor.com",
    aslBelgium: "//logo.clearbit.com/aslairlines.be",
    eurowings:"//logo.clearbit.com/eurowings.com",
    blueair: "//logo.clearbit.com/blueairweb.com",
    aegean:"//logo.clearbit.com/aegeanair.com",
    austrian:"//logo.clearbit.com/austrianairlines.ag"
}

export { finalURL, commonUrls }