const getTheTitles = function (name) {
    let result = [];
    for (let i = 0; i < name.length; i++) {
        result.push(name[i].title)
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
