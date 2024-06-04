// Modificar elementos con JS...

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// .innerText
console.log(encabezado.innerText);  // Trae el texto contenido (CSS: visibility: hidden, innerText no encontrará el texto.)

// .textContent
console.log(encabezado.textContent);    // Trae el texto contenido

// .inerHTML
console.log(encabezado.innerHTML);  // Trae todo el html contenido


// Chaining...
const textoEncabezado = document.querySelector('.contenido-hero h1').innerText;
console.log(textoEncabezado);


// Cambiar el innerText de un elemento...
document.querySelector('.contenido-hero h1').innerText = 'Metiendo terror con un nuevo texto de encabezado'
const nuevoEncabezado = document.querySelector('.contenido-hero h1').innerText;
console.log(nuevoEncabezado);

// Cambiar el innerText de un elemento...
const nuevoTextoEncabezado = 'Nuevo encabezado corregido y apto para todo público'
document.querySelector('.contenido-hero h1').innerText = nuevoTextoEncabezado;


//...
const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';