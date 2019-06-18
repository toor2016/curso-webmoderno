const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome));

const exibirNomeAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirNomeAprovados)