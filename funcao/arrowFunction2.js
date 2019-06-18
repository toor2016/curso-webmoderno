function Pessoa() {
    this.idade = 0

    setInterval(() => {
        self.idade ++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

