// Orden en las operaciones

let resultado;

resultado = 20 + 30 * 2
console.log(resultado); //80

resultado = (20 + 30) * 2
console.log(resultado); //100

/* 20% de descuento en tu carrito de compras */
let descuento;
descuento = (20 + 30 + 40 + 50 + 60) * .2;
console.log(descuento+'%');
/* 1.16 de impuesto sobre una compra */
let impuesto;
impuesto = (20 + 30) * 1.16
console.log(impuesto)

/* IGV y descuento */
let precio_sin_IGV = 20 + 30 + 43 + 12.5 + 12.5
console.log(precio_sin_IGV)
    //impuestos
let precio_con_IGV = precio_sin_IGV * 1.16
console.log(precio_con_IGV)
    //descuento
let precio_con_descuento = precio_con_IGV - (precio_con_IGV * 0.2)
console.log(precio_con_descuento)