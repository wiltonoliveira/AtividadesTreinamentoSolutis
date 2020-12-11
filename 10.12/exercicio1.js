let valores = [10, 11, 30, 5, 15, 0, 20, 40, 14, 13]

let dentro = 0
let fora = 0

for(i = 0; i < valores.length; i++){
    if(valores[i] >= 10 && valores[i] <= 20){
        dentro++
    } else{
        fora++
    }
}

console.log(dentro+" valores estao no intervalo")
console.log(fora+" valores estao fora do intervalo")