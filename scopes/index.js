// "use strict"; // used to handle undeclared variable

// outside of any blocks is in global/window scope
var a = 11;
var b = 11;

// console.log(a); console.log(window.a);// same output

function fun() {
    var y = 22;
    a = 33;
    var b = 33; //will be function scope
    c = 55; // global scope
}

fun();

// console.log(a);

// console.log(b);

console.log(c);
