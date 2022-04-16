const reverseString = function(str) {
    const splitStr = str.split("");
    const reversedStr = splitStr.reverse();
    const joinedStr = reversedStr.join("");
    return joinedStr;
};

// Do not edit below this line
module.exports = reverseString;
