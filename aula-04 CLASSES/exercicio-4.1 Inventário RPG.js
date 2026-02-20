/* Sistema de Inventário de RPG
- Enunciado: Crie uma classe chamado personagem.
- Propriedades: nome (string), nivel (number) e inventario (um array de strings).
- Adicione um método chamado adicionarItem que recebe um novo item e o insere no array, mas apenas se o inventário tiver menos de 4 itens. 
Se estiver cheio, exiba uma mensagem "Inventário lotado!".
- Adicione um método exibirStatus que imprime no console todos os detalhes do personagem de forma organizada.
- [BONUS FEITO POR MIM]: permitir a entrada um ou vários itens de uma vez
 */

class personagemRPG {
    constructor(nome, classe, level) {
        this.nome = nome
        this.classe = classe
        this.level = level
    }

    #inventario = [] // Propriedade Privada e Segura

    set adicionarItem(itens) {
        switch (typeof itens) { // Lógica para permitir a entrada de multiplos valores (arrays) ou valores solitarios
            case "string": // Caso seja um item unico
                if (!(this.#inventario.length < 4)) { return console.log(`- Inventário lotado! ${itens} não adicionado`) }
                else {
                    this.#inventario.push(" " + itens)
                    console.log(`- ${itens} adicionado ao inventário do ${this.nome}`)
                }
                break

            case "object": // Caso seja varios itens de uma vez
                itens.forEach((item) => {
                    if (!(this.#inventario.length < 4)) { return console.log(`- Inventário lotado! ${item} não adicionado`) }
                    else {
                        this.#inventario.push(" " + item)
                        console.log(`- ${item} adicionado ao inventário do ${this.nome}`)
                    }
                })
                break

            default:
                return console.log("\n Insira um item válido")
        }
    }

    exibirStatus = function () {
        console.log(`\nPersonagem: ${this.nome}`)
        console.log(`Classe: ${this.classe}`)
        console.log(`Nível: ${this.level}`)
        console.log(`Inventário: ${this.#inventario}\n`)
    }
}

const mago = new personagemRPG("Mago Branco", "Mago", 8)
mago.adicionarItem = ["Cajado Mágico", "Livro Mágico", "Poção", "Capa da Invisibilidade", "Revólver"]
mago.exibirStatus()

const goblin = new personagemRPG("Goblin Zangado", "Goblin", 5)
goblin.exibirStatus()
goblin.adicionarItem = "Espada"
goblin.adicionarItem = "Lança"
goblin.adicionarItem = "Poção"
goblin.adicionarItem = "Cajado"
goblin.adicionarItem = "Faca"
goblin.exibirStatus()






