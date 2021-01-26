function getName() {
    return new Promise((resolve, reject) => {
        const obj = {}
        obj.x.y.z;
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
    .catch(err => { console.log(err) })
