//pintar menu carrito
const carrito = document.querySelector('.js-carrito')
const iconoCarrito = document.querySelector('.js-carrito-icono')

const menuCarrito = () => {
    const handleIconoCarrito = (event) => {
        event.preventDefault();
        carrito.classList.toggle('hidden');
    }
    
    iconoCarrito.addEventListener('click', handleIconoCarrito);
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
    const i = document.createElement('i');
    i.classList.add('fa-solid')
    i.classList.add('fa-cart-shopping');
    button.appendChild(i);
    button.textContent = 'Añadir al carrito'
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(h6);
    div.appendChild(button);
    section.appendChild(figure);
    section.appendChild(div);
    gridProductos.appendChild(section);
}

const pintarProductos = () => {
    for (const producto of productos){
        pintarUnProducto(producto);
    }
}




const initial = () => {
    menuCarrito();
    pintarProductos();
}

initial();