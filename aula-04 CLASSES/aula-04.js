/* CLASSES JS

 */

// Método Antigo de Classes p/ Criação de Objetos
console.log("\n ------- Construtores de Objetos ------\n")

class Jogador { 
    nome = ''
    time = ''
    posição = ''
    fazerGol = function () { console.log(`\nGOOOOOL do ${this.nome}!!!\n`) }
}

const neymar = new Jogador() // Definição Manual
neymar.nome = "Neymar"
neymar.time = "Santos"
neymar.posição = "Atacante"

console.log(neymar)
neymar.fazerGol()


// Método Moderno p/ Criação de Classes & Objetos
class Jogador2{
    constructor(jogadorNome, jogadorTime, jogadorPosição){ // Contrutor para criar objetos
        this.nome = jogadorNome
        this.time = jogadorTime
        this.posição = jogadorPosição
    }
    fazerGol(){
        console.log(`\nGOOOOOL do ${this.nome}!!!\n`)
    }
}

const CR7 = new Jogador2("Cristiano Ronaldo", "Juventus", "Atacante")

console.log(CR7)
CR7.fazerGol()

/* PROTEÇÃO DE CLASSES
- # -> para definir uma propriedade privada, sendo somente acessada dentro da classe
- get() -> intercepta quando alguem vai acessar uma propriedade
- set() -> intercepta quando alguem vai alterar uma propriedade
*/

console.log("\n ------- GETTERS e SETTERS ------\n")

class ContaBancária{
    constructor(nomeTitular){
        this.nome = nomeTitular
    }

    #saldo = 0 // Propriedade Privada, não é possível busca-lá com contaNova.#saldo

    get _verSaldo(){return `${this.nome} possui R$${this.#saldo}`}
    
    set _deposito(valor){
        if (!isNaN(valor)){  // isNaN comparada e retorna se o objeto é um NaN
            this.#saldo = valor
        }
        else return console.log("Por favor, insira apenas números.")
    }

}

const contaNova = new ContaBancária("Vicente Pedroso")
console.log(contaNova)
contaNova._deposito = 100
console.log(contaNova._verSaldo)

console.log("\n ------- Herança, super() e Override ------\n")

/* Herança permite que uma classe filha reutilize propriedades e métodos de uma classe pai usando "extends".

→ Sintaxe básica: class Filho extends Pai {}

→ super()
- Usado dentro do constructor da classe filha.
- Chama o constructor da classe pai.
- Deve ser chamado antes de usar "this".
- Serve para inicializar propriedades herdadas.

→ Override (Sobrescrita)
- Quando a classe filha redefine um método da classe pai.
- O método da filha substitui o do pai.

Ex:
fazerSom() {
  console.log("Novo comportamento");
}

→ super.metodo()
- Chama o método original da classe pai.
- Usado quando queremos manter o comportamento do pai
  e adicionar algo novo. */

// Classe Pai Animal
class Animal{
    constructor(nomeAnimal){
        this.nome = nomeAnimal
    }
    fazerSom(){
        console.log("~~ Som Genérico ~~")
    }
}

// Classe Filha Cachorro
class Cachorro extends Animal{
    constructor(nomeCachorro, raçaCachorro){
        super(nomeCachorro) // super() para passar o nome
        this.raca = raçaCachorro
    }

    fazerSom(){ // isso é um OVERRIDE: Quando a classe filha altera um método da classe pai
        console.log("~~ Au au au ~~")
    }
}

class Gato extends Animal{
    constructor(nomeGato, corGato){
        super(nomeGato)
        this.cor = corGato
    }
    fazerSom(){
        super.fazerSom() // Executa primeiro a função pai [Som Genérico]
        console.log("~~ Miaauuu ~~") //Executa depois a função própria [Miauuu]
    }
}

console.log("Classe Pai:")
const macaco = new Animal("Macaco")
console.log(macaco)
macaco.fazerSom()

console.log("\nClasse Filha:")
const dog = new Cachorro("Rex", "Pincher")
console.log(dog)
dog.fazerSom()

console.log("\nClasse Filha 2 com super.metodo():")
const gato = new Gato("Tigrinho", "Listrado" )
console.log(gato)
gato.fazerSom() 


