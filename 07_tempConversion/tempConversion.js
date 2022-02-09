const ftoc = function(temperature) {
  const celsius = (temperature - 32) * 5 / 9;
  return +celsius.toFixed(1);
};

const ctof = function(temperature) {
  const fahrenheit = (temperature * 9 / 5) + 32 ;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
