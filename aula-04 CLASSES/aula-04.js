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

class Animal{
    
}


