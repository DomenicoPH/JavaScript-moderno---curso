/* 2. Obtener datos de Local Storage */

// localStorage.getItem('key')

const nombre = localStorage.getItem('nombre');
const nums = localStorage.getItem('numbers');
const meses = localStorage.getItem('meses');
const prod = localStorage.getItem('producto');

console.log('----____LocalStorage guarda únicamente strings____----');

console.log(nombre);
console.log('----> typeof "nombre" is: ', typeof(nombre));
console.log(nums);
console.log('----> typeof "nums" is: ', typeof(nums));
console.log(meses);
console.log('----> typeof "meses" is: ', typeof(meses));
console.log(prod);
console.log('----> typeof "prod" is: ', typeof(prod));

//JSON.parse()

const numsParsed = JSON.parse(nums);
const mesesParsed = JSON.parse(meses);
const prodParsed =  JSON.parse(prod);

console.log('----____JSON.parse()____----')
console.log(numsParsed);
console.log(mesesParsed);
console.log(prodParsed);

/*
    localStorage.getItem('key')
    JSON.parse()
*/