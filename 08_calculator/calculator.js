const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
return numbers.reduce((total,num) => total += num , 0);
};

const multiply = function(numbers) {
  return numbers.length 
    ? numbers.reduce((total, number) => total * number)
    : 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let factorial = 1;
  if (number !== 0) {
    for (let i=1; i<=number; i++){
      factorial *= i;
    }
  }
	return factorial;
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
