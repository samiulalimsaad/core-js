class Person {
    static c = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + " is eat.....");
    }

    get getName() {
        ++Person.c;
        return this.name;
    }
    set setName(name) {
        ++Person.c;
        this.name = name;
        return this;
    }

    static getAge(obj1) {
        console.log(obj1.age, Person.c);
    }
}

const aaa = new Person("aaa", 11);

console.log(aaa.getName);
aaa.setName = "bbb";
console.log(aaa.getName);

Person.getAge(aaa);
