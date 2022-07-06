const arr = [1, 2, 3, 4, 5, 6];

const forEach = (array = [], cb) => {
    for (let i = 0; i < array.length; i++) {
        cb(array[i], i, array);
    }
};

forEach(arr, (v) => console.log(v * 2));
