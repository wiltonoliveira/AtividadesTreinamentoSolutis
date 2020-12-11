function insereValores(){
    let vetor = []
    let min = Math.ceil(1);
    let max = Math.floor(10);
    for(i = 0; i < 10; i++){
        vetor[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return vetor
}

function parImpar(){
    let vet1 = insereValores()
    let vet2 = insereValores()
    let saida = []
    for(i = 0; i < 10; i++){
        if(i % 2 == 0){
            saida.push(vet1[i])
        } else{
            saida.push(vet2[i])
        }
    }
    console.log(vet1)
    console.log(vet2)
    return saida
}
let saida = parImpar()
console.log(saida)