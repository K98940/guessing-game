class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min
        this.max = max
        this.n = 0
    }

    guess() {
        this.n = Math.ceil((this.min + this.max) / 2)
        console.log(`guess=${this.n}, min=${this.min}, max=${this.max}`)
        return this.n
    }

    lower() {
        this.max = this.n
    }

    greater() {
        this.min = this.n
    }
}

module.exports = GuessingGame;
