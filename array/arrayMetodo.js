const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//Remove o ultimo elemento do array
pilotos.pop() //massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

//Remove o primeiro elemento
pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splide pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//novo array a partir da posicao x
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)