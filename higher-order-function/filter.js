const arr = [1, 2, 3, 4, 5, 6];

const filter = (array = [], cb) => {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) {
            temp.push(array[i]);
        }
    }
    return temp;
};

console.log(filter(arr, (v) => v === 2));

console.log(arr.filter((v) => v === 2));

arr.