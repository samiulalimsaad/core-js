function test() {}
// console.dir(test);

const person = {
    name: "zzz",
    age: 111,
};

const p = Object.create(person);
// console.dir(p);

const sharedMethods = {
    eat() {
        console.log("eat....");
    },
    play() {
        console.log("play....");
    },
};

function Person2(name, age) {
    const person = Object.create(sharedMethods);
    person.name = name;
    person.age = age;
    return person;
}
const aa = Person2("aa", 11);
const bb = Person2("bb", 22);
// console.log(aa);

/**
 *### just to avoid external shared method object
 * @param {string} name
 * @param {number} age
 * @returns {object}
 */
function Person3(name, age) {
    const person = Object.create(Person3.prototype);
    person.name = name;
    person.age = age;
    return person;
}

Person3.prototype = {
    eat() {
        console.log("eat....");
    },
    play() {
        console.log("play....");
    },
};

const aaa = Person3("aaa", 11);
const bbb = Person3("bbb", 22);
console.log(aaa);
aaa.play();
