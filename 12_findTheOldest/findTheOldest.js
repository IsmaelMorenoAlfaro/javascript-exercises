const findTheOldest = function(people) {
    return people.reduce((older, person) => {
      const olderAge = getAge(older.yearOfBirth, older.yearOfDeath);  
      const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
      return olderAge > currentAge ? older : person;
    });
};

const getAge = ((birthYear, deathYear) =>{
  if (!deathYear) deathYear = new Date().getFullYear();
  return deathYear - birthYear;
});
  

// Do not edit below this line
module.exports = findTheOldest;
