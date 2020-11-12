// create an object 
const student = {
    firstName: 'Sara',
    lastName: 'Smedlund',
    class: 36
}; 

// Create a method that prints the following:  
console.log(`${student.firstName} ${student.lastName} is a student in class ${student.class}`); // Sara Smedlund is a student in class 36

// Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
    firstName: 'Dustin',
    lastName: 'Bexx',
    age: 27,
    job: 'Software developer',
    city: 'Berlin'
};
console.log(`${person.firstName + " " + person.lastName} is a ${person.age} year old ${person.job} living in ${person.city}`);

// 3. Write a method to get the length of the person object.
const getLengthOfObj = (obj) => Object.keys(obj).length; // 5
console.log("getLengthOfObj ==>", getLengthOfObj(person))

