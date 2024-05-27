// Iterar un arreglo con .forEach()

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 300},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

// Imperativo | Se especifica el proceso...
console.log('Todos mis productos: ')
for(let i=0; i < carrito.length; i++){
    console.log(`${i+1} - ${carrito[i].nombre} $${carrito[i].precio}`);
}

// Declarativo | Se declara la intención...
carrito.forEach(function(producto){
    console.log(`${producto.nombre} $${producto.precio}`);
})