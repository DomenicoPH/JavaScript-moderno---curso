// Eliminar elementos de un arreglo

// Carrito:
const carrito = [];

// Productos:
const producto_1 = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}
const producto_2 = {
    nombre: 'Celular',
    precio: 800
}
const producto_3 = {
    nombre: 'Teclado',
    precio: 50
}
const producto_4 = {
    nombre: 'Mouse inalámbrico',
    precio: 30
}

// Compras:
carrito.push(producto_1);
carrito.push(producto_2);
carrito.unshift(producto_3);

console.table(carrito);

// .pop()  -  Elimina el ùltimo elemento del arreglo
carrito.pop();
console.table(carrito);

// .shift()  -  Elimina el primer elemento del arreglo
carrito.shift();
console.table(carrito);

// .splice(inicio, cantidad)  -  Eliminar elementos dentro del arreglo
carrito.push(producto_2);
carrito.push(producto_3);
carrito.push(producto_4);

//carrito.splice(1,1) //En el ìndice 1: elimina 1 elemento.
//carrito.splice(0,2) //En el ìndice 2: elimina 2 elementos.
carrito.splice(2,1);    //En el ìndice 2: elimina 1 elemento.
carrito.splice(0,2);    //En el ìndice 0: elimina 2 elementos.

// ----- tabla ----- //
console.table(carrito);