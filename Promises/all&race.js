function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Rohini')
        }, 2000)
    })

}

function getAge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    })
}

Promise.all([getName(),getAge()])
.then(([name,age])=>{
    console.log(name)
    console.log(age)
})

// race return the first one that finishes
Promise.race([getName(),getAge()])
.then((value)=>{
    console.log(value)
})