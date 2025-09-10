// Converting strings to numbers.
const intStr = '100';
const floatStr = '42.8';

console.log(parseInt(intStr));
console.log(parseFloat(floatStr));
console.log(+intStr); // Using unary operator + to convert.
console.log(+floatStr);
console.log(Number(intStr));
console.log(Number(floatStr));

// Converting numbers to strings.
const num = 100;

console.log(num.toString());
console.log(String(num));

// Converting truthy/falsy values to boolean.
const truthyVal = 1;
const falsyVal = 0.0;
const trueStr = 'true';
const falseStr = 'false';
const emptyObj = {};
const emptyArr = [];

console.log(Boolean(truthyVal)); // true
console.log(Boolean(falsyVal)); // false
console.log(Boolean(trueStr)); // true
console.log(Boolean(falseStr)); // true
console.log(Boolean(emptyObj)); // true
console.log(Boolean(emptyArr)); // true
