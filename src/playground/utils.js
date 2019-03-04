console.log('utils.js is running');

export const square = (x) => x * x;

//you can define the export here or below
//export const add = (a, b) => a + b;
export const add = (a, b) => a + b;

//const subtract = (a, b) => a - b;
export default (a, b) => a - b;
//export default subtract;


//export { square, add, subtract as default }

//export -> default export -named exports
// export {
//     square,
//     add
// };