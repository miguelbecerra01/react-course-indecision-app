//ES5 function
function square(x) {
    return x * x;
};
console.log(square(9));

//ES6 Function
const squareArrowVerbose = (x) => {
    return x * x;
};
console.log(squareArrowVerbose(2));

const squareArrowShort = (x) => x * x;
console.log(squareArrowShort(3));

const getFirstNameVerbose = (fullname) => {
    return fullname.split(' ')[0];
};
console.log(getFirstNameVerbose('Mike Andrews'));

const getFirstNameShort = (fullname) => fullname.split(' ')[0];
console.log(getFirstNameShort('Michael Andromeda'));


//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(2, 5, 1000));

const addArrow = (a, b) => {
    //arguments not exists
    //console.log(arguments); //app.js:3 Uncaught ReferenceError: arguments is not defined
    return a + b;
};
//you can still call them with more parameters
console.log(addArrow(2, 5, 1000));

//This keyword - no longer bound
const user = {
    name: 'Miguel',
    cities: ['Santiago', 'Rancagua', 'Chimbarongo'],
    printPlacesLived: function () {
        const that = this;//workaround because this is not bound in the foreach loop.
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();

//with arrow function in the foreach loop the workaround of that is no longer needed
const user2 = {
    name: 'Paula',
    cities: ['Santiago', 'Rancagua', 'Chimbarongo'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user2.printPlacesLived();

const user3 = {
    name: 'Paula',
    cities: ['Santiago', 'Rancagua', 'Chimbarongo'],
    printPlacesLived: function () { //If you want to use this, you have to use the ES5 function
        //printPlacesLived: () => { ///Uncaught TypeError: Cannot read property 'cities' of undefined . this is no accesible in functions
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user3.printPlacesLived();

const user4 = {
    name: 'Diego',
    cities: ['Santiago', 'Rancagua', 'Chimbarongo'],
    printPlacesLived() { //If you want to use this, you have to use delete the :
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user4.printPlacesLived();

//Map
const user5 = {
    name: 'Williams',
    cities: ['San Francisco', 'Paris', 'Londres'],
    printPlacesLived() {

        //short version
        //'map' creates another new array, it doesnt afect the cities array 
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        //long version
        // return this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });

        //'forEach' only loops in the array
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user5.printPlacesLived());




const multiplier = {
    numbers: [1, 2, 4, 5, 6, 7],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);        
    }
}
console.log(multiplier.multiply());
