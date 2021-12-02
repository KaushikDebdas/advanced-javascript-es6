class Person {
    constructor(fristName, lastName, salary) {
        this.fristName = fristName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 25000);
console.log(heroPerson);

const friendlyPerson = new Person('Friendly', 'Golam', 35000);
console.log(friendlyPerson);