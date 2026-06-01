class Person {
    constructor( name , age ) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log( ` Name : ${this.name} Age : ${this.age}`);
    }
}

class Student extends Person  {
    constructor(name , age , course) {
        super( name , age);
        this.course = course;
    }

    study() {
        console.log(`Study ${this.course}`);
    }
}

class Teacher extends Person  {
    constructor(name , age , subject) {
        super( name , age);
        this.subject = subject;
    }

    teach() {
        console.log(`Subject ${this.subject}`);
    }
}

const stu = new Student("Kiran" , 23 , "BE");
const teach = new Teacher("Ahbi" , 19 , "Comman Sense");

stu.introduce();
stu.study();

teach.introduce();
teach.teach();