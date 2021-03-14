class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year

        if(typeof make !== 'string' || typeof model !== 'string' ||typeof year !== 'number'){
            throw new Error('Invalid data type!')
        }
        else if(year <= 1800 && year > 0){
            throw new Error('Cars not invented yet!')
        }
        else if(year <= 0){
            throw new Error('Invalid year!')
        }
    }
        honk(){
            return "Beep."
        }
        toString(){
            return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
        }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine(){
        return "VROOM!!!"
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = []
        this.capacity = capacity

        if(!Number.isFinite(capacity) || capacity <= 0){
            throw new Error('Capacity must be a nonzero positive number!')
        }
    }
    add(vehicle){
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof Figured out instanceof here.
        if(vehicle instanceof Vehicle){
            if(this.vehicles.length === this.capacity){
                return 'Sorry, the garage is full.'
            }
            else{
                this.vehicles.push(vehicle)
                return 'Vehicle added!'
            }
        }
        else{
            return 'Only vehicles allowed in here!'
        }
    }
}