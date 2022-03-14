console.log('Exercici 2')
function randomNumber(min, max){
    return Math.floor(Math.random() * (min, max) + min)
}

function count(num){
    let count = 0
    for(let i = 0; i <= codigoSecreto.length; i++){
        if(codigoSecreto[i] == num){
            count += 1
        }
    }
    return count
}

function createList(){
    list = []
    for(let i = 0; i <= 4; i++){
        list.push(parseInt(prompt('Numero per la posicio ' + (i+1))))
    }
    return list
}

function validPos(list){
    res = ['-', '-', '-', '-', '-']
    for(let i = 0; i <= list.length-1; i++){
        for(let j = 0; j <= codigoSecreto.length-1; j++){
            if(list[i] == codigoSecreto[j] && i == j){
                res[i] = 'Ok'
                break
            }else if(list[i] == codigoSecreto[j]){
                res[i] = count(list[i])
            }
        }
    }
    console.log(res)
}

var codigoSecreto = []

for(let i = 1; i <= 5; i++){
    codigoSecreto.push(randomNumber(1, 10))
}

list = createList()
console.log(list)
console.log(codigoSecreto)
validPos(list)