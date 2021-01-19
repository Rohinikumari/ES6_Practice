const Person = class{
    constructor(name,age){
        this._name = name
        this._age = age
    }
    get name(){
        return this._name +'!'
    }
    set name(name){
        this._name = name
    }
}

const person = new Person('Bob',20)
const name = person.name //getter
console.log(name)

person.name = 'Rohini'
console.log(person)