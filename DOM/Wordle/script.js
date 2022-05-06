const codigo = [];
const maxIntento = 2;

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
    console.log(codigo)
}

codigoSecreto();

let curRow = 0
let turns = maxIntento
function Comprobar(){
    const userCod = document.getElementById("numero").value
    
    let celResult = document.getElementsByClassName("rowResult")

    for(i = 0; i < 5; i++){
        celResult[curRow].children[i].children[0].innerHTML = userCod[i]
    }

    turns--
    if(turns != 0){
        document.getElementById("info").innerHTML = "Te quedan " + turns + " turnos!"
    }
    else{
        let status = document.getElementsByClassName("w100 info")[0]

        document.getElementById("info").innerHTML = "Has perdido"
        status.style.backgroundColor="crimson"
        status.style.borderColor="crimson";
    }
    
    checkCel(celResult)

    curRow++
}

function checkCel(celResult){
    let res = 0
    for(i = 0; i < 5; i++){
        let cel = celResult[curRow].children[i].children[0]
        if(cel.innerHTML == codigo[i]){
            cel.style.backgroundColor="green"
            res++
        }
        else if(codigo.includes(parseInt(cel.innerHTML))){
            cel.style.backgroundColor="yellow"
        }
        else{
            cel.style.backgroundColor="#6b6b6b"
        }
    }
    if(res == 5){
        let btn = document.getElementById("check")
        let status = document.getElementsByClassName("w100 info")[0]

        document.getElementById("info").innerHTML = "Has ganado"

        status.style.backgroundColor="green"
        status.style.borderColor="green";

        btn.disabled = true;
        btn.style.backgroundColor="#BABABA"
    }
}