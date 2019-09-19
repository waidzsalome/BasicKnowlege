let s1 ="some text";
let s2 = s1.substring(2);

console.log(s2);

let obj = new Object("some text");
console.log(obj instanceof String); //true

let falseObject = new Boolean(false);
console.log(falseObject && true); //true 建议永远不使用

let numberObject = new Number(10);
let numberValue = 10;
console.log(typeof numberObject); //Object
console.log(typeof numberValue); //number
console.log(numberObject instanceof Number); //true
console.log(numberValue instanceof Number); //false


