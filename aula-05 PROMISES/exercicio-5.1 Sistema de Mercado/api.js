const Estoque = 'dados.json'

export async function simularBuscaAPI(query) {
    console.log("\nBuscando item no estoque...")
    query = query.toLowerCase()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(Estoque)
                .then(response => response.json())
                .then(data => {
                    data.forEach((produto) => {
                        if (produto.nome.toLowerCase().includes(query)) {
                            resolve(produto)
                        }
                    })
                    reject("Produto não encontrado...")
                })
                .catch(err => console.log("ERRO:", err))


        }, 1000)
    })
}


export async function buscarTodosProdutos() {
    console.log("\nBuscando todos os itens no estoque...")
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            fetch(Estoque)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => console.log("ERRO:", err))
        },3000)
    })
    
}



