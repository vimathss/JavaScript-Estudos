async function buscarPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments?id=${id}`)

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`)
        }

        const arrayComentario = await response.json()

        if (arrayComentario.length === 0) {
            throw new Error("Postagem não encontrada ou ID inexistente.")
        }

        const userData = arrayComentario[0]
        console.log("\n ---- Post Encontrado ----")
        console.log(`User Email: ${userData.email}`)
        console.log(`Post ID: ${userData.id}`)
        console.log(`Comentário: ${userData.body}`)

        return userData
    }
    catch (error) {
        console.error("CATCH", error)
    }

}

//buscarPost(3)

async function criarPost(post) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json' }
        })
        
        if (!response.ok) {
            throw new Error(`Erro ao criar post: ${response.status}`);
        }

        const retorno = await response.json()
        console.log("Post criado:", retorno)

    }
    catch (error) {
        console.error("CATCH", error)

    }
}

const post = {
    userID: 1,
    id: 101,
    title: "Título do Post",
    body: "Conteúdo do post..."
}

criarPost(post)