var nameVar = 'Miguel';
var nameVar = 'Antonio';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Andy';
console.log('nameConst', nameConst);

//block scoping

const fullname = 'Miguel Antonio';
const firstName = 'another scope';

if (fullname) {
    let firstName = fullname.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

let obj1 = 'asdddd';
obj1 = [{ name: 'asd' }, { name: 'cxxcc' }];
obj1 = () => {
    return [{ name: 'array2' }];
}
console.log(obj1()[0]);


//var es only function scoping not block scoping, let and const are blockscoping 
//var permits redefine the variable to any kind of object init the variable again
//use const first, then if you need to change the variable parameters change it to let, never user var again. 