//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

class car extends VehicleModule {

    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

scheduleService() 
    if (this.mileage > 30000) {
        console.log("It is time for maintenance")
    }
    else {
        (this.mileage < 30000) 
        console.log("Everything is good")
    }

loadPassengers() 
    if (this.passengers < this.maximumPassengers) {
        console.log("There are enough seats available")
        return this.passengers = num
    }
    else {
        (this.passenger > this.maximumPassengers) 
        console.log ("There are not enough seats available")
    }

start() 
    if (this.fuel > 0) {
        console.log("Engine has started")
        return this.started = true
    }
    else {
        console.log("No fuel")
        return this.started = false
    }



//Note: You can code your derived Car class here or make a file named index.js and do it there.
 
    

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:

