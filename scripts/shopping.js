var carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];


let vestidos = [
    {
        nombre: "Vestido Ibiza",
        precio: 17.99,
        imagen: "../images/Vestidos/ibiza.webp"
    },
    {
        nombre: "Vestido Dubai",
        precio: 25.99,
        imagen: "../images/Vestidos/dubai.webp"
    },
    {
        nombre: "Vestido California",
        precio: 24.99,
        imagen: "../images/Vestidos/california.webp"
    },
    {
        nombre: "Vestido Buenos Aires",
        precio: 12.45,
        imagen: "../images/Vestidos/buenosAires.webp"
    },
    {
        nombre: "Vestido Tokkyo",
        precio: 17.45,
        imagen: "../images/Vestidos/tokyo.webp"
    },
    {
        nombre: "Vestido México",
        precio: 14.35,
        imagen: "../images/Vestidos/mexico.webp"
    },
    {
        nombre: "Vestido Hawaii",
        precio: 18.95,
        imagen: "../images/Vestidos/hawaii.webp"
    },
    {
        nombre: "Vestido Croacia",
        precio: 17.99,
        imagen: "../images/Vestidos/croacia.webp"
    },
    {
        nombre: "Vestido Medellín",
        precio: 25.99,
        imagen: "../images/Vestidos/medellin.webp"
    },
    {
        nombre: "Vestido Europa",
        precio: 19.99,
        imagen: "../images/Vestidos/europa.webp"
    },
    {
        nombre: "Vestido América",
        precio: 15.55,
        imagen: "../images/Vestidos/america.webp"
    },
    {
        nombre: "Vestido París",
        precio: 17.95,
        imagen: "../images/Vestidos/paris.webp"
    }
]

let tops = [
    { nombre: 'Jersey Pensamiento', precio: 11.75, imagen: '../images/jerseys/pensamiento.webp' },
    { nombre: 'Jersey Violetas', precio: 12.45, imagen: '../images/jerseys/violetas.webp' },
    { nombre: 'Jersey Amapola', precio: 15.50, imagen: '../images/jerseys/amapola.webp' },
    { nombre: 'Jersey Azucena', precio: 14.99, imagen: '../images/jerseys/azucena.webp' },
    { nombre: 'Jersey Jazmín', precio: 17.99, imagen: '../images/jerseys/jazmin.webp' },
    { nombre: 'Jersey Cossandra', precio: 11.75, imagen: '../images/jerseys/cossandra.webp' },
    { nombre: 'Jersey Calendula', precio: 14.99, imagen: '../images/jerseys/calendula.webp' },
    { nombre: 'Top escote cuadrado', precio: 12.45, imagen: '../images/jerseys/cuadrado.webp' },
    { nombre: 'Blusa escote pico', precio: 11.75, imagen: '../images/jerseys/pico.webp' },
    { nombre: 'Top escote Doblez', precio: 12.99, imagen: '../images/jerseys/doblez.webp' },
    { nombre: 'Top asimetrico mangas largas', precio: 11.75, imagen: '../images/jerseys/asimetrico.webp' },
    { nombre: 'Top blanco en punta', precio: 15.99, imagen: '../images/jerseys/punta.webp' },
    { nombre: 'Top asimétrico gris', precio: 13.99, imagen: '../images/jerseys/gris.webp' },
    { nombre: 'Top asimétrico hombro', precio: 14.23, imagen: '../images/jerseys/hombro.webp' },
    { nombre: 'Top fucsia con escote fruncido', precio: 11.75, imagen: '../images/jerseys/fucsia.webp' },
    { nombre: 'Top cuello asimétrico', precio: 15.55, imagen: '../images/jerseys/cuello.webp' },
]

let bottom = [
   {nombre: 'Pantalón polipiel ancho', precio: 15.99, imagen: '../images/pantalones/polipiel.webp'},
   {nombre: 'Pantalón Canalé', precio: 12.99, imagen: '../images/pantalones/canale.webp'},
   {nombre: 'Pantalón costuras', precio: 11.99 , imagen: '../images/pantalones/costuras.webp'},
   {nombre: 'Pantalón chandal', precio: 10.99, imagen: '../images/pantalones/chandal.webp'},
   {nombre: 'Pantalón algodón', precio:16.99 , imagen: '../images/pantalones/algodon.webp'},
   {nombre: 'Falda brilli-brilli azul', precio: 13.99, imagen: '../images/pantalones/brillos.webp'},
   {nombre: 'Falda polipiel fruncida', precio: 11.99, imagen: '../images/pantalones/fruncida.webp'},
   {nombre: 'Falda estampada', precio:14.99 , imagen: '../images/pantalones/estampada.webp'},
]

