const obj = {
    name: "aaa",
    age: 111,
    eat() {
        console.log(`${this.name} eat`);
    },
};

// obj.eat();

function printPlayerName(obj) {
    obj.getName = function () {
        console.log(this);
    };
}

printPlayerName(obj);

// obj.getName();

function Person(name, age) {
    return {
        name,
        age,
        getName() {
            console.log(this.name);
        },
        father: {
            name: "mmmm",
            getName() {
                console.log(this.name);
            },
        },
    };
}

var aaa = Person("aaa", 111);

aaa.father.getName();
