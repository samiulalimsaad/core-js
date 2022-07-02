const obj = {
    name: "aaa",
    age: 111,
};

// obj.eat();

var getName = function (...args) {
    console.log(this, args);
};

getName.call(obj, 1, 2, 3, 4, 5, 67);
getName.apply(obj, [1, 2, 3, 4, 5, 6, 7, 8]);
var ob = getName.bind(obj);

ob(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
