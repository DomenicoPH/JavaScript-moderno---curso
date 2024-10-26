/* Primeros pasos con Local Storage */

localStorage.setItem('nombre', 'Domenico');             //----------------> localStorage.setItem('key', 'value');

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
};

const productoString = JSON.stringify( producto );

console.log(producto);
console.log('Typeof', typeof(producto));
console.log(productoString);
console.log('Typeof', typeof(productoString));

localStorage.setItem('producto', productoString);       //----------------> localStorage.setItem('key', 'value');

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);             //----------------> localStorage.setItem('key', 'value');

const nums = [1, 2, 3, 4, 5];
localStorage.setItem('numbers', JSON.stringify(nums));  //----------------> localStorage.setItem('key', 'value');
    
    console.log('El type es: ', typeof(nums));                      //array
    console.log('El type es: ', typeof(JSON.stringify(nums)));      //string