const textInput = document.getElementById("textInput")
var listaTarefas = [] // Lista Vazia 

const tabela = document.createElement("table")
tabela.id="tabela"
document.body.appendChild(tabela);

function Tarefa(id, titulo, concluida, data) { // Construtor do Objeto da Tarefa
    this.id = id
    this.titulo = titulo
    this.concluida = concluida
    this.data = data
}


function salvarTarefa() {
    if (textInput.value != "") {
        agora = new Date().toLocaleTimeString('pt-BR')
        const tarefa = new Tarefa(listaTarefas.length + 1, textInput.value, false, agora)
        listaTarefas.push(tarefa)
        criarTabela()
        console.log(listaTarefas)
    }
}

function criarTabela() {
    const tr = document.createElement("tr")
    const tdTitulo = document.createElement("td")
    tdTitulo.innerHTML = listaTarefas[listaTarefas.length - 1].titulo

    const tdData = document.createElement("td")
    tdData.innerHTML = listaTarefas[listaTarefas.length - 1].data

    tr.appendChild(tdTitulo)
    tr.appendChild(tdData)

    document.getElementById("tabela").appendChild(tr)


}