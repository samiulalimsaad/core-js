function Person(name, age) {
    const person = {};
    person.name = name;
    person.age = age;

    person.eat = function () {
        console.log("eat....");
    };
    person.play = function () {
        console.log("play....");
    };

    return person;
}

const a = Person("a", 11);
const b = Person("b", 22);

console.log(a);

/**
 * make shared methods to decrease memory usage
 */
const sharedMethods = {
    eat() {
        console.log("eat....");
    },
    play() {
        console.log("play....");
    },
};

function Person2(name, age) {
    const person = {};
    person.name = name;
    person.age = age;

    person.eat = sharedMethods.eat;
    person.play = sharedMethods.play;
    return person;
}

const aa = Person2("aa", 11);
const bb = Person2("bb", 22);
console.log(aa);
