//1
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 };

console.log(`${student.firstName} ${student.lastName} is a student in class ${student.class}`);

//2
const person = {
    firstName: "Ines",
    lastName: "Nogueira",
    age: 28,
    job: "Web Developer",
    city: "Berlin",
}
console.log(`${person.firstName} ${person.lastName} is ${person.age} years old ${person.job} based in ${person.city}`);

//3
console.log(Object.keys(person).length);