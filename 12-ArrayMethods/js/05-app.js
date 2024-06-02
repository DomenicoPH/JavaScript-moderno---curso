// .find()

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con .forEach()

let resultado;
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
});
console.log(resultado);

// Con .find()
let resultadoFind = carrito.find( producto => producto.nombre === 'Teclado');
console.log(resultadoFind);

resultadoFind = carrito.find( producto => producto.precio === 100);
console.log(resultadoFind)

resultadoFind = carrito.find( producto => producto.precio === 200);
console.log(resultadoFind)

resultadoFind = carrito.find( producto => producto.precio === 300);
console.log(resultadoFind)

//...
resultadoFind = carrito.find( producto => producto.precio === 900);
if(resultadoFind !== undefined){
    console.log(resultadoFind)
} else {
    console.log('Producto no encontrado')
}

//...
resultadoFind = carrito.find( producto => producto.precio === 500);
if(resultadoFind !== undefined){
    console.log(resultadoFind)
} else {
    console.log('Producto no encontrado')
}

/*
    .find()
*/