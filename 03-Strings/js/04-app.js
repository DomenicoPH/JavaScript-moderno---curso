const producto = '        Monitor 20 pulgadas              ';
const producto_cut = 'Monitor';

console.log(producto);
console.log(producto.length);       //41

console.log(producto_cut);
console.log(producto_cut.length)        //7

//.trimStart()
console.log(producto.trimStart());
const p_trim_start = producto.trimStart();
console.log(p_trim_start);
console.log(p_trim_start.length);       //33

//.trimEnd()
console.log(producto.trimEnd());
const p_trim_end = producto.trimEnd();
console.log(p_trim_end)
console.log(p_trim_end.length);      //27

// Chaining .trimStart().trimEnd()
const trim_chain_producto = producto.trimStart().trimEnd()
console.log(producto, producto.length);
console.log(trim_chain_producto, trim_chain_producto.length)

//.trim()
console.log(producto.length);   //41
console.log(producto.trim().length) //19