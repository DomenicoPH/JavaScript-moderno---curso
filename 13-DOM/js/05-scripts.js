// Seleccionar elementos con .querySelectorAll()

// buscando .card
const card = document.querySelector('.card');
console.log(card);  // retorna el primer .card que encuentra

const allCards = document.querySelectorAll('.card');
console.log(allCards);  // retorna todos los .card que encuentra


// buscando div
const div = document.querySelector('div');
console.log(div);   // retorna el primer div que encuentra

const allDivs = document.querySelectorAll('div');
console.log(allDivs);   // retorna todos los div que encuentra


// buscando formularios...
const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// buscando inexistente...
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);