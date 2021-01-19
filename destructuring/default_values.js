// const arr = [1, 'hello']
// var [amount, a = 100] = arr
// console.log(amount, a)

//object matching
const obj = {
    isOn: false,
    //amount: 10
}
var { isOn: isServerOn, amount = 20 } = obj
console.log(isServerOn, amount)