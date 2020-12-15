fetch = require("node-fetch")

dadosBr = covid("brazil")
dadosUS = covid("us")

function covid(parametro){
    let dados
    fetch(`https://disease.sh/v3/covid-19/countries/${parametro}`)
        .then(response => response.json())
        .then(data => {dados = data.cases
            console.log(data)})
        .catch(console.error)
        return dados
}
