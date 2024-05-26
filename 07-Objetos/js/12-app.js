/* Object constructor */

// this is OBJECT LITERAL
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
console.log(producto);

// this is OBJECT CONSTRUCTOR
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 50 pulgadas', 700);
console.log(producto2);

const producto3 = new Producto('Tablet 11 pulgadas', 200);
const producto4 = new Producto('Mouse + Teclado bluetooth', 45);
const producto5 = new Producto('Laptop corei5 12ram nvidiaGeforceGTX 500gb', 1200);

console.log(producto3);
console.log(producto4);
console.log(producto5);

console.log(
    '2.- '+producto2.nombre,
    '3.- '+producto3.nombre,
    '4.- '+producto4.nombre,
    '5.- '+producto5.nombre,
    '1.- '+producto.nombre
)