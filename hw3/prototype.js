class School{
    constructor(options){
        this.name = options.name
        this.language = options.language
    }
    languages(){
        console.log('I speak', this.language)
    }

}

const student = new School({name:'Liza',language:'English'})
console.log(student)
student.languages()

class University extends School{
constructor(options){
    super(options)

    this.age = options.age
    this.studyHours = options.studyHours

}
ages(){hhh
    super.languages()
    console.log('I am', this.age ,'years old')
}
}
const student1 = new University({name:'Anna',language:'French',age:23,studyHours:8})
student1.ages()




class Work extends University{
constructor(options){
    super(options)
    this.salary = options.salary
}
growSalary(){
    super.ages()
   let newSalary = this.salary + 300
    console.log('My salary in 3 months will be', newSalary)

}
}
const worker = new Work({name:'Tom',language:'Russian',age:47,salary:1000});
worker.growSalary()
