const palindromes = function (str) {
    const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    const newStr = str.replaceAll(punctuation, "");
    const string = newStr.replace(/ /g, "");

    const reverseString = string.split("").reverse().join("");

    if (string.toLowerCase() === reverseString.toLowerCase()) {
        result = true;
    } else {
        result = false;
    }
    return result;

};

// Do not edit below this line
module.exports = palindromes;
