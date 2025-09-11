const o1 = {
    id: 123,
    firstName: 'David',
    lastName: 'Jin',
    isActive: true,
    today: new Date(),
};

let json_str = JSON.stringify(o1);
console.log(json_str);
// {"id":123,"firstName":"David","lastName":"Jin","isActive":true,"today":"2025-09-11T07:20:55.385Z"}

parsed_obj = JSON.parse(json_str);
console.log(parsed_obj);

const a1 = [123, 'David Jin', true, new Date()];

json_str = JSON.stringify(a1);
console.log(json_str);
// [123,"David Jin",true,"2025-09-11T07:22:03.341Z"]

parsed_arr = JSON.parse(json_str);
console.log(parsed_arr);
