//1.

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 };

console.log("student ==> ", `${student.firstName} ${student.lastName} is a student in class ${student.class}`); //student ==>  John Smith is a student in class 12

//2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person ={
    first: "John",
    last: "Smith",
    age: 41,
    job: "engineer",
    city: "France",
    length: function () {
        return objectToArray = Object.entries(person).length;
    }
}

console.log("person ==> ", `${person.first} ${person.last} is a ${person.age} year old ${person.job} living in ${person.city}`);
console.log("length of person object including length ==> ", person.length());
//person ==>  John Smith is a 41 year old engineer living in France


//Bonus - Write a method to get the length of the person object.
