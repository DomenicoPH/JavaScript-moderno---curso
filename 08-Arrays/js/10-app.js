// Iterar un arreglo con .map()

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 300},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

// .map() --> Crea un arreglo nuevo
const arregloMap = carrito.map(function(prod){
    return `${prod.nombre} - ${prod.precio}`
})

const arregloForEach = carrito.forEach(function(prod){
    return `${prod.nombre} - ${prod.precio}`
})

console.log(arregloMap)
console.log(arregloForEach)