let log = console.log;

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 };

// Create a method that prints: "John smith is a student in class 12"
const printSentence = (obj) => {
    log(`${student.firstName} ${student.lastName} is a student in class `)
}
printSentence(student)

// Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France"

const person = {
    firstName: 'Hank',
    lastName: 'Chinaski',
    age: 55,
    job: 'mail carrier',
    city: 'Los Angeles',
    state: 'CA',
    printInfo: function() {
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} from ${this.city}, ${this.state}.`
    }
}
log(person.printInfo())

// Write a method to get the length of the person object
log(Object.keys(person).length)