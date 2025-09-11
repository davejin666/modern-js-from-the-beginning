/* Using a constructor function to define objects. */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const gtr = new Car('Nissan', 'GT-R', 2018);
console.log(gtr);
console.log(gtr.make);
gtr.color = 'Red';
console.log(gtr);

/* Using Object.create() and a prototype object to define objects. */
const proto_obj = {
    type: 'Invertebrates',
    displayType() {
        console.log(`Type: ${this.type}`);
    },
};

const animal = Object.create(proto_obj);
console.log(animal); // {}
console.log(animal.__proto__); // {type: 'Invertebrates', displayType: ƒ}
animal.displayType(); // Type: Invertebrates

/* Enumerating object properties. */
const mustang = {
    make: 'Ford',
    model: 'Mustang',
    year: 2002,
};

for (const propName in mustang) {
    console.log(`${propName}: ${mustang[propName]}`);
}

Object.keys(mustang).forEach((propName) => {
    console.log(`${propName}: ${mustang[propName]}`);
});

/* Deleting non-inherited properties. */
delete mustang.year;
console.log('year' in mustang); // false

/* Spread operator */
o1 = {
    a: 1,
    b: 2,
};

o2 = {
    b: 3,
    c: 4,
};

o3 = { ...o2, ...o1 };
console.log(o3);

console.log(Object.entries(o3));
for ([k, v] of Object.entries(o3)) {
    console.log(k, v);
}

o4 = { ...o1, o2 };
console.log(o4.o2.b);

console.log(o1.hasOwnProperty('a'));
console.log(Object.hasOwn('c'));
