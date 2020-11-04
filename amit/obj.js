// 1 John smith is a student in class 12
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  method: function () {
    return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
  },
};

console.log(student.method());

//2 John Smith is a 41 years old engineer living in Paris
const person = {
  firstName: "John",
  lastName: "Smith",
  age: 41,
  job: "engineer",
  city: "Paris",
  method: function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`;
  },
  lnt: function () {
    return person.length;
  },
};

console.log(person.method());
console.log(person.lnt());
