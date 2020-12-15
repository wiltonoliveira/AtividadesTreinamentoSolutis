fetch = require("node-fetch")
let cepBuscado

console.log("Buscando CEP")
cepBuscado = buscarCep("41720000")
console.log("CEP buscado")
console.log("CEP encontrado: ", cepBuscado)


function buscarCep(parametro){
    let cep
    fetch(`https://viacep.com.br/ws/${parametro}/json/`)
        .then(response => response.json())
        .then(data => {cep = data.cep
            console.log(data)})
        .catch(console.error)
        return cep
}

