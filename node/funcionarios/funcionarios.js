const axios = require('axios')

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.js'

const chineses = f => f.pais == 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    //mulher chinesas com menor salario
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)

}).catch(erro => {
    console.log(erro)
})

const cep = '88352710'
const urlViaCep = `http://viacep.com.br/ws/${cep}/json/`

axios.get(urlViaCep).then(response => {
    const resposta = response.data
    console.log(resposta)
})