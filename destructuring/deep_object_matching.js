function getConfig() {
    return {
        isOn: true,
        amount: 10,
        server: {
            a: true,
            b: false
        }
    }
}
let { isOn: mySpecialIsOnBool, amount: restartTimeout, server: { b: serverB } } = getConfig()
console.log(serverB)