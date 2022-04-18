const fibonacci = function (num) {
    let n1 = 0, n2 = 1, nextNum;
    if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 0; i < +num; i++) {
            nextNum = n1 + n2;
            n1 = n2;
            n2 = nextNum;
        }
        return n1
    };
}

// Do not edit below this line
module.exports = fibonacci;
