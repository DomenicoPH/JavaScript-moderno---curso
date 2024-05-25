const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

// Añadir propiedades a un objeto...
producto.imagen = 'imagen.jpg';
producto.oferta = false;

console.log(producto);

// Eliminar propiedades de un objeto...
delete producto.oferta;
delete producto.disponible;

console.log(producto)

// Modificar propiedades de un objeto...
producto.disponible = true;
producto.imagen = 'nueva-imagen.png'

console.log(producto)