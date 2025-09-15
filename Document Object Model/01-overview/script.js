const myTable = document.getElementById('my-table');

console.log(myTable instanceof HTMLTableElement);
console.log(myTable.__proto__);
console.log(myTable instanceof Element);

const inputEle = document.querySelector('input');
// The placeholder attribute of the input element is reflected by
// HTMLInputElement.placeholder
inputEle.placeholder = 'New placeholder';

const checkBox = document.querySelector('input[type="checkbox"]');
console.log("Reflected attribute 'checked': ", checkBox.checked); // Returns a boolean value
console.log('Using getAttribute: ', checkBox.getAttribute('checked')); // Returns an empty string or null

const pEle = document.querySelector('p[dir="rtl"]');
console.log(pEle.getAttribute('dIr'));
pEle.dir = 'LTR';
