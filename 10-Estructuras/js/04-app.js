// Operadores > (mayor que) y < (menor que)

let dinero = 300;
let totalAPagar = 500;
let tarjeta = true;
let cheque = true;


if (dinero >= totalAPagar){
    console.log('Si puedo pagar');
} else if(cheque){
    console.log('Pago con cheque');
} else if(tarjeta){
    console.log('Pago con tarjeta');
} else {
    console.log('No puedo pagar. Fondos insuficientes');
}
