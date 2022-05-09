const codigo = [];
const maxIntento = 5;

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
    const userCod = document.getElementById("numero").value

    let celResult = document.getElementsByClassName("rowResult")

    let btn = document.getElementById("check")

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

function checkCel(celResult) {
    let res = 0
    for (i = 0; i < 5; i++) {
        let cel = celResult[curRow].children[i].children[0]
        if (cel.innerHTML == codigo[i]) {
            cel.style.backgroundColor = "green"
            res++
        }
        else if (codigo.includes(parseInt(cel.innerHTML))) {
            cel.style.backgroundColor = "yellow"
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

    status.style.backgroundColor = "green"
    status.style.borderColor = "green";    
}
function loseGame(){
    let status = document.getElementsByClassName("w100 info")[0]

    document.getElementById("info").innerHTML = "Has perdido"
    status.style.backgroundColor = "crimson"
    status.style.borderColor = "crimson";
}

function createDiv() {
    var parent = document.getElementById("Result");

    var rowContainer = document.createElement("div");
    rowContainer.classList.add("rowResult", "w100", "flex", "wrap");
    for (let j = 0; j < 5; j++) {
        var squareContainer = document.createElement("div");
        squareContainer.classList.add("w20");

        var square = document.createElement("div");
        square.classList.add("celResult", "flex");

        squareContainer.appendChild(square);
        rowContainer.appendChild(squareContainer);
    }
    parent.appendChild(rowContainer);
}