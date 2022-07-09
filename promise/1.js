const promise = (test) =>
    new Promise((resolve, reject) => {
        test ? resolve("hello") : reject("world");
    });

console.dir(promise);

promise(false)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
