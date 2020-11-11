//1
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 };

const print = (object) =>  `${object.firstName} ${object.lastName} is a student in class ${object.class}`

console.log(print(student));

//2
const person = {
    firstName: "Ines",
    lastName: "Nogueira",
    age: 28,
    job: "Web Developer",
    city: "Berlin",
}

const print2  = (object) =>  `${object.firstName} ${object.lastName} is ${object.age} years old ${object.job} based in ${object.city}`

console.log(print2(person));


//3
console.log(Object.keys(person).length);