myObj = {
    a: 1,
    b: 2,
};

console.log(Object.getPrototypeOf(myObj));
console.log(myObj);
console.log(myObj.__proto__);

myObj2 = {
    a: 1,
    b: 2,
    __proto__: {
        b: 3,
        c: 4,
    },
};

console.log(Object.getPrototypeOf(myObj2));
console.log(myObj2);
console.log(myObj2.__proto__);
console.log(myObj2.b); // 2

myObj3 = {
    a: 1,
    b: 2,
    get c() {
        return 3;
    },
};

console.log(myObj3);
console.log('c' in Object.keys(myObj3));

function Box(value) {
    this.value = value;
    return 888;
    // If a non-primitive is returned from the constructor function,
    // that value will become the result of the new expression.
}

b1 = new Box(1);
console.log(b1);
console.log(Object.getPrototypeOf(b1).constructor === Box); // true
console.log(Object.getPrototypeOf(b1) === Box.prototype); // true

proto_before_change = Object.getPrototypeOf(b1);
Box.prototype.newValue = 3;
console.log(b1.newValue); // 3
proto_after_change = Object.getPrototypeOf(b1);
console.log(proto_before_change === proto_after_change); // true

console.log('Before reassignment: ', Object.getPrototypeOf(b1));

Box.prototype = {
    q: 1,
    w: 2,
};

console.log(Object.getPrototypeOf(Box) === Function.prototype); // true

b2 = new Box(2);

// Box instances b1 and b2, with one created before re-assignment and the other created after,
// have different prototypes.
console.log(
    'After reassignemnt: ',
    Object.getPrototypeOf(b1),
    Object.getPrototypeOf(b2)
);
console.log(b1.constructor, b2.constructor);
