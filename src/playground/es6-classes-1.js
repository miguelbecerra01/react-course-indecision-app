class Person {
    //to add defaults we add an = in the parameter constructor
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi! I am ' + this.name + '!';
        return `Hi! I'm ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = '') {
        //refers to the parent class
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    //override the parent method for a student class
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(!!this.homeLocation){
            greeting += ` I'm traveling from ${this.homeLocation}` ;
        }
        return greeting;
    }

}

const other = new Person('Jorge Andrews', 20);
console.log(other.getDescription());

const me = new Student('Miguel Becerra', 32, 'Ingenieria en Informatica');
console.log(me.getDescription());

const traveler = new Traveler('Alex Becerra', 30, 'London');
console.log(traveler.getGreeting());