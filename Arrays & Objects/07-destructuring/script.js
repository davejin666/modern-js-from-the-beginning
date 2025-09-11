const o1 = {
    a: 1,
    b: 2,
    c: 3,
};

var { a, b, c } = o1;
console.log(a, b, c); // 123

var { a: x, b: y, c: z } = o1;
console.log(x, y, z); // 1 2 3

/* Binding pattern */
o2 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
    },
};

var {
    a,
    c: { d: x },
} = o2;
console.log(a, x); // 1 3; c and d are undefined.

/* Assignment pattern */
const nums = [];

({
    a: nums[0],
    c: { d: nums[1] },
    b: nums[2],
} = o2);
console.log(nums);

/* Default value */
var a1 = [1, 2, 3, undefined];
var [a = 8, , , b = console.log('hey'), c = 888] = a1;
console.log(a, b, c);

/* rest properties */
var a2 = [1, 2, 3, 4, 5, 6];
var [a, b, ...rest] = a2;
console.log(a, b, rest);

var o3 = {
    a: 1,
    b: 2,
    c: 3,
};

var { ...rest } = o3;
console.log(rest);
