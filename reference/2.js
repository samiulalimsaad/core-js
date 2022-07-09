const a = [1, 2, 3, 4, 5, 6];

const b = [...a, 7, 8, 9];

console.log(a);
console.log(b);

a.push(11);
console.log(a);
console.log(b);

b.push(22);
console.log(a);
console.log(b);
