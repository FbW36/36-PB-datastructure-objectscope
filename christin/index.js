/**Create the following object:
const student = {
firstName: "John",
lastName: "Smith",
class: 12 };
Create a method that prints the following:
"John smith is a student in class 12" */

const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  getStudent: function () {
    return `${this.firstName} ${this.lastName} is a student in class ${this.class}.`;
  },
};
console.log(student.getStudent()); // John Smith is a student in class 12

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

let person = {
  name: "maria",
  lastName: "schmift",
  job: "teacher",
  age: 42,
  country: "Indonesia",
  getPerson: function () {
    return `${this.name} ${this.lastName} is a ${this.age} year old ${this.job} and lives in ${this.country}.`; // maria schmift is a 42 year old teacher and lives in Indonesia.
  },
};
console.log(person.getPerson());

// Write a method to get the length of the person object.

function lengthPerson(object) {
  objectArrayLenght = Object.entries(person);
  return objectArrayLenght.length;
}

console.log(lengthPerson(person)); // 6
