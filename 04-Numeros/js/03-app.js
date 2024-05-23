// objeto Math

let resultado;

// Math.PI
resultado = Math.PI;
console.log(resultado);

// Math.round()                     |Redondeo
resultado = Math.round(2.8);
console.log(resultado);
resultado = Math.round(2.2);
console.log(resultado);
resultado = Math.round(2.5);
console.log(resultado);

// Math.ceil()                      /Redondeo hacia arriba
resultado = Math.ceil(2.8);
console.log(resultado);
resultado = Math.ceil(2.2);
console.log(resultado);
resultado = Math.ceil(2.5);
console.log(resultado);

// Math.floor()                     //Redondeo hacia abajo
resultado = Math.floor(2.8);
console.log(resultado);
resultado = Math.floor(2.2);
console.log(resultado);
resultado = Math.floor(2.5);
console.log(resultado);

// Math.sqrt()                      //Raíz cuadrada
resultado = Math.sqrt(144);
console.log(resultado)
resultado = Math.sqrt(25);
console.log(resultado)
resultado = Math.sqrt(16);
console.log(resultado)

// Math.abs()                       //Valor absoluto
resultado = Math.abs(-500);
console.log(resultado)

// Math.pow()                       //Potencia
resultado = Math.pow(8, 3)
console.log(resultado)
console.log(8 * 8 * 8)

resultado = Math.pow(2, 4)
console.log(resultado)
console.log(2 * 2 * 2 * 2)

resultado = Math.pow(5, 5)
console.log(resultado)
console.log(5 * 5 * 5 * 5 * 5)

// Math.min()                       //Mínimo
resultado = Math.min(5, 7, 3)
console.log(resultado)
resultado = Math.min(5, 7, 3, 1)
console.log(resultado)

// Math.random()                    //Aleatorio
resultado = Math.random()
console.log(resultado)
/* aleatorio entre 1 y 10 */
console.log(Math.round(Math.random() * 10))
/* aleatorio entre 1 y 100 */
console.log(Math.round(Math.random() * 100))