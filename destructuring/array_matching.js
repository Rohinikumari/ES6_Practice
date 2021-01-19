// const numbers = [1,2,3,4]
// const [a,b,c,d] = numbers
// console.log(a,b)

// function getConfig(){
//     return [true,25,1,2,3,4,5,6]
// }

// const [isOn,amount,...rest] = getConfig()
// console.log(isOn,amount,rest)


var isOn = false
var amount = 10
function setConfig([_isOn, _amount]) {
    isOn = _isOn
    amount = _amount
}
setConfig([true, 20])
console.log(isOn, amount)