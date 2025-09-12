/* Closure & IIFE */
const getCode = (function () {
    const apiKey = 'Super secret stuff'; // Encapsulated in closure; can only be accessed by calling getCode

    return function () {
        return apiKey;
    };
})();

console.log(getCode());

/* Arrow functions and this keyword */
var model = 'Honda';
function Car() {
    this.model = 'Toyota';

    setInterval(function () {
        console.log(this); // "Toyota"
    }, 1000);
}

const h = new Car();

const year = 2002;

myObj = {
    year: 1998,
    inner: function () {
        console.log(this.year);
    },
};
