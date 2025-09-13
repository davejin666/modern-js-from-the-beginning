/* Array.prototype.forEach() */
arr = ['a', 'b', 'c', 'd', 'e'];
arr.forEach((ele, idx, init_arr) => {
    console.log(`Index: ${idx} | Value: ${ele}`);
    init_arr[idx] = ele + '$$$';
});

console.log(arr);

/* Array.prototype.filter() */
arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' },
];

let invalidEntries = 0;

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    } else {
        invalidEntries++;
        return false;
    }
}

const arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries =', invalidEntries);
// Number of Invalid Entries = 5

/* Array.prototype.map() */
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

/* Array.prototype.reduce() */
const myNums = [2, -30, 50, 20, -12, -9, 7];

const result = myNums.reduce((acc, curr_num) => {
    if (curr_num < 0) {
        return acc + 0;
    } else {
        return acc + curr_num;
    }
}, 0);

console.log(result);
