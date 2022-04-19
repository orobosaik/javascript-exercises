const findTheOldest = function (list) {
    let position;
    let age = 0;
    let previousAge = 0;

    for (let i = 0; i < list.length; i++) {

        const birth = list[i].yearOfBirth;
        const death = list[i].yearOfDeath;

        if (!death) {
            age = new Date().getFullYear() - birth;
        } else {
            age = death - birth;
        }

        if (age > previousAge) {
            previousAge = age;
            position = i
        } else { continue }
    }
    return list[position];

};

// Do not edit below this line
module.exports = findTheOldest;
