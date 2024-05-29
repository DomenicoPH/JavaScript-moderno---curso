// Operador Ternario

// Ex.1
let autenticado = true;
console.log( autenticado ? 'Usuario autenticado' : 'Usuario no autenticado' );

autenticado = false;
console.log( autenticado ? 'Usuario autenticado' : 'Usuario no autenticado' );

// Ex.2
autenticado = true;
let puedePagar = true;
console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No puede pagar')

autenticado = true;
puedePagar = false;
console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No puede pagar')

autenticado = false;
puedePagar = false;
console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No puede pagar')

// Ex.3
autenticado = true;
puedePagar = true;
console.log(autenticado || puedePagar ? 'Si puede pagar' : 'No puede pagar')

autenticado = true;
puedePagar = false;
console.log(autenticado || puedePagar ? 'Si puede pagar' : 'No puede pagar')

autenticado = false;
puedePagar = false;
console.log(autenticado || puedePagar ? 'Si puede pagar' : 'No puede pagar')

// Ex.4
let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}

// en ternario...
credito = 400; efectivo = 300; totalPagar = 600;
console.log(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar ? 'Si podemos pagar' : 'Fondos insuficientes')

credito = 100; efectivo = 100; totalPagar = 800;
console.log(efectivo >= totalPagar || credito >= totalPagar || disponible >= totalPagar ? 'Si podemos pagar' : 'Fondos insuficientes')


// if anidados...
autenticado = false;
puedePagar = false;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    if( efectivo > totalPagar){
        console.log('Pago en efectivo');
    } else {
        console.log('Otro medio de pago');
    }
} else {
    console.log('Fondos insuficientes');
}

// en ternario...
autenticado = false;
puedePagar = false;

console.log( 
    autenticado 
    ? puedePagar 
    ? 'Si está autenticado y puede pagar' 
    : 'Si está autenticado pero no puede pagar' 
    : 'No está autenticado'
);

autenticado = true;
puedePagar = false;

console.log( 
    autenticado 
    ? puedePagar 
    ? 'Si está autenticado y puede pagar' 
    : 'Si está autenticado pero no puede pagar' 
    : 'No está autenticado'
);

autenticado = true;
puedePagar = true;

console.log( 
    autenticado 
    ? puedePagar 
    ? 'Si está autenticado y puede pagar' 
    : 'Si está autenticado pero no puede pagar' 
    : 'No está autenticado'
);

