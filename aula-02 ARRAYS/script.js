/* ARRAYS
- Um array é uma variável especial que pode conter mais de um valor por vez.
*/

// A forma mais comum (Literal)
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Acessando pelo índice (Lembre-se: começa no ZERO!)
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[1]); // Saída: Banana

/* MANIPUÇÃO DE ARRAYS

- push(): Adiciona ao final
- pop(): Remove o último
- unshift(): Adiciona ao início
- shift(): Remove o primeiro
- splice(): O "canivete suíço". Pode remover ou adicionar itens em qualquer posição
*/

let animais = ["macaco", "vaca", "leão"]

console.log("\n Array Simples: ")
console.log(animais)

console.log("\n Adicionar ao final com PUSH: ")
animais.push("zebra")
console.log(animais)

console.log("\n Remover ao final com POP: ")
animais.pop()
console.log(animais)

console.log("\n Adicionar ao início com UNSHIFT: ")
animais.unshift("tigre")
console.log(animais)

console.log("\n Remove o primeiro com SHIFT: ")
animais.shift()
console.log(animais)

console.log("\n Adicionar em qualquer posição com SPLICE: ")
animais.splice(1,0, "dinossauro") // Os parâmetros são respectivamente: Posição de Início e Numero de Delete e Itens Adicionados
console.log(animais)

console.log("\n Remover em qualquer posição com SPLICE: ")
animais.splice(1,3) // Os parâmetros são respectivamente: Posição de Início e Numero de Delete
console.log(animais)

/* PERCORRER ARRAYS

- forEach(): Chama uma função (uma função de retorno de chamada) uma vez para cada elemento da matriz
- map(): Cria um novo array transformando cada item do original 
- filter(): Cria um novo array apenas com os itens que passarem em um "teste"
- reduce(): Reduz o array inteiro a um único valor (como somar todos os preços de um carrinho)
- Spread Operator (...): Serve para copiar ou fundir arrays sem alterar o original
- Desestruturação: Extrair valores rapidamente

*/


const telecena = [6, 13, 24, 25, 32, 54]

console.log("\nPecorrer Arrays com ForEach")
telecena.forEach(sorteado => {
    console.log("Telecena ForEach: foi sorteado o número: " + sorteado)
});

console.log("\nPecorrer Arrays com map()")
telecenaMap = telecena.map((sorteado) => sorteado*2) // Cria um novo array duplicando os valores dos numeros sorteados
console.log(telecenaMap)

console.log("\nPecorrer Arrays com filter()")
telecenaFilter = telecena.filter(num => num > 20) // Novo array somente com numeros maiores que 20
console.log(telecenaFilter)

console.log("\nPecorrer Arrays com reduce()")
telecenaReduce = telecena.reduce((acumulador, valorAtual) => acumulador += valorAtual , 0) // Somo todos os valores do array
// Primeiro Parâmetro: Uma Função Callback que recebe dois valores ->
// - acumulador: valor totla que guarda os resultados, inicialmente ele é o valor inicial
// - valorAtual: valor atual do array
// Segundo Parâmetro: Valor inicial para a função
console.log(telecenaReduce)

console.log("\nCopiar Arrays com Spread Operator (...)")
telecenaSpread = [...telecena, "17", "67"] // Copia todos os valores do array inicial e adiciona mais dois
console.log(telecenaSpread)

console.log("\n Pegando os primeiros valores com Desestruturação")
let [telecenaValor1, telecenaValor2, telecenaValor3] = telecena // Pega os 3 primeiros valores do array de forma desestruturada
console.log(telecenaValor1, telecenaValor2, telecenaValor3)
