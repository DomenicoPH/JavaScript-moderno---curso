// Operador AND (&&)

// true, true
let usuario = true;
let puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else {
    console.log('No puedes comprar');
};

// Si una condición no se cumple mostrará: No puedes comprar.
// Ambas condiciones tienen que cumplirse (retornar true)

// true, false
usuario = true;
puedePagar = false; //(!)

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else {
    console.log('No puedes comprar');
};

// false, true
usuario = false; //(!)
puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else {
    console.log('No puedes comprar');
};

// false, false
usuario = false; //(!)
puedePagar = false; //(!)

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else {
    console.log('No puedes comprar');
};

//...
usuario = true;
puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
} else if(!puedePagar){
    console.log('Fondos insuficientes')
} else if(!usuario) {
    console.log('Inicia sesión o crea una cuenta')
};

usuario = true;
puedePagar = false;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
} else if(!puedePagar){
    console.log('Fondos insuficientes')
} else if(!usuario) {
    console.log('Inicia sesión o crea una cuenta')
};

usuario = false;
puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
} else if(!puedePagar){
    console.log('Fondos insuficientes')
} else if(!usuario) {
    console.log('Inicia sesión o crea una cuenta')
};

usuario = false;
puedePagar = false;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
} else if(!puedePagar){
    console.log('Fondos insuficientes')
} else if(!usuario) {
    console.log('Inicia sesión o crea una cuenta')
};