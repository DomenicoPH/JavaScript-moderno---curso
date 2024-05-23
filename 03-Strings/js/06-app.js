const producto = 'Monitor 20 pulgadas';

/* .repeat() */
const texto = ' en Promoción'.repeat(3);

console.log(texto);

console.log(`${producto} ${texto}!!!`);

const bla = 'blah '
console.log(bla.repeat(3));
console.log(bla.repeat(6));
console.log(bla.repeat(2.4));
console.log(bla.repeat(3.7));


/* .split() */
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(' '));

const hobbies = 'Leer, montar bicicleta, escuchar música, dibujar, programar, diseñar, modelar en 3D, hacer aviones de papel';
console.log(hobbies.split(','));

const tweet = "Aprendiendo JavaScript Moderno #JSModerno";
console.log(tweet.split('#'));
const myTweet = tweet.split('#');
console.log(myTweet);
console.log(myTweet[0])
console.log(myTweet[1])