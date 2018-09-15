module.exports = function makeExchange(currency) {
    let coins = {}
    if (currency == 0) {
        return coins
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if (currency >= 50) {
        coins.H = Math.trunc(currency / 50)
        currency -= coins.H * 50
    }
    if (currency >= 25) {
        coins.Q = Math.trunc(currency / 25)
        currency -= coins.Q * 25
    }
    if (currency >= 10) {
        coins.D = Math.trunc(currency / 10)
        currency -= coins.D * 10
    }
    if (currency >= 5) {
        coins.N = Math.trunc(currency / 5)
        currency -= coins.N * 5
    }
    if (currency > 0) {
        coins.P = currency
    }


    return coins
}

