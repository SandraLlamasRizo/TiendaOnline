//traer elementos DOM
const carrito = document.querySelector('.js-carrito');
const iconoCarrito = document.querySelector('.js-carrito-icono');
const sectionProductos = document.querySelector('.js-productosCarrito');
const numeroCarrito = document.querySelector('.js-numero');
const totalCarrito = document.querySelector('.js-total');
const vaciarCarrito = document.querySelector('.js-vaciar');
const search = document.querySelector('.js-searchInput');
const btnSearch = document.querySelector('.js-search');
const gridProductos = document.querySelector('.js-productos')

//pintar menu carrito
let carritoProductos = [];

const handleIconoCarrito = (event) => {
    event.preventDefault();
    carrito.classList.toggle('hidden');
}

//handle botones cantidad carrito
    //boton menos carrito
const handleMenos = (event) => {
    const idProducto = parseFloat(event.target.name);
    for (const item of carritoProductos){
        if (item.id === idProducto && item.cantidad > 1){
            item.cantidad --
        } else if(item.id === idProducto && item.cantidad === 1){
            const indice = carritoProductos.indexOf(item);
            carritoProductos.splice(indice, 1);
        }
    }
    pintarCarrito(carritoProductos);
}

    //boton mas carrito
const handleMas = (event) => {
    const idProducto = parseFloat(event.target.name);
    for (const item of carritoProductos){
        if (item.id === idProducto){
            if (item.cantidad < item.stock) {
                item.cantidad ++
            } else {
                alert(`No queda stock de: ${item.nombre}`);
            }
        }
    }
    pintarCarrito(carritoProductos);
}

    //boton eliminar carrito
const handleEliminar = (event) => {
    const idProducto = parseFloat(event.target.name);
    for (const item of carritoProductos){
        if (item.id === idProducto){
            const indice = carritoProductos.indexOf(item);
            carritoProductos.splice(indice, 1);
        }
    }
    pintarCarrito(carritoProductos);
}

    //boton vaciar carrito
const handleVaciar = (event) => {
    carritoProductos = [];
    pintarCarrito(carritoProductos);
}

//calcular precio total y numero items (para info carrito)
const calcularTotal = (array) => {
    let total = 0;
    array.forEach((item) => total += (item.precio * item.cantidad))
    return total;
}

const calcularNumeroItems = (array) => {
    let total = 0;
    array.forEach((item) => total +=  item.cantidad)
    return total;
}

//pintar productos carrito
    //pintar cada item
const pintarUnCarrito = (producto) => {
    //crear articulo
    const article = document.createElement('article');
    article.classList.add('js-item');
    //crear figura con imagen
    const figure = document.createElement('figure');
    figure.classList.add('imagenCarrito');
    const img = document.createElement('img');
    img.src = producto.imagen;
    figure.appendChild(img);
    //crear h3 para el nombre del producto
    const h3 = document.createElement('h3');
    h3.classList.add('descripcion');
    h3.textContent = producto.nombre;
    //crear p para el precion del producto
    const pPrecio = document.createElement('p');
    pPrecio.classList.add('precioItem');
    pPrecio.textContent = `${producto.precio}€`
    //crear div que contendra cantidad y botones
    const divCantidad = document.createElement('div');
    divCantidad.classList.add('cantidad');
    //crear boton menos
    const buttonMenos = document.createElement('button');
    buttonMenos.classList.add('reducirCantidad');
    buttonMenos.textContent = '-';
    buttonMenos.setAttribute('name', producto.id);
    buttonMenos.addEventListener('click', handleMenos);
    //crear p para cantidad del item
    const pCantidad = document.createElement('p');
    pCantidad.textContent = producto.cantidad;
    //crear boton mas
    const buttonMas = document.createElement('button');
    buttonMas.classList.add('augmentarCantidad');
    buttonMas.textContent = '+';
    buttonMas.setAttribute('name', producto.id);
    buttonMas.addEventListener('click', handleMas);
    //crear boton eliminar
    const buttonEliminar = document.createElement('button');
    buttonEliminar.classList.add('eliminar');
    buttonEliminar.textContent = 'Eliminar';
    buttonEliminar.setAttribute('name', producto.id);
    buttonEliminar.addEventListener('click', handleEliminar);
    //introducir elementos en el div de cantidad y botones
    divCantidad.appendChild(buttonMenos);
    divCantidad.appendChild(pCantidad);
    divCantidad.appendChild(buttonMas);
    divCantidad.appendChild(buttonEliminar);
    //crear h6 para precio total de itme * cantidad
    const h6total = document.createElement('h6');
    const precioTotal = producto.precio * producto.cantidad;
    h6total.textContent = `${precioTotal.toFixed(2)}€`;
    //introducir elementos en articulo
    article.appendChild(figure);
    article.appendChild(h3);
    article.appendChild(pPrecio);
    article.appendChild(divCantidad);
    article.appendChild(h6total);
    //introducir articulo en seccion del DOM
    sectionProductos.appendChild(article);
}
    //pintar carrito entero
