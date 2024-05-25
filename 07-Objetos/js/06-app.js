const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion:{
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

/* 
const { nombre } = producto;
console.log(nombre);
*/

/* 
const { peso, medida } = producto.informacion.medidas;
const { pais } = producto.informacion.fabricacion;

console.log(peso);
console.log(medida);
console.log(pais)
*/

const { nombre, 
        precio,
        disponible,
        informacion, 
            informacion: {
                fabricacion,
                medidas,
                 fabricacion:{ pais }, 
                 medidas:{ peso, medida} 
                } 
      } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(pais);
console.log(peso);
console.log(medida);

console.log(informacion);
console.log(fabricacion);
console.log(medidas);