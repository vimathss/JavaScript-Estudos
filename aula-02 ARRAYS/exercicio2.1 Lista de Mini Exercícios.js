/* 1. Soma de Elementos
- Enunciado: Crie uma função chamada somaArray que recebe um array de números e retorna a soma de 
todos os elementos. Utilize o método .reduce().
*/

function somaArray(array){
    return array.reduce((acumulador, valorAtual) => acumulador+=valorAtual, 0)
}

console.log(somaArray([2,46,21,76,34]))

/*
2. Filtragem de Valores
- Enunciado: Dado um array de idades [12, 18, 22, 15, 40, 10, 35], crie um novo array contendo 
apenas as idades maiores ou iguais a 18 anos. Utilize o método .filter().

3. Transformação de Dados
- Enunciado: Você tem um array de objetos representando produtos: [{nome: "Camisa", preco: 50}, 
{nome: "Calça", preco: 100}].
- Crie um novo array que contenha apenas os preços dos produtos com um aumento de 10%. 
- Utilize o método .map().

4. Busca de Elemento
- Enunciado: Crie uma função que receba um array de strings (nomes de frutas) e uma string de busca. 
- A função deve retornar true se a fruta existir no array e false caso contrário, sem usar loops for 
(dica: use .includes()).

5. Inversão e Formatação
- Enunciado: Dado o array ["J", "S", "e", "v", "i", "v"], inverta a ordem dos elementos e junte-os para 
formar uma única string. (Dica: use .reverse() e .join()). */