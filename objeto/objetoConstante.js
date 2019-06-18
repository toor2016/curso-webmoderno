const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Congela objeto, não pode alterar nada
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)