
/* OBJETOS JS
Objetos são váriaveis com muitos valores

Os objetos podem ter métodos, que são funções como propriedades

 */

console.log("OBJETOS")

const videogame = {
    nome:"Minecraft",
    lançamento:"2011", 
    versão:"21.02",
    online: true,
    iniciar: function() {return console.log("Iniciando o game ", this.nome)},
}
 
console.log(videogame)
videogame.iniciar()

/* EVENTOS JS

onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimencionamento da janela
*/

console.log("EVENTOS")

function eventoBotao(){
    alert("Acionou um evento click")
}

/* ARRAYS JS */
console.log("ARRAYS")

const lista = ["arroz", "feijão", "batata", "queijo"]
console.log(lista)

for(i = 0; i < lista.length; i++){
    console.log("A posição n° ", i, " contém o elemento", lista[i])
}


// MÉTODOS ARRAY

// Join -> Insere caracteres entre os elementos
console.log("JOIN: ", lista.join(" * ")) 

// Pop -> Remove o ultimo elemento
lista.pop()
console.log("POP: ", lista) 

// Shift -> Remove o primeiro elemento
lista.shift()
console.log("SHIFT: ", lista) 

// Delete -> Remove um elemento pelo index (Fica undefinid, não muito bom)
delete lista[2]
console.log("DELETE: ", lista) 

// Push -> Adiciona um elemento
lista.push("cenoura")
console.log("PUSH: ", lista) 

// UnShift -> Adiciona um elemento no começo
lista.unshift("abacate")
console.log("UNSHIFT: ", lista) 

// Splice -> Remove e insere elementos indicando um começando e uma quantidade
lista.splice(1,2, "pipoca", "guaraná")
console.log("SPLICE: ", lista)



