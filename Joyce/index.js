//1. Create the following object:

const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
};

const whichClass = () => {
  return `${student.firstName} ${student.lastName} is a student in class ${student.class} `;
};
console.log(whichClass());

//2 Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
  firstName: "John",
  lastName: "Smith",
  age: 41,
  job: "engineer",
  country: "France",
};
const personObject = () => {
  return `${person.firstName} ${person.lastName} is a ${person.age} year old ${person.job} living in ${person.country} `;
};
console.log(personObject());

// Bonus
// Write a method to get the length of the person object.
let personLength = Object.entries(person).length;
console.log(personLength);
