// const

/*
    - const NO PUEDE SER REASIGNADO.
    - const NO PUEDE INICIALIZARSE SIN UN VALOR ASIGNADO.
*/

const producto = 'TV';
//producto = 'Radio'; //ERROR - No se puede reasignar valor con const.
console.log(producto);

//const precio; //ERROR - No se puede inicializar const sin un valor asignado.
//precio = 500; //ERROR - No se puede asignar valor a const fuera de la inicialización.
const precio = 500;
console.log(precio);