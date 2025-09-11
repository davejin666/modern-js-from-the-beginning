const fruits = [];

fruits.push('Apple', 'Banana', 'Mango');
console.log(fruits.length); // 3

fruits[5] = 'Water Melon';

console.log(fruits[3], fruits[4]); // undefined undefined
console.log(fruits); // ['Apple', 'Banana', 'Mango', empty × 2, 'Water Melon']
console.log(fruits.length); // 6
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']

fruits.length = 2;
console.log(fruits); // ['Apple', 'Banana']
console.log(Object.keys(fruits)); // ['0', '1']

/* Arrays methods that have special treatment of sparse arrays. */
const colors = ['red', 'yellow', 'blue'];
colors[5] = 'purple';

colors.forEach((element, idx) => {
    console.log(`Element: ${element} | Index: ${idx}`);
});

console.log(colors.copyWithin()); // ['red', 'yellow', 'blue', empty × 2, 'purple']
console.log(colors.reverse()); // ['purple', empty × 2, 'blue', 'yellow', 'red'] in-place reversal

/* Arrays methods that treat empty slots in the same ways as undefined elements. */
const iterator = colors.keys();

for (const key of iterator) {
    console.log(`Element: ${colors[key]} | Index: ${key}`);
}

console.log(colors.toReversed()); // ['red', 'yellow', 'blue', undefined, undefined, 'purple']

/* Basic array methods */
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.slice(1, arr.length - 1));
console.log(arr.splice(1, 2), arr); // splice plucked out 2 elements from initial array.

/* Spread operator */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 'a', 'b', 'c'];

console.log([...arr1, ...arr2]);

/* Flattening arrays */
const arr3 = [1, 2, [3, 4], 5, [6, [7, 8]], 9, 10];
console.log(arr3.flat()); // [1, 2, 3, 4, 5, 6, Array(2), 9, 10]

/* Static methods */
console.log(Array.isArray([1, 2, 3]));
console.log(Array.from('12345')); // ['1', '2', '3', '4', '5']

const a = 1;
const b = 2;
const c = 3;
console.log(Array.of(a, b, c)); // [1, 2, 3]

const arr4 = [1, 2, 3, 4, 5];
const arr5 = [5, 6, 7, 8];
const arr6 = [...arr4, ...arr5];
const filtered = arr6.filter((item, idx, arr) => {
    return arr.indexOf(item) === idx;
});
