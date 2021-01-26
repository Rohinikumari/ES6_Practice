function getName() {
    return Promise.resolve('Rohini')
}

function getAge() {
    //return Promise.reject(`an error has occured`)
    return Promise.resolve(10)
}

async function main() {
    try {
        const [name, age] = await Promise.all([getName(), getAge()])
        console.log(name)
        console.log(age)
    } catch (err) {
        console.log(err)
    }
}
main()


