// we can only use objects for weakmap same applies to weakset

const map = new Map()
const weakmap = new WeakMap()

    //self executing function
    (function () {
        let a = { x: 1 }
        let b = { y: 1 }

        map.set(a, 3)
        //weakmap.set(b, 3)

    }())

console.log(map)