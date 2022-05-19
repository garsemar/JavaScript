function resaltar(){
    let hola = document.getElementsByTagName("strong")
    for(i = 0; i < hola.length; i++){
        hola[i].style.color="red"
        hola[i].style.fontSize="25px"
    }
}

function tornaNormal(){
    let hola = document.getElementsByTagName("strong")
    for(i = 0; i < hola.length; i++){
        hola[i].style.color="black"
        hola[i].style.fontSize="16px"
    }
}