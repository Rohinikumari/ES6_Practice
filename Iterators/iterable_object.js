const codes = {
    [Symbol.iterator]() {
        let cur = 0
        return {
            next() {
                return { value: Math.random(), done: cur++ > 4 }
            }
        }
    }
}

for (let code of codes) {
    console.log(code)
}