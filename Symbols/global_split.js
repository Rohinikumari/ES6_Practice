// const symbolA= Symbol.for('my unique')
// const symbolB= Symbol.for('my unique!')
// console.log(symbolA === symbolB)

const capsSplitter = {
    [Symbol.split](string) {
        return string
        .split(' ')
        .map(s => s.toUpperCase())
    }
}
const message = 'hello world'
const splits = message.split(capsSplitter)
console.log(splits)