// "use strict";
var printPlayerName = function () {
    console.log(this === window);
};

const obj = {
    name: "a",
};

printPlayerName();

const obj1 = {
    name: "aaa",
};
const obj2 = {
    name: "aaa",
};
