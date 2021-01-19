class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    jump(){
        console.log(`Jump`)
    }
}

class Employee extends Person{
    constructor(name,age,years){
        super(name,age)
        this.years = years
    }
}
const employee = new Employee('Rohini',25,1992)
console.log(employee)
console.log(employee.jump())