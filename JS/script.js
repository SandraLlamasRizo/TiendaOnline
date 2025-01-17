const carrito = document.querySelector('.js-carrito')
const iconoCarrito = document.querySelector('.js-carrito-icono')


const menuCarrito = () => {
    const handleIconoCarrito = (event) => {
        event.preventDefault();
        carrito.classList.toggle('hidden');
    }
    
    iconoCarrito.addEventListener('click', handleIconoCarrito);
}

const initial = () => {
    menuCarrito();
}

initial();