// Spread Operator 

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

console.log('Carrito vacio: ', carrito);
let resultado;

// --- Compra 1 - Añadir elemento al final del arreglo
resultado = [...carrito,producto_1];        // Lo que haya en 'carrito' + 'producto_1'
    console.log('Carrito - Primera compra: ', resultado);

// --- Compra 2 - Añadir elemento al final del arreglo
resultado = [...resultado,producto_2];      // Lo que haya en 'resultado' + 'producto_2'
    console.log('Carrito - Segunda compra: ', resultado);

// --- Compra 3 - Añadir elemento al final del arreglo
resultado = [...resultado, producto_3]      // Lo que haya en 'resultado' + 'producto_3'
    console.log('Carrito - Tercera compra: ', resultado);

// --- Compra 4 - Añadir elemento al comienzo del arreglo
resultado = [producto_4,...resultado]      // 'producto_4' + Lo que haya en 'resultado'
    console.log('Carrito - Cuarta compra: ', resultado);

// ----- tabla ----- //
console.table(resultado);