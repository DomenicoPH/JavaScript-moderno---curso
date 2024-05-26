// Congelar objetos ("use strict")
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
const user = {
    nombre: 'Dom',
    username: 'Gnomono'
}

/* object methods */

//.freeze()
/* Con .freeze() el objeto queda congelado
   y no se le pueden añadir nuevas propiedades
   ni se pueden modificar las existentes.
*/
Object.freeze( producto );
// producto.disponible = false;
// producto.imagen = 'imagen.jpg';
// delete producto.precio;

console.log(producto);

// .isFrozen()
console.log(Object.isFrozen(producto));
console.log(Object.isFrozen(user));