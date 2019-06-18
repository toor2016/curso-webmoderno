Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.40, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false },
]

let produtosFrageis = p => p.fragil
let produtosCaros = p => p.preco >= 2500

let produtosFiltrados = produtos.filter2(produtosFrageis).filter2(produtosCaros)
console.log(produtosFiltrados)