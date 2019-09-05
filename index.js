var student = require('./student1.js')
var input = require("readline-sync")
var list_student = new Array();


while(1){
    while(input.question("Proceed or Exit? Proceed/Exit : ") != "Exit"){
        var student_a = new student();
        let choice = input.question("Add,Remove or View Student? add/remove/view : ")
        if(choice === "add"){
            student_a.addName(input.question("\tName: "))
            student_a.addCourse(input.question("\tCourse: "),(input.question("\tYear: ")))
            while(1){
                let ask = input.question("Add Schedule? Add: ")
                if(ask == "add"){
                    student_a.addSchedule(input.question("\tDay: "),(input.question("\tTime: ")))
                }else{
                    break
                }
            }
            list_student.push(student_a); 
        }else if(choice === "remove"){
            if(list_student.length == 0){
                console.log("You can't remove student from the list.")
            }else{
                console.log("You can remove student by it's index.")
                let ind = input.question("Enter the index of student: ")
                list_student.splice(parseInt(ind),1)
                console.log("Student Deleted!")
                console.log(list_student)
            }
        }else if(choice === "view") {
            console.log(list_student)
        }else{
            console.log("\nInvalid Input!\n")
        }
    }
    console.log("\nExit!")
    break
}