const pintarCarrito = (array) => {
    sectionProductos.innerHTML = '';
    for (const producto of array){
        pintarUnCarrito(producto);
    };
    const total = calcularTotal(carritoProductos);
    totalCarrito.textContent = `Total: ${total.toFixed(2)} €`;
    const totalItems = calcularNumeroItems(carritoProductos);
    numeroCarrito.textContent = `(${totalItems})`;
}

//handle click añadirCarrito
const handleAñadirCarrito = (event) => {
    const idProducto = parseFloat(event.target.name);
    const nuevoProducto = productos.find(item => item.id === idProducto);
    const indexCarrito = carritoProductos.findIndex(item => item.id === idProducto);
    if (indexCarrito === -1){
        nuevoProducto.cantidad = 1;
        carritoProductos.push(nuevoProducto);
    } else if (nuevoProducto.cantidad < nuevoProducto.stock){
        nuevoProducto.cantidad ++
    } else {
        alert(`No queda stock de: ${nuevoProducto.nombre}`);
    }
    pintarCarrito(carritoProductos);

}

//pintar productos
    //pintar un producto
const pintarUnProducto = (producto) => {
    //crear seccion por carta
    const section = document.createElement('section');
    section.classList.add('carta')
    //crear figura con imagen
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = producto.nombre;
    figure.appendChild(img);
    section.appendChild(figure);
    //crear div para descripcion
    const div = document.createElement('div');
    div.classList.add('description')
    //crear h3 para el nombre del producto
    const h3 = document.createElement('h3');
    h3.textContent = producto.nombre;
    //crear p para la descripcion del producto
    const p = document.createElement('p');
    p.textContent = producto.descripcion;
    //crear h6 para el precio del producto
    const h6 = document.createElement('h6');
    h6.textContent = `${producto.precio} €`
    //crear boton añadir al carrito
    const button = document.createElement('button');
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Añadir al carrito `;
    button.setAttribute('name', producto.id);
    //introducir elementos en el div
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(h6);
    div.appendChild(button);
    section.appendChild(figure);
    section.appendChild(div);
    gridProductos.appendChild(section);
    //escuchar boton añadir al carrito
    button.addEventListener('click', handleAñadirCarrito)
}
    //pintar todos los productos
const pintarProductos = (arrayProductos) => {
    for (const producto of arrayProductos){
        pintarUnProducto(producto);
    }
}

//handleSearch del buscador
const handleSearch = (event) => {
    const copyProducts = [...productos];
    const productoBuscado = search.value.toLowerCase();
    const searchProducts = copyProducts.filter((item) => item.nombre.toLowerCase().includes(productoBuscado));
    gridProductos.innerHTML = '';
    pintarProductos(searchProducts);
}


//cargar DOM
const initial = () => {
    pintarProductos(productos);
    iconoCarrito.addEventListener('click', handleIconoCarrito);
    vaciarCarrito.addEventListener('click', handleVaciar);
    btnSearch.addEventListener('click', handleSearch);
}

initial();