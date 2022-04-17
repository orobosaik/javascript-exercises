const removeFromArray = function (arr, ...num) {
    for (const i of num) {
        if (!arr.includes(i)) {
            continue;
        }else {
            arr.splice(arr.indexOf(i), 1);
        }
    }

    return arr
}

// Do not edit below this line
module.exports = removeFromArray;
