// Objetos anidados
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
            pais: 'China',
            fecha: '2020'
        }
    }
}

console.log(producto);
    console.log(producto.nombre);
    console.log(producto.precio);

console.log(producto.informacion);
    console.log(producto.informacion.medidas.peso);
    console.log(producto.informacion.medidas.medida);

console.log(producto.informacion.medidas);
    console.log(producto.informacion.medidas.peso);
    console.log(producto.informacion.medidas.medida);
    
console.log(producto.informacion.fabrica);
    console.log(producto.informacion.fabricacion.pais);
    console.log(producto.informacion.fabricacion.fecha);