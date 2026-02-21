function SimulacaoAPI1() { // Simula uma requisação para uma API
    return new Promise((resolve) => { // Promessa que vai ter um retorno
        setTimeout(() => {
            console.log("API 1 RETORNOU")
            resolve('API DATA')
        }, 2000)
        
    })

}

async function ConsumirAPI1() {
    try {
        const dados = await SimulacaoAPI1() // Await espera o retorno
        console.log("Código depois da API:" + dados)
    } catch {

    }
}

ConsumirAPI1()

function SimulacaoAPI2() { // Simula uma requisação para uma API
    return new Promise((resolve) => { // Promessa que vai ter um retorno
        setTimeout(() => {
            console.log("API 2 RETORNOU")
            resolve('API DATA 2')
        }, 3000)
        
    })

}
 
function ConsumirAPI2() {
    try {
        const dados = SimulacaoAPI2().then((dados)=>{
        console.log("THEN API 2: " + dados)
    }) // Await espera o retorno
        console.log("Código depois da API 2" + dados)
    } catch {

    }
}

ConsumirAPI2()