function randomNumber(min, max){
    return Math.floor(Math.random() * (min, max) + min)
}

var codigoSecreto = []

for(i = 1; i <= 5; i++){
    codigoSecreto.push(randomNumber(1, 10))
}

console.log(codigoSecreto)