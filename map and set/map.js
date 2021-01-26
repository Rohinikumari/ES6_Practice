const map = new Map([
    ['my awesome keys',10],
    ['key 2',{}]
])
//map.clear()
map.set('new key',102)
console.log(map)

const entries = map.entries()
for(let[key,value] of entries){
    console.log(key)
    console.log(value)
}

map.forEach((value,key) => {
    console.log(value)
    console.log(key)
})

//loo up method
console.log(map.has('new key'))

console.log(map.get('my awesome keys'))

console.log([...map.values()])

console.log([...map.keys()])