let bolsos = [
    {nombre: 'Bolso Catrina', precio: 12.99, imagen:'../images/bolsos/catrina.webp'},
    {nombre: 'Bolso Agatha', precio: 13.99, imagen:'../images/bolsos/agatha.webp'},
    {nombre: 'Bolso Georgina', precio: 16.99, imagen:'../images/bolsos/georgina.webp'},
    {nombre: 'Bolso Bad Gyal', precio:15.99 , imagen:'../images/bolsos/bad.webp'},
    {nombre: 'Bolso Taylor', precio: 12.99, imagen:'../images/bolsos/taylor.webp'},
    {nombre: 'Bolso Antonela', precio: 11.99, imagen:'../images/bolsos/antonela.webp'},
    {nombre: 'Botas CowBoy', precio: 19.99, imagen:'../images/bolsos/cowboy.webp'},
    {nombre: 'Tacones dorados', precio: 24.99, imagen:'../images/bolsos/tacon.webp'},
    {nombre: 'Botas brilli-brilli', precio: 29.99, imagen:'../images/bolsos/brillo.webp'},
    {nombre: 'Sandalias cuerda negra', precio: 18.99, imagen:'../images/bolsos/sandalias.webp'},
    {nombre: 'Sandalias planas doradas', precio: 15.99, imagen:'../images/bolsos/.webp'},
    {nombre: 'Tacon brilli-brilli', precio: 24.99, imagen:'../images/bolsos/.webp'}
]

let accesorios = [
    {nombre: 'Pendientes piramide', precio: 4.99, imagen: '../images/accesorios/piramide.webp'},
    {nombre: 'Set 6 pares de pendientes', precio:9.99 , imagen: '../images/accesorios/set.webp'},
    {nombre: 'Set Boah', precio: 7.99, imagen: '../images/accesorios/boah.webp'},
    {nombre: 'Conjunto flores', precio: 14.99, imagen: '../images/accesorios/flor.webp'},
    {nombre: 'Reloj Paris', precio: 5.99, imagen: '../images/accesorios/paris.webp'},
    {nombre: 'Unicollar Triple', precio:4.99 , imagen: '../images/accesorios/unicollar.webp'},
    {nombre: 'Cinturón blak', precio:4.55 , imagen: '../images/accesorios/blak.webp'},
    {nombre: 'Cinturón tachuelas', precio: 4.55, imagen: '../images/accesorios/tachuelas.webp'},
    {nombre: 'Gafas London', precio: 9.99 , imagen: '../images/accesorios/london.webp'},
    {nombre: 'Gafas New York', precio: 9.99, imagen: '../images/accesorios/newyork.webp'},
    {nombre: 'Bufanda Roma', precio: 15.99, imagen: '../images/accesorios/roma.webp'}
]

var c = 0;
var divVestidos = document.getElementById("productos");

var fila; // Variable para almacenar la fila actual

function actualizarCarrito() {
    
    var cart = document.getElementById("carrito")
    cart.appendChild(document.createElement('hr'))
    var total = 0;
    cart.innerHTML = ''
    // Limpiar el contenido del contenedor del carrito
    carrito = JSON.parse(sessionStorage.getItem('carrito'))

    carrito.forEach(producto => {
        total += producto.precio
        var div = document.createElement("div")
        var subdiv = document.createElement("div")
        var del = document.createElement("button")
        var nombre = document.createElement("p")
        nombre.innerText = producto.nombre
        var precio = document.createElement("h3")
        precio.textContent = producto.precio + " €" // Usar textContent para establecer el texto
        var imagen = document.createElement("img")

        imagen.setAttribute("src", producto.imagen)

        cart.appendChild(div); // Añadir al contenedor del carrito
        div.appendChild(imagen)
        div.appendChild(subdiv)
        subdiv.appendChild(precio)
        subdiv.appendChild(nombre)
        subdiv.appendChild(del)
        cart.appendChild(document.createElement('hr'))

        del.textContent = "Eliminar"; // Establecer el texto del botón

        // Agregar evento click para eliminar el producto del carrito
        del.addEventListener("click", function () {
            carrito = carrito.filter(item => item != producto)
            sessionStorage.setItem('carrito',JSON.stringify(carrito))
            actualizarCarrito()
            alert('\'' + producto.nombre + '\' ha sido eliminado')
        })
    })

    var pt = document.createElement('p')
    var checkout = document.createElement('button')
    checkout.setAttribute('id', 'checkout')
    checkout.innerHTML = 'Ir al pago'
    pt.innerText = ''
    pt.innerText = 'Total: ' + total.toFixed(2) + ' €'
    checkout.style.marginBottom = '200px'

    cart.appendChild(pt)
    cart.appendChild(checkout)

}

