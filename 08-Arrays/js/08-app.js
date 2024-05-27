// Destructuring con arreglos...

// ---> Destructuring con objetos
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);


// ---> Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50]

const [primero,,tercero,,quinto] = numeros;
console.log(primero);
console.log(tercero);
console.log(quinto);

const [soloPrimero] = numeros;
console.log(soloPrimero)

const [,,,,soloUltimo] = numeros;
console.log(soloUltimo)

const [,,soloTercero] = numeros;
console.log(soloTercero)

//

const [ primerN, segundoN, ...tercerN] = numeros;
console.log(primerN)
console.log(segundoN)
console.log(tercerN)