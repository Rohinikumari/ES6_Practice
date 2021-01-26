function getName(){
    setTimeout(()=>{
        iter.next('Bob')
    },1000)
}

function getAge(){
    setTimeout(()=>{
        iter.next(10)
    })
}
const iter = (function* (){
    const name = yield getName()
    console.log(name)
    const age = yield getAge()
    console.log(age)
}())
iter.next()