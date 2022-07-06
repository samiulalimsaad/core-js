const arr = [1, 2, 3, 4, 5, 6];

const map = (array = [], cb) => {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
        temp.push(cb(array[i], i, array));
    }
    return temp;
};

console.log(map(arr, (v) => (v*2)));
