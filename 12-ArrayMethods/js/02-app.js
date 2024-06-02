// .findIndex()

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// forEach((elemento, index) => {});

meses.forEach((mes, i) => {
    console.log(`${i+1}. ${mes}`)
})

// Encontrar el índice de Abril... (forEach())

meses.forEach((mes,i) => {
    if(mes === 'Abril'){
        console.log(`Encontrado en el índice ${i}`)
    }
})
console.log(meses[3]);

// Encontrar el índice de Abril... (forEach())

const indiceAbril = meses.findIndex(mes => mes === 'Abril')
console.log(indiceAbril);

let indiceDiciembre = meses.findIndex(mes => mes === 'Diciembre')
//if(indiceDiciembre === -1) indiceDiciembre = 'No se encontró Diciembre';
//console.log(indiceDiciembre);

let indice = meses.findIndex(mes => mes === 'Noviembre');
indice = meses.findIndex(mes => mes === 'Marzo');
if(indice >= 0){
    console.log('El mes existe')
} else {
    console.log('El mes no existe')
}




//--- indexOf() ...(para encontrar el índice de un string)
let febrero = meses[1]
console.log(febrero.indexOf('f'))
console.log(febrero.indexOf('F'))
console.log(febrero.indexOf('e'))
console.log(febrero.indexOf('b'))
console.log(febrero.indexOf('r'))
console.log(febrero.indexOf('e'))
console.log(febrero.indexOf('r'))
// En un string, indexOf retorna el índice en el que se encuentra el caracter solicitado por primera vez.