const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
    }, 2000);
});

const promise2 = Promise.resolve("world");

Promise.all([promise2, promise1])
    .then((result) => {
        console.log("all", result);
    })
    .catch((err) => {
        console.log(err);
    });

Promise.race([promise2, promise1])
    .then((result) => {
        console.log("race", result);
    })
    .catch((err) => {
        console.log(err);
    });
