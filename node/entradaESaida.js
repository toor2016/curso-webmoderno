const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anônimo!')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: fera')
    process.stdin.on('data', data => {
        const nome = data.toString().replace("fera")

        process.stdout.write(`Fala ${nome}!! fera`)
        process.exit()
    })
}