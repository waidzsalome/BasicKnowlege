function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    }
    else if (value1 > value2) {
        return 1;
    }
    else {
        return 0;
    }
}

function compare2 (value1, value2) {
    return value2 - value1;
}

let values = [0, 1, 5,5,10,15,3];

console.log(values.slice(1,4));

console.log(values.sort(compare2));
