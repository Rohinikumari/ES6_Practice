const numbers = [1,2,3,4,5,6,7,8]

function getMax(arr){
    let max = -Infinity;
    arr.forEach(number => {
        max = Math.max(max,number)
    })
    return max
}

const max = getMax(numbers)
console.log(`max : ${max}`)