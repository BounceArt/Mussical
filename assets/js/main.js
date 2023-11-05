
    let carrito = []
    let todoLosProductos = []
    let precioTotal = 0
    const productos = [
        { nombre: "Guitarra Cort CR Series CR200", precio: 1520 },
        { nombre: "Amplificador Orange Crush 35RT", precio: 725.79 },
        { nombre: "Antenna By Cave In LP", precio: 10 },
        { nombre: "Nevermind By Nirvana LP", precio: 15 },
        { nombre: "LTD MH Series MH-10", precio: 955 },
        { nombre: "Guitarra Newen Newen rock Rock", precio: 1499.00},
        { nombre: "Guitarra Cort X Series X100", precio: 899},
        { nombre: "Guitarra Ibanez SA GIO GSA60", precio: 678.29},
        { nombre: "Guitarra AS Artcore AS53 semi hollow", precio: 975.69},
        { nombre: "White Pony By Deftones LP", precio: 30},
        { nombre: "The Gray In Between By Jeromes Dream LP", precio: 20},
        { nombre: "Follow The Leader By Korn", precio: 10},
        { nombre: "Nevermind By Nirvana LP", precio: 15},
        { nombre: "Book Burner By Pig Destroyer LP", precio: 5},
        { nombre: "Slipknot By Slipknot LP", precio: 12},
        { nombre: "System Of A Down By System Of A Down LP", precio: 23},
        { nombre: "Lateralus By Tool LP", precio: 35},
        { nombre: "Glow On By Turnstile LP", precio: 25},
        { nombre: "Mellon Collie & The Infinite Sadness By The Smashing Pumpkings", precio: 92},
        { nombre: "Mukiltearth By The Fall of Troy", precio: 40},
        { nombre: "Amplificador Champion™ 50XL", precio: 309.99},
        { nombre: "Amplificador Tone Master® Super Reverb®", precio: 1599.00},
        { nombre: "Amplificador Tone Master® Twin Reverb®", precio: 1389.00},
        { nombre: "Amplificador Boss Katana 50 MkII", precio: 1055.52},
        { nombre: "Amplificador Roland Acs Live Lt Acoustic Singer Live", precio: 1406.15},
        { nombre: "Amplificador Marshall MG Carbon Fibre MG50CFX Transistor", precio: 809.89},
        { nombre: "Amplificador Marshall Mb15 (bass)", precio: 664.19},
        { nombre: "Amplificador Marshall Mb30 (bass)", precio: 683.93},
        { nombre: "Amplificador Orange Crush Pix CR50BXT Transistor", precio: 929.21},
        { nombre: "Amplificador Peavey Rage 258 Woofer 8 Eq 3", precio: 457.47},
        { nombre: "Amplificador Fender Evh 5150 212st", precio: 3657.04},
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
            (producto === "Guitarra Cort CR Series CR200" ||
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
                case "Guitarra Cort CR Series CR200":
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
                case "Guitarra Newen Newen rock Rock":
                    precio = 1499.00;
                    break;
                case "Guitarra Cort X Series X100":
                    precio = 899;
                    break;
                case "Guitarra Ibanez SA GIO GSA60":
                    precio = 678.29;
                    break;
                case "Guitarra AS Artcore AS53 semi hollow":
                    precio = 975.69;
                    break;
                case "White Pony By Deftones LP":
                    precio = 30;
                    break;
                case "The Gray In Between By Jeromes Dream LP":
                    precio = 20;
                    break;
                case "Follow The Leader By Korn":
                    precio = 10;
                    break;
                case "Book Burner By Pig Destroyer LP":
                    precio = 5;
                    break;
                case "Slipknot By Slipknot LP":
                    precio = 12;
                    break;
                case "System Of A Down By System Of A Down LP":
                    precio = 23;
                    break;
                case "Lateralus By Tool LP":
                    precio = 35;
                    break;
                case "Glow On By Turnstile LP":
                    precio = 25;
                    break;
                case "Mellon Collie & The Infinite Sadness By The Smashing Pumpkings":
                    precio = 92;
                    break;
                case "Mukiltearth By The Fall of Troy":
                    precio = 40;
                    break;
                case "Amplificador Champion™ 50XL":
                    precio = 309.99;
                    break;
                case "Amplificador Tone Master® Super Reverb®":
                    precio = 1599.00;
                    break;
                case "Amplificador Tone Master® Twin Reverb®":
                    precio = 1389.00;
                    break;
                case "Amplificador Boss Katana 50 MkII":
                    precio = 1055.52;
                    break;
                case "Amplificador Roland Acs Live Lt Acoustic Singer Live":
                    precio = 1406.15;
                    break;
                case "Amplificador Marshall MG Carbon Fibre MG50CFX Transistor":
                    precio = 809.89;
                    break;
                case "Amplificador Marshall Mb15 (bass)":
                    precio = 664.19;
                    break;
                case "Amplificador Marshall Mb30 (bass)":
                    precio = 683.93;
                    break;
                case "Amplificador Orange Crush Pix CR50BXT Transistor":
                    precio = 929.21;
                    break;
                case "Amplificador Peavey Rage 258 Woofer 8 Eq 3":
                    precio = 457.47;
                    break;
                case "Amplificador Fender Evh 5150 212st":
                    precio = 3657.04;
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
        const precioTotalElement = document.createElement("p")
        precioTotalElement.textContent = `Precio total: $${precioTotal}`
        carritoLista.appendChild(precioTotalElement)
        
        
    }   let finalizarCompra = document.getElementById("fin-compra")
    finalizarCompra.addEventListener("click", function () {
        if (carrito.length === 0) {  
            Toastify({

                text: "Agregue productos al carrito.",
                duration: 3000,
                position: "right",
                gravity: "bottom",
                style:{
                  background: "linear-gradient(to left, #f9c433 , rgb(19, 19, 19))"
                }
                }).showToast()
        } else {
            Toastify({

                text: "Gracias por comprar en nuestra tienda!",
                duration: 3000,
                position: "right",
                gravity: "bottom",
                style:{
                  background: "linear-gradient(to left, #f9c433 , rgb(19, 19, 19))"
                }
                }).showToast()
        }
    })

    