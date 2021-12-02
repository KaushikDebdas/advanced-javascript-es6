const normalPerson ={
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
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

// CALL FUNCTION
normalPerson.chargeBill.call(heroPerson,900, 100, 10);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson,500, 100, 50);
console.log(friendlyPerson.salary);

// APPLY FUNCTION
normalPerson.chargeBill.apply(heroPerson, [500,500,100]);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, [500, 100, 50]);
console.log(friendlyPerson.salary);
