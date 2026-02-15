/* OBJETOS JS
- Objetos são váriaveis com muitos valores
- Os objetos podem ter métodos, que são funções como propriedades

 */

console.log("------- OBJETOS ------- ")

// Forma Literal de Criar um Objeto
const pessoa1 = { 
    nome: "Vicente",
    idade: 18,
    curso: "ADS",
    falar: function(){ console.log(`\nOlá, eu sou o ${this.nome}`)}
}
pessoa1.falar()

// Criar um Objeto com o new Object()
const pessoa2 = new Object() 
pessoa2.nome = "Mel"
pessoa2.idade = 17
pessoa2.curso = "Nutrição"

// Diferentes Valores -> Array e Objeto como valores
const videogame = {
    nome:"Minecraft",
    lançamento:"2011", 
    versao: ["1.8.9", "1.7.0"], // Array
    online: true,
    criador: { // Objeto
        empresa: "Mojang",
        nome: "Notch"
    }
}
console.log(videogame)


/* Iterando Objetos
- Iterar um objeto JavaScript significa percorrer suas propriedades (pares chave-valor) uma a uma
*/

const aluno = {
  nome: "Vicente",
  turma: "1-ADS",
  notas: [8, 9, 10]
};

// Mostra todas as propriedades e valores do objeto
for (let chave in aluno) { 
  console.log(chave, aluno[chave]); // chave = nome, turma, notas & aluno[chave] = Vicente, 1-ADS, [8, 9, 10]
}

// Mostra todas as propriedades do objeto
console.log("\n KEYS:" + Object.keys(aluno))

// Mostra todos os valores do objeto
console.log("\n VALUES:" + Object.values(aluno))

// Mostra um array das propriedades com os valores do objeto
console.log("\n ENTRIES:" + Object.entries(aluno))


/* Destructuring (Desestruturação)
- Destructuring é uma forma elegante de extrair propriedades
*/

const {nome, idade} = pessoa1
console.log(`\nNome Desestruturado: ${nome}, Idade Desestruturada: ${idade}`)


/* Spread Operator (...)
- Permite que você "despeje" ou "espalhe" os elementos de um objeto dentro de outro lugar
- Funciona com Arrays e Objetos
*/

// Combinação de Arrays
const frutas = ['maçã', 'banana']
const vegetais = ['cenoura', 'batata']

const feira = [...frutas, ...vegetais, 'ovos']
console.log("\nCombinando Arrays com Spread: " + feira)

// Atualizar objetos sem modificar o original 

const pessoa1Atualizada = {
    ...pessoa1,
    nome: "Vicente Matheus Collin Pedroso",
    sexo: "Masculino"
}

console.log("\n Atualizando Objeto com Spread")
console.log(pessoa1Atualizada)

// Passando Argumentos de Objetos
function calcularVolume(l, w, h) {
    return l * w * h
}

const dimensoes = [10, 5, 2]

// Em vez de calcularVolume(dimensoes[0], dimensoes[1], dimensoes[2])
calcularVolume(...dimensoes)

