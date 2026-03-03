/* Fetch e Async/Await

FETCH: Responsável por fazer requisições web
- Na analogia de uma cozinha, o fetch seria o garçom que leva o pedido até a cozinha (servidor) e promete voltar.
- Ele pode trazer o prato (sucesso) ou a notícia de que o ingrediente acabou (erro de rede).
- Sintaxe: 
    fetch('https://api.exemplo.com/dados')
        .then(response => response.json()) // Passo essencial
        .then(dados => //lógica de processamento... )


 */


async function main() {

    // Uso básido do Fetch
    console.log("---- Consumo de API c/ Fetch() ----")
    await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
        .then(result => result.json())
        .then(dados => console.log(dados))

    console.log("\n---- Tratamento de Erros com Catch() ----")
    await fetch(`https://pokeapi.co/api/v2/pokemon/vicente/`)
        .then(result => result.json())
        .then(dados => console.log(dados))
        .catch(error => console.log("ERRO NO SISTEMA: ", error))

    console.log("\n---- Tratamento e Verificação de Status ----")
    await fetch(`https://pokeapi.co/api/v2/paginaquenaoexiste/charmander/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Página não encontrada ou erro no servidor')
            }
            return response.json()
        })
        .then(data => console.log(data.name))
        .catch(err => console.log('Erro capturado:', err.message))

    await fetchMetodos()

}

main()

async function fetchMetodos() {

    /* 1. POST: Criando Novos Dados
    - O POST é usado quando você quer enviar informações para o servidor (como cadastrar um usuário ou enviar um comentário) */

    console.log("\n---- Criação de Usuário com Post ----")
    const novoUsuario = {
        title: 'Usuário Novo',
        body: 'bar',
        userId: 1,
    };

    await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST', // Define o verbo HTTP
        headers: {
            'Content-Type': 'application/json' // Avisa que estamos enviando JSON
        },
        body: JSON.stringify(novoUsuario) // Transforma o objeto em String
    })
        .then(res => res.json())
        .then(confimacao => console.log('Criado!', confimacao));

    /* 2. PUT e PATCH: Editando Dados
    Ambos servem para atualizar, mas têm uma diferença conceitual importante:
    - PUT: Substitui o objeto inteiro (como trocar um carro velho por um novo).
    - PATCH: Atualiza apenas campos específicos (como trocar apenas os pneus do carro). */

    console.log("\n---- Substituição Total de Usuários com Put ----")
    const dadosAtualizados = { id: 1, title: 'User Novo', body: 'Substitui tudo', userId: 1 };
    await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(dadosAtualizados),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(data => console.log("Atualizado", data))

    console.log("\n---- Atualização Parcial de Usuários com Patch ----")
    await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'Titulo Atualizado'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(resposta => console.log("Corrigido", resposta))


    // 3. DELETE: Deletar Dados
    console.log("\n---- Apagar Usuário com DELETE ----")
    await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    .then(response => response.json())
    .then(resposta => console.log("Deletado", resposta))





}


