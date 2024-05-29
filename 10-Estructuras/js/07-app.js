// Operador OR (||)

let efectivo = 300;
let credito = 1000;
let disponible = efectivo + credito;
let totalPagar = 600;

if(efectivo > totalPagar){
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}

// OR
if(efectivo > totalPagar || credito > totalPagar){
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}

// OR
efectivo = 0.25;
credito = 1;

if(efectivo > totalPagar || credito > totalPagar){
    if(efectivo < totalPagar){
        console.log('Si podemos pagar');
        console.log('-- Pago con tarjeta de crédito --')
    } else if(credito < totalPagar){
        console.log('Si podemos pagar');
        console.log('-- Pago en efectivo --')
    }
} else {
    console.log('Fondos insuficientes');
}

efectivo = 2500;
credito = 0;

if(efectivo > totalPagar || credito > totalPagar){
    if(efectivo < totalPagar){
        console.log('Si podemos pagar');
        console.log('-- Pago con tarjeta de crédito --')
    } else if(credito < totalPagar){
        console.log('Si podemos pagar');
        console.log('-- Pago en efectivo --')
    }
} else {
    console.log('Fondos insuficientes');
}

efectivo = 0.25;
credito = 1500;

if(efectivo > totalPagar || credito > totalPagar){
    if(efectivo < totalPagar){
        console.log('Si podemos pagar');
        console.log('-- Pago con tarjeta de crédito --')
    } else if(credito < totalPagar){
        console.log('Si podemos pagar');
        console.log('-- Pago en efectivo --')
    }
} else {
    console.log('Fondos insuficientes');
}

//...

efectivo = 300;
credito = 1000;
disponible = efectivo + credito;
totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}

totalPagar = 1600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}