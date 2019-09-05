class student {
    constructor(name, schedule, course) {
        this.name = name;
        this.schedule = schedule;
        this.course = course;
    }

    setName(name){
        this.name = name
    }

    getName(){
        return name;
    }

    setSchedule(schedule, time){
        this.schedule = schedule;
        this.time = time;
    }

    getSchedule(){
        return schedule;
    }

    setCourse(course, year ){
        this.course = course;
        this.year = year;
    }

    getCourse(){
        return course;
    }
    
    addName(name) {
        this.name = name;
    }

    addSchedule(schedule, time) {
        this.schedule = schedule;
        this.time = time
    }

    addCourse(course, year) {
        this.course = course
        this.year = year 
    }  

    removeName(name){
        this.name = name;
    }
}



module.exports = student