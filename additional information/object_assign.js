const obj1 = { skills: { running: true } }
const obj2 = { name: 'Rohini', age: 28, skills: { swimming: true } }
const obj3 = { hasADog: true }
Object.assign(obj1, obj2, obj3)
console.log(obj1)