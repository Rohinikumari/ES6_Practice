/**Symbols -> it do not count as a property orobject */
const symbol = Symbol()
const obj = {
    [symbol]:'Hello world'
}
console.log(obj)