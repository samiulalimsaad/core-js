let a = [1, 2, 3, 4, 5, 6];

let b = a;

a.push(11);

console.log(a);
console.log(b);

b.push(22);

console.log(a);
console.log(b);

a = [];

console.log(a);
console.log(b);

b = [];

console.log(a);
console.log(b);
