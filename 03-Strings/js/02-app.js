// métodos de strings

/* Método: .length */
const producto = 'Monitor 20 pulgadas';
console.log(producto);
console.log(producto.length)

/* Método: .indexOf */
console.log(producto.indexOf('Monitor'))    // 0 -> 'Monitor' encontrado en índice 0
console.log(producto.indexOf('pulgadas'))   // 11 -> 'Monitor' encontrado en índice 11
console.log(producto.indexOf('tablet'))     // -1 (No encontrado)

/* Método: .includes */
console.log(producto.includes('tablet'));
console.log(producto.includes('Monitor'));