const productos = [
    {
        id: 1,
        nombre: 'Jersey ribete azul',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-canale-punto-cuello-alto-color-azul_720x.jpg',
        descripcion: 'Jersey canalé en color azul, de cuello alto y ribete en el cuello.',
        precio: 19.99,
        stock: 5
    },
    {
        id: 2,
        nombre: 'Jersey ribete crema',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-canale-punto-cuello-alto-color-crema-2_1296x.jpg',
        descripcion: 'Jersey canalé en color crema, de cuello alto y ribete en el cuello.',
        precio: 19.99,
        stock: 5
    },
    {
        id: 3,
        nombre: 'Camisa corazones',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/blusa-blanca-bambula-corazones-bordados-6_720x.jpg',
        descripcion: 'Camisa de lino con corazones bordados y manga larga.',
        precio: 29.99,
        stock: 10
    },
    {
        id: 4,
        nombre: 'Chaleco teja botones',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/chaleco-color-teja-botones-4_1296x.jpg',
        descripcion: 'Chaleco de cuello solapa y sin mangas. Cierre frontal con botones.',
        precio: 29.99,
        stock: 4
    },
    {
        id: 5,
        nombre: 'Jersey gris perritos',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-gris-claro-con-bordados-de-perritos-9_1296x.jpg',
        descripcion: 'Jersey de color gris con puños y dobladillo acabados en canalé.',
        precio: 49.99,
        stock: 10
    },
    {
        id: 6,
        nombre: 'Jersey beige perritos',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-beige-con-bordados-de-perritos-5_1296x.jpg',
        descripcion: 'Jersey de color beige con puños y dobladillo acabados en canalé.',
        precio: 49.99,
        stock: 10
    },
    {
        id: 7,
        nombre: 'Jersey oversize corazones',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-beige-con-corazones-bordados-3_540x.jpg',
        descripcion: 'Jersey amplio de cuello vuelto y manga larga con corazones burdeos.',
        precio: 39.99,
        stock: 5
    },
    {
        id: 8,
        nombre: 'Jersey rayas teja',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-rayas-teja-brillantes-5_1296x.jpg',
        descripcion: 'Jersey oversize con rayas teja y doradas.',
        precio: 33.99,
        stock: 10
    },
    {
        id: 9,
        nombre: 'Camiseta negra brilli',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/top-negro-brillantes-cuello-subido-6_1296x.jpg',
        descripcion: 'Blusa negra tipo top de encaje con transparencias. Cuello perkins.',
        precio: 14.99,
        stock: 5
    },
    {
        id: 10,
        nombre: 'Blusa asimétrica brilli',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/blusa-asimetrica-brillantes-brilli-brilli-negra-5_1296x.jpg',
        descripcion: 'Top tipo blusa de un hombro en brillantes. Puño elástico.',
        precio: 26.99,
        stock: 15
    },
    {
        id: 11,
        nombre: 'Jersey oversize beige',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-oversize-ancho-beige-3_900x.jpg',
        descripcion: 'Jersey amplio de cuello vuelto y manga larga abullonada.',
        precio: 29.99,
        stock: 5
    },
    {
        id: 12,
        nombre: 'Camiseta canalé crema',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/camiseta-canale-crema-blanco-2_1296x.jpg',
        descripcion: 'Camiseta de cuello redondo y manga larga. Cierre frontal con botones.',
        precio: 19.99,
        stock: 10
    },
    {
        id: 13,
        nombre: 'Chaleco punto beige',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/chaleco-beige-punto-8_900x.jpg',
        descripcion: 'Chaleco de punto beige cierre de botón.',
        precio: 29.99,
        stock: 5
    },
    {
        id: 14,
        nombre: 'Chaleco punto burdeos',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/chaleco-beige-punto-4_1296x.jpg',
        descripcion: 'Chaleco de punto burdeos cierre de botón.',
        precio: 29.99,
        stock: 5
    },
    {
        id: 15,
        nombre: 'Chaqueta borreguito beige',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/chaqueta-borreguito-beige-5_900x.jpg',
        descripcion: 'Chaqueta de corte holgado en borreguito con cierre de botones.',
        precio: 49.99,
        stock: 5
    },
    {
        id: 16,
        nombre: 'Chaqueta borreguito burdeos',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/chaqueta-borreguito-granate-9_900x.jpg',
        descripcion: 'Chaqueta de corte holgado en borreguito con cierre de botones.',
        precio: 49.99,
        stock: 5
    },
    {
        id: 17,
        nombre: 'Chaleco flores rosas bordadas',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/chaleco-flores-bordadas-rosas-7_900x.jpg',
        descripcion: 'Chaleco color beige con flores rosas bordadas. Acabados en ondas.',
        precio: 33.99,
        stock: 5
    },
    {
        id: 18,
        nombre: 'Jersey punto polo',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-tipo-polo-color-crema-2_1296x.jpg',
        descripcion: 'Jersey de punto. Manga larga, una ligera hombrera. Cuello tipo polo.',
        precio: 29.99,
        stock: 10
    },
    {
        id: 19,
        nombre: 'Jersey bardot negro',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-bardot-negro-6_1296x.jpg',
        descripcion: 'Jersey con cuello bardot. Hombros descubiertos y manga larga.',
        precio: 29.99,
        stock: 5
    },
    {
        id: 20,
        nombre: 'Cárdigan gris corazones rojos',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/bolso-granate-asa-extrahible-3_900x.jpg',
        descripcion: 'Cárdigan confeccionado con tejido de punto en mezcla de lana.',
        precio: 39.99,
        stock: 5
    },
    {
        id: 21,
        nombre: 'Cárdigan rosa corazones rojos',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/chaqueta-rosa-con-corazones-bordados-3_900x.jpg',
        descripcion: 'Cárdigan confeccionado con tejido de punto en mezcla de lana.',
        precio: 39.99,
        stock: 5
    },
    {
        id: 22,
        nombre: 'Jersey estampado naranja',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/jersey-estampado-naranja-y-marron-3_900x.jpg',
        descripcion: 'Jersey de cuello redondo y estampado de color marrón y naranja.',
        precio: 39.99,
        stock: 5
    },
    {
        id: 23,
        nombre: 'Camisa verde',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/camisa-verde-basica-solapa-y-cierre-botones_900x.jpg',
        descripcion: 'Camisa verde básica de lino y manga larga.',
        precio: 19.99,
        stock: 10
    },
    {
        id: 24,
        nombre: 'Camisa oversized rayas azules',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/camisa-oversize-de-rayas-azul-oscuro-con-fondo-color-crema-11_900x.jpg',
        descripcion: 'Camisa oversized, con cuello de pico, botones delante.',
        precio: 29.99,
        stock: 10
    },
    {
        id: 25,
        nombre: 'Blazer lino verde',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/pantalon-blanco-lino-tiro-alto-y-americana-lino-3-verde-militar_540x.jpg',
        descripcion: 'Americana con cuello solapa y manga larga. Color verde militar.',
        precio: 49.99,
        stock: 5
    },
    {
        id: 26,
        nombre: 'Camiseta crema rayas',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/short-negro-pantalon-corto-bermuda-lino-2copia_900x.jpg',
        descripcion: 'Camiseta slim tipo Top cropped corto de canalé a rayas.',
        precio: 24.99,
        stock: 10
    },
    {
        id: 27,
        nombre: 'Camiseta puntilla azul',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/camiseta-manga-corta-de-algodon-color-azul_900x.jpg',
        descripcion: 'Camiseta confeccionada en hilatura de algodón 100%.',
        precio: 19.99,
        stock: 10
    },
    {
        id: 28,
        nombre: 'Camiseta puntilla blanca',
        imagen: 'https://mardemarbarcelona.com/cdn/shop/files/camiseta-manga-corta-de-algodon-color-blanco-3_1296x.jpg',
        descripcion: 'Camiseta confeccionada en hilatura de algodón 100%.',
        precio: 19.99,
        stock: 10
    },
]