//1
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} is a student in class ${this.class}`
    );
  },
};
// student.print();

//2
const person = {
  firstName: "John",
  lastName: "Smith",
  age: 41,
  job: "artist",
  city: "Berlin",
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} is a ${this.age} old ${this.job} living in ${this.city}`
    );
  },
  getLength: function () {
    console.log(Object.keys(this).length);
  },
};
// person.print();
// person.getLength();
