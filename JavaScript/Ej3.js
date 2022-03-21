var now = new Date()

console.log(now.getDay())

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
}