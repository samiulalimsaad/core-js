function HOF() {
    return function () {
        console.log("I'm HOF");
    };
}

HOF()();
