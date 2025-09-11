function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const gtr = new Car('Nissan', 'GT-R', 2018);

console.log(gtr);

const f150 = new Car('Ford', 'F-150', 2022);

console.log(f150);

Car.prototype.color = null;

console.log(gtr, f150);
console.log(gtr.color);

function drive_car() {
    console.log(`${this.model} is being driven.`);
}

Car.prototype.drive = drive_car;

gtr.drive();
f150.drive();

/* this keyword */
console.log(Reflect.apply(String.prototype.charAt, 'ponies', [3]));

/* getters and setters */
myObj = {
    a: 5,
    get b() {
        if (this._b === undefined) {
            this.b = 6;
        }
        return this._b;
    },
    set b(newVal) {
        this._b = Number.parseInt(newVal);
    },
    get c() {
        return 888;
    },
};

console.log(myObj.a);
console.log(myObj.b);
myObj.b = '45';
console.log(myObj.b);
console.log(myObj);
console.log(myObj.c);
myObj.c = 'abc'; // This assignment has no effect.
console.log(myObj);
console.log(myObj.c);

o1 = { name: 'Orange' };
o2 = { name: 'Orange' };

console.log(o1 == o2);
console.log(typeof o1 === typeof o2);
