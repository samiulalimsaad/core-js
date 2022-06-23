/**
 * how `this` keyword works actually
 * @param {string} name
 * @param {number} age
 * @returns {object}
 */
function PersonWithThis(name, age) {
    const this_ = Object.create(PersonWithThis.prototype);
    this_.name = name;
    this_.age = age;
    return this_;
}

PersonWithThis.prototype = {
    eat() {
        console.log("eat....");
    },
    play() {
        console.log("play....");
    },
};

const aaa = PersonWithThis("aaa", 11);
const bbb = PersonWithThis("bbb", 22);
console.log(aaa);
aaa.play();

/**
 * how `this` keyword works actually
 * no need to write `Object.create` and `return this_`
 * @param {string} name
 * @param {number} age
 * @returns {object}
 */
function PersonWithNEW(name, age) {
    // const this = Object.create(PersonWithNEW.prototype);
    this.name = name;
    this.age = age;
    // return this;
}

PersonWithNEW.prototype = {
    eat() {
        console.log("eat....");
    },
    play() {
        console.log("play....");
    },
};

const a4 = new PersonWithNEW("aaa", 11);
const b4 = new PersonWithNEW("bbb", 22);
console.log(a4);
a4.play();
