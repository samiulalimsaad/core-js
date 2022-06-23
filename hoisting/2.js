var LANGUAGE = "JAVA";
var language = "JavaScript";

/**
 *
 *# similar to
 * ``` 
 function getLanguage() {
   var language = undefined;
   if (!language) {
       language = LANGUAGE;
   }
   return language;
  }
  ```
 * @returns string
 */

function getLanguage() {
    if (!language) {
        var language = LANGUAGE;
    }
    return language;
}

console.log(getLanguage());

/**
 *
 *# similar to
 *### because let is block scope
 *``` 
 function getLanguage() {
    if (!language) {
        let language = undefined; language = LANGUAGE;
    }
    return language;
 }
 ``` 
 * @returns string
 */

function getLanguage2() {
    if (!language) {
        let language = LANGUAGE;
    }
    return language;
}

console.log(getLanguage2());

func();
/**
 *
 *### because of hoisting
 */
function func() {
    console.log("hello");
}

CBfunc();
/**
 *
 *### because of hoisting
 * ```
 * for const:  Uncaught ReferenceError: Cannot access 'CBfunc' before initialization
 *
 * for let: Uncaught ReferenceError: Cannot access 'CBfunc' before initialization
 * 
 * for var Uncaught TypeError: CBfunc is not a function
 * due to hoisting CBfunc become undefined and calling undefined as a function call throw this error
 
 * ```
 */
var CBfunc = () => {
    console.log("hello world");
};
