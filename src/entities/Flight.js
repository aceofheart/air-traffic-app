export class Flight {
    constructor(flight) {
        let logoName = flight.Op;
        let newName= logoName.split(" ").join("-").toLowerCase()
        this.logo = newName;    
        this.id = flight.Id;
        this.altitude = flight.Alt;
        this.codeNumber = flight.Icao;
        this.from = flight.From;
        this.destination = flight.To;
        this.country = flight.Cou;
        this.company = flight.Op;
        this.manufacturer = flight.Man;
        this.model = flight.Mdl;
    }


}