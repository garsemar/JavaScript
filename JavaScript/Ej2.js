console.log('Exercici 2')
function randomNumber(min, max){
    return Math.floor(Math.random() * (min, max) + min)
}

function count(num){
    let count = 0
    for(i = 0; i <= codigoSecreto.length; i++){
        if(codigoSecreto[i] == num){
            count += 1
        }
    }
    return count
}

function createList(){
    list = []
    for(i = 0; i <= 5; i++){
        list.push(prompt())
    }
    return list
}

function validPos(list){
    res = []
    for(i = 0; i <= list.length-1; i++){
        for(j = 0; j <= codigoSecreto.length-1; j++){
            if(list[i] == codigoSecreto[j]){
                console.log(list[i])
                if(i == j){
                    res.push('Ok')
                }else if(i != j){
                    res.push(count(list[i]))
                }
            }else{ // Esto no funciona
                res.push('-')
            }
        }
    }
    console.log(res)
}

var codigoSecreto = []

for(i = 1; i <= 5; i++){
    codigoSecreto.push(randomNumber(1, 10))
}

/* console.log(codigoSecreto)

console.log(count(prompt()))

console.log(validPos(prompt(), prompt())) */

list = [1,2,3,4,5]
console.log(list)
console.log(codigoSecreto)
validPos(list)