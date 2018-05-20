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
    aegean: "//logo.clearbit.com/aegeanair.com",
    austrian: "//logo.clearbit.com/austrianairlines.ag",
    emirates: "//logo.clearbit.com/emirates.com",
    easyJet: "//logo.clearbit.com/easyjet.com",
    thomas: "//logo.clearbit.com/thomascookairlines.com",
    qatar:"//logo.clearbit.com/qatarairways.com",
    tarom: "//logo.clearbit.com/tarom.ro",
    pegasus: "//logo.clearbit.com/flypgs.com",
    british: "//logo.clearbit.com/britishairways.com",
    germania: "//logo.clearbit.com/flygermania.com",
    tui: "//logo.clearbit.com/tui.com",
    
}

export { finalURL, commonUrls }