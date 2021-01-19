class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getName(){
        return this.name
    }
}

class Employee extends Person{
    constructor(name,age,years){
        super(name,age)
        this.years = years
    }
    getName(){
        return super.getName() +'!'
    }
}
const employee = new Employee('Rohini',25,1992)
console.log(employee)
console.log(employee.getName())