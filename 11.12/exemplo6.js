fetch = require("node-fetch")
let cepBuscado

console.log("Buscando CEP")
cepBuscado = buscarCep("41720000")
console.log("CEP buscado")
console.log("CEP encontrado: ", cepBuscado)

console.log(cepBuscado.lougradouro)

function buscarCep(parametro){
    let cep
    fetch(`https://viacep.com.br/ws/${parametro}/json/`)
        .then(response => response.json())
        .then(data => {cep = data.cep
            console.log("CEP encontrado: ", cep)})
        .catch(console.error)
        return cep
}