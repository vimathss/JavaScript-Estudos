/* FUNÇÃO JS
 - Trecho de código executado somente quando solicitado
 - [void] -> função que não retorna nada
 - [return] -> retorna algo de dentro da função

 Tipos de funções:
- declaradas - Aquelas com nome na frente: function Saudar(){return 'olá'}
- expressão - Aquelas atribuidas a uma expressão, geralmente em consts e anonimas: const saudar = function(){return 'olá'}
- arrowFunction - Aquelas mais modernas e numa unica linha: const saudar = () => {return 'olá'} - Precisa do return explicito quando tem chaves, ao contrário não

*/


/* Function Declaration
- Pode ser chamada antes de ser decladarada (hoisting)
*/
console.log(somar(2,4))
function somar(a, b) {
    return a + b;
}


/* Function Expression
- Não sofre hoisting
- Só pode ser chamada após a declaração
*/

const subtrair = function(a,b){
    return a-b;
}
console.log(subtrair(5,2))


/* ARROW FUNCTION
- Forma moderna e simples
- Quando a função recebe apenas 1 parâmetro, pode apagar o ()

const somar = (a, b) => {
  return a + b;
};

ou

const somar = (a, b) => a + b;

*/

const multiplicar = (a,b) => a*b
console.log(multiplicar(4,3))


/* Função CallBack (Função como Parâmetro) */

const saudar = nome => console.log("FUNÇÃO CALLBACK: " + nome) // Função CallBack

function processarNome (funcao){ // Recebe uma função de parâmetro
    const nome = "Vicente Dev"
    funcao(nome) // Executa a função recebida passando um valor
}

processarNome(saudar) // Passa uma função como parâmetro