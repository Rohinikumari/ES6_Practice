const message = 'Hello World'

const iter = message[Symbol.iterator]()

let cur = iter.next()

while(cur.done === false){
    console.log(cur.value)
    cur = iter.next()
}