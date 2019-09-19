function createComparisionFunction(properyName) {
    return function (object1, object2) {
        let value1 = object1[properyName];
        let value2 = object2[properyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
}

let data = [{
    name: "Zachary",
    age: 28
},{
    name: "Nicholas",
    age: 29
}];


console.log(data.sort(createComparisionFunction("name")));

console.log(data.sort(createComparisionFunction("age")));


