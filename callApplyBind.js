const normalPerson ={
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);   // 15000 - 150 = 14850

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Friendly',
    lastName: 'Golam',
    salary: 35000
}

// normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(2000);
console.log(friendlyPerson.salary);
