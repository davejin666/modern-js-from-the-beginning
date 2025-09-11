// Class declaration
class Rectangle {
    static className = 'Rectangle';

    static {
        // Static initialization block
        // this value is the class itself
        console.log(`Initializing ${this.className} class. ${typeof this}`);
    }

    static repr() {
        // this value inside a static method is the class itself
        return `${this.className}(height=${this.height}, width=${this.width})`;
    }

    width = 9; // Public field
    #hidden_field = 888; // Private field

    constructor(height) {
        this.height = height;
        this.public_field = this.#hidden_field / 2;
    }

    // getter
    get area() {
        return this.calcArea();
    }

    // instance method
    calcArea() {
        return this.height * this.width;
    }
}

console.log(Rectangle);

r1 = new Rectangle(16);
console.log(r1);
console.log(typeof r1); // "object"
console.log(typeof Rectangle); // "function"
console.log(r1.className); // undefined
r1.className = 'Rectnagle instance';
console.log(r1.className); // "Rectangle instance"
console.log(Rectangle.className); // "Rectangle"
console.log(r1.area); // 144
console.log(Rectangle.repr()); // "Rectangle(height=undefined, width=undefined)"
console.log('hidden_field: ', r1.hidden_field);

// Class expression
const Square = class SquareOne {
    constructor(side) {
        this.side = side;
    }
};

s1 = new Square(10);
console.log(s1);
