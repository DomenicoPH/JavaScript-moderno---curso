// Iteradores: for loop (break & continue)

// Se salta el 5...
console.log(' Continue... ')
for(let i=0; i <= 10; i++){
    if(i === 5){
        console.log(`Este es el ${i}`);
        continue; // continue para saltearse el 5
    }
    console.log(`Num: ${i}`)
}

// Se detiene en el 5...
console.log(' Break... ')
for(let i=0; i <= 10; i++){
    if(i === 5){
        console.log(`Este es el ${i}`);
        break; // break para detenerse en el 5
    }
    console.log(`Num: ${i}`)
}


//...

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 300, descuento: true},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700, descuento: true}
];

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`${carrito[i].nombre} (!) Este artículo tiene descuento.`)
        continue;
    }
    console.log(carrito[i].nombre)
}