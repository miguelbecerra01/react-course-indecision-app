//import utils.js into the build of webpack
//import './utils.js';
//you can import only the functions you are going to need it, its not necesary to import all of the functions
//subtract is a default export
import subtract, { square, add } from './utils.js'
import isSenior, { isAdult, canDrink } from './person.js'

console.log('app.jasdsads is sad!sd asd');
console.log(square(4));
console.log(add(4, 2));

const age = 23;
console.log('Is Adult', isAdult(age));
console.log('Can Drink', canDrink(age));
console.log('Is Senior', isSenior(age));


console.log('Substract', subtract(100, 81));


