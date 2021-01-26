const obj = {
    *myGenerator() {
        yield* [1,2,3]
        yield 'Hello World'
    }
}
const iter = obj.myGenerator()
console.log([...iter])