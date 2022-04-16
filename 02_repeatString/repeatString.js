const repeatString = function(str, num) {
    output = ""
    if (num < 0) {
        output = "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            output += str;
        }
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
