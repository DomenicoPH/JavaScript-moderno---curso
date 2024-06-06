// Creación de HTML desde JavaScript...

const enlace = document.createElement('a');

// Definir enlace
enlace.textContent = 'Nuevo enlace' // texto del enlace
enlace.href = 'https://www.google.com'  // href del enlace
enlace.target = '_blank'    // target del enlace
enlace.setAttribute('data-enlce','nuevo-enlace')    // añade nueva propiedad (propiedad, valor)
enlace.classList.add('alguna-clase')    // añade nueva clase
enlace.onclick = miFuncion; // acción 'on click'

console.log(enlace)

// Colocar enlace con appendChild()
const navegacion = document.querySelector('.navegacion')    // Crear variable para la navegación
navegacion.appendChild(enlace)                              // appendChild del enlace a la navegación

// Colocar enlace con insertBefore()
console.log(navegacion.children)
//navegacion.insertBefore(enlace, navegacion.children[1])
navegacion.insertBefore(enlace, navegacion.children[2])

/*  Sintaxis: insertBefore(param1, param2)
    ♦ param1: elemento a insertar.
    ♦ param2: indice del elemento antes del cual queremos insertar uno nuevo. */

// ------ Mi función ------
function miFuncion(){
    alert('Has hecho click en \'Nuevo enlace\'... te vas a Google!')
};
// ------ Mi función ------

//...

// Crear un card de forma dinámica...

//...creando los párrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//...creando div.info
const info = document.createElement('div');
info.classList.add('info');

    // Asignación de los párrafos a div.info
    info.appendChild(parrafo1);
    info.appendChild(parrafo2);
    info.appendChild(parrafo3);

//...creando img
const imagen = document.createElement('img');
//imagen.src = 'img/hacer2.jpg';
imagen.src = 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-28082-kiss-1800-1395937649.jpg'
imagen.alt = 'nueva imagen - texto alternativo';

//...creando div.card
const card = document.createElement('div');
card.classList.add('card');

    // Asignación de los párrafos a div.card
    card.appendChild(imagen);
    card.appendChild(info);

// Verificar elemento creado (div.card)...
console.log(card);

// Insertar nuevo elemento en la estructura HTML
const contenedorCards = document.querySelector('.hacer .contenedor-cards');

/* insertar al final */
//contenedorCards.appendChild(card);

/* insertar en un indice específico */
contenedorCards.insertBefore(card,contenedorCards.children[0]);