// Recorrer un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

console.log(meses);

console.log('♦ Llamando los elementos del arreglo 1 x 1')
console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);
console.log(meses[3]);
console.log(meses[4]);
console.log(meses[5]);

// .length
console.log(meses.length);

// for
console.log('♦ Recorriendo el arreglo con loop for')
for(let i = 0; i < meses.length; i++){
    console.log(meses[i])
}