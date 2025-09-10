console.log(Number.MAX_VALUE); // Biggest number
console.log(Number.MIN_VALUE); // Smallest number
console.log(Number.POSITIVE_INFINITY === Infinity); // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true
console.log(Number.NaN === NaN); // false

const numStr = '175.6569';

console.log(Number.parseInt(numStr)); // number 175
console.log(Number.parseFloat(numStr)); // number 175.6569
console.log(Number.isFinite(Number.MAX_VALUE + 1e10)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isInteger(numStr)); // false
console.log(Number.isInteger('176')); // false
console.log(Number.isInteger(176)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

const num = 175.6569;

console.log(num.toExponential()); // string 1.756569e+2
console.log(num.toString()); // string 175.6569
console.log(num.toFixed(2)); // string 175.66
console.log(num.toPrecision(5)); // string 175.66
