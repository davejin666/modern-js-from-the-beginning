// let firstName = 'David';
// let lastName = 'Jin';

// console.log(firstName, lastName);

// let x;

// console.log('x: ', x);

// function myFunc() {
//     var e = 3;
// }

// myFunc();

// console.log(e);

// if (1 > 2) {
//     var y = 'a';
//     const z = 'b';
// }

// console.log(y);
// console.log(z);

console.log(x === undefined);
var x = 1; // Only the declaration of variables declared with var is hoisted.

(function () {
    console.log(x);
    var x = 'Local value.';
    console.log(x);
})();

myFunc(); // Functions are hoisted entirely.

function myFunc() {
    console.log(x);
}

var apple = 123;
