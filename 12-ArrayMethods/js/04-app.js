// .filter()

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let sobre400 = carrito.filter( prod => prod.precio > 400)
console.log(sobre400);

let bajo200 = carrito.filter( prod => prod.precio < 200)
console.log(bajo200);

let bajo600 = carrito.filter( prod => prod.precio < 600)
console.log(bajo600);


let resultado;

// Filter: Todos los productos MENOS los 'Audifonos'
resultado = carrito.filter( prod => prod.nombre !== 'Audifonos');
console.log(resultado);

// Filter: Unicamente los 'Audifonos'
resultado = carrito.filter(prod => prod.nombre === 'Audifonos');
console.log(resultado);

/*
    .filter()
*/