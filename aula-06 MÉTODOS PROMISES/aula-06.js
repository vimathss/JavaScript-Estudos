/* MÉTODOS DE PROMISES
Métodos importantes:
- Promise.all() → espera todas (falha se uma falhar)
- Promise.race() → retorna a primeira que terminar
- Promise.allSettled() → espera todas, mesmo com erro
- Promise.any() → retorna a primeira que der sucesso

Async/Await (forma moderna):
async function exemplo() {
    try {
        const resultado = await promise; // espera resolver
    } catch (erro) {
        console.log(erro);
    }
}
 */

function Promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise 1: Executada com Sucesso")
            resolve("Dados Promise 1")
        }, 2000)
    })
}

function Promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise 2: Executada com Sucesso")
            resolve("Dados Promise 2")
        }, 3000)
    })
}

function Promise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise 3: Executada com Sucesso")
            resolve("Dados Promise 3")
        }, 1000)
    })
}



async function ExecutarPromise(promise) {
    console.log("---- Executando Promises Async/Await ----")
    try {
        const retorno = await promise()
        console.log(retorno)

    }
    catch (err) {
        console.log(err)
    }
}

async function PromiseAll(listaPromisses) {
    console.log("\n ---- Executando todas com Promise All ----")
    let dados = await Promise.all(listaPromisses)
    console.log(dados)
}
async function CorridaPromise(listaPromises) {
    console.log("\n ---- Corrida de Promises ----")
    let dados = await Promise.race(listaPromises)
    console.log("GANHADORA: " + dados)
}


async function main() {
    await ExecutarPromise(Promise1)

    await PromiseAll([Promise1(), Promise2(), Promise3()])

    await CorridaPromise([Promise1(), Promise2(), Promise3()])

}

main()