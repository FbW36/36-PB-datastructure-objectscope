// # 36-PB-datastructure-objectscope

// **Instructions**
// 1. Create the following object:
// ```javascript
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  print: function () {
    console.log(
      `${student.firstName} ${student.lastName} is a student in class ${student.class}`
    );
  },
};

student.print();
// ```
// * Create a method that prints the following:
// ```javascript
// "John smith is a student in class 12"
// ``

// 2. Create a person object. Include the person's first and last name, age, job, city etc.
// Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const profile = {
  firstName: "Max",
  lastName: "Muller",
  age: 39,
  job: "doctor",
  city: "tokyo",
  print: function () {
    console.log(
      `${profile.firstName} ${profile.lastName} is a ${profile.age} year old ${profile.job} living in ${profile.city}.`
    );
  },
  length: function () {
    console.log(Object.keys(profile).length);
  },
};
profile.print();
// ## Bonus

// 3. Write a method to get the length of the person object.
profile.length();
