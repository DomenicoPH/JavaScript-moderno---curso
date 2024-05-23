/* strings */

/* replace() */
const producto = 'Monitor 20 pulgadas';
console.log(producto);

console.log(producto.replace(' pulgadas', '"'));
console.log(producto.replace('Monitor', 'TV'))
console.log(producto.replace('20', '50'))

console.log(producto);

const new_producto = producto.replace('Monitor', 'TV').replace('20', '50').replace('pulgadas', '"');
console.log(new_producto)


/* slice() */
console.log(producto);
console.log(producto.slice(0,10));
    // toma un slice entre el índice 0 y el 10
console.log(producto.slice(8))
    // toma un slice entre el índice 8 y el final de string
console.log(producto.slice(2,0))
    // Slice no corta hacia atras, para ello se utiliza 'substring'


/* Substring */
console.log(producto.substring(0,10));
console.log(producto.substring(8));
console.log(producto.substring(2,0))
    // substring si permite tomar tajadas (subcadenas) contando hacia atrás
/* slice() + replace() */
console.log(producto)
console.log((producto.slice(0,10) + producto.slice(11, producto.length).replace('pulgadas','"')))


const usuario = 'Domenico';
console.log(usuario.substring(0,1));
console.log(usuario.slice(0,1));

/* charAt() */
console.log(usuario.charAt(0))
console.log(usuario.charAt(1))
console.log(usuario.charAt(2))