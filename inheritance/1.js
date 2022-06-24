const p = function Person(name, age) {
    this.name = name;
    this.age = age;
};

// Person.prototype = {
//     eat: function () {
//         console.log(this.name + " is eat.....");
//     },
// };

// const p1 = new Person("aaa", 11);
// console.log(p1);
// const p2 = new Person("bbb", 22);
// console.log(p2);
console.dir(p);
