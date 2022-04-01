function listaPropiedades(obj) {
    var result = ``;
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += `${i} = ${obj[i]}\n`;
        }
    }
    return result;
}

function calcularEdad(student){
    var dat = Date.now() - student.fechaNacimiento

    return ((dat/31556926)/1000).toPrecision(3)
}

function checkObject(obj1, obj2){
    console.log(JSON.stringify(obj1) == JSON.stringify(obj2))
}

// Ej 1.a
var student = new Object();

student.name = "Marti"
student.course = "DAMi"
student.age = 18

console.log(listaPropiedades(student))

// Ej 1.b
delete student.name
console.log(listaPropiedades(student))

// Ej 1.c
student.fechaNacimiento = new Date(2003, 07, 18)
student.apellidos = "Garcia Serra"

// Ej 1.d
student.age = calcularEdad(student)
console.log(listaPropiedades(student))

// Ej 2
var student1 = new Object();
student1.name = "Marti"
student1.course = "DAMi"
student1.age = 18

var student2 = new Object();
student2.name = "Marti"
student2.course = "DAMi"
student2.age = 18

checkObject(student1, student2)

student2.name = "Naim"

checkObject(student1, student2)

// Ej 3
