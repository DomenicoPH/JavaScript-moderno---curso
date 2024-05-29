// Switch

//const metodoPago = 'efectivo';
const metodoPago_1 = 'efectivo';

switch(metodoPago_1){
    case 'efectivo':
        console.log(`Pago en ${metodoPago_1}`)
        break;
    default:
        console.log('Aún no has seleccionado un modo de pago.')
        break;
}

const metodoPago_2 = 'cheque';

switch(metodoPago_2){
    case 'efectivo':
        console.log(`Pago en ${metodoPago_2}`)
        break;
    default:
        console.log('Aún no has seleccionado un modo de pago.')
        break;
}

//-----------------------------------------------------------------
switch(metodoPago_2){
    case 'efectivo':
        console.log(`Pago en ${metodoPago_2}`)
        break;
    case 'cheque':
        console.log(`Pago con ${metodoPago_2}`)
        break;
    default:
        console.log('Aún no has seleccionado un modo de pago.')
        break;
}

//-----------------------------------------------------------------
const metodoPago_3 = 'tarjeta';

switch(metodoPago_3){
    case 'efectivo':
        console.log(`Pago en ${metodoPago_3}`)
        break;
    case 'cheque':
        console.log(`Pago con ${metodoPago_3}`)
        break;
    case 'tarjeta':
        console.log(`Pago con ${metodoPago_3}`)
        break;
    default:
        console.log('Aún no has seleccionado un modo de pago.')
        break;
}

//-----------------------------------------------------------------
const fondos = [0, 20, 100, null];
const dinero = fondos[2]; //100
const pago = ['efectivo', 'cheque', 'tarjeta', 'otros'];
const metodoPago_4 = pago[2] //tarjeta

switch(metodoPago_4){
    case 'efectivo':
        console.log(`Pago en ${metodoPago_4}`)
        pagar();
        break;
    case 'cheque':
        console.log(`Pago con ${metodoPago_4}`)
        pagar();
        break;
    case 'tarjeta':
        console.log(`Pago con ${metodoPago_4}`)
        pagar();
        break;
    default:
        console.log('Aún no has seleccionado un modo de pago.')
        break;
}

function pagar(){
    console.log('Tramitando pago...')
    if(dinero >= 50){
        console.log('Pago OK')
    } else {
        console.log('No tienes dinero para realizar esta compra.')
    }
    
}