class student {

    constructor(name, course) {
        this.name = name;
        this.schedule = {};
        this.course = course;
    }

    setName(name){
        this.name = name
    }

    setSchedule(day,time){
        this.schedule[day] = time;

    }

    setCourse(course, year ){
        this.course = course;
        this.year = year;
    }
    
    addName(name) {
        this.name = name;
    }

    addSchedule(day,time) {
        this.schedule[day] = time;
    }

    addCourse(course, year) {
        this.course = course
        this.year = year 
    }  
}



module.exports = student