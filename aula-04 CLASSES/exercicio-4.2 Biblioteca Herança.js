/* Classes e Herança - Sistema de Biblioteca
- Enunciado: Bibliotecas precisam organizar diferentes tipos de itens. Vamos usar Classes para criar uma estrutura onde um item genérico 
compartilha lógica com um item específico (um livro).
- Crie uma classe chamada Material com um constructor que recebe titulo e anoPublicacao.
- Adicione um método na classe Material chamado exibirResumo que imprime o título e o ano no console.
- Crie uma classe chamada Livro que estende (extends) a classe Material.
- O Livro deve ter uma propriedade adicional autor. Não esqueça de usar o super() no construtor.
- Sobrescreva o método exibirResumo na classe Livro para que ele também mostre o nome do autor.
- Instancie (crie) um novo Livro e chame o método exibirResumo. */

class Material {
    constructor(titulo, anoPublicacao) {
        this.titulo = titulo
        this.anoPublicacao = anoPublicacao
    }
    exibirResumo() {
        console.log(`\nTítulo: ${this.titulo}, Ano de Publicação: ${this.anoPublicacao}`)
    }
}

class Livro extends Material {
    constructor(titulo, anoPublicacao, autorLivro) {
        super(titulo, anoPublicacao)
        this.autor = autorLivro
    }
    exibirResumo() { // OverRide no Método
        console.log(`\nTítulo: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`)

    }
}

const livro1 = new Livro("A Vida Não é Util", "2020", "Ailton Krenak")
console.log(livro1)
livro1.exibirResumo()