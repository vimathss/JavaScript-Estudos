import { simularBuscaAPI, buscarTodosProdutos } from './api.js'

const btnSearch = document.getElementById("btn-buscar")
const btnMostrarTodos = document.getElementById("btn-mostrar-todos")
const inputSearch = document.getElementById("input-busca")
const listaProdutos = document.getElementById("lista-produtos")

btnSearch.addEventListener("click", btnSearchClick)
btnMostrarTodos.addEventListener("click", btnMostrarTodosClick)

async function btnSearchClick() {
    try {
        let query = inputSearch.value
        if (query == "") { alert("Insira algum produto..."); return }
        let produto = await simularBuscaAPI(query)
        mostrarProduto(produto)
    }
    catch {
        alert("Produto não disponível no estoque...")
        return
    }
}

async function btnMostrarTodosClick(){
    try{
        let data = await buscarTodosProdutos()
        data.forEach(produto => {
            mostrarProduto(produto)
        });

    }
    catch{
        console.log("Erro...")
    }
}

async function mostrarProduto(produto) {
    let box = document.createElement("div")
    let titulo = document.createElement("p")
    let categoria = document.createElement("p")
    let preco = document.createElement("p")

    box.id = "boxProdutos"
    titulo.id = "tituloProduto"
    categoria.id = "categoriaProduto"
    preco.id = "precoProduto"

    titulo.innerHTML = produto.nome
    preco.innerHTML = ("<b>Preço:</b> R$ " + produto.preco)
    categoria.innerHTML = ("<b>Categoria:</b> " + produto.categoria)

    box.appendChild(titulo)
    box.appendChild(preco)
    box.appendChild(categoria)
    listaProdutos.appendChild(box)

}