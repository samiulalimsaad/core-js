const promise = (test) =>
    new Promise((resolve, reject) => {
        test ? resolve("hello") : reject(new Error("world"));
    });

// console.dir(promise);

// promise(false)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function func() {
    try {
        const result = await promise(!true);
        console.log("await", result);
    } catch (error) {
        console.log("catch", error.message);
    }
}

func();
