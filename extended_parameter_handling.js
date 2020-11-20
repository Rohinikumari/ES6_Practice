//rest operator
/**can't define anything after rest operator */
function print(age, ...arr) {
    //let arr = Array.prototype.slice.call(arguments)
    console.log(age)
    console.log(arr)
}

print(1, 2, 3, 4, 5, 'Rohini', {})


// spread operator
function printSpread(...arrs) {
    arrs = ["<>", ...arrs]
    console.log(arrs)
}

printSpread(1, 2, 3, 4, 5, 'Rohini')

function add(a,b){
    return a+b
}
const number = [1,10]
console.log(add(...number))

const numbers=[10,20,30,40,50]
const max = Math.max(...numbers)
console.log(max)