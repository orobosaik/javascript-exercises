const findTheOldest = function (list) {
	let position;
	let previousAge = 0;

	list.forEach((person) => {
		const birth = person.yearOfBirth;
		const death = person.yearOfDeath;

		if (!death) {
			age = new Date().getFullYear() - birth;
		} else {
			age = death - birth;
		}

		if (age > previousAge) {
			previousAge = age;
			position = person;
		}
	});
    return position;
};

// Do not edit below this line
module.exports = findTheOldest;
