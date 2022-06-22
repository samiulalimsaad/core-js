function stopWatch() {
    var now = Date.now();

    function getDelay() {
        return Date.now() - now;
    }

    return getDelay;
}

var timer = stopWatch();

console.dir(timer);

// for (let i = 0; i < 100000000; i++) {
//     var a = Math.random() * 10000;
// }
console.log(timer());

const v = (() => 10)();

console.log(v);
