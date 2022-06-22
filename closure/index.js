var num1 = 11;
var fun1 = function (num2) {
    // num1, num2 => scope > global
    return num1 + num2;
};
// console.log(fun1(22));
// console.dir(fun1);

// inclosing scope
(function () {
    var num1 = 11;
    var fun1 = function (num2) {
        // num1, num2 => scope > global && closure
        /**
         * num1 is in closure because of lexical scope and inclosing scope.
         * lexical scope means the immediate parent of returned function
         */
        return num1 + num2;
    };
    // console.log(fun1(22));
    // console.dir(fun1);
})();

var fun2 = function () {
    var num2 = 22;
    /**
     * num2 is in closure because of lexical scope.
     * lexical scope means the immediate parent of returned function
     */
    return function () {
        return num1 + num2;
    };
};
// var closure = fun2();
// console.log(fun2(11));
// console.dir(closure);

// inclosing scope
(function () {
    var num1 = 11;
    var fun3 = function () {
        var num2 = 22;
        /**
         * num2 is in closure because of lexical scope.
         * lexical scope means the immediate parent of returned function
         */
        return function () {
            return num1 + num2;
        };
    };

    // var closure = fun3();
    // console.log(fun3());
    // console.dir(closure);

    num1 = 33;

    // console.dir(closure);
})();

// inclosing scope

let num = 11;
var fun4 = function () {
    var num2 = 22;
    /**
     * num2 is in closure because of lexical scope.
     * let num is in closure because of global scope but named as Script if only in global scope if is in a lexical scope will be in closure.
     * lexical scope means the immediate parent of returned function
     */
    return function () {
        return num * num2;
    };
};

var closure = fun4();
console.log(fun4());
console.dir(closure);
