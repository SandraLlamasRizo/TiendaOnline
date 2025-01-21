//pintar menu carrito
const carrito = document.querySelector('.js-carrito');
const iconoCarrito = document.querySelector('.js-carrito-icono');
const sectionProductos = document.querySelector('.js-productosCarrito');
const numeroCarrito = document.querySelector('.numero');
const totalCarrito = document.querySelector('.js-total');
const vaciarCarrito = document.querySelector('.js-vaciar');
const search = document.querySelector('.js-searchInput');
const btnSearch = document.querySelector('.js-search');

let carritoProductos = [];

const menuCarrito = () => {
    const handleIconoCarrito = (event) => {
        event.preventDefault();
        carrito.classList.toggle('hidden');
    }
    
    iconoCarrito.addEventListener('click', handleIconoCarrito);
}

//handle botones cantidad carrito
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

const handleVaciar = (event) => {
    carritoProductos = [];
    pintarCarrito(carritoProductos);
}

//calcular precio total y numero items

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

const pintarUnCarrito = (producto) => {
    const article = document.createElement('article');
    article.classList.add('js-item');

    const figure = document.createElement('figure');
    figure.classList.add('imagenCarrito');
    const img = document.createElement('img');
    img.src = producto.imagen;
    figure.appendChild(img);

    const h3 = document.createElement('h3');
    h3.classList.add('descripcion');
    h3.textContent = producto.nombre;

    const pPrecio = document.createElement('p');
    pPrecio.classList.add('precioItem');
    pPrecio.textContent = `${producto.precio}€`

    const divCantidad = document.createElement('div');
    divCantidad.classList.add('cantidad');
    const buttonMenos = document.createElement('button');
    buttonMenos.classList.add('reducirCantidad');
    buttonMenos.textContent = '-';
    buttonMenos.setAttribute('name', producto.id);
    buttonMenos.addEventListener('click', handleMenos);

    const pCantidad = document.createElement('p');
    pCantidad.textContent = producto.cantidad;
    const buttonMas = document.createElement('button');
    buttonMas.classList.add('augmentarCantidad');
    buttonMas.textContent = '+';
    buttonMas.setAttribute('name', producto.id);
    buttonMas.addEventListener('click', handleMas);

    const buttonEliminar = document.createElement('button');
    buttonEliminar.classList.add('eliminar');
    buttonEliminar.textContent = 'Eliminar';
    buttonEliminar.setAttribute('name', producto.id);
    buttonEliminar.addEventListener('click', handleEliminar);

    divCantidad.appendChild(buttonMenos);
    divCantidad.appendChild(pCantidad);
    divCantidad.appendChild(buttonMas);
    divCantidad.appendChild(buttonEliminar);

    const h6total = document.createElement('h6');
    const precioTotal = producto.precio * producto.cantidad;
    h6total.textContent = `${precioTotal.toFixed(2)}€`;

    article.appendChild(figure);
    article.appendChild(h3);
    article.appendChild(pPrecio);
    article.appendChild(divCantidad);
    article.appendChild(h6total);

    sectionProductos.appendChild(article);
}

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
const gridProductos = document.querySelector('.js-productos')

const pintarUnProducto = (producto) => {
    const section = document.createElement('section');
    section.classList.add('carta')
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = producto.nombre;
    figure.appendChild(img);
    section.appendChild(figure);
    const div = document.createElement('div');
    div.classList.add('description')
    const h3 = document.createElement('h3');
    h3.textContent = producto.nombre;
    const p = document.createElement('p');
    p.textContent = producto.descripcion;
    const h6 = document.createElement('h6');
    h6.textContent = `${producto.precio} €`
    const button = document.createElement('button');
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Añadir al carrito `;
    button.setAttribute('name', producto.id);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(h6);
    div.appendChild(button);
    section.appendChild(figure);
    section.appendChild(div);
    gridProductos.appendChild(section);

    button.addEventListener('click', handleAñadirCarrito)
}

const pintarProductos = (arrayProductos) => {
    for (const producto of arrayProductos){
        pintarUnProducto(producto);
    }
}

//handleSearch

const handleSearch = (event) => {
    
    const copyProducts = [...productos];
    const searchProducts = copyProducts.filter((item) => item.nombre.toLowerCase().includes(search.value));
    gridProductos.innerHTML = '';
    pintarProductos(searchProducts);
}


//cargar DOM
const initial = () => {
    menuCarrito();
    pintarProductos(productos);
    vaciarCarrito.addEventListener('click', handleVaciar);
    btnSearch.addEventListener('click', handleSearch)
}

initial();