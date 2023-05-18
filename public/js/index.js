class Producto {
    constructor(producto) {
        this.id = producto._id
        this.nombre = producto.nombre
        this.precio = producto.precio
        this.descripcion = producto.descripcion
        this.thumbnail = producto.thumbnail
        this.stock = producto.stock
        this.cantidad = 1
    }
    sumar1ACantidad() {
        this.cantidad++
    }
    TotalDelCarrito() {
        this.totalPrecio = this.precio * this.cantidad
    }
}

const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []


carrito = JSON.parse(localStorage.getItem('carrito')) || []


const productosWrapper = document.getElementById('productos-wrapper')
const printProductos = async () => {
    const respuesta = await fetch('/api/product/stock')
    const data = await respuesta.json()
    stockProductos = data
    stockProductos.forEach((producto) => {
        let card = document.createElement('div')
        card.innerHTML = `
         <figure class="card m-2 list-group-item">
               <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.nombre}">
               <p class="card-title">${producto.nombre} </p>
               <p class="card-description">(${producto.descripcion})</p>
               <p class="card-text">$ ${producto.precio}</p>

               <button class="btn btn-primary" id="p${producto._id}">Agregar al Carrito</button>
         </figure> `
        productosWrapper.appendChild(card)
        const boton = document.getElementById(`p${producto._id}`)
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto._id)
        })
    })
}

printProductos()

const agregarAlCarrito = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId)
    if (item) {
        function sumar1ACantidad() {
            item.cantidad++
        }
        sumar1ACantidad()

        function TotalDelCarrito() {
            item.totalPrecio = item.precio * item.cantidad
        }
        TotalDelCarrito()

        Swal.fire({
            position: 'center',
            icon: 'success',
            showClass: {
                popup: 'animate__animated animate__zoomIn',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutTopRight',
            },
            title: `${item.nombre} sumado!`,
            imageUrl: `${item.thumbnail}`,
            imageHeight: 100,
            imageWidth: 100,
            text: `${item.cantidad}  ${item.nombre}s en el carrito`,
            showConfirmButton: false,
            timer: 900,
        })
    
    } else {
        let newProducto = stockProductos.find(
            (producto) => producto._id === productoId
        )
        carrito.push(new Producto(newProducto))
        carrito[carrito.length - 1].TotalDelCarrito()

        Swal.fire({
            position: 'center',
            icon: 'success',
            showClass: {
                popup: 'animate__animated animate__zoomIn',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutTopRight',
            },
            title: `${newProducto.nombre}`,
            imageUrl: `${newProducto.thumbnail}`,
            imageHeight: 100,
            imageWidth: 100,
            text: 'Se agrego al carrito',
            showConfirmButton: false,
            timer: 900,
        })
    }
    actualizarCarrito()
}

const deleteCart = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId)
    const index = carrito.indexOf(item)
    carrito.splice(index, 1)
    actualizarCarrito()
}


const vaciarCarrito = document.getElementById('vaciarCarrito')
vaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


const pagarTotal = document.getElementById('pagarTotal')
pagarTotal.addEventListener('click', () => {
    Swal.fire({
        title: `Total: $${totalCarrito} `,
        text: 'Se enviara un correo con los productos seleccionados',
        showClass: {
            popup: 'animate__animated animate__fadeInTopRight',
        },
        hideClass: {
            popup: 'animate__animated animate__bounceOutRight',
        },
        imageUrl:
            'https://img.icons8.com/dotty/480/card-in-use-1.png',
        imageHeight: 40,
        confirmButtonText: 'Pagar',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
 
    }).then((result) => {
        if (result.isConfirmed) {
            const mandarDatosAlBackEnd = (order) => {
                fetch('/api/product/order', {
                    method: 'POST',
                    headers: {
                        name: 'cart',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(order),
                })
            }

            mandarDatosAlBackEnd(carrito)
            carrito.length = 0
            actualizarCarrito()
        }
    })
})


const carritoWrapper = document.getElementById('carrito-wrapper')
const actualizarCarrito = () => {
    carritoWrapper.innerHTML = ''
    if (carrito.length === 0) {
        let aviso = document.createElement('div')
        aviso.innerHTML = `<p class="carritoVacio"> No hay productos en el carrito </p>`
        carritoWrapper.appendChild(aviso)
    } else {
        carrito.forEach((producto) => {
            let card = document.createElement('div')
            card.innerHTML = `
    <figure class="card mb-4 ">
      <div class="row g-0">
          <div class="col-md-3 img-carrito">
              <img src="${producto.thumbnail}" class="img-fluid rounded-start" alt="${producto.nombre}">
          </div>
          <div class="col-md-6">
             <div class="card-detalle">
                <p class="card-title">${producto.nombre} </p>
                <p class="card-text">Cant: ${producto.cantidad}</p>
                <p class="card-text">Total: $ ${producto.totalPrecio}</p>
             </div>
          </div>
          <div class="col-md-3 d-flex">
                <button class="btn btn-primary eliminar" id="eliminar${producto.id}">Eliminar</button>
          </div>
      </div>
    </figure
    `
            carritoWrapper.appendChild(card)

            const botonDelete = document.getElementById(
                `eliminar${producto.id}`
            )
            botonDelete.addEventListener('click', () => {
                deleteCart(producto.id)
            })
        })
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))

    const productosCounter = document.getElementById('productosCounter')

    productosCounter.innerText = carrito.reduce(
        (acumulador, elemento) => acumulador + elemento.cantidad,
        0
    )

    const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')

    totalPrecioCarrito.innerText = carrito.reduce(
        (total, elemento) => total + elemento.totalPrecio,
        0
    )
    totalCarrito = carrito.reduce(
        (total, elemento) => total + elemento.totalPrecio,
        0
    )
}

actualizarCarrito()



document.querySelector('#serch-input').addEventListener('input', filterList)

function filterList() {
    const serchInput = document.querySelector('#serch-input')
    const filter = serchInput.value.toLowerCase()
    const listItems = document.querySelectorAll('.list-group-item')

    listItems.forEach((item) => {
        let text = item.textContent
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.opacity = 1
            item.style.zIndex = 1
        } else {
            item.style.opacity = 0.1
            item.style.zIndex = -1
        }
    })
}
