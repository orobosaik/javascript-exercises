const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function (num) {
  let total = 0;
  for (const i of num) {
    total += i
  }
  return total
};

const multiply = function(num) {
  let total = 1;
  for (const i of num) {
    total *= i
  }
  return total
};

const power = function(a, b) {
  let total = a;
  for (let i = 1; i < b; i++) {
		total *= a;
	}
	return total;
};

const factorial = function(num) {
  let total = 1;
	for (let i = 1; i <= num; i++) {
    total *= i
	}
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
