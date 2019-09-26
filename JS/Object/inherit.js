//组合式继承
function SuperType  (name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}

SuperType.prototype.sayName = function ()  {
  console.log(this.name)
};

function SubType (name, age)  {
    SuperType.call(this, name);//第一次调用SuperType()
    this.age = age;
}

SubType.prototype = new SuperType();//第二次调用SuperType()

SubType.prototype.sayAge = function () {
    console.log(this.age)
} ;

let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

let instance2 = new SubType("Greg", 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();

//寄生组合式继承
function inheritPrototype(subType, superType) {
    let prototype = Object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype =prototype;
}

inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
    console.log(this.age)
};
let instance = new SubType("Green",21);
instance.sayName();
instance.sayAge();
