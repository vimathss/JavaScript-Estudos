/* 1. Soma de Elementos
- Enunciado: Crie uma função chamada somaArray que recebe um array de números e retorna a soma de 
todos os elementos. Utilize o método .reduce().
*/

function somaArray(array){
    return array.reduce((acumulador, valorAtual) => acumulador+=valorAtual, 0)
}

console.log("---- Soma Valores de um Array ----")
console.log(somaArray([2,46,21,76,34]))

/* 2. Filtragem de Valores
- Enunciado: Dado um array de idades [12, 18, 22, 15, 40, 10, 35], crie um novo array contendo 
apenas as idades maiores ou iguais a 18 anos. Utilize o método .filter(). */
idades = [12, 18, 22, 15, 40, 10, 35]
maioresDeIdade = idades.filter(posicao => posicao >= 18)
console.log("\n---- Array Filtrado ----")
console.log(maioresDeIdade)

/* 3. Transformação de Dados
- Enunciado: Você tem um array de objetos representando produtos: [{nome: "Camisa", preco: 50}, {nome: "Calça", preco: 100}].
- Crie um novo array que contenha apenas os preços dos produtos com um aumento de 10%. 
- Utilize o método .map(). */
produtos =  [{nome: "Camisa", preco: 50}, {nome: "Calça", preco: 100}, {nome: "Shorts", preco: 40}]
valoresAumento = produtos.map((produto) => produto.preco + produto.preco * 0.1)

console.log("\n---- Preços com Desconto ----")
console.log(valoresAumento)

/* 4. Busca de Elemento
- Enunciado: Crie uma função que receba um array de strings (nomes de frutas) e uma string de busca. 
- A função deve retornar true se a fruta existir no array e false caso contrário, sem usar loops for  */

function verEstoque(array, query){
    if (array.includes(query)) return true
    else return false
}

let frutas = ['Maçã', 'Banana', 'Laranja', `Goiaba`, `Manga`, `Tomate`];

console.log("\n---- Busca de Elemento ----")
console.log(verEstoque(frutas, "Banana"))
console.log(verEstoque(frutas, "Batata"))


/* 5. Inversão e Formatação
- Enunciado: Dado o array ["O", "M", "A", "E", "T"], inverta a ordem dos elementos e junte-os para 
formar uma única string. (Dica: use .reverse() e .join()). */

console.log("\n---- Inversão de Array ----")

array = ["O", "M", "A", "E", "T"]
arrayInvertido = array.reverse()
console.log(arrayInvertido.join(""))