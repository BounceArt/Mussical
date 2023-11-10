let productos = []
ruta = "../assets/js/productos.json"
fetch(ruta)
    .then(response => response.json())
    .then(data => {
        productos = data
        cargarProductos(productos)
    })

let botonesAgregar = document.querySelectorAll(".producto-agregar")
const contador = document.querySelector("#contador")

function cargarProductos(productosElegidos) {



    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `

       
    }) 
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}
actualizarBotonesAgregar()
let productosEnCarrito

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarcontador()
} else {
    productosEnCarrito = []
}

function agregarAlCarrito(e) {
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to left, #f9c433 , rgb(19, 19, 19))",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem",
            fontFamily: "Roboto mono"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
        },
        onClick: function(){}
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productoAgregado) {
        if (productosEnCarrito.some(producto => producto.id === idBoton)) {
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado);
        }

        actualizarcontador();

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    } else {
        console.error(`No se encontró el producto con id ${idBoton}`);
    }
}



function actualizarcontador() {
    let nuevocontador = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    contador.innerText = nuevocontador;
}