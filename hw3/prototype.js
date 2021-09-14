const School = function(options) {
    this.name = options.name
    this.language = options.language
   }

   School.prototype.languages = function(){
    console.log('I speak', this.language)
}
const student = new School({name:'Liza',language:'English'}) 
student.languages()
console.log(student)


const Student1 = function(options){
    School.apply(this,arguments)
    this.age = options.age
    this.studyHours = options.studyHours
}
Student1.prototype = Object.create(School.prototype)
Student1.prototype.constructor = Student1

Student1.prototype.languages = function(){
    School.prototype.languages.apply(this,arguments)
    console.log('I speak', this.language + " and i am " + this.age)
    
}
const student1 = new Student1({name:'Anna',language:'French',age:23,studyHours:8})
console.log(student1)
student1.languages()


const Worker = function(options){
    Student1.apply(this,arguments)
    this.salary = options.salary
}
Worker.prototype = Object.create(Student1.prototype)
Worker.prototype.constructor = Worker
Worker.prototype.languages = function(){
    let newSalary = this.salary + 300
    console.log('I speak', this.language + ' and my salary in 3 months will be', newSalary)
}
const worker = new Worker({name:'Tom',language:'Russian',age:47,salary:1000});
worker.languages()
console.log(worker)
