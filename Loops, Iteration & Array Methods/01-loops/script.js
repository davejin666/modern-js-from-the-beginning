/* for statements */
function countSelected(selectObject) {
    let numSelected = 0;

    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numSelected++;
        }
    }

    return numSelected;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const musicTypes = document.selectForm.musicTypes1;
    const numSelected = countSelected(musicTypes);
    console.log(`You've selected ${numSelected} options.`);
});

/* Labeled statements */
loop1: for (let i = 0; i < 3; i++) {
    loop2: for (let j = 0; j < 3; j++) {
        if (i === j) {
            continue loop1;
        } else {
            console.log(`i: ${i} | j: ${j}`);
        }
    }
}

outerWhile: while (true) {
    console.log('Outer while entered.');
    let n = 0;
    while (true) {
        if (n === 5) {
            break outerWhile;
        }
        console.log('n: ', n);
        n++;
    }
    console.log('Outer while exited.');
}

/* for...in loop */
obj = {
    a: 6,
    b: 7,
    c: 8,
    d: 9,
};
arr = [1, 2, 3, 4, 5];
arr.myProp = 6;

for (const prop_name in obj) {
    console.log(prop_name); // "a" "b" "c" "d"
}

for (const prop_name in arr) {
    console.log(prop_name); // "0" 1" "2" "3" "4", "myProp"
}

for (const [key, val] of Object.entries(obj)) {
    console.log(key, val);
}
