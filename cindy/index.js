// 36-PB-datastructure-objectscope

// Instructions

//     Create the following object:

// const student = { 
// firstName: "John", 
// lastName: "Smith", 
// class: 12 };
const student = {
    firstName: "John",
    lastName: "Smith",
    age: 12, 
    job: "student",
    class: 12,
    city: "Paris",
    getObjectValues: function () {
      return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city} in class ${this.class} `;
    },
  };
  console.log("student ==> ", student.getObjectValues());

//     Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

// Bonus

//     Write a method to get the length of the person object