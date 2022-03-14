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
    for(i = 0; i <= 4; i++){
        list.push(parseInt(prompt()))
    }
    return list
}

function validPos(list){
    res = ['-', '-', '-', '-', '-']
    for(i = 0; i <= list.length-1; i++){
        for(j = 0; j <= codigoSecreto.length-1; j++){
            if(list[i] == codigoSecreto[j]){
                if(i == j){
                    res[i] = 'Ok'
                }else if(i != j){
                    res[i] = count(list[i])
                }
            }
        }
    }
    console.log(res)
}

var codigoSecreto = []

for(i = 1; i <= 5; i++){
    codigoSecreto.push(randomNumber(1, 10))
}

list = createList()
console.log(list)
console.log(codigoSecreto)
validPos(list)