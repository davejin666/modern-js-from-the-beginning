const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

const obj2 = {
    a: 1,
    b: 2,
    c: 3,
};

const obj3 = obj1;

/* Loose equality */
console.log('--------- Loose Equality ---------');
console.log(NaN == NaN); // false
console.log(+0 == -0); // true
console.log(+0 == 0); // true
console.log(-0 == 0); // true
console.log(0.0 == 0); // true
console.log('0' == 0); // true
console.log(obj1 == obj2); // false
console.log(obj1 == obj3); // true
console.log(null == undefined); // true
console.log(true == 1); // true
console.log(false == 0); // true

/* Strict equality */
console.log('--------- Strict Equality ---------');
console.log(NaN === NaN); // false
console.log(+0 === -0); // true
console.log(+0 === 0); // true
console.log(-0 === 0); // true
console.log(0.0 === 0); // true
console.log('0' === 0); // false
console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true
console.log(null === undefined); // false
console.log(true === 1); // false
console.log(false === 0); // false

/* Object.is() */
console.log('--------- Object.is() ---------');
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
console.log(Object.is(+0, 0)); // true
console.log(Object.is(-0, 0)); // false
console.log(Object.is(0.0, 0)); // true
console.log(Object.is('0', 0)); // false
console.log(Object.is(obj1, obj2)); // false
console.log(Object.is(obj1, obj3)); // true
console.log(Object.is(null, undefined)); // false
console.log(Object.is(true, 1)); // false
console.log(Object.is(false, 0)); // false

/* Mutating an immutable property */
console.log('- Mutating an immutable property -');
console.log(Object.hasOwn(Number, 'NEGATIVE_ZERO')); // false

// Add an immutable NEGATIVE_ZERO property to the Number constructor.
Object.defineProperty(Number, 'NEGATIVE_ZERO', {
    value: -0,
    writable: false,
    configurable: false,
    enumerable: false,
});

console.log(Number.NEGATIVE_ZERO); // -0

function attemptMutation(val) {
    Object.defineProperty(Number, 'NEGATIVE_ZERO', { value: val });
}

attemptMutation(-0); // Doesn't throw an error because Object.is(-0, -0) is true, so effectively no mutation is done.
// attemptMutation('-0'); // TypeError: Cannot redefine property: NEGATIVE_ZERO

/* Same-value-zero equality */
function sameValueZero(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y || (x !== x && y !== y);
    } else {
        return false;
    }
}

console.log('--- Same-value-zero Equality ---');
console.log(sameValueZero(+0, -0)); // true
console.log(sameValueZero(-0, 0)); // true
console.log(sameValueZero(NaN, NaN)); // true
