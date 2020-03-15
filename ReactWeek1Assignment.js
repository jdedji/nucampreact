class Student{
    constructor(name, email, community){
this.name =  name;
this.email = email;
this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister){
        if(this.students.includes(studentToRegister)){
            console.log("Already Registered")
        }
        else{
            this.students.push(studentToRegister)
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.level}.`);
        }
        return this.students
    }

}

        
const Nucamp = new Bootcamp("Nucamp", "react");
const Nucamp2 = new Bootcamp("Other", "js");

const Jean = new Student("Jean", "jean@gmail.com", "Detroit");
const juan = new Student("juan", "juan@gmail.com", "Detroit");

bootcamp1.registerStudent(Jean);

bootcamp1.registerStudent(juan);
bootcamp1.registerStudent(juan);
console.log(Nucamp)


