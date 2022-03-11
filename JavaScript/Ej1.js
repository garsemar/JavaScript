console.log('Exercici 1')
function mayor(num1, num2){
    if(num1 > num2){
        return num1
    } else if(num1 < num2){
        return num2
    }
}

function mult(num1, num2){
    res = 0
    while(num2 > 0){
        res += num1
        num2 -= 1
    }
    return res
}

function mult3(num1, num2, num3){
    return mult(mult(num1, num2), num3)
}

console.log(mayor(1, 2))

console.log(mult(2, 3))

console.log(mult3(2, 2, 2))