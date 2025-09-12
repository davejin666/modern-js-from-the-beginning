function myFunc(a) {
    a += 1;
    return a;
}

console.log(myFunc instanceof Function); // true
console.log(typeof myFunc); // Callable values cause typeof to return "function" instead of "object".

const num = 5;

console.log(myFunc(5));
console.log(num);

/* Function expressions */
const func = function funcOne(a, b) {
    return a + b;
};

console.log(func(1, 2)); // 3

async function asyncFunc(a, b) {
    this.a = a;
    this.b = b;
}

// const asyncObj = new asyncFunc(3, 4); // TypeError: asyncFunc is not a constructor

const addFunc = new Function('x', 'y', 'return x + y');
console.log(addFunc(5, 6));

/* Closure */
globalThis.p = 123; // Global variable p

function outer() {
    const p = 456; // Local variable p

    function inner() {
        console.log('inner(): ', p); // 456
    }

    const inner2 = function () {
        console.log('inner2(): ', p); // 456
    };

    const inner3 = new Function("console.log('inner3(): ', p)"); // 123

    inner();
    inner2();
    inner3();
}

outer();

function outer2() {
    const p = 789; // Local variable p

    function inner() {
        console.log('Closure: ', p);
        console.log('Closure: ', pa);
    }

    return inner;
}

outer2()();

console.log(globalThis.script2);

import { pa } from './script2.js';
console.log(pa);

/* Function parameters */
function myFunc2({ a, b }, c = 10, ...rest) {
    console.log(a, b);
    console.log('c: ', c);
    console.log('rest: ', rest, rest instanceof Array);
}

myFunc2({ a: 1, b: 2 }, 8, 9, 45, 89);

/* arguments array-like object */
function myFunc3(...rest) {
    console.log('arguments: ', arguments);
    // console.log('arguments.callee: ', arguments.callee);
    console.log('arguments.length: ', arguments.length);
}

myFunc3(1, 2, 3, ['a', 'b'], { c: 6, d: 8 });

/* getters and setters */
const myObj = {
    get a() {
        console.log('Get a', this.b);
    },
    set a(newVal) {
        console.log('Set a');
    },
    b: 'This is b!',
    thisIsMethod() {
        console.log('This is a method.');
    },
};

myObj.a;
myObj.a = 10;
console.log(myObj);
