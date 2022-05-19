const codigo = [];
const maxIntento = 5;

document.getElementById("numero").focus()

for (i = 0; i < maxIntento; i++) {
    createDiv()
}

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
function Comprobar() {
    document.getElementById("numero").focus()

    const userCod = document.getElementById("numero").value

    let celResult = document.getElementsByClassName("rowResult")

    let btn = document.getElementById("check")

    if(checkInput(userCod)){
        for (i = 0; i < 5; i++) {
            celResult[curRow].children[i].children[0].innerHTML = userCod[i]
        }
    
        turns--
        if (turns != 0) {
            document.getElementById("info").innerHTML = "Te quedan " + turns + " turnos!"
        }
        else {
            loseGame()
            btn.disabled = true
            btn.style.backgroundColor = "#BABABA"
        }
    
        if(checkCel(celResult)){
            winGame()
            btn.disabled = true
            btn.style.backgroundColor = "#BABABA"
        }
    
        curRow++
    }
    document.getElementById("numero").value = ""
}

function checkInput(userCod){
    var userList = userCod.toString().split('');
    let valid = true

    for(i = 0; i < userList.length; i++){
        if(!Number.isInteger(parseInt(userList[i]))){
            valid = false
        }
    }
    
    if(userCod.length == 5 && valid){
        console.log("valid")
        return true
    }
    return false
}

function checkCel(celResult) {
    let res = 0
    for (i = 0; i < 5; i++) {
        let cel = celResult[curRow].children[i].children[0]
        if (cel.innerHTML == codigo[i]) {
            cel.style.backgroundColor = "#04cc04"
            res++
        }
        else if (codigo.includes(parseInt(cel.innerHTML))) {
            cel.style.backgroundColor = "#f0d01f"
        }
        else {
            cel.style.backgroundColor = "#6b6b6b"
        }
    }
    if (res == 5) {
        return true
    }
}

function winGame(){
    let status = document.getElementsByClassName("w100 info")[0]

    document.getElementById("info").innerHTML = "Has ganado"

    status.style.backgroundColor = "#04cc04"
    status.style.borderColor = "#04cc04";

    for (i = 0; i < 5; i++) {
        let secretOut = document.getElementById("codigo")

        secretOut.children[0].children[i].children[0].innerHTML = codigo[i]
    }
}
function loseGame(){
    let status = document.getElementsByClassName("w100 info")[0]

    document.getElementById("info").innerHTML = "Has perdido"
    status.style.backgroundColor = "crimson"
    status.style.borderColor = "crimson";

    for (i = 0; i < 5; i++) {
        let secretOut = document.getElementById("codigo")

        secretOut.children[0].children[i].children[0].innerHTML = codigo[i]
    }
}

function createDiv() {
    var gneral = document.getElementById("Result");

    var row = document.createElement("div");
    row.classList.add("rowResult", "w100", "flex", "wrap");
    for (j = 0; j < 5; j++) {
        var container = document.createElement("div");
        container.classList.add("w20");

        var userInp = document.createElement("div");
        userInp.classList.add("celResult", "flex");

        container.appendChild(userInp);
        row.appendChild(container);
    }
    gneral.appendChild(row);
}