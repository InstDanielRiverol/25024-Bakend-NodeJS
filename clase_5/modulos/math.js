// export const suma = (a, b) => a + b;
// export const resta = (a, b) => a - b;
// export const multi = (a, b) => a * b;
// export const divi = (a, b) => a / b;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multi = (a, b) => a * b;
const divi = (a, b) => a / b;
// module.exports = { suma: suma, resta: resta, multi: multi, divi: divi };
// pintar por consola module
//commonjs
// module.exports = { suma, resta, multi, divi};
const math = { suma, resta, multi, divi };
export default math;
