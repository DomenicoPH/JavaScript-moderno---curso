// métodos de strings

/* Método: .concat */
const producto = 'Monitor 20 pulgadas ';
const precio = '30 USD ';

console.log(producto.concat(precio));
console.log(producto.concat('en descuento!'))

// Otras formas de concatenar...

// con +
console.log(producto + "con un precio de: " + precio)

// Template Strings || Plantillas Literales
console.log(`${producto} con un precio de: ${precio}`)
console.log(`El producto ${producto} tiene un precio de ${precio}.`)