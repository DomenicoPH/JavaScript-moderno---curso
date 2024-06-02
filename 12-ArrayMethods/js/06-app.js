// .every()

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// .every() --> Revisa que TODOS cumplan la condición...
let resultado;

// Todos los precios son menores a 1000??
resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado);

// Todos los precios están por encima de 250??
resultado = carrito.every( producto => producto.precio > 250);
console.log(resultado); //false -> No todos cumplen la condición

// .some() --> Revisa que AL MENOS UNO cumpla la condición..
resultado = carrito.some( producto => producto.precio > 250);
console.log(resultado); //true -> Al menos uno cumple la condición

/*
    .every()
*/