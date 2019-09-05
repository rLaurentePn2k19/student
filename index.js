var student = require('./student1.js')
var input = require("readline-sync")
var list_student = new Array();
var student_a = new student;

student_a.setSchedule("monday","10am-11am")
console.log(student_a.setSchedule)
console.log(student_a.getSchedule)
while(input.question("Exit? Yes/No : ") != "Yes"){
    let a = input.question("Add new Student? ")
    if(a == "Yes"){
        student_a.addName(input.question("\tName: "))
        student_a.addCourse(input.question("\tCourse: "),(input.question("\tYear: ")))
        console.log("Add your schedule here:")
        student_a.addSchedule(input.question("\tDay: "),(input.question("\tTime: ")))
        list_student.push(student_a);  
    }else if(a == "No"){
        console.log(list_student);
    }else {
        console.log("Invalid Input!")
        break
    }
    console.log(list_student);
    console.log(list_student.length)
}
