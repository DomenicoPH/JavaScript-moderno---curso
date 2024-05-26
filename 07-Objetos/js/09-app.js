// Sellar objetos ("use strict")
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

//.seal()
/* Con .seal() el objeto queda sellado 
   y no se le pueden añadir propiedades
   nuevas. Las propiedades existentes 
   SI PUEDEN SER MODIFICADAS.
*/
Object.seal( producto );
 producto.disponible = false;
// producto.imagen = 'imagen.jpg';
// delete producto.precio;

console.log(producto);

// .isFrozen()
console.log(Object.isSealed(producto));
console.log(Object.isSealed(user));