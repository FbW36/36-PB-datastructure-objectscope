//! 1. Create the following object:

const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  printDetail: function () {
    return `${this["firstName"]} ${this["lastName"]} is a student in class ${this["class"]}`;
  },
};

// * Create a method that prints the following:
console.log(student.printDetail());

// 2. Create a person object.Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
  firstName: "John",
  lastName: "Smith",
  age: 41,
  job: "engineer",
  city: "France",
  printPerson: function () {
    return `${this["firstName"]} ${this["lastName"]} is a ${this["age"]} year old ${this["job"]} living in ${this["city"]}`;
  },
  getLength: function () {
    objToArr = Object.entries(person);
    return objToArr.length;
  },
};

console.log(person.printPerson());
console.log(person.getLength());
