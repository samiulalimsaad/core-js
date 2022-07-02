class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + " is eat.....");
    }
}

class Programmer extends Person {
    constructor(name, age, language, skills) {
        super(name, age);
        this.language = language;
        this.skills = skills;
    }
    getSkills() {
        console.log(this.skills);
    }
}

const p1 = new Programmer("aaa", 11, "JS", ["JS"]);
console.dir(p1);

const p2 = new Programmer("bbb", 22, "TS", ["TS"]);
p2.eat();
p2.getSkills();
