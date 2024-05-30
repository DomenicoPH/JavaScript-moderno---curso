// Iteradores: for loop

// De 1 en 1
for(let i=0; i < 10; i++){
    console.log(`Número: ${i+1}`)
}

// De 2 en 2
for(let i=0; i <= 10; i+=2){
    console.log(`Número: ${i}`)
}

// De 5 en 5
for(let i=0; i <= 100; i+=5){
    console.log(`Número: ${i}`)
}

let count = 6
for(let i=0; i < count; i++){
    console.log(`count-times-${i+1}`)
}


// Pares & Impares

// Pares 0 - 10
for(let i=0; i <= 10; i+=2){
    console.log(i)
}

// Impares 0 - 10
for(let i=0; i < 10; i+=2){
    console.log(i+1)
}

//...
for(let i=1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(`El número ${i} es PAR`)
    } else if(i % 2 !== 0){
        console.log(`El número ${i} es IMPAR`)
    }
}

function guardaEnCajas(num){
    let pares = ['pares'];
    let impares = ['impares'];
    for(let i=0; i <= num; i++){
        if(i % 2 === 0){
            pares.push(i)
        } else if(i % 2 !== 0){
            impares.push(i)
        }
    }
    console.log(pares, impares)
    return [pares, impares]
}

guardaEnCajas(50);

const pares = guardaEnCajas(100)[0];
const impares = guardaEnCajas(100)[1]
console.log(pares)
console.log(impares)


//...

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 300},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

console.log(carrito.length);

console.log('M i - c a r r i t o :\n----------------------------------')
for(let i=0; i < carrito.length; i++){
    console.log('Producto: ', carrito[i].nombre)
    console.log('Precio: ', carrito[i].precio)
    console.log('----------------------------------')
}

// Productos cuyo precio sea MENOR que 350
const productosCaros = [];
for(let i=0; i < carrito.length; i++){
    if(carrito[i].precio > 350){
        productosCaros.push(carrito[i])
    }
}
console.log(productosCaros)

// Productos cuyo precio sea MAYOR que 350
const productosBaratos = [];
for(let i=0; i < carrito.length; i++){
    if(carrito[i].precio < 350){
        productosBaratos.push(carrito[i])
    }
}
console.log(productosBaratos)
