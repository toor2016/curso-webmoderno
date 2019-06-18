const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.40, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false },
]

let produtosFrageis = p => p.fragil
let produtosCaros = p => p.preco >= 500

let produtosFiltrados = produtos.filter(produtosFrageis).filter(produtosCaros)
console.log(produtosFiltrados)