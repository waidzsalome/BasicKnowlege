let stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let positions = [];
let pos = stringValue.indexOf('e');

while (pos > -1) {
    positions.push(pos);
    pos = stringValue.indexOf('e', pos +1);
}

console.log(positions);


