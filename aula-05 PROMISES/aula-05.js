/* PROMISES
Promise = Objeto que representa um valor futuro (assíncrono).

Estados:
- pending   → aguardando
- fulfilled → sucesso (resolve)
- rejected  → erro (reject)

Criando uma Promise:
    new Promise((resolve, reject) => {
        if (deuCerto) {
            resolve(valor); // sucesso
        } else {
            reject(erro);   // erro
        }
    });

Consumindo uma Promise:
promise
    .then(resultado => { })   // executa se resolver
    .catch(erro => { })       // executa se rejeitar
    .finally(() => { });      // sempre executa

Encadeamento:
    .then() sempre retorna outra Promise.
    Pode encadear para criar fluxo de etapas.eu errado")
        }); 
*/

console.log("----- Exemplo Básico de Promise -----")

/* const promessa = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve("Deu certo!");
  } else {
    reject("Deu errado!");
  }
});

promessa
  .then((resultado) => { // Executado caso dê certo
    console.log(resultado); 
  })
  .catch((erro) => { // Executado caso dê errado
    console.log(erro);
  });
 */

console.log("\n----- Simulação API c/ Promise -----")

function simularAPI() {
    console.log("Procurando usuário...")
    return new Promise((resolve, reject) => {
        let user = {
            nome: "Vicente",
            id: "23095"
        }
        let sucess = false

        setTimeout(() => {
            if (sucess) {
                console.log("Usuário encontrado com sucesso!")
                resolve(user)
            }
            else { reject("Usuário não encontrado") }
        }, 2000)
    })
}

async function buscarUser() {
    try {
        const resultado = await simularAPI()
        console.log(resultado)
        return resultado.nome
    }
    catch {
        console.log("Catch: Erro")
    }
}


async function TelaPrincipal() {
    const user = await buscarUser()
    console.log(`USER LOGADO: ${user ?? 'Sem usuário'}`)
}

TelaPrincipal()


