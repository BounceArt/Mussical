function carritoDeProductos(tipoProducto, productos) {
    let productList = productos.map((producto, index) => `${index + 1}. ${producto}`).join("\n");
    alert("Usted ha seleccionado " + tipoProducto + ":\n" + productList);

    let seleccion = parseInt(prompt(`Por favor, seleccione el número del producto que desea agregar al carrito (1-${productos.length}):`));

    if (!isNaN(seleccion) && seleccion >= 1 && seleccion <= productos.length) {
        // Agregar el producto al carrito
        carrito.push(productos[seleccion - 1]);
        alert(`Producto agregado al carrito: ${productos[seleccion - 1]}`);
    } else {
        alert("Selección no válida. Por favor, seleccione un número válido.");
    }
}
// arrays
  
 let carrito = []

// objeto

const productos = [
    {nombre: "Cort CR Series CR200", precio: 1520},
    {nombre: "Amplificador Orange Crush 35RT", precio: 725.79},
    {nombre: "Antenna By Cave In LP", precio: 10},
    {nombre: "Nevermind By Nirvana LP", precio: 15},
    {nombre: "LTD MH Series MH-10", precio: 955}
]

let comprar = prompt("Desea comprar un producto? (SI - NO)").toUpperCase()

while (comprar !== "SI" && comprar !== "NO") {
    alert("Por favor, ingrese SI o NO");
    comprar = prompt("¿Desea comprar un producto? (SI - NO)").toUpperCase();
}
if(comprar === "SI"){
    alert("Bienvenido a Mussical, a continuación le mostraremos nuestro catálogo.")
    let todoLosProductos = productos.map((producto) => producto.nombre.concat(" " + producto.precio) + "$")
    alert(todoLosProductos.join(" - "))
}else if(comprar == "NO"){
    alert("Gracias por su visita a Mussical. Hasta pronto!")
}

while(comprar !== "NO"){
    let producto = prompt("Agrega un producto en tu carrito.")
    let precio = 0

    if(producto == "Cort CR Series CR200" || producto == "Amplificador Orange Crush 35RT" || producto == "Antenna By Cave In LP" ||producto == "Nevermind By Nirvana LP" || producto == "LTD MH Series MH-10"){
        switch(producto){
            case "Cort CR Series CR200":
                precio = 1520
                break
            case "Amplificador Orange Crush 35RT":
                precio = 725.79
                break
            case "Antenna By Cave In LP":
                precio = 10
                break
            case "Nevermind By Nirvana LP":
                precio = 15
                break
            case "LTD MH Series MH-10":
                precio = 955
                break
            default:
                break            

        }
        let unidades = parseInt(prompt("Cuantas unidades quieres llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("No selecciono escribió ninguno de los productos mencionados.")
    }

    seleccion = prompt("Desea seguir comprando? (si - no").toUpperCase()
    
    while(seleccion === "NO"){
        alert("Gracias por su compra! Esperamos verlo de nuevo.")
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, Total a pagar: ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break
    }

}