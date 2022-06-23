var aa = 11;
console.log({ aa });
/**
 * similar to
 *
 * var a = undefined
 * console.log(a);
 * a = 11;
 *
 */
console.log({ a });
var a = 11;

let bb = 22;
console.log({ bb });
/**
 * similar to
 *
 * console.log(b);
 * let b = undefined; b = 11; // same line declaration with assignment
 *
 */
// console.log(b); // will  throw error because of reference
let b = 11;

let bbb;    // hoisting and assigned undefined
console.log({ bbb }); 

const cc = 33;
console.log({ cc });
/**
 * similar to
 *
 * console.log(c);
 * let c = undefined; c = 33; // same line declaration with assignment
 *
 */
// console.log({ c }); // will  throw error because of reference
const c = 11;


const ccc; // Uncaught SyntaxError: Missing initializer in const declaration
console.log({ccc})