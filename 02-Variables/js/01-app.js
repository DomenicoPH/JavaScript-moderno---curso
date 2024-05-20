// var

/*  Variables 
    JavaScript es un lenguaje de tipo dinámico
    en el que no es necesario especificar el 
    tipo de dato (No tipado).
*/

/* Inicializar variable con un valor */
var producto = "Monitor de 24 pulgadas";
console.log(producto);

/* Reasignación de valor a variables */
producto = 'Monitor de 19 pulgadas';
console.log(producto);

producto = 20;
console.log(producto);


/* Inicializar variable sin un valor asignado */
var disponible;

/* Asignación de valor */
disponible = true;
console.log(disponible);

/* Reasignación de valor */
disponible = false;
console.log(disponible);


/* Inicializar múltiples variables */
/*
var categoria = 'Computadoras';
var marca = 'Marca Famosa';
var calificacion = '5';
*/
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = '5';

console.log(categoria);
console.log(marca);
console.log(calificacion);


// Las variables NO PUEDEN iniciar con números.

//var 99dias;       //error
var dias99;

//var 01_;          //error
var _01;


// Variables con más de una palabra.

var nombreProducto;     // camelCase
var nombre_producto;    // snake_case
var Producto;           // PascalCase