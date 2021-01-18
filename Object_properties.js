let firstname = 'Rohini'
let lastname = 'Singh'
let age = 25

let person = {firstname,lastname,age}
console.log(person)

let key = 'lastname'
function getKey(){
    return 'Hello'
}
person = {
    firstname:'Rohini',
    [key] : 'Singh',
    [getKey()+'Rohini']:'testing'
}
console.log(person)