// class -> is not a function, it's an object which we are trying to construct
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    jump(){
        console.log('Jump')
    }
}
// Person.prototype.jump = function(){
//     console.log('Jump')
// }
const person = new Person('Rohini', 25)
console.log(person)
console.log(person.jump())