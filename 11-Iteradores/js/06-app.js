// Iteradores: .forEach & .map

// forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

console.log('\nforEach:');
pendientes.forEach((pendiente) => {
    console.log(pendiente)
})

//...
console.log('\nforEach corto:');
pendientes.forEach( pend => console.log(pend) );

//... 1er param: elemento, 2do param: índice
console.log('\nforEach(elemento,index):');
pendientes.forEach((pend, index) => {
    //console.log(`${index}. ${pend}`)
    //fixing index:
    console.log(`${index + 1}. ${pend}`)
})

//...
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 300},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

console.log(`\nCarrito forEach: (info suelta)`);

carrito.forEach( (producto) => console.log(producto.nombre) )
carrito.forEach( (producto) => console.log(producto.precio) )

console.log(`\nCarrito forEach: (info estructurada)`);

carrito.forEach((producto,index) => console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`))

// map - Retorna un nuevo array
const carritoMap = carrito.map( (producto) => producto.nombre );
console.log(carritoMap)

const carritoMapCompleto = carrito.map( (producto) => {
    return producto
} );
console.log(carritoMapCompleto)

//... forEach no retorna un nuevo array
carrito.forEach( (prod, index) => {
    console.log({id: index + 1, nombre: prod.nombre, precio: prod.precio});
})