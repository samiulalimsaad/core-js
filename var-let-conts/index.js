if (true) {
    // var become global
    var varVariable = "I'm var";
    // varVariable = "I'm var"; // same as before
}
console.log(varVariable);

if (true) {
    // let is block scope
    let letVariable = "I'm let";
}
console.log(letVariable); //will throw error because letVariable is not in window

if (true) {
    // const is block scope
    const constVariable = "I'm const";
}
console.log(constVariable); //will throw error because constVariable is not in window
