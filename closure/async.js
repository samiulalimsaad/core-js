function async(params) {
    var a = 11;

    var closure = () => {
        console.log(a);
    };

    setTimeout(closure, 3000);

    console.dir(closure);
}

// async();

let aa = 22;
function async2(params) {
    var closure = () => {
        console.log(aa);
    };

    setTimeout(closure, 3000);

    console.dir(closure);
}

aa = 33;

// async2();

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 2);
}

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 2);
}

/**
 * similar to previous
 */
// var i;
// for ( i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2);
// }

/**
 * let i is now block scope
 */
for (let i = 0; i < 3; i++) {
    var closure = () => {
        console.log(i);
    };
    console.log(i);
    console.dir(closure);
    setTimeout(closure, 2);
}
