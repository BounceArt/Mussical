
    let carrito = []
    let todoLosProductos = []
    let precioTotal = 0
    const productos = [
        { nombre: "Cort CR Series CR200", precio: 1520 },
        { nombre: "Amplificador Orange Crush 35RT", precio: 725.79 },
        { nombre: "Antenna By Cave In LP", precio: 10 },
        { nombre: "Nevermind By Nirvana LP", precio: 15 },
        { nombre: "LTD MH Series MH-10", precio: 955 },
    ];

    const carritoElement = document.getElementById("carrito")
    const mensajeError2 = document.getElementById("mensaje-error-2")
    const carritoForm = document.getElementById("carrito-form")
    const productoSelect = document.getElementById("producto")
    const unidadesInput = document.getElementById("unidades")
    const agregarAlCarritoButton = document.getElementById("agregar-al-carrito")
    const carritoLista = document.getElementById("carrito-lista")

    agregarAlCarritoButton.addEventListener("click", () => {
        const producto = productoSelect.value;
        const unidades = parseInt(unidadesInput.value);
    
        const mensajeUnidades = (unidades <= 0 || isNaN(unidades)) ? "Debe ingresar una cantidad válida de unidades." : ""
        const mensajeProducto = (
            (producto === "Cort CR Series CR200" ||
            producto === "Amplificador Orange Crush 35RT" ||
            producto === "Antenna By Cave In LP" ||
            producto === "Nevermind By Nirvana LP" ||
            producto === "LTD MH Series MH-10")
        )
            ? "" 
            : "No seleccionó un producto válido. Por favor, elija un producto de la lista."
    
        if (mensajeUnidades || mensajeProducto) {
            mensajeError2.textContent = mensajeUnidades || mensajeProducto;
        } else {
            let precio = 0;
    
            switch (producto) {
                case "Cort CR Series CR200":
                    precio = 1520;
                    break;
                case "Amplificador Orange Crush 35RT":
                    precio = 725.79;
                    break;
                case "Antenna By Cave In LP":
                    precio = 10;
                    break;
                case "Nevermind By Nirvana LP":
                    precio = 15;
                    break;
                case "LTD MH Series MH-10":
                    precio = 955;
                    break;
                default:
                    break;
            }
    
            carrito.push({ producto, unidades, precio });
            precioTotal += unidades * precio;
            carritoElement.innerHTML = "";
            unidadesInput.value = "";
    
            mostrarCarrito();
        }
    });
    
    
    function mostrarCarrito() {
        carritoLista.innerHTML = ""
        carrito.forEach((item) => {
            const carritoItem = document.createElement("li")
            carritoItem.style.color = "#f9c433"
            carritoItem.textContent = `Producto: ${item.producto}, Unidades: ${item.unidades}, Total a pagar: ${
                item.unidades * item.precio
            }$`;
            carritoLista.appendChild(carritoItem)
        });
        const precioTotalElement = document.createElement("p");
        precioTotalElement.textContent = `Precio total: $${precioTotal}`;
        carritoLista.appendChild(precioTotalElement)
        
        
    }   let finalizarCompra = document.getElementById("fin-compra");
    finalizarCompra.addEventListener("click", function () {
        if (carrito.length === 0) {  
            const mensajeError = document.getElementById("mensaje-error");
            mensajeError.textContent = "No has agregado ningún producto al carrito. Agrega productos antes de finalizar la compra.";
        } else {
            let finDeCompra = document.createElement("p");
            finDeCompra.textContent = "Gracias por comprar en nuestra tienda!";
            finalizarCompra.parentNode.appendChild(finDeCompra);
        }
    });