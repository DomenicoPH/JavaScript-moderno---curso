// Object.assign() & {...spread operator}
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// Object.assign()
const resultado = Object.assign(producto, medidas);
console.log(resultado)

// Spread operator o Rest operator...
const resultado2 = {...producto, ...medidas};
console.log(resultado2)