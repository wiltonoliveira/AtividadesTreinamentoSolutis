function insereValores(){
    let vetor = []
    let min = Math.ceil(1);
    let max = Math.floor(10);
    for(i = 0; i < 10; i++){
        vetor[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return vetor
}

function produtoValores(){
    let vet1 = insereValores()
    let vet2 = insereValores()
    let vetor = []
    for(i = 0; i < 10; i++){
        vetor[i] = vet1[i] * vet2[i]
    }
    console.log(vet1)
    console.log(vet2)
    
    return vetor
}

let saida = produtoValores()
console.log(saida)