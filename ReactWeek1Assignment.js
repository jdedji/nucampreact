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
        console.log(`${this.name}`);
    }
      } 
        
const bootcamp1 = new Bootcamp("jean", 1, 0);
bootcamp1

