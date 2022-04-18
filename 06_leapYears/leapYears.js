const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 === 0) {
        result = true;
    } else if (year % 100 === 0) {
        result = false;
    } else if (year % 4 !== 0) {
        result = false;
    } else if (year % 4 === 0) {
        result = true;
    }
    return result;
};

// Do not edit below this line
module.exports = leapYears;
