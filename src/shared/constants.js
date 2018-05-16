const proxy = 'https://cors-anywhere.herokuapp.com/';
const myUrl = 'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';
const finalURL = proxy + myUrl;

export { proxy, myUrl, finalURL}