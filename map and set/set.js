const set = new Set([1,3,4,2,1,2])
//set.clear()
set.add(10)
set.add(100)
set.delete(10)
console.log(set)

// for iteration
const entries = set.entries()
for(let [values] of entries){
    console.log(values)
}

//or
const entry = [...set.entries()]
console.log(entry)

//to check the value
console.log(set.has(100))

console.log([...set.keys()])
console.log([...set.values()])

set.forEach(values => {
    console.log(values)
})

for(let values of set){
    console.log(values)
}
