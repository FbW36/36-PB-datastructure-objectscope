// 1
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 
}
    function result () {
        return `${student.firstName} ${student.lastName} is a student in class ${student.class}`
    }
console.log('result ==>', result())

// 1 alternative
const student1 = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    output: function () {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}` }
}
console.log(student1.output());

// 2
const person = {
firstName: 'Jane',
lastName:'Doe',
age: 26,
job: 'Architect',
city: 'Sao Paulo'
}
function printPerson () {
    return `${person.firstName} ${person.lastName} is a ${person.age} years old ${person.job} living in ${person.city}`
}
console.log(printPerson())

// 3
function lengthPerson () {
    return Object.keys(person).length
}
console.log('The length of person object is', lengthPerson())