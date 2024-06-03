// Spread Operator // Rest operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Ex.1 - Agregar elemento al final de un arreglo de índices...
console.log(meses)

const meses2 = [...meses, 'Agosto'];
console.log(meses)
console.log(meses2)

meses.push('Agosto')
console.log(meses)
console.log(meses2)

// ...El orden es importante en el spread/rest operator
let mesesBlock1 = ['Enero', 'Febrero', 'Marzo'];
let mesesBlock2 = ['Abril', 'Mayo', 'Junio'];
let mesesBlock3 = ['Julio', 'Agosto', 'Septiembre'];

let mesesOrdenados;
let mesesDesordenados;
let mesesOrdenInvertido;

mesesOrdenados = [...mesesBlock1, ...mesesBlock2, ...mesesBlock3];
mesesDesordenados = [...mesesBlock3, ...mesesBlock1, ...mesesBlock2];
mesesOrdenInvertido = [...mesesBlock3, ...mesesBlock2, ...mesesBlock1];

console.log(mesesOrdenados);
console.log(mesesDesordenados);
console.log(mesesOrdenInvertido);

// ...
const firstSix = [...mesesBlock1, ...mesesBlock2]
console.log(firstSix)
let enero = firstSix[0]; console.log(enero)
let febrero = firstSix[1]; console.log(febrero)
let marzo = firstSix[2]; console.log(marzo)


// Ex.1 - Agregar elemento al final de un arreglo de objetos...
const producto = {nombre: 'Disco Duro', precio: 300};
// ...Agregar al final del nuevo arr
const carrito2 = [...carrito, producto]
console.log(carrito2)
// ...Agregar al comienzo del nuevo arr
const carrito3 = [producto, ...carrito]
console.log(carrito3)