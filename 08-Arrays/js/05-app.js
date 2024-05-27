// Añadir elementos a un array...
const meses = ['Enero', 'Febrero', 'Marzo'];

//meses[3] = 'Abril';
//meses[4] = 'Mayo';
//meses[5] = 'Junio';

// .push()
meses.push('Abril');
meses.push('Mayo');
meses.push('Junio');

console.table(meses);
console.log(meses);

// --- Ejemplo Carrito de compras...
// Carrito:
const carrito = [];

// Productos:
const producto_1 = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}
const producto_2 = {
    nombre: 'Tablet 11 pulgadas',
    precio: 200
}
const producto_3 = {
    nombre: 'Celular c/android',
    precio: 350
}
const producto_4 = {
    nombre: 'Teclado',
    precio: 50
}

// Compras:
// push --> añade elementos al final del arreglo
carrito.push(producto_1);
carrito.push(producto_2);
// unshift --> añade elementos al comienzo del arreglo
carrito.unshift(producto_3);
carrito.unshift(producto_4);

console.table('Mi carrito: ', carrito);
console.log(carrito);

