const now = new Date()

// Ej 1
console.log(Date())

// Ej 2
if(now.getDay = 1){
    if(now.getHours() >= 11 && now.getHours() <= 12){
        if(now.getHours() == 12 && now.getMinutes() <= 10){
            console.log("m04")
        }
        else if(now.getHours() == 11 && now.getMinutes() >= 15){
            console.log("m04")
        }
        else{
            console.log("no m04")
        }
    }
    else{
        console.log("no m04")
    }
}
else{
    console.log("no m04")
}

// Ej 3
let cumpleD = 27
let cumpleM = 03

var dayUntil = Math.abs(now.getDate() - cumpleD) + (Math.abs((now.getMonth()+1) - cumpleM) * 30)
var hourUntil = dayUntil*24
var minUntil = hourUntil*60
var segUntil = minUntil*60

console.log("Days:" + dayUntil)
console.log("Hours:" + hourUntil)
console.log("Min:" + minUntil)
console.log("Segs:" + segUntil)

// Ej 4


// Ej 5
function timer(){
    const nowTimer = new Date()
    console.log(nowTimer.getHours()+":"+nowTimer.getMinutes()+":"+nowTimer.getSeconds())
}

setInterval(timer, 1000)