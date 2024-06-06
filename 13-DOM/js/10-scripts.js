// Creación de HTML desde JavaScript...

const enlace = document.createElement('a');

// Definir enlace
enlace.textContent = 'Nuevo enlace'         // texto del enlace
enlace.href = 'https://www.google.com'      // href del enlace
enlace.target = '_blank'                    // target del enlace

console.log(enlace)

// Colocar enlace con appendChild()
const navegacion = document.querySelector('.navegacion')    // Crear variable para la navegación
navegacion.appendChild(enlace)                              // appendChild del enlace a la navegación

// Colocar enlace con insertBefore()
console.log(navegacion.children)
//navegacion.insertBefore(enlace, navegacion.children[1])
navegacion.insertBefore(enlace, navegacion.children[2])