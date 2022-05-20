let productos = [{
    nombre: "Milkybar",
    foto: "milkybar.jpg",
    descripcion: "Chocolate blanco Nestlé Milkybar 100 g.",
    precio: 1.20,
    descuento: "10%",
}, {
    nombre: "Crunch",
    foto: "crunch.jpg",
    descripcion: "Chocolate crujiente Crunch Nestlé sin gluten 100 g.",
    precio: 1.32,
    descuento: "20%",
}, {
    nombre: "Croissants - La Bella Easo",
    foto: "croissant.jpg",
    descripcion: "Croissants 0% azucares La Bella Easo 360 g.",
    precio: 2.59,
    descuento: "",
}, {
    nombre: "Nesquik",
    foto: "nesquik.jpg",
    descripcion: "Chocolate con leche con relleno cremoso Nestlé Nesquik 100 g.",
    precio: 1.31,
    descuento: "30%",
}];

let subtotal;

function muestraProductos() {
    for(let i = 0; i < productos.length; i++) {
        createPoduct(productos[i]);
    }

    var prodButton = document.createElement("button");
    prodButton.id = "myBtn";
    prodButton.onclick = anadirProductos;
    prodButton.innerText = "Añadir Productos";
    document.getElementById("productos").appendChild(prodButton);
}

function createPoduct(product) {
    /** Función para crear los elementos necesarios para poder visualziar los productos. */
    var gneral = document.getElementById("productos");
 
    var arti = document.createElement("article");
    arti.classList.add("articulo");
    
    var productContai = document.createElement("div");

    var prodName = document.createElement("p");
    prodName.classList.add("nombre", "w50");
    prodName.innerText = product.nombre;

    var prodDesc = document.createElement("p");
    prodDesc.classList.add("descuento");
    prodDesc.innerText = product.descuento;

    var prodPhoto = document.createElement("img");
    prodPhoto.src = "src/" + product.foto;

    var prodPrice = document.createElement("p");
    var prodSpan = document.createElement("span");
    prodSpan.innerText = product.precio + "€";
    prodPrice.appendChild(prodSpan);

    var prodDecr = document.createElement("p");
    prodDecr.innerText = product.descripcion;

    var prodInputP = document.createElement("p");
    var prodInput = document.createElement("input");
    prodInput.innerHTML = 0;
    prodInput.type = "number", prodInput.id = "Milkybar", prodInput.step = "1", prodInput.min = "0";
    prodInputP.appendChild(prodInput);

    productContai.appendChild(prodName);
    if(product.descuento != "") {
        productContai.appendChild(prodDesc);
    }

    arti.appendChild(productContai);
    arti.appendChild(prodPhoto);
    arti.appendChild(prodPrice);
    arti.appendChild(prodDecr);
    arti.appendChild(prodInputP);

    gneral.appendChild(arti);
}

function anadirProductos() {
    /** Función que muestra el ticket con los productos, precios y descuentos así como el total del precio de la compra. */
    let tabla = document.getElementById("tablebody");
    let milkybar = document.getElementsByTagName("input")
    for(let i = 0; i < productos.length; i++) {
        let tr = document.createElement("tr");
        if(milkybar[i].value != 0) {
            let prod = productos[i];
            if(prod.descuento != "") {
                tr.appendChild(creaCelda(prod.nombre+"**"))
            }
            else {
                tr.appendChild(creaCelda(prod.nombre))
            }
            tr.appendChild(creaCelda(prod.precio));
            tr.appendChild(creaCelda(prod.descuento));
            tr.appendChild(creaCelda(milkybar[i].value))
            tr.appendChild(creaCelda(prod.precio * milkybar[i].value))

            tabla.appendChild(tr);
        }
    }
    document.getElementsByClassName("subtotal")[0].innerHTML = totalPrice()
}

function totalPrice(){
    let total = 0;
    let milkybar = document.getElementsByTagName("input")
    for(let i = 0; i < productos.length; i++) {
        let prod = productos[i];
        if(milkybar[i].value != 0) {
            total += prod.precio * milkybar[i].value;
        }
    }
    return total;
}

function creaCelda(valor) {
    let celda = document.createElement("td");
    celda.innerText = valor;
    return celda;
}

function vaciaCarro() {
    let tabla = document.getElementById("tablebody");
    while (tabla.hasChildNodes()) {
        let child = tabla.removeChild(tabla.firstChild)

    }

}