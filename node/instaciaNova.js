//Utilizar uma factory
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}