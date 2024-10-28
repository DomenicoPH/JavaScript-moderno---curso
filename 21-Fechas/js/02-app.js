/* Fechas II */

const diaHoy = new Date();

moment.locale('es');

let date_month = moment().format('MMMM');
let date_year = moment().format('YYYY');
let date_day = moment().format('D');
let date_day_o = moment().format('Do');

console.log(date_month);
console.log(date_year);
console.log(date_day);
console.log(date_day_o);


let hour = moment().format('h');
let minute = moment().format('m');
let second = moment().format('s');
let milisecond = moment().format('ms')

console.log(hour);
console.log(minute);
console.log(second);
console.log(milisecond);

//** **//

let fullDate = moment().format('YYYY-DD-MM');
let fullTime = moment().format('hh:mm:ss:ms');

console.log('Full Date: ', fullDate);
console.log('Full Time: ', fullTime);

//** **//

/**/console.log(''); console.log('Ejemplos: '); console.log('');

console.log('new Date(): \n', new Date() );
console.log('moment(): \n', moment().format('LLLL', diaHoy) );

//**** Documentación oficial moment.js ****//

/**/console.log(''); console.log('Format Dates'); console.log('');

console.log( moment().format('MMMM Do YYYY, h:mm:ss a') );

console.log( moment().format('dddd') );
console.log( moment().format('M') );
console.log( moment().format('MM') );
console.log( moment().format('MMM') );
console.log( moment().format('MMMM') );

console.log( moment().format('MMM Do YY') );
console.log( moment().format('MMM Do YYYY') );
console.log( moment().format('MMMM Do YYYY') );
console.log( moment().format('MMMM D, YYYY') );

console.log( moment().format('MMM DD, [año de nuestro señor de] YYYY') );
console.log( moment().format() );


/**/console.log(''); console.log('Relative Time'); console.log('');

console.log(moment('19860210', 'YYYYMMDD').fromNow());  // días/meses/años transcurridos desde el 10/02/1986
console.log(moment('20031201', 'YYYYMMDD').fromNow());  // días/meses/años transcurridos desde el 01/12/2003
console.log(moment('20171210', 'YYYYMMDD').fromNow());  // días/meses/años transcurridos desde el 10/12/2017
console.log(moment('20240601', 'YYYYMMDD').fromNow());  // días/meses/años transcurridos desde el 01/06/2024

/* espaciado */console.log('');
console.log( moment().startOf('day').fromNow() );   // horas transcurridas desde que inició el día
console.log( moment().endOf('day').fromNow() );     // horas por transcurrir hasta el final del día

/* espaciado */console.log('');
console.log( moment().startOf('hour').fromNow() );  // minutos transcurridos desde que empezó la hora vigente
console.log( moment().endOf('hour').fromNow() );    // minutos por transcurrir hasta que termine la hora vigente



/**/console.log(''); console.log('Calendar Time'); console.log('');

console.log(moment().calendar());   // Fecha de hoy

console.log(moment().subtract(2, 'days').calendar());   // Resta 2 días a la fecha de hoy
console.log(moment().subtract(5, 'days').calendar());   // Resta 5 días a la fecha de hoy
console.log(moment().subtract(10,'days').calendar());   // Resta 10 días a la fecha de hoy

console.log(moment().add(1, 'days').calendar());    // Añade 1 día a la fecha de hoy
console.log(moment().add(3, 'days').calendar());    // Añade 3 días a la fecha de hoy
console.log(moment().add(10, 'days').calendar());   // Añade 10 días a la fecha de hoy



/**/console.log(''); console.log('Multiple Locale Support'); console.log('');

console.log(moment.locale());
console.log(moment().format('LT'));
console.log(moment().format('LTS'));
console.log(moment().format('L'));
console.log(moment().format('l'));
console.log(moment().format('LL'));
console.log(moment().format('ll'));
console.log(moment().format('LLL'));
console.log(moment().format('lll'));
console.log(moment().format('LLLL'));
console.log(moment().format('llll'));