// Seleccionar elementos con .querySelector()

const card = document.querySelector('.card');
console.log(card);

// Selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard);



// Seleccionar el formulario
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

const footer = document.querySelector('#footer');
console.log(footer);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion)



// Seleccionar elemento inexsitente
const noExiste = document.querySelector('#no-existe');
console.log(noExiste);


/*
    QuerySelector() retorna únicamente 1 elemento, el primero
    que coincida con la consulta. De no encontrar coincidencias
    retornará null.
    Para obtener mas de un elemento coincidente utilizar
    .querySelectorAll()
*/