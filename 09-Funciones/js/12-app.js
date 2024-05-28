const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 300},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

const arregloMap = carrito.map(prod => `${prod.nombre} - ${prod.precio}`)

carrito.forEach((prod) => console.log(`${prod.nombre} - ${prod.precio}`))

console.log(arregloMap)
