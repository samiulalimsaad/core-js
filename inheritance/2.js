function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    eat: function () {
        console.log(this.name + " is eat.....");
    },
};

function Programmer(name, age, language, skills) {
    Person.call(this, name, age);
    this.language = language;
    this.skills = skills;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.getSkills = function () {
    return this.skills;
};

const p1 = new Programmer("aaa", 11, "JS", ["JS"]);
console.dir(p1);

const p2 = new Programmer("bbb", 22, "TS", ["TS"]);
console.log(p2.getSkills());
