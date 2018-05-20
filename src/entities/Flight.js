export class Flight {
    constructor(flight) {
        this.id = flight.Id;
        this.altitude = flight.Alt;
        this.codeNumber = flight.Icao;
        this.from = flight.From;
        this.destination = flight.To;
        this.country = flight.Cou;
        this.company = flight.Op;
        this.angle = flight.Trak;
        this.manufacturer = flight.Man;
        this.model = flight.Mdl;
    }
    getLogoName = () =>{
        let logoName = this.company;
        let newName = logoName.split(" ").join("-").toLowerCase();
        return newName
    }
    getShortFrom = () =>{
        const toShort = this.from.split(" ");
        let short = toShort[0].trim();
        return short;
    }
    getShortDestination = () =>{
        const toShort = this.destination.split(" ");
        let short = toShort[0].trim();
        return short;
    }
    getDestination = () =>{
        const destinationText = this.destination.split(" ");
              destinationText.shift();
              let newDestination = destinationText.join(" ");
        return newDestination;
    }
    getFrom = () =>{
        const fromText = this.from.split(" ");
              fromText.shift();
              let newFrom = fromText.join(" ");
        return newFrom;
    }
    getDirection = () =>{
        let direction = "";
        if(this.angle >=0 && this.angle <= 180){
            direction = "east";
        }else{
            direction = "west";
        }
        return direction;
    }
}