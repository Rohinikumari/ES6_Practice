/* in order to avoid callback hell we will use Promise
function getName(callback){
    setTimeout(()=>{
        callback('Rohini')
    },4000)
}

function getAge(callback){
    setTimeout(()=>{
        callback(10)
    },1000)
}

getName((name)=>{
    console.log(name)
    getAge((age)=>{
        console.log(age)
    })
})
*/

function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Rohini')
        }, 4000)
    })

}

function getAge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    })
}

getName()
.then(name => {
    console.log(name)
})
