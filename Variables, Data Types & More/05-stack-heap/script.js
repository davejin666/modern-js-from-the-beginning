// Primitive data types are stored in the stack.
const person1 = 'John';
let person2 = person1;
console.log(person1, person2);

person2 = 'Jonathan';
console.log(person1, person2);

// Reference data types are stored in the heap and referenced by varaibles.
const account1 = {
    number: 123,
    holder: 'David',
};
const account2 = account1;
console.log(account1, account2);

account1.number = 1234;
console.log(account1, account2);
