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

getName()
    .then(name => {
        console.log(name)
        return getAge()
    })
    .then(age => { console.log(age) })

// or

getName()
    .then(name => {
        console.log(name)
    })
    .then(getAge)
    .then(age => { console.log(age) })