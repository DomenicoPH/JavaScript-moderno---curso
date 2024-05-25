const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
// ------ mutabilidad de los objetos en JS ---
producto.nombre = 'Tablet 11';
producto.precio = 200;
producto.disponible = false;
// ------ mutabilidad de los objetos en JS ---

console.log(producto);
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.disponible);