function mostrarCatalogo(productos) {
    productos.forEach(element => {
        // Si c es múltiplo de 4, crea una nueva fila
        if (c % 4 == 0) {
            fila = document.createElement("div");
            fila.setAttribute("class", "fila");
            divVestidos.appendChild(fila);
        }

        var producto = document.createElement("div");
        producto.setAttribute("id", "producto");
        producto.setAttribute("class", "producto")
        fila.appendChild(producto);

        var nombre = document.createElement("h3");
        nombre.innerHTML = element.nombre;

        var precio = document.createElement("h4");
        precio.innerHTML = element.precio + "€";

        var image = document.createElement("img");
        image.setAttribute("src", element.imagen);

        producto.appendChild(image);
        producto.appendChild(nombre);
        producto.appendChild(precio);

        var menu = document.createElement("div");
        menu.setAttribute("class", "menu");

        var boton = document.createElement("button");
        boton.textContent = "Añadir al carrito";
        boton.setAttribute("id", "add")
        menu.appendChild(boton);

        producto.appendChild(menu);

        c++;

        // Evitar interacción fuera de inicio de sesión
        boton.addEventListener("click", function () {
            carrito.push(element);
            sessionStorage.setItem('carrito',JSON.stringify(carrito))//sessionStorage.setItem('carrito')
            actualizarCarrito();
            var username = sessionStorage.getItem('username');
            if (!username) {
                //    alert('Debes iniciar sesión para añadir artículos.');
                return;
            }
            //carrito.push(element);
        });

        // Agregar evento de clic para mostrar información detallada del producto
        producto.addEventListener("click", function(event){
            
            if(event.target.id === "add"){
                return;
            }

            var close = document.createElement("button");
            var info = document.querySelector(".oculto");
            info.style.display = 'flex'
            info.innerHTML = ''

            close.addEventListener("click",function(){
                info.style.display = 'none'
            })

            
            close.innerText = "X";
            var sub = document.createElement("div");
            var foto = document.createElement("img");
            var price = document.createElement("h2");
            price.innerText = element.precio + " €"; 
            var name = document.createElement("h3");
            var add = document.createElement("button")
            add.innerText = 'Añadir al carrito'

            add.addEventListener("click", function () {
                carrito.push(element);
                sessionStorage.setItem("carrito",JSON.stringify(carrito))
                actualizarCarrito();
                var username = sessionStorage.getItem('username');
                if (!username) {
                    //    alert('Debes iniciar sesión para añadir artículos.');
                    return;
                }
                carrito.push(element);
            });

            name.innerText = element.nombre; 
            foto.setAttribute("src", element.imagen);
            info.appendChild(close)
            info.appendChild(foto)
            info.appendChild(sub)
            sub.appendChild(price)
            sub.appendChild(name)
            sub.appendChild(add)
        });
    });
}


var flag = true


function mostrarCarrito() {

    var cart = document.getElementById("carrito")
    if (carrito.length == 0) {
        alert('Usted no ha añadido nada al carrito')
        return;
    }
    if (cart.style.display === 'block') {
        cart.style.transition = '1s'
        cart.style.display = 'none;'

    } else {
        cart.style.display = 'block';
        document.addEventListener('click', closeCartOutside);
    }
}

function closeCartOutside(event) {
    var cart = document.getElementById('carrito');
    var cartButton = document.getElementById('botonCarrito');
    // Verifica si el clic ocurrió fuera del botón de carrito y del área del carrito que no sea un hijo del mismo
    if (event.target !== cartButton && !cart.contains(event.target)) {
        cart.style.display = 'none';
        // Remueve el event listener una vez que el carrito se oculta
        document.removeEventListener('click', closeCartOutside);
    }
}

document.getElementById('botonCarrito').addEventListener('click', mostrarCarrito);

if (document.getElementById("htmlVestidos")) {
    mostrarCatalogo(vestidos)
} else if (document.getElementById("htmlTops")) {
    mostrarCatalogo(tops)
} else if(document.getElementById("htmlBottom")){
    mostrarCatalogo(bottom)
} else if(document.getElementById("htmlBolsos")){
    mostrarCatalogo(bolsos)
} else if(document.getElementById("htmlAcc")){
    mostrarCatalogo(accesorios)
}

document.addEventListener("DOMContentLoaded",actualizarCarrito())

