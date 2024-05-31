// Iteradores: for of (PARA ARREGLOS)

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 300},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

for( pendiente of pendientes ){
    console.log(pendiente);
}

for( producto of carrito ){
    console.log(`${producto.nombre}: $${producto.precio}`)
}