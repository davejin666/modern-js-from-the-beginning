b = new Boolean(false);

console.log(b);

switch (3 + 4) {
    case 7:
        console.log('Label 1');
    // break;
    case 8:
        console.log('Label 2');
    case 9:
        console.log('Label 3');
    // default:
    //     console.log('Default label');
}

console.log('after switch statement.');

try {
    throw {
        errorName: 'Object error.',
        value: 5,
    };
} catch (e) {
    console.log('e inside catch block: ', e);
}

// console.log('e outside catch block: ', e); // e is undefined here

function test() {
    try {
        throw 'bogus';
    } catch (e) {
        return e;
    } finally {
        return 'yellow'; // This value is returned from try...catch...finally statement.
    }
}

console.log(test());

function test2() {
    try {
        throw 'bogus';
    } catch (e) {
        throw 'throw in catch';
    } finally {
        return false;
    }
}

console.log(test2());

try {
    throw new Error('My custom error.');
} catch (e) {
    console.error(e.name);
    console.error(e.message);
}

console.log(false || 'a');
console.log(true || 3 + 4);
console.log(0 ?? 'abc');
