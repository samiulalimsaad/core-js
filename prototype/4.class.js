/**
 *### constructor function to class
 */

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("eat....");
    }

    play() {
        console.log("play....");
    }
}

const a4 = new PersonClass("aaa", 11);
const b4 = new PersonClass("bbb", 22);
console.log(a4);
a4.play();
