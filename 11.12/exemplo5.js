function fazRequisicao(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Promise resolvida")
        }, 5000)
    });
}

fazRequisicao()
    .then(console.log)
    .catch(console.log)
    .finally(console.log("Finalizando..."))