let productos = [
    {
        id: "cort1",
        titulo: "Guitarra Cort CR Series CR200",
        imagen: "../assets/img/guitarra5.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: 556.99
    },
    {
        id: "newen",
        titulo: "Guitarra Newen Newen rock Rock",
        imagen: "../assets/img/guitarra1.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: 1499.00


    },
    {
        id: "cort2",
        titulo: "Guitarra Cort X Series X100",
        imagen: "../assets/img/guitarra2.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: 899.00
    },
    {
        id: "ibanez",
        titulo: "Guitarra Ibanez SA GIO GSA60",
        imagen: "../assets/img/guitarra3.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: 678.29
    },
    {
        id: "ltd",
        titulo: "Guitarra LTD MH Series MH-10",
        imagen: "../assets/img/guitarra4.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: 940.99
    },
    {
        id: "artcore",
        titulo: "Guitarra AS Artcore AS53 semi hollow",
        imagen: "../assets/img/ibanez2.jpg",
        categoria: {
            nombre: "Guitarras",
            id: "guitarras"
        },
        precio: 975.69
    },
    {
        id: "cave-lp",
        titulo: "Antenna By Cave In LP",
        imagen: "../assets/img/cave.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 9
    },
    {
        id: "nevermind-lp",
        titulo: "Nevermind By Nirvana LP",
        imagen: "../assets/img/nirvana.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 15
    },
    {
        id: "whitepony-lp",
        titulo: "White Pony By Deftones LP",
        imagen: "../assets/img/deft.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 30
    },
    {
        id: "jeromes-lp",
        titulo: "The Gray In Between By Jeromes Dream LP",
        imagen: "../assets/img/Jeromes.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 20
    },
    {
        id: "korn-lp",
        titulo: "Follow The Leader By Korn",
        imagen: "../assets/img/korn.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 10
    },
    {
        id: "bookburner-lp",
        titulo: "Book Burner By Pig Destroyer LP",
        imagen: "../assets/img/pig.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 5
    },
    {
        id: "slipknot-lp",
        titulo: "Slipknot By Slipknot LP",
        imagen: "../assets/img/slipknot.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 12
    },
    {
        id: "system-lp",
        titulo: "System Of A Down By System Of A Down LP",
        imagen: "../assets/img/system.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 23
    },
    {
        id: "lateralus-lp",
        titulo: "Lateralus By Tool LP",
        imagen: "../assets/img/tool.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 35
    },
    {
        id: "glowon-lp",
        titulo: "Glow On By Turnstile LP",
        imagen: "../assets/img/turnstile.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 25
    },
    {
        id: "smashing-lp",
        titulo: "Mellon Collie & The Infinite Sadness By The Smashing Pumpkings",
        imagen: "../assets/img/smashing.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 92
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

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
        `;

        contenedorProductos.append(div);
    }) 
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
actualizarBotonesAgregar()
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
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
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
          },
        onClick: function(){} 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        // Agrega la propiedad 'cantidad' al producto e inicialízala en 1.
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}