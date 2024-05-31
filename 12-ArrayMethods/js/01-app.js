const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Array Methods //

// 1. Comprobar si un valor existe en un arreglo.

// .forEach()
console.log('\nMeses')
meses.forEach((mes) => {
    console.log(mes)
});

console.log('\nMeses con M')
meses.forEach((mes) => {
    if(mes[0] === 'M'){
        console.log(mes)
    }
});

meses.forEach(mes => {
    if(mes === 'Enero'){
        console.log('Enero si existe')
    }
})


// .includes()      Para arreglos que contienen datos primitivos (números, strings)
let resultado = meses.includes('Enero');
console.log(resultado);

resultado = meses.includes('Diciembre');
console.log(resultado);


// .some()      Para arreglos que contienen objetos
let existe = carrito.some((producto) => {
    return producto.nombre === 'Celular';
});
console.log(existe)

existe = carrito.some((prod) => {
    return prod.nombre === 'Escoba';
});
console.log(existe)

existe = carrito.some(prod => prod.nombre === 'Escoba');
console.log(existe)
existe = carrito.some(prod => prod.nombre === 'Televisión');
console.log(existe)
existe = carrito.some(prod => prod.nombre === 'Teclado');
console.log(existe)

// .some() también funciona con arreglos planos
existe = meses.some( mes => mes === 'Enero');
console.log(existe);

existe = meses.some( mes => mes === 'Agosto');
console.log(existe);


/*
    .forEach()
    .includes()
    .some()
*/