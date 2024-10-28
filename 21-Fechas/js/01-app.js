/* Fechas I */

const diaHoy = new Date();
const diaRandom = new Date('1-5-2000');     // Estructura: ('mes-dia-año')
const diaBornDom = new Date('2-10-1986');
const diaBornGra = new Date('January 14 1987');

let valor;
valor = diaHoy;
valor = diaRandom;
valor = diaBornDom;
valor = diaBornGra;

console.log(valor);
console.log(typeof(valor));


let date_year = diaHoy.getFullYear();
let date_month = diaHoy.getMonth() + 1;     // + 1 porque --> enero = 0 y diciembre = 11

console.log('Mes y Año: ', date_month, date_year)

let day_hour = diaHoy.getHours();
let day_minute = diaHoy.getMinutes();
let day_second = diaHoy.getSeconds();

console.log('Hora actual: ', day_hour, day_minute, day_second);

let milisecondsSince1970 = diaHoy.getTime();

console.log('Tiempo transcurrido desde Enero 1, 1970: ', milisecondsSince1970);

// *** //

valor = diaHoy.setFullYear(2010);
console.log(diaHoy);

console.log('Date: ', Date());
console.log('Date Now: ', Date.now());


// *** //

console.log(new Date());

// Fecha y hora actual
console.log(new Date().toLocaleString());
// Hora actual
console.log(new Date().toLocaleTimeString());
// Fecha actual
console.log(new Date().toLocaleDateString());