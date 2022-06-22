function bankBalance(initialBalance) {
    var balance = initialBalance;
    return function () {
        // return initialBalance; //will not in closure
        return balance; //will  in closure
    };
}

var account = bankBalance(100);
console.dir(account);
