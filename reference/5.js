const a = 11;

function passByValue(value) {
    value = 22;
    console.log(value);
}

passByValue(a);
console.log(a);

const aa = 11;

function passByValue2(value = 0) {
    value = 22; // here creating a new obj with new reference like value = 22
    console.log(value);
}

passByValue2(aa);
console.log(aa);

const b = { value: 11 };

function passByReference(obj) {
    obj.value = 22;
    console.log(obj);
}

passByReference(b);
console.log(b);

const bb = { value: 11 };

function passByReference2(obj) {
    obj = {}; // will create new obj with new reference
    console.log(obj);
}

passByReference2(bb);
console.log(bb);
