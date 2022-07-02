function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.getName = function () {
    console.log(this);
    // };
}

var aaa = new Person("aaa", 111);
// aaa.getName();
