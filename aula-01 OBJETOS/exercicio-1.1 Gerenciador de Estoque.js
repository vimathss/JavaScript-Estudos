/* Manipulação de Objetos (O Gerenciador de Estoque)
-Enunciado: Imagine que você está desenvolvendo o sistema de uma loja. Você precisa criar um objeto que represente um produto e funções que manipulem esse objeto.
O que fazer:
- Crie um objeto chamado produto com as propriedades: nome, preco, quantidade e categoria.
- Adicione um método (uma função dentro do objeto) chamado verificarDisponibilidade que retorna true se a quantidade for maior que 0 e false caso contrário.
- Crie uma função externa chamada aplicarDesconto que recebe o objeto produto e um percentual de desconto, alterando o valor do preço original.
- Exiba no console uma frase formatada: "O produto [nome] da categoria [categoria] custa agora R$ [preco]." */

const produto = {
    nome: "Banana Prata",
    preco: 6.55,
    categoria: "fruta",
    quantidade: 155,
    verificarDisponibilidade: function(){
        if (this.quantidade > 0) return true
        else return false
    }
}

function aplicarDesconto(produtoOBJ, desconto){
    precoNovo = (produtoOBJ.preco * desconto).toFixed(2)
    console.log(`O produto ${produto.nome} da categoria ${produto.categoria} custa agora R$ ${precoNovo}`)
}

console.log("\n Produto: ")
console.log(produto)
console.log("\n Disponível no Estoque?: ")
console.log(produto.verificarDisponibilidade())
console.log("\n Aplicar desconto de 70%: ")
console.log(aplicarDesconto(produto, 0.7))

