// Instructions

// Create the following object:
 const student = { 
firstName: "John", 
lastName: "Smith", 
class: 12, 
printStudent: function () {
    return `${this.firstName} ${this.lastName} is a student in class ${this.class}`
    },
};
console.log(student.printStudent());


// Create a method that prints the following:
// "John smith is a student in class 12"
// Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const rando = { 
    firstName: "Xena", 
    lastName: "Rockefeller", 
    age: 102,
    city: "Gyula, Hungary",
    job: "FBI agent",
    whoIsShe: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}`
    },
 };
console.log(rando.whoIsShe());
// Bonus
// Write a method to get the length of the person object.
console.log(Object.keys(student).length);
console.log(Object.keys(rando).length);
