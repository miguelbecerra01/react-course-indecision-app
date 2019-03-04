// export const isAdult = (age) => age >= 18;
// export const canDrink = (age) => age >= 18;
// //is called isSenior in app.js
// export default (age) => age >= 65;

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 18;
const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default }