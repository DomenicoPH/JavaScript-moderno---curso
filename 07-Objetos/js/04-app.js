// Destructuring
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto.nombre);

const nombre_test = producto.nombre;
console.log(nombre_test)

/* --- Object destructuring --- */
// const {nombre} = producto
// const {precio} = producto
// const {disponible} = producto
const {nombre, precio, disponible} = producto;

console.log(nombre)
console.log(precio)
console.log(disponible)