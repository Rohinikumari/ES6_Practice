//Static member means method attached to the actual class
const Person = class{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    static setName(person,name){
        person.name = name
    }
}

const person = new Person('Bob',20)
Person.setName(person,'Rohini')
console.log(person)