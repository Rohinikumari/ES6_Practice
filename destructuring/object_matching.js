// function getConfig(){
//     return{
//         isOn : true,
//         amount: 10
//     }
// }

// const {isOn,amount} = getConfig()
// console.log(isOn,amount)
var config = {}
function setConfig({isOn,amount}) {
    config = {isOn,amount}

}
setConfig({isOn:false,amount:20})
console.log(config)