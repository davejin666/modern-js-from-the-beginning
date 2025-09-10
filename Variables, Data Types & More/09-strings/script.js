let name = 'David';
let age = 37;

// Template literals allow for multi-line strings.
const greetings = `Hi there,
My name is ${name}, and I'm ${age} years old.`;

console.log(greetings);

// String properties and methods.
let s = 'Hello world!';

console.log(s.__proto__); // String methods are stored in this property.
console.log(s.length); // 12
console.log(s[1]); // e
console.log(s.charAt(1)); // e
console.log(s.indexOf('l')); // 2
console.log(s.toUpperCase()); // HELLO WORLD!
console.log(s.substring(0, 5)); // Hello
console.log(s.slice(-s.length, -6)); // Hello
console.log(s.replace('world', 'John')); // Hello John!
console.log(s); // Hello world!
console.log(s.includes('Hello')); // true
console.log(s.split()); // ['Hello world!']
console.log(s.split(' ')); // ['Hello', 'world!']

s += '            ';
console.log(s.trim()); // Hello world!
