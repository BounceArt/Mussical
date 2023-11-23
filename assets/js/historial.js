const historialCompras = JSON.parse(localStorage.getItem("historial-compras")) || []
const contenedor = document.getElementById("historialCompras")
const botonVaciar = document.getElementById("vaciar-historial")

if (historialCompras.length !== null) {
    historialCompras.forEach(compra => {
        const div = document.createElement("div")
        div.innerHTML = `
            <p><strong>Fecha:</strong> ${compra.fecha}</p>
            <p><strong>Cliente:</strong> ${compra.nombres} ${compra.apellidos}</p>
            <p><strong>Correo:</strong> ${compra.correo}</p>
            <p><strong>Monto Total:</strong> $${compra.totalCompra}</p>
            <p><strong>Productos:</strong>
            <ul>
            ${compra.productos.map(producto => `<li>${producto.titulo} x ${producto.cantidad}</li>`).join('')}
            </ul></p>
            <hr>
        `
        contenedor.appendChild(div)
    })
} else {
    contenedor.innerHTML = "<p>No hay compras registradas.</p>"
}

function vaciarHistorial() {
    botonVaciar.addEventListener("click", () => {
        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'question',
            html: `Eliminarás el historial de productos.`,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                historialCompras.length = 0
                localStorage.setItem("historial-compras", JSON.stringify(historialCompras))
                contenedor.innerHTML = "<p>No hay compras registradas.</p>"
            }
        })
    })
}

vaciarHistorial()
