let x = '1';
let y = 2;
let result = x + y;
console.log(result, typeof result); // 12 string

x = '1';
y = 2;
result = x - y;
console.log(result, typeof result); // -1 'number'

x = true;
y = 2;
result = x + y;
console.log(result, typeof result); // 3 'number'

x = undefined;
y = 2;
result = x + y;
console.log(result, typeof result); // NaN 'number'
