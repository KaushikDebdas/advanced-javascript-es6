class Student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "Kolumuneesa School"
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "Mahi");

console.log(student1, student2);