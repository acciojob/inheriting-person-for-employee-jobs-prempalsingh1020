// complete this js code
function Person(name, age) {

	constructor(name, age){
    this.name = name;
		this.age = age;
	}
	geet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old.`)
	}
}

function Employee(name, age, jobTitle) {
	constructor(jobTitle){
		super(Person);
		this.jobTitle = jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
