const sumAll = function (a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof(a) !== "number" || typeof(b) !== "number") {
        sum = "ERROR";
    } else if (b > a) {
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum = sum + i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
