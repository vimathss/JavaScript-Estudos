/* Exercício 3.2: Validador de Senhas Fortes
- Enunciado: Desenvolva uma função chamada validarSenha.
- Ela deve receber uma string e retornar true se a senha atender aos critérios:
- Ter pelo menos 8 caracteres.
- Conter pelo menos um número.
- Conter pelo menos uma letra maiúscula.
 */

function validarSenha(senha){
    if (!senha) return false // Verifica se a senha não é nula
    if (senha.length < 8 ) return false // Senha maior que 8
    if (!(/[A-Z]/.test(senha))) return  false // Regex para ver se a senha contem maíscula
    if (!(/[0-9]/.test(senha))) return false // Regex para ver se a senha contem números
    else{return true}
}

console.log(validarSenha("123456")) // Fracasso
console.log(validarSenha("asdasd")) // Fracasso
console.log(validarSenha("123456a7A")) // Sucesso