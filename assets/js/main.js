let productos = [
    {
        id: "cort1",
        titulo: "Guitarra Cort CR Series CR200",
        imagen: "../assets/img/guitarra5.jpg",
        precio: 556.99
    },
    {
        id: "newen",
        titulo: "Guitarra Newen Newen rock Rock",
        imagen: "../assets/img/guitarra1.jpg",
        precio: 1499.00


    },
    {
        id: "cort2",
        titulo: "Guitarra Cort X Series X100",
        imagen: "../assets/img/guitarra2.jpg",
        precio: 899.00
    },
    {
        id: "ibanez",
        titulo: "Guitarra Ibanez SA GIO GSA60",
        imagen: "../assets/img/guitarra3.jpg",
        precio: 678.29
    },
    {
        id: "ltd",
        titulo: "Guitarra LTD MH Series MH-10",
        imagen: "../assets/img/guitarra4.jpg",
        precio: 940.99
    },
    {
        id: "artcore",
        titulo: "Guitarra AS Artcore AS53 semi hollow",
        imagen: "../assets/img/ibanez2.jpg",
        precio: 975.69
    },
    {
        id: "cave-lp",
        titulo: "Antenna By Cave In LP",
        imagen: "../assets/img/cave.jpg",
        precio: 9
    },
    {
        id: "nevermind-lp",
        titulo: "Nevermind By Nirvana LP",
        imagen: "../assets/img/nirvana.jpg",
        precio: 15
    },
    {
        id: "whitepony-lp",
        titulo: "White Pony By Deftones LP",
        imagen: "../assets/img/deft.jpg",
        precio: 30
    },
    {
        id: "jeromes-lp",
        titulo: "The Gray In Between By Jeromes Dream LP",
        imagen: "../assets/img/Jeromes.jpeg",
        precio: 20
    },
    {
        id: "korn-lp",
        titulo: "Follow The Leader By Korn",
        imagen: "../assets/img/korn.jpg",
        precio: 10
    },
    {
        id: "bookburner-lp",
        titulo: "Book Burner By Pig Destroyer LP",
        imagen: "../assets/img/pig.jpg",
        precio: 5
    },
    {
        id: "slipknot-lp",
        titulo: "Slipknot By Slipknot LP",
        imagen: "../assets/img/slipknot.jpg",
        precio: 12
    },
    {
        id: "system-lp",
        titulo: "System Of A Down By System Of A Down LP",
        imagen: "../assets/img/system.jpg",
        precio: 23
    },
    {
        id: "lateralus-lp",
        titulo: "Lateralus By Tool LP",
        imagen: "../assets/img/tool.jpg",
        precio: 35
    },
    {
        id: "glowon-lp",
        titulo: "Glow On By Turnstile LP",
        imagen: "../assets/img/turnstile.jpg",
        precio: 25
    },
    {
        id: "smashing-lp",
        titulo: "Mellon Collie & The Infinite Sadness By The Smashing Pumpkings",
        imagen: "../assets/img/smashing.jpg",
        precio: 92
    },
    {   id: "mukiltearth-lp",
        titulo: "Mukiltearth By The Fall of Troy",
        imagen: "../assets/img/tfot.jpg",
        precio: 40
    },
    {
        id: "amp-orange1",
        titulo: "Amplificador Orange Crush 35RT",
        imagen: "../assets/img/orange1.jpg",
        precio: 725.79
    },
    {
        id: "amp-champion",
        titulo: "Amplificador Champion™ 50XL",
        imagen: "../assets/img/champion.jpg",
        precio: 309.99
    },
    {
        id: "amp-tone1",
        titulo: "Amplificador Tone Master® Super Reverb®",
        imagen: "../assets/img/tone2.jpg",
        precio: 1599.00
    },
    {
        id: "amp-tone2",
        titulo: "Amplificador Tone Master® Twin Reverb®",
        imagen: "../assets/img/tonemaster.jpg",
        precio: 1389.00
    },
    {
        id: "amp-katana",
        titulo: "Amplificador Boss Katana 50 MkII",
        imagen: "../assets/img/boss.jpg",
        precio: 1055.52
    },
    {
        id: "amp-roland",
        titulo: "Amplificador Roland Acs Live Lt Acoustic Singer Live",
        imagen: "../assets/img/rongar.jpg",
        precio: 1406.15
    },
    {
        id: "amp-marshall1",
        titulo: "Amplificador Marshall MG Carbon Fibre MG50CFX Transistor",
        imagen: "../assets/img/marshall1.jpg",
        precio: 809.99
    },
    {
        id: "amp-marshall2",
        titulo: "Amplificador Marshall Mb15 (bass)",
        imagen: "../assets/img/marshall2.jpg",
        precio: 1000
    },
    {
        id: "amp-marshall3",
        titulo: "Amplificador Marshall Mb30 (bass)",
        imagen: "../assets/img/marshall3.jpg",
        precio: 683.93
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        precio: 1000
    },
    {
        id: "amp-orange2",
        titulo: "Amplificador Orange Crush Pix CR50BXT Transistor",
        imagen: "../assets/img/orange2.jpg",
        precio: 929.21
    },
    {
        id: "amp-peavey",
        titulo: "Amplificador Peavey Rage 258 Woofer 8 Eq 3",
        imagen: "../assets/img/peavey1.jpg",
        precio: 457.47
    },
    {
        id: "amp-evh",
        titulo: "Amplificador Fender Evh 5150 212st",
        imagen: "../assets/img/evh.jpg",
        precio: 3657.04
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")